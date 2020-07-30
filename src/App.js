import React, { Component } from "react";
import PageNotFound from "./pages/page-not-found";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookSectionPage from "./pages/books-section";
import BookDetails from "./pages/book-details";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/the-book-store" exact component={BookSectionPage} />
            <Route
              path="/book/category/:categoryName"
              exact
              render={(props) => {
                return (
                  <BookSectionPage
                    categoryName={props.match.params.categoryName}
                  />
                );
              }}
            />
            <Route
              path="/book/:bookID"
              exact
              render={(props) => {
                return <BookDetails bookID={props.match.params.bookID} />;
              }}
            />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
