import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
	return (
		<Link to={`../book/${book.isbn13}`}>
		<div className='overflow-hidden relative transition duration-300 transform hover:-translate-y-2 rouded shadow-lg hover:shadow-2xl'>

		<img src={book.image} alt="Book Cover" className='object-cover h-56 md:h-64 lg:h-80' />

		<div className='bg-black text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-300 px-6 py-4 flex flex-col'>
			<p>{book.title}</p>
			<br />
			<p>{book.subtitle.substring(0,45)}.....</p>
			<br />
			<p className='mt-auto'>Price: {book.price}</p>
		</div>
		</div>
		</Link>
	);
};

export default Book;