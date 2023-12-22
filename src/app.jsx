import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const SelectValidationSchema = Yup.object().shape({
  option: Yup.string().required('Please select an option')
});

export function App(props) {
  return (
    <Formik
    initialValues={{ option: '' }}
    validationSchema={SelectValidationSchema}
    onSubmit={(values) => {
      console.log('Form values', values);
    }}>
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Form>
        <label htmlFor="option">Options:&nbsp</label>
        <Field as="select" name="option">
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Field>
        <ErrorMessage name="option" />
        <button type="submit">Submit</button>
      </Form>
    </div>
    </Formik>
  );
}

// Log to console
console.log('Hello console')