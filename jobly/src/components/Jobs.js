import React from "react";
import Job from "./Job";

function Jobs({ jobs }) {

  return (
    <div className="JobCardList">
      {/* "{jobs.map((job) => (
        <Job
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}" */}
      "not used - Jobs"
    </div>
  );
}

export default Jobs;
