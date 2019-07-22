import React from 'react'
import './Book.css'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: this.props.currentlyReading,
      isFavourite: this.props.favouriteBook
    }
  }

  toggleReading = (isReading) => {
   this.setState({currentlyReading : isReading});
  }

  toggleFavourite = () => {
    this.setState(({isFavourite}) => ({isFavourite : !isFavourite}));
  }

  render() {
    const {title, author, pages, image, imageAlt} = this.props;
    return (
      <div className="book">
        <img src={image} width="200" height="300" alt={imageAlt}/>
        <div className="bookInfo">
          <p>{title} by: {author} {pages} pages long</p>
          <p>This {this.state.isFavourite ? 'is' : 'is not'} one of my favourite books
            <input id="checkboxId" type="checkbox" checked={this.state.isFavourite} onChange={this.toggleFavourite.bind(this)}></input>
          </p>
          <p>I {this.state.currentlyReading ? 'am' : 'am not'} currently reading the book</p>
          <button className="reading-button" onClick={this.toggleReading.bind(this, true)}>Start Reading</button>
          <button className="reading-button" onClick={this.toggleReading.bind(this, false)}>Stop Reading</button>
        </div>
      </div>
    )
  }
}
export default Book