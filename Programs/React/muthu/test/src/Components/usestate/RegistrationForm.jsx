import React, { useState, useEffect } from 'react';

function RegistrationForm() {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    password: '',
    rePassword: ''
  });

  // State to hold form errors
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');

  // Load data from localStorage if it exists
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    const lengthCheck = password.length >= 8;
    const upperCaseCheck = /[A-Z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCheck && upperCaseCheck && numberCheck && specialCharCheck) {
      setPasswordStrength('Strong');
    } else if (lengthCheck && upperCaseCheck && (numberCheck || specialCharCheck)) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Weak');
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0)
      newErrors.age = "Please enter a valid age";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.rePassword)
      newErrors.rePassword = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Save form data to localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Form submitted and data saved in localStorage');
      console.log(formData);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          <div>
            Password Strength: <strong>{passwordStrength}</strong>
          </div>
        </div>
        <div>
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            required
          />
          {errors.rePassword && <p style={{ color: 'red' }}>{errors.rePassword}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
