import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const users = [
    {
      username: "admin",
      password: "admin123",
      name: "Admin User",
      role: "Admin",
      designation: "Manager",
      email: "admin@example.com",
      phone: "123-456-7890",
      department: "Management",
      tasks: [
        { title: "Approve Reports", description: "Review and approve financial reports." },
        { title: "Meeting with CEO", description: "Discuss company strategy for next quarter." },
      ],
    },
    {
      username: "pratik",
      password: "pratik123",
      name: "Pratik",
      role: "Developer",
      designation: "Software Engineer",
      email: "pratik@example.com",
      phone: "987-654-3210",
      department: "Engineering",
      tasks: [
        { title: "Fix UI Bug", description: "Resolve the alignment issue on the dashboard." },
        { title: "Develop API", description: "Build the user authentication API." },
      ],
    },
    {
      username: "EmbedSquare",
      password: "embed123",
      name: "EmbedSquare",
      role: "Designer",
      designation: "UI/UX Designer",
      email: "design@example.com",
      phone: "555-666-7777",
      department: "Design",
      tasks: [
        { title: "Create Mockups", description: "Design mockups for the new landing page." },
        { title: "Update Branding", description: "Revamp the company branding assets." },
      ],
    },
  ];

  const login = (username, password) => {
    const foundUser = users.find((u) => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true; // Login success
    } else {
      alert("Invalid credentials!");
      return false; // Login failed
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
