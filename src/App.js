import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import moment from 'moment';
function App() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => setDateState(e);
  return (
    <div className="App">
  <Calendar value={dateState} onChange={changeDate}/>
   <h1>Calendar</h1>
    </div>
  );
}

export default App;
