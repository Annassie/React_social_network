import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// MyPosts
let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'It\'s my first post', likesCount: 48 },

]

// 
let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Anna' },
  { id: 4, name: 'Victor' },
  { id: 5, name: 'Sveta' },
]

let messagesData = [
  { id: 1, message: 'Heloo, how are you?' },
  { id: 2, message: 'I like to play tennis!!' },
  { id: 3, message: '' },
  { id: 4, message: '' },
  { id: 5, message: '' },
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
