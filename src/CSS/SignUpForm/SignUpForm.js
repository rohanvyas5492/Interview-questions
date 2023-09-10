import React, { useState } from "react";
import "./SignUpForm.css";
export default function SignUpForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        number: "",
        birthday: "",
        tos: false,
      });
const handleInputChange = (e) => {
    const {name,value, checked} = e.target;
    const newValue = name === "tos" ? checked : value;

    setFormData({
        ...formData,
        [name]: newValue
    })
}

  return (
    <>
      <form>
      <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        <label htmlFor="number">Phone Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
        
        <label htmlFor="birthday">Date Of Birth:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={handleInputChange}
        />
        
        <div>
          <label htmlFor="tos">I agree to the terms of service:</label>
          <input
            type="checkbox"
            id="tos"
            name="tos"
            checked={formData.tos}
            onChange={handleInputChange}
            required
          />
        </div>
          <input type="submit" value="Sign Up"/>
      </form>
    </>
  );
}
