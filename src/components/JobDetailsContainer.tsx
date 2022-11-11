import { useParams } from "react-router-dom";
import { IJob } from "../models";
import JobDetails from "./JobDetails";

interface JobsDetailsContainer {
    jobs: IJob[]
}

const JobDetailsContainer = ({jobs}:JobsDetailsContainer) => {
    const {jobId} = useParams()
    
    return ( 
        <div>
            {
                jobs.filter(j => j.id === jobId).map(j => <JobDetails job={j} key={j.id}/>)
            }
        </div>
    )
} 

export default JobDetailsContainer;