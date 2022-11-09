import { IJob } from "../models";
import saveJobBtn from "../img/saveJobLogo.svg";
import rating from "../img/rating.svg";
import {NavLink} from "react-router-dom";

interface JobProps {
    job: IJob
}

const Job = ({job}: JobProps) => {    

    console.log(job);    

    return (
        <div className="flex justify-between border py-2 px-4 rounded my-2">
            <div className="flex w-2/3 xs:w-[100%]">
                <div className="xs:min-h-[80px] xs:min-w-[80px]">
                    <img src={`${job.pictures[0]}`} className="rounded-full md:h-[110px] md:w-[110px] sm:h-[90px] sm:w-[90px] xs:h-[80px] xs:w-[80px]"></img>
                </div>
                <div className="ml-7 md:max-w-md sm:max-w-[250px] xs:max-w-[350px]">
                    <NavLink to={'/job-details'} className="md:text-xl font-bold sm:text-base">{job.title}</NavLink>
                    <span className="block">{job.phone}</span>
                    <span className="block">{job.location.lat} {job.location.long}</span>
                </div>
            </div>
            <div>
                <img src={rating} className="sm:block md:w-[100px] md:mr-[150px] sm:w-[75px] xs:hidden"/>
            </div>
            <div className="sm:flex flex-col justify-between items-end md:w-[200px] sm:w-[90px] xs:hidden">
                <button className="w-5"><img className="" src={`${saveJobBtn}`}/></button>
                
                <span className="md:text-base sm:text-xs">{job.createdAt}</span>
            </div>
        </div>
    )
}

export default Job;