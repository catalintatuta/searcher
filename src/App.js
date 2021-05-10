import React, {Component} from "react";
import styled from "@emotion/styled";

import SearchInput from "./components/SearchInput";
import BookItem from "./components/BookItem";
import theme from "./constants/theme";

const API_KEY = process.env.REACT_APP_API_KEY;

const AppRoot = styled.div`
  background-color: ${theme.gray};
  min-height: 100vh;
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksList: [],
    }
    this.fetchBooks = this.fetchBooks.bind(this);
  }

  fetchBooks(bookToSearch) {
    const queryString = `https://www.googleapis.com/books/v1/volumes?q=${bookToSearch}&key=${API_KEY}&maxResults=10`
    if (!bookToSearch) {
      return
    }
    fetch(queryString)
      .then(response => response.json())
      .then(data => {
        this.setState({
          booksList: data.items
        })
      })
  }

  render() {
    const {booksList} = this.state;
    return (
      <AppRoot >
        <SearchInput fetchBooks={this.fetchBooks}/>
        {booksList && booksList.map(book => (
          <BookItem
            key={book.id}
            image={book?.volumeInfo?.imageLinks?.smallThumbnail}
            title={book?.volumeInfo?.title}
            authors={book?.volumeInfo?.authors ?? []}
            year={book?.volumeInfo?.publishedDate}
            description={book?.volumeInfo?.description}
            url={book?.accessInfo?.webReaderLink}
          />
        ))}
      </AppRoot>
    );
  }
}

export default App;
