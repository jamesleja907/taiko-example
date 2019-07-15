import React from 'react'
import { render } from 'react-dom'
import Library from './Library'
import monteCristoImage from './images/CountOfMonteCristo.png'
import eastOfEdenImage from './images/EastOfEden.jpg'
import lordOfTheRingsImage from './images/LOTR.jpg'
import sunAlsoRisesImage from './images/SunAlsoRises.jpeg'
import girlOnTrainImage from './images/GirlOnTrain.png'

let bookList = [
	{"title": "The Count of Monte Cristo", "author": "Alexandre Dumas",
	 "pages": 1312, "favouriteBook": true, "currentlyReading": false, "image": monteCristoImage},
	{"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260,
	"favouriteBook": false, "currentlyReading": true, "image": sunAlsoRisesImage},
	{"title": "East Of Eden", "author": "John Steinbeck", "pages": 608,
	"favouriteBook": true, "currentlyReading": false, "image": eastOfEdenImage},
	{"title": "The Lord of the Rings", "author": "JRR Tolkien", "pages": 1178,
	"favouriteBook": true, "currentlyReading": true, "image": lordOfTheRingsImage},
    {"title": "The Girl on the Train", "author": "Paula Hawkins", "pages": 320,
    "favouriteBook": false, "currentlyReading": false, "image": girlOnTrainImage}
    ]

render(
	<Library books={bookList} />, 
	document.getElementById('root')
)
