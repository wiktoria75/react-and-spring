import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormValidator from '../services/BookFormValidator';
import BookService from '../services/BookService';
import { useUser } from '../services/AuthService';


  function BookForm() {
    const { token } = useUser();
    return (
      <div className="container p-2">
        <h2 className="mt-4 mb-4">Add new book!</h2>
      <Formik
        initialValues={{ title: '', author: '', note: '', finished: false }}
        validate={(values) => BookFormValidator.validate(values)}
        onSubmit={(values, { resetForm }) => {
          BookService.addBook(token, values)
          .then((response) => {
            alert('Book added successfully');
            resetForm();
          })
          .catch((error) => {
            alert('Failed to add book: ' + error.message);
          })

        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <Field type="text" id="title" name="title" className="form-control" maxLength={50} required />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author:</label>
              <Field type="text" id="author" name="author" className="form-control" maxLength={50} required />
              <ErrorMessage name="author" component="div" className="error" />
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="form-label">Note:</label>
              <Field as="textarea" id="note" name="note" className="form-control" maxLength={400} />
              <ErrorMessage name="note" component="div" className="error" />
            </div>
            <div className="mb-3 form-check">
              <Field type="checkbox" id="finished" name="finished" className="form-check-input" />
              <label htmlFor="finished" className="form-check-label">I've finished this book</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Book</button>
          </Form>
        )}
      </Formik>
    </div>
    )
};

export default BookForm;

