import React from 'react'
import './Book.css'

export const Book = ({title, author, pages, favouriteBook, currentlyReading, image}) => {
	return (
		<div className="book">
      <img src={image} width="200" height="300" alt="Book cover"/>
      <div className="bookInfo">
        <p>{title} by: {author} {pages} pages long</p>
        <p>Favourite Book: {favouriteBook ? 'yes!': 'no!'}</p>
        <p>You {currentlyReading ? 'are': 'are not'} currently reading the book</p>
      </div>
		</div>
	)
}