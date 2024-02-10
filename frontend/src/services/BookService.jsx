class BookService {
    static books = [
          { title: 'Book 1', author: 'Author 1', note: 'This is my note', finished: true },
          { title: 'Book 2', author: 'Author 2', note: 'This is my note', finished: false },
          { title: 'Book 3', author: 'Author 3', note: 'This is my note', finished: true },
          { title: 'Book 4', author: 'Author 4', note: 'This is my note', finished: false },
        ];
      

  static getFinishedBooks() {
    return this.books.filter(book => book.finished);
  };
  
  static getUnfinishedBooks() {
    return this.books.filter(book => !book.finished);
  };

  static async addBook(token, book) {
    try {
      const response = await fetch('http://localhost:8080/books', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
          const errorMessage = await response.text(); 
          throw new Error(errorMessage);
        }
  
        return await response.text(); 
      } catch (error) {
        throw new Error(error.message);
      }
  }
}

export default BookService;