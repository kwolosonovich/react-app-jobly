import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import Jobs from "./Jobs";
import Search from "./Search"
import Job from "./Job"


function JobList() {

  let dev = true

  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads jobs. */
 
    async function search({title}) {
      if (!dev) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
      }
    }
  

  return (
    <div className="JobList col-md-8 offset-md-2">
      <Search />
      {jobs.length ? (
        <Job jobs={jobs} />
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default JobList;
