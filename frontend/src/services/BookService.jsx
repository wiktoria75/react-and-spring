const books = [
    { title: 'Book 1', author: 'Author 1', note:'This is my note', finished: true },
    { title: 'Book 2', author: 'Author 2', note:'This is my note', finished: false },
    { title: 'Book 3', author: 'Author 3', note:'This is my note', finished: true },
    { title: 'Book 4', author: 'Author 4', note:'This is my note', finished: false },
  ];

  export const getFinishedBooks = () => {
    return books.filter(book => book.finished);
  };
  
  export const getUnfinishedBooks = () => {
    return books.filter(book => !book.finished);
  };