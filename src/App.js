import React, {Component} from "react";
import './App.css';
import SearchInput from "./SearchInput";

const API_KEY = "";

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
          <p key={book.id} style={{marginTop: '15px'}}>{book.volumeInfo.title}</p>
        ))}
      </div>
    );
  }
}

export default App;
