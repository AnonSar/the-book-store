import React, { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";
import BookSectionComponent from "../components/books-section/books-section";
import IsLoadingPage from "../pages/isLoading";
import axios from "axios";

class BookSectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.props.categoryName +
          "&key=AIzaSyARza5W4ZiSA_8zvJp_WwEJ_AR_bdzdv24"
      )
      .then((response) => {
        this.setState({
          books: response.data.items,
          isLoading: false,
        });
      })
      .catch((err) => console.error(err));
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.categoryName !== this.props.categoryName) {
      this.setState({
        isLoading: true,
      });
    }
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.props.categoryName +
          "&key=AIzaSyARza5W4ZiSA_8zvJp_WwEJ_AR_bdzdv24"
      )
      .then((response) => {
        this.setState({
          books: response.data.items,
          isLoading: false,
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <IsLoadingPage />
        </>
      );
    } else {
      return (
        <div className="has-fixed-footer">
          <Header />
          <BookSectionComponent
            title={this.props.categoryName}
            books={this.state.books}
          />
          <Footer />
        </div>
      );
    }
  }
}

BookSectionPage.defaultProps = {
  categoryName: "HTML",
};

export default BookSectionPage;
