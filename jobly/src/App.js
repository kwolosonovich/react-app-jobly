import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home.js"
import Navbar from "./Navbar"
 

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jobs">
            <Jobs name="jobs" jobs={jobs} title="Jobs" />
          </Route>
          {/* <Route path="/jobs/:id">
                <Jobs items={jobs} cantFind="/jobs" />
              </Route> */}

          <Route exact path="/companies">
            <Companies
              name="companies"
              companies={companies}
              title="Companies"
            />
          </Route>
          {/* <Route path="/companies/:id">
                <Companies items={companies} cantFind="/companies" />
              </Route> */}

          <Route exact path="/profile">
            <Profile name="profile" profile={profile} title="Profile" />
          </Route>
          {/* <Route path="/profile/:id">
                <Profile items={profile} cantFind="/profile" />
              </Route> */}

          <Route exact path="/login">
            <Login name="login" login={login} title="Login" />
          </Route>
          {/* <Route path="/login/:id">
                <Login items={login} cantFind="/login" />
              </Route> */}

          <Route exact path="/logout">
            <Logout name="logout" logout={logout} title="Logout" />
          </Route>
          {/* <Route path="/logout/:id">
                <Logout items={logout} cantFind="/logout" />
              </Route> */}

          <Route>
            <p>Sorry this page doesn't exist.</p>
          </Route>
        </main>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
