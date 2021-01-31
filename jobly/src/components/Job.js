import React, { useContext, useState } from "react";
import UserContext from "../UserContext";

function Job({ id, title, salary, equity, companyName }) {

  return (
    <div className="job">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p>{companyName}</p>
        {salary && (
          <div>
            <small>Salary: {formatSalary(salary)}</small>
          </div>
        )}
        {equity !== undefined && (
          <div>
            <small>Equity: {equity}</small>
          </div>
        )}
      </div>
    </div>
  );
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}

export default Job;
