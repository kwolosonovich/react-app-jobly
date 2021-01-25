import React, { useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style/App.css';
import Home from "./components/Home.js"
import NavBar from "./NavBar"
import ListingsContext from "./ListingsContext";

import JobListing from "./components/JobListing"
import JobListingsContext from "./JobListingsContext";
import CompanyListing from "./components/CompanyListing";
import CompanyListingsContext from "./CompanyListingsContext";
import JoblyApi from "./JoblyApi"
 

function App() {
  // job state
  const [jobs, setJobs] = useState([]);
  // company state
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // async function getJobs() {
    //   let jobs = await JoblyApi.getJobs();
    function getJobs() {
      let jobs = [1, 2, 3, 4];
      console.log(jobs);
      setJobs(jobs);
    }
    getJobs();
  }, []);

  useEffect(() => {
    // let companies = await JoblyApi.getCompanies();
    function getCompanies() {
      let companies = ["a", "b", "c"];
      console.log(companies);
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  // useEffect(() => {
  //   async function getCompany() {
  //     let res = await this.request(`companies/${handle}`);
  //     console.log(res);
  //     setCompanies(res);
  //   }
  //   getCompany();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ListingsContext.Provider value={{ jobs, companies }}>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

              <Route exact path="/jobs">
                <JobListing 
                  name="jobs" 
                  jobs={jobs} 
                  title="Jobs" 
                />
              </Route>
              <Route path="/jobs/:id">
                <JobListing 
                  items={jobs} 
                  cantFind="/jobs" />
              </Route>

              <Route exact path="/companies">
                <CompanyListing
                  name="companies"
                  companies={companies}
                  title="Companies"
                />
              </Route>
              <Route path="/companies/:id">
                <CompanyListing 
                  items={companies} 
                  cantFind="/companies" />
              </Route>

            {/* <Route exact path="/profile">
              <Profile name="profile" profile={profile} title="Profile" />
            </Route> */}
            {/* <Route path="/profile/:id">
                  <Listing items={profile} cantFind="/profile" />
                </Route> */}

            {/* <Route exact path="/login">
              <Login name="login" login={login} title="Login" />
            </Route> */}
            {/* <Route path="/login/:id">
                  <Login items={login} cantFind="/login" />
                </Route> */}

            {/* <Route exact path="/logout">
              <Logout name="logout" logout={logout} title="Logout" />
            </Route> */}
            {/* <Route path="/logout/:id">
                  <Logout items={logout} cantFind="/logout" />
                </Route> */}
            {/* 
            <Route>
              <p>Sorry this page doesn't exist.</p>
            </Route> */}
          </Switch>
        </main>
        </ListingsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
