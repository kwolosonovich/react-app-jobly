import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";


function CompanyListing ( companies ) {

  // const [companies, setCompanies] = useState([]);

  let getContext = useContext(ListingsContext);
  let listing = getContext[name];

  // useEffect(() => {
  //   // let companies = await JoblyApi.getCompanies();
  //   function getCompanies() {
  //     let companies = ["a", "b", "c"];
  //     console.log(companies);
  //     setCompanies(companies);
  //   }
  //   getCompanies();
  // }, []);

  if (!listing) {
    return <h1>"Sorry, no current company listings found."</h1>;
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Companies
        <CardContent>
          {listing.map(c => (
            <h1>{c}</h1>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default CompanyListing;