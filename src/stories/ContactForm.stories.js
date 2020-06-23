import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ContactForm, { Form } from '../components/ContactForm';

export default {
  title: 'ContactFormSection',
  component: ContactForm,
  decorators: [withKnobs]
};

export const form = {
  title: 'Form',
  component: Form,
  decorators: [withKnobs]
};

export const ContactFormComponent = () => {
  return <ContactForm contactLoading={boolean('Contact Loading', false)} />;
};

export const FormComponent = () => {
  return <Form />;
};
