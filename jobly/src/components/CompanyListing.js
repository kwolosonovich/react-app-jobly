import React, { useState, useEffect, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Company from "./Company"


function CompanyListing ({ companies, name, cantFind }) {

   let getContext = useContext(ListingsContext);
   let showCompanies = getContext[name];
  
  if (!companies) {
    return <h1>"Sorry, no current company listings found."</h1>;
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Companies
        <CardContent>
          {showCompanies.map((c) => (
            <Company
              key={c.handle}
              handle={c.handle}
              name={c.name}
              num_employees={c.num_employees}
              description={c.description}
              logo_url={c.logo_url}
            ></Company>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default CompanyListing;