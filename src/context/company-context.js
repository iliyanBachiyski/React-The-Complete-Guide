import React from "react";

// We can set every data we want as a default: Objecr, Array, Number, String...
const companyContext = React.createContext({
  companyName: "MyCompany LTD",
  companyOwner: "John"
});

export default companyContext;
