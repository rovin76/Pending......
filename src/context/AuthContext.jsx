import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, toggleAuth }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
