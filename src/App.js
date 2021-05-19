/* eslint-disable */
import React, { useState } from 'react';
import './App.css';


const App = () => {

  let [title, setTitle] = useState(['콜라의 역사', '사이다의 역사', '환타의 역사']);
  let [content, setContent] = useState('콜라의 기원을 알아보자!');
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        개발 Blog
      </div>
      <button onClick={() => { setTitle(['콜라의 역사는 뒤안길로', '사이다의 역사', '환타의 역사']) }}>버튼</button>
      <div className="list">
        <h3> {title[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>{content}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>{content}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>{content}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;