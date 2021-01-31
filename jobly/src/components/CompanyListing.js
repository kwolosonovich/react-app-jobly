import React, { useState, useEffect, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Company from "./Company";
import Search from "./Search"
import JoblyApi from "../JoblyApi"


function CompanyListing ({ companies, name, cantFind }) {

  let dev = true

   let getContext = useContext(ListingsContext);
   let showCompanies = getContext[name];

  //  {companies, setCompanies} = useState(null)

  if (!companies) {
    return <h1>"Sorry, no current company listings found."</h1>;
  }

  // handle search form 
  async function search(name) {
    if (!dev) {
      try {
        showCompanies = await JoblyApi.getCompanies(name);
      } catch {
        return 'Sorry, no search results found for {name}'
      }
    }
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Companies
        <Search></Search>
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