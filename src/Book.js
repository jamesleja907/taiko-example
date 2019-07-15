import React from 'react'

export const Book = ({title, author, pages, favouriteBook, currentlyReading, image}) => {
	return (
		<div className="book" display="flex">
		    <img src={image} width="200" height="300" float="right" alt="Book cover"/>
			<div text-align="right" display="inline-block" float="right">{title} by: {author} {pages} pages long</div>
			<div>Favourite Book: {favouriteBook ? 'yes!': 'no!'}</div>
			<div>You {currentlyReading ? 'are': 'are not'} currently reading the book</div>
		</div>
	)
}