import { useEffect, useState } from "react";
import { getJobs } from "../api/api";
import { IJob } from "../models";
import Job from "./Job";
import Loader from "./Loader";
import Paginator from "./Paginator";

const JobsList = () => {

    const [jobs, setJobs] = useState<IJob[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [jobsPerPage] = useState<number>(5)

    useEffect(() => {
        getJobs()
        .then((res) => {
            setJobs(res.data)
            setLoading(true)
            console.log(res.data);  
        })
    }, [])

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