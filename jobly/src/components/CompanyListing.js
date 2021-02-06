import React, { useState, useEffect, useContext, Component } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Company from "./Company";
import Search from "./Search"
import JoblyApi from "../JoblyApi"


function CompanyListing({ name, cantFind }) {


  let getContext = useContext(ListingsContext);
  let showCompanies = getContext[name];

  const [companies, setCompanies] = useState(null)

  if (!companies) {
    return <h1>"Sorry, no current company listings found."</h1>;
  }


  // handle search form
  // async function search(name) {
  //   let searchCompanies = await JoblyApi.getCompanies(name);
  //   setSearchCompanies(searchCompanies);
  // }

  // useEffect(function getCompaniesOnMount() {
  //   console.debug("CompanyList useEffect getCompaniesOnMount");
  //   search();
  // }, []);

   async function search(name) {
     let companies = await JoblyApi.getCompanies(name);
     setCompanies(companies);
   }


  return (
    <Container>
      <Card>
        <CardHeader />
        Companies
        <Search searchFor={search}></Search>
        <CardContent>
          {
            /* {searchCompanies
            ? showCompanies.map((c) => (
              <Company
                key={c.handle}
                handle={c.handle}
                name={c.name}
                num_employees={c.num_employees}
                description={c.description}
                logo_url={c.logo_url}
              ></Company>
            ))
            : showCompanies.map((c) => (
              <Company
                key={c.handle}
                handle={c.handle}
                name={c.name}
                num_employees={c.num_employees}
                description={c.description}
                logo_url={c.logo_url}
              ></Company>
            ))} */
            companies.map((c) => (
              <Company
                key={c.handle}
                handle={c.handle}
                name={c.name}
                num_employees={c.num_employees}
                description={c.description}
                logo_url={c.logo_url}
              ></Company>
            ))
            }
        </CardContent>
      </Card>
    </Container>
  );
}

export default CompanyListing;