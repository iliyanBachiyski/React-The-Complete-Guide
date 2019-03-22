import React, { useContext } from "react";
import CompanyContext from "../../context/company-context";

const footer = props => {
  const context = useContext(CompanyContext);
  return (
    <div>
      <p>Company Name: {context.companyName}</p>
      <p>Company Owner: {context.companyOwner}</p>
    </div>
  );
};

export default footer;
