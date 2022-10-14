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
     
<div class="container-fluid p-10 ">
<div class="row">
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2 gap-1">
<div>
  <Calendar value={dateState} onChange={changeDate}/>
  </div>
  <div>
  <h1 className='text-4xl display-4'>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></h1>
  </div>
</div>
</div>
</div>
    </div>
  );
}

export default App;
