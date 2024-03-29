import React from "react";

function UserProvider() {
  const [user, setUser] = React.useState(null);
  const UserContext = React.createContext(user);
  return <UserContext.Provider value={user}></UserContext.Provider>;
}

export default UserProvider;
