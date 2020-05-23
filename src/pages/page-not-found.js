import React from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";

const PageNotFound = Props => {
  return (
    <div class="has-fixed-footer">
      <Header />
      <section id="page-not-found">
        <div class="container">
          <h1>Page Not Found</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PageNotFound;
