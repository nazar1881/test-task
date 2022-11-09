import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobDetails from './components/JobDetails';
import JobList from './components/JobsList';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto max-w-6xl pt-5"> 
        <Routes>
          <Route path='/' element={<JobList/>}/>
          <Route path='job-details' element={<JobDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
