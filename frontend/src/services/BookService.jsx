class BookService {
  
  static async getUnfinishedBooks(token) {
    try {
      const response = await fetch('http://localhost:8080/books/unfinished', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText)
      }
        return await response.json(); 
      } catch (error) {
        throw new Error(error.message);
      }
  }

  static async getFinishedBooks(token) {
    try {
      const response = await fetch('http://localhost:8080/books/finished', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText)
      }
        return await response.json(); 
      } catch (error) {
        throw new Error(error.message);
      }
  }

  static async addBook(token, book) {
    try {
      const response = await fetch('http://localhost:8080/books/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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