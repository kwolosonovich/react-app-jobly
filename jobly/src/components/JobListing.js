import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Job from "./Job"
import Search from "./Search"


function JobListing({ jobs, name, cantFind }) {

  let getContext = useContext(ListingsContext);
  let showJobs = getContext[name];

  console.log(showJobs)

  if (!jobs) {
    return <h1>"Sorry, no current job listings found."</h1>;
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Jobs

        <Search />
        <CardContent>
          {showJobs.map((j) => (
            <Job
              id={j.id}
              key={j.id}
              title={j.title}
              salary={j.salary}
              equity={j.equity}
              company_handle={j.company_handle}
            ></Job>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default JobListing;