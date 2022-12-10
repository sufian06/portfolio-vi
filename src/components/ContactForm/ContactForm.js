import { Button, TextField } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message)
  }

  return (
    <div className='mt-8'>
      <SectionTitle title='Contact Me Now' />
      <form onSubmit={handleSubmit}>
      <div className='mb-4'>
        <TextField className='w-1/2' type='text' name="name" label="Name" />
        </div>
        <div className='mb-4'>
        <TextField className='w-1/2' type='email' name="email" label="Email" />
        </div>
        <div className='mb-4'>
        <TextField className='w-1/2 h-24' type='text' name="message" label="Message" />
        </div>
        <Button type='submit' variant='contained'>send message</Button>
      </form>
    </div>
  );
};

export default ContactForm;