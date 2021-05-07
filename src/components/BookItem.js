import React from 'react';

const BookItem = (props) => {
  const {
    image,//volumeInfo.imageLinks.smallThumbnail
    title,//volumeInfo.title
    authors,//volumeInfo.authors
    year,//volumeInfo.publishedDate
    description//volumeInfo.description
  } = props;

  const authorsList = authors.join(', ')

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <div>
          <span>{authorsList}</span>
          <span>{year}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookItem;
