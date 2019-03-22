import React from "react";

// We can set every data we want as a default: Objecr, Array, Number, String...
const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {}
});

export default authContext;
