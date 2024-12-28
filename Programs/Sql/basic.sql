-- Create a new database
CREATE DATABASE SampleDB;

-- Use the new database
USE SampleDB;

-- Create a new table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    BirthDate DATE,
    Position NVARCHAR(50),
    Salary DECIMAL(10, 2)
);

-- Insert sample data into the table
INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, Position, Salary)
VALUES
(1, 'John', 'Doe', '1980-01-01', 'Manager', 60000.00),
(2, 'Jane', 'Smith', '1985-05-15', 'Developer', 55000.00),
(3, 'Sam', 'Brown', '1990-07-20', 'Designer', 50000.00);

-- Select all data from the table
SELECT * FROM Employees;