import React, { useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style/App.css';
import Home from "./components/Home.js"
import NavBar from "./NavBar"
import ListingsContext from "./ListingsContext";
import CompanyListing from "./components/CompanyListing";
import JoblyApi from "./JoblyApi"
import jwt from "jsonwebtoken";
import Form from "./components/Form"
import Register from "./components/Register"
import Login from "./components/Login"
import Logout from "./components/Logout";
import Profile from "./components/Profile"
import UserContext from "./UserContext";
import Jobs from "./components/Jobs"
import JobList from "./components/JobList"
import JobListing from "./components/JobListing"
 

function App() {
  // job state
  const [jobs, setJobs] = useState([]);
  // company state
  const [companies, setCompanies] = useState([]);
  // active user state
  const [active, setActive] = useState(false);
  // api token
  const [token, setToken] = useState(null)
  // user state
  const [user, setUser] = useState(null)
  // application id state
  const [applicationIds, setApplicationIds] = useState(new Set([]));


  // get jobs when list is empty
  useEffect(() => {
    // async function getJobs() {
      // let jobs = await JoblyApi.getJobs();
    function getJobs() {
      let jobs = [
        {
          title: 'Insurance underwriter', 
          salary: null,
          equity: 0.008, 
          company_handle: 'hall-davis',
        },
        {
          title: 'Race relations officer', 
          salary: 97000, 
          equity: 0.065, 
          company_handle: 'bauer-gallagher',
        }]
      setJobs(jobs);
    }    
    getJobs();
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
                <JobListing name="jobs" jobs={jobs} title="Jobs" />
              </Route>
              <Route path="/jobs/:id">
                <JobListing items={jobs} cantFind="/jobs" />
              </Route>

              <Route exact path="/companies">
                <CompanyListing
                  name="companies"
                  companies={companies}
                  title="Companies"
                />
              </Route>
              <Route path="/companies/:id">
                <CompanyListing items={companies} cantFind="/companies" />
              </Route>

              <Route exact path="/profile">
              <Profile 
                name="profile" 
                // profile={profile} 
                title="Profile" />
            </Route>
              <Route path="/profile/:id">
                  <Profile 
                    // items={profile} 
                    cantFind="/profile" />
                </Route>

              <Route exact path="/login">
                <Login
                  name="login"
                  // login={login}
                  title="Login"
                />
              </Route>
              <Route path="/login/:id">
                <Form
                  // items={login}
                  // login={login}
                  cantFind="/login"
                />
              </Route>

              <Route exact path="/profile">
                <Profile 
                  name="profile" 
                  // profile={profile} 
                  title="profile" />
              </Route>
              <Route path="/profile">
                <Profile
                  // items={login}
                  // profile={profile}
                  cantFind="/profile"
                />
              </Route>

              <Route exact path="/register">
                <Register
                  name="register"
                  register={register}
                  title="Register"
                />
              </Route>
              <Route path="/register">
                <Register
                  // items={login}
                  register={register}
                  cantFind="/register"
                />
              </Route>

              <Route exact path="/logout">
                <Logout
                  name="logout"
                  // logout={logout}
                  title="Logout"
                />
              </Route>
              <Route path="/logout/:id">
                <Logout
                  // items={logout}
                  cantFind="/logout"
                />
              </Route>
              
            <Route>
              <p>Sorry this page doesn't exist.</p>
            </Route>
            </Switch>
          </main>
        </ListingsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


// users
//  { 
//         username: 'testuser',
//         password: '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
//         first_name: 'Test',
//         last_name: 'User',
//         email: 'joel@joelburton.com',
//         is_admin: FALSE
//       },
//       {
//         username: 'testadmin',
//         password: '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
//         first_name: 'Test',
//         last_name: 'Admin!',
//         email: 'joel@joelburton.com',
//         is_admin: TRUE
//       }