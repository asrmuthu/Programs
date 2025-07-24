list1 = ["abc", 34, True, 40, "male"]
list2 = [1, 2, 3, 4, 5]
print(len(list1))  # Output: 5
print(list1[0])  # Output: abc
list1.append("new item")
print(list1)  # Output: ['abc', 34, True, 40, "male", 'new item']
list1.remove("male")
print(list1)  # Output: ['abc', 34, True, 40, 'new item']
print(list2[1:3])  # Output: [2, 3]
print(list2[-1])  # Output: 5
list2.pop()  # Removes the last item
print(list2)  # Output: [1, 2, 3, 4]
list2.pop(0) # Removes the first item
print(list2)  # Output: [2, 3, 4]
list2.insert(0, 11) # Inserts 11 at index 0
print(list2)  # Output: [11, 2, 3, 4]
list2.sort()  # Sorts the list
print(list2)  # Output: [2, 3, 4, 11]
list2.reverse()  # Reverses the list
print(list2)  # Output: [11, 4, 3, 2]
list1.extend(list2)  # Extends list1 with elements from list2
print(list1)  # Output: ['abc', 34, True, 40, 'new item', 11, 4, 3, 2]
print(list1 + list2)  # Concatenates list1 and list2
print(list1 * 2)  # Repeats list1 twice