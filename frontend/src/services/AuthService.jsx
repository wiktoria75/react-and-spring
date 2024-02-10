import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const loginUser = async(email, password) => {
  const response = await fetch('http://localhost:8080/authenticate', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
  });
  
  if (response.ok) {
      return await response.json();
    } else {
      const message = await response.text();
      throw new Error(message);
    }
}

export const UserProvider = ({ children }) => {
  const initialToken = sessionStorage.getItem('token');
  const userFromStorage = {role: sessionStorage.getItem('role'), email:sessionStorage.getItem('email')};

  const [user, setUser] = useState(userFromStorage);
  const [token, setToken] = useState(initialToken);

  const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    sessionStorage.setItem('token', userToken);
    sessionStorage.setItem('email', userData.email);
    sessionStorage.setItem('role', userData.role);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem('token'); 
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('role');
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};