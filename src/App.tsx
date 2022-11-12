import React from 'react';
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { getJobs } from './api/api';
import JobDetailsContainer from './components/JobDetailsContainer';
import JobList from './components/JobsList';
import { IJob } from './models';

function App() {

  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    getJobs()
      .then((res) => {
          setJobs(res.data)
          setLoading(true)
    })
  }, [])

  return (
    <HashRouter>
      <div className="container mx-auto max-w-6xl pt-5"> 
        <Routes>
          <Route path='/' element={<JobList jobs={jobs} loading={loading}/>}/>
          <Route path='job-details/:jobId' element={<JobDetailsContainer jobs={jobs}/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
