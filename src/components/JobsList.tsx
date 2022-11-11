import { useEffect, useState } from "react";
import { getJobs } from "../api/api";
import { IJob } from "../models";
import Job from "./Job";
import JobDetails from "./JobDetails";
import Loader from "./Loader";
import Paginator from "./Paginator";

interface JobsListProps {
    jobs: IJob[]
    loading: boolean
}

const JobsList = ({jobs, loading}:JobsListProps) => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [jobsPerPage] = useState<number>(5)

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <div className="flex flex-col">
            <h2 className="self-center text-4xl font-bold">Job-List:</h2>
            {
                loading 
                ? currentJobs.map((j) => <Job job={j} key={j.id}/>)
                : <Loader/>
            }
            <Paginator jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} currentPage={currentPage}/>
        </div>
    )
}

export default JobsList;