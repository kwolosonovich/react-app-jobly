import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, CardHeader } from "@material-ui/core";
import ListingsContext from "../ListingsContext";
import Job from "./Job"
import Search from "./Search"
import JoblyApi from "../JoblyApi";


function JobListing({ name, cantFind }) {

  let getContext = useContext(ListingsContext);
  let showJobs = getContext[name];

  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    Search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) {
    return <h1>"Sorry, no current job listings found."</h1>;
  }

  return (
    <Container>
      <Card>
        <CardHeader />
        Jobs
        <Search searchFor={search} />
        <CardContent>
          {jobs.map((j) => (
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