import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext"


function Listing ({ name }) {

    let getContext = useContext(ListingsContext)
    let listing = getContext[name]

    console.log(listing)

    return (
      <Container>
        <Card>
          <CardHeader />
          Jobs
          <CardContent>
            { listing.map((item) => (
              <h1>item</h1>
             ))}
          </CardContent>
        </Card>
      </Container>
    );
}

export default Listing