import React, {Component} from "react";
import './App.css';
import SearchInput from "./components/SearchInput";
import BookItem from "./components/BookItem";

const API_KEY = process.env.REACT_APP_API_KEY;

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
      <div className="App">
        <SearchInput fetchBooks={this.fetchBooks}/>
        {booksList && booksList.map(book => (
          <BookItem
            key={book.id}
            style={{marginTop: '15px'}}
            image={book?.volumeInfo?.imageLinks?.smallThumbnail}
            title={book?.volumeInfo?.title}
            authors={book?.volumeInfo?.authors ?? []}
            year={book?.volumeInfo?.publishedDate}
            description={book?.volumeInfo?.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
