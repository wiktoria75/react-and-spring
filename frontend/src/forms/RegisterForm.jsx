import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegisterFormValidator from '../services/RegisterFormValidator';

function RegisterForm() {
    return (
      <div className="container">
        <Formik
          initialValues={{ name: '', password: '', email: '' }}
          validate={(values) => RegisterFormValidator.validate(values)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="mb-3">
                <Field type="text" name="name" placeholder="Name" className="form-control" />
                {touched.name && errors.name && <div className="text-danger text-start">{errors.name}</div>}
              </div>
              
              <div className="mb-3">
              <Field type="password" name="password" placeholder="Password" className="form-control" />
                {errors.passwordLength && touched.password && <div className="text-danger text-start">{errors.passwordLength}</div>}
                {errors.passwordLowercaseLetter && touched.password && <div className="text-danger text-start">{errors.passwordLowercaseLetter}</div>}
                {errors.passwordUppercaseLetter && touched.password && <div className="text-danger text-start">{errors.passwordUppercaseLetter}</div>}
                {errors.passwordNumber && touched.password && <div className="text-danger text-start">{errors.passwordNumber}</div>}
                {errors.passwordSpecialCharacter && touched.password && <div className="text-danger text-start">{errors.passwordSpecialCharacter}</div>}
              </div>
              
              <div className="mb-3">
                <Field type="email" name="email" placeholder="Email" className="form-control" />
                {touched.email && errors.email && <div className="text-danger text-start">{errors.email}</div>}
              </div>
              
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  
  export default RegisterForm;
  