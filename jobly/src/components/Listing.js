import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext"


function Main (name) {

    let getContext = useContext(ListingsContext)
    let listing = getContext[name]

    return (
      <Container>
        <Card>
          <CardHeader />
          Jobs
          <CardContent>
            Listing
          </CardContent>
        </Card>
      </Container>
    );
}

export default Main