class BookFormValidator {
    static validate(values) {
      const errors = {};
      if (!values.title) {
        errors.title = 'Title is required';
      } else if (values.title.length > 50) {
        errors.title = 'Title must be 50 characters or less';
      }
      if (!values.author) {
        errors.author = 'Author is required';
      } else if (values.author.length > 50) {
        errors.author = 'Author must be 50 characters or less';
      }
      if (values.note.length > 400) {
        errors.note = 'Note must be 400 characters or less';
      }
      return errors;
    }
  }
  
  export default BookFormValidator;