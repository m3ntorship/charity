import React, { useState } from 'react';
import './styles.css';
import getInTouch from './assets/get-in-touch.svg';

export default function ContactForm() {
  return (
    <div className="lg:mt-40 mt-24 mb-8 flex">
      <div className="md:w-1/2 hidden lg:flex p-5">
        <img
          className="object-fill object-cover w-full"
          src={getInTouch}
          alt="an illustration means contact us"
        />
      </div>
      <div className="bg-c1100 sm:w-full lg:w-1/2">
        <h6 className="text-c100 text-lg mt-10 mb-3 ml-12 font-md font-bold">
          Get In Touch
        </h6>
        <Form />
      </div>
    </div>
  );
}

export const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleUserName = e => {
    setUserName(e.target.value);
  };
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubject = e => {
    setSubject(e.target.value);
  };
  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(subject);
    console.log(message);

    setUserName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  return (
    <form
      className="px-12 mt-5 "
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input
        className="appearance-none w-full pt-8 pb-8 px-5 text-sm font-semibold placeholder-c600 leading-tight focus:outline-none"
        placeholder="Username"
        required
        value={userName}
        onChange={e => {
          handleUserName(e);
        }}
      />
      <input
        className="appearance-none w-full mt-2 pt-8 pb-8 px-5 text-sm font-semibold placeholder-c600 leading-tight focus:outline-none"
        placeholder="Email"
        type="email"
        required
        value={email}
        onChange={e => {
          handleEmail(e);
        }}
      />
      <input
        className="appearance-none w-full mt-2 pt-8 pb-8 px-5 text-sm font-semibold placeholder-c600 leading-tight focus:outline-none"
        placeholder="Subject"
        required
        value={subject}
        onChange={e => {
          handleSubject(e);
        }}
      />
      <textarea
        className="mt-2 px-5 py-8 text-c600 w-full focus:outline-none text-sm font-semibold placeholder-c600"
        name="message"
        id=""
        cols="35"
        rows="5"
        placeholder="Message"
        required
        value={message}
        onChange={e => {
          handleMessage(e);
        }}
      ></textarea>
      <button className="block my-8 bg-c300 text-c100 text-white font-bold py-6 px-12 mx-auto lg:ml-0">
        Send Your Message
      </button>
    </form>
  );
};
