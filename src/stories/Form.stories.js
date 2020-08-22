import React from 'react';
import Form from '../components/FormComponent';

export default {
  title: 'Form Component',
  component: Form
};

const data = {
  formDesc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur id iste tempore molestiae tempora totam.',
  donationAmount: '$200',
  targetAmount: '$500',
  btnText: 'Donate Now'
};

export const FormShowcase = () => {
  return <Form data={data} />;
};
