import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style/App.css';
import Home from "./components/Home.js"
import NavBar from "./NavBar"
import ListingsContext from "./ListingsContext"
import Listing from "./components/Listing"
 

function App() {

  // job state
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log("************************* called ********************************")
    function getJobs() {
      let jobs = ["job1, job2, job3"];
      setJobs(jobs);
    }
    getJobs()
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ListingsContext.Provider value={{ jobs }}>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/jobs">
                <Listing name="jobs" jobs={jobs} title="Jobs" />
              </Route>
              {/* <Route path="/jobs/:id">
                  <Listing items={jobs} cantFind="/jobs" />
                </Route> */}

              {/* <Route exact path="/companies">
              <Listing
                name="companies"
                companies={companies}
                title="Companies"
              />
            </Route> */}
              {/* <Route path="/companies/:id">
                  <Listing items={companies} cantFind="/companies" />
                </Route> */}

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
