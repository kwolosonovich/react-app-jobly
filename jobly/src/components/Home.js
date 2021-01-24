import React from "react";
import ReactDOM from "react-dom";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Main from "./Main"


function Home() {




return (
  <section className="home">
    <Card>
      <CardContent>
        <CardHeader />
            Jobly
            <Main />
      </CardContent>
    </Card>
  </section>
);
}

export default Home