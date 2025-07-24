def fn1(a, b):
    print(a + b)# Output: 15
fn1(5, 10)  

def fn2(*arg):
    print("arguments:", arg[2]) # Output: arguments: c
    print("number of arguments:", len(arg)) # Output: number of arguments: 4
    print("all arguments:", arg) # Output: all arguments: ('a', 'b', 'c', 'd')
fn2("a", "b", "c", "d") 