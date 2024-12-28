#!/usr/bin/env python
# coding: utf-8

# In[8]:


pip install docx2txt


# In[62]:


import docx2txt
import pandas as pd
import sklearn


# In[63]:


resume =docx2txt.process('Muthu.docx') #load the file


# In[64]:


print(resume)


# In[73]:


with open("textfile.txt","r") as f:
    job_description = f.read()
    print(job_description)


# In[66]:


content =[job_description, resume]


# In[67]:


from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer()


# In[68]:


matrix = cv.fit_transform(content) #train the algoritham


# In[69]:


from sklearn.metrics.pairwise import cosine_similarity
similarity_mat = cosine_similarity(matrix) #test the algoritham


# In[70]:


print(similarity_mat)


# In[80]:


print("resume match percentage for this job: " + str(similarity_mat[0][1]*100)+'')#1st row 2column and 2nd row 1st column


# In[ ]:





# In[ ]:




