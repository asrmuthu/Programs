#superwised learning -> classification
import pandas as pd  #read the dataset
import numpy as np  #numerical python or mathetical calculation
import matplotlib.pyplot as plt #to plot the graph
import seaborn as sns #plot graphical
import warnings
warnings.filterwarnings('ignore')
from sklearn.model_selection import train_test_split # train_test_split using to split tha datas, two parameter need #data nad label
from sklearn.ensemble import RandomForestClassifier #this data set is classifier type
from sklearn.metrics import accuracy_score #evalo data currect ah predict pannrathuku

df = pd.read_csv('diabetes.csv')
#df.head() #display first 5 output list
#df.head(10) #display specific ouput list
#df.shape # how many rows and colums
#df.info()
df.isnull() #to check the null values
#df.isnull().sum() #sum of the null values
x =df.iloc[:,df.columns!='Outcome'] #iloc means data framela particluar column or row
y =df.iloc[:,df.columns=='Outcome']
xtrain,xtest,ytrain,ytest =train_test_split(x,y,test_size=0.2) #20%test
#xtrain->namma kudukara train data(80%),
# ytrain->xtrain kana namma kuduka output(80%),
# xtest->namma kudukara train data(20%),ytest->xtest voda ouput
#xtrain.head()
#xtrain.head()
model=RandomForestClassifier()
model.fit(xtrain,ytrain.values.ravel()) #to train the algoritham
predict_output=model.predict(xtest) #to test the algoritham
acc=accuracy_score(predict_output,ytest) #evalo data currect ah predict pannrathuku
print('the accuracy score for randomforest algiritham',acc)