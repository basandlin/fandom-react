import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Flammable, Header, Home, Magnets, NavBar, Snowflakes } from "../index";

import "./App.scss";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Fragment>
      <div className="app">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/liquids/flammable" component={Flammable} />
          <Route exact path="/magnets" component={Magnets} />
          <Route exact path="/snowflakes" component={Snowflakes} />
        </Switch>
      </div>
    </Fragment>
  );
}
