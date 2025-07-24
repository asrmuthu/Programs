cart = [{"item": "apple", "price": 100}, {"item": "banana", "price": 15}, {"item": "cherry", "price": 250}]

def calculate_total(cart):
    total = 0
    for item in cart:
        total += item["price"]
    return total
total_price = calculate_total(cart)
print("Total price:", total_price)  # Output: Total price: 365