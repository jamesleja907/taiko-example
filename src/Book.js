import React from 'react'
import './Book.css'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: this.props.currentlyReading
    }
  }

  toggleReading = (isReading) => {
   this.setState({currentlyReading : isReading});
  }

  render() {
    const {title, author, pages, favouriteBook, image} = this.props;
    return (
      <div className="book">
        <img src={image} width="200" height="300" alt="Book cover"/>
        <div className="bookInfo">
          <p>{title} by: {author} {pages} pages long</p>
          <p>Favourite Book: {favouriteBook ? 'yes!' : 'no!'}</p>
          <p>You {this.state.currentlyReading ? 'are' : 'are not'} currently reading the book</p>
          <button className="reading-button" onClick={this.toggleReading.bind(this, true)}>Start Reading</button>
          <button className="reading-button" onClick={this.toggleReading.bind(this, false)}>Stop Reading</button>
        </div>
      </div>
    )
  }
}
export default Book