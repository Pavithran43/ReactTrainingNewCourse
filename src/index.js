import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Point from './login';
import Power from './Exclass';
import Exfunct from './Exfunct'
import Student from './Studentlist';
import BookListDemo  from './Booklist';
import BookList from './Booklistexer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Point  name="Pavithran" age={24}  />
    <Power />
    <Exfunct brand="suresh" />
    <Student />
    <BookListDemo />
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
