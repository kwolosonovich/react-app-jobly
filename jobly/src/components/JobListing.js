import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";


function JobListing({ name }) {

  // const [jobs, setJobs] = useState([]);

  let getContext = useContext(ListingsContext);
  let listing = getContext[name];

  // useEffect(() => {
  //   // async function getJobs() {
  //   //   let jobs = await JoblyApi.getJobs();
  //   function getJobs() {
  //     let jobs = [1, 2, 3, 4];
  //     console.log(jobs);
  //     setJobs(jobs);
  //   }
  //   getJobs();
  // }, []);

  if (!listing) {
    return <h1>"Sorry, no current job listings found."</h1>;
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Jobs
        <CardContent>
          {listing.map((job) => (
            <h1>{ job }</h1>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}

export default JobListing;