/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Headers from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

const App = () => {

  let [title, setTitle] = useState(['콜라의 역사', '사이다의 역사', '환타의 역사']);
  let [content, setContent] = useState('콜라의 기원을 알아보자!');
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="wordHistory">
          <Headers />
          <Switch>
            <Route exact path="/">
              <DayList />
            </Route>\
            <Route path="/day/:day">
              <Day />
            </Route>
            <Route path="/create_word">
              <CreateWord />
            </Route>
            <Route path="/create_day">
              <CreateDay />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;