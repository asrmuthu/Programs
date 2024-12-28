# error varatha execept panna
try:
    a=10/0
except Exception as e:
    print(e)
"""output:
division by zero
"""

#some time error varalam, varamaiyum irukalam
try:
    b=10/25
except Exception as e:
    print(e)
else:
    print("value :", b)
"""output:
value : 0.4
"""

#exception iruthalum ellatium finally work agum
try:
    b=10/0
except Exception as e:
    print(e)
else:
    print("value :", b)
finally:
    print("Thank you")
"""output:
division by zero
Thank you
"""
