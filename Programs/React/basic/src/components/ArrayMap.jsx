import React from 'react';


function ArrayMap() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const products = [
        { id: 1, name: 'Laptop', price: '$1000' },
        { id: 2, name: 'Phone', price: '$500' },
        { id: 3, name: 'Tablet', price: '$300' },
    ];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const UserCard = ({ user }) => (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
        </div>
    );
    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
    ];
    return (
        <div>
            {/* Fruits List */}
            <h1>Fruits List</h1>
            <ul style={{listStyle:'none', display:'flex', gap:'10px'}}>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>


            {/* Products List */}
            <h1>Products List</h1>
            <ul style={{listStyle:'none'}}>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} -- {product.price}
                    </li>
                ))}
            </ul>


            {/* Even Numbers */}
            <h1>Even Numbers</h1>
            <ul>
                {numbers
                    .filter(num => num % 2 === 0)
                    .map((evenNumber, index) => (
                        <li key={index}>{evenNumber}</li>
                    ))}
            </ul>


            <h1>Users List</h1>
            <div style={{ display: 'flex' }}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
            </div>
        </div>
    );
};
export default ArrayMap