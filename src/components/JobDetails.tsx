import { IJob } from "../models";
import saveJobBtn from "../img/saveJobLogo.svg";
import shareBtn from "../img/share.svg"
import { NavLink } from "react-router-dom";
import arrow from "../img/arrow.svg"
import JobMap from "./JobMap";
import { useLoadScript } from "@react-google-maps/api";


interface JobDetails {
    job: IJob
}

const JobDetails = ({job}:JobDetails) => {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyB-gZlgBLw0gKuaX9rm8mVQIyYrVYDJugU"
    })
       
    return (
        <div className="smd:flex px-8">
            <div className="smd:w-2/3">
            <div className="sm:flex justify-between border-b-2 xs:hidden">
                <h1 className="text-2xl font-bold text-[#3A4562] mb-4">JobDetails</h1>
                <div>
                    <button className="mr-7 xs:mr-4"><img className="inline-block mr-3 xs:mr-1" src={`${saveJobBtn}`}/>Save to my list</button>
                    <button className=""><img className="inline-block mr-3 xs:mr-1" src={`${shareBtn}`}/>Share</button>
                </div>
            </div>
            <div className="xs:flex justify-between border-b-2 mb-4 sm:hidden">
                <h1 className="text-2xl font-bold text-[#3A4562] mb-4">JobDetails</h1>
            </div>
                <div className="sm:hidden mb-5">
                    <button className="mr-7 xs:mr-4"><img className="inline-block mr-3 xs:mr-1" src={`${saveJobBtn}`}/>Save to my list</button>
                    <button className=""><img className="inline-block mr-3 xs:mr-1" src={`${shareBtn}`}/>Share</button>
                </div>
            <button className="py-3 px-5 bg-[#3A4562] text-white font-semibold rounded-lg shadow-md sm:inline-block xs:hidden hover:bg-[#ffffff] hover:text-[#3A4562] hover:font-bold focus:ring-opacity-75 transition duration-150 ease-out hover:ease-in my-10">Aply now</button>
            <div>
                <div className="sm:flex sm:justify-between mb-2">
                    <h2 className="text-xl font-bold text-[#3A4562] sm:w-2/3">{job.title}</h2>
                    <div className="xs:hidden sm:block">
                        <p className="text-xl font-bold text-[#3A4562]">${job.salary}</p>
                        <p className="tex-base text-[#3A4562]">Brutto per year</p>
                    </div>
                    
                </div>
                <div className="flex justify-between">
                    <p className="sm:text-base text-[#96a1bd] xs:text-xs xs:w-1/3">Posted at{": "+job.createdAt}</p>
                    <div className="sm:hidden">
                        <p className="tex-base text-[#3A4562]">Brutto per year</p>
                        <p className="text-xl font-bold text-[#3A4562]">${job.salary}</p>
                    </div>
                </div>
                <p className="text-[#3A4562] mt-4">{job.description}</p>
                <h3 className="text-xl font-bold text-[#3A4562] mt-10">Responsabilities</h3>
                <p className="my-4 text-[#3A4562]">Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.</p>
                <p className="my-4 text-[#3A4562]">The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.</p>
                <p className="my-4 text-[#3A4562]">Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.</p>
                <h3 className="text-xl font-bold text-[#3A4562] mt-10 mb-5">Compensation & Benefits:</h3>
                <ul className="list-disc">
                    <li>Our physicians enjoy a wide range of benefits, including:</li>
                    <li>Very competitive compensation package with bonuses</li>
                    <li>Medical, Dental, and Vision Insurance</li>
                    <li>Occurrence-based Malpractice Coverage</li>
                    <li>Short-term and Long-term Disability Insuranceand life insurance</li>
                </ul>
                <div className="flex xs:justify-center sm:block">
                <button className="py-3 px-5 bg-[#3A4562] text-white font-semibold rounded-lg shadow-md hover:bg-[#ffffff] hover:text-[#3A4562] hover:font-bold focus:ring-opacity-75 transition duration-150 ease-out hover:ease-in my-10">Aply now</button>
                </div>
                
                <div className="border-b-2">
                    <h1 className="text-2xl font-bold text-[#3A4562] mb-4">Additional Info</h1>
                </div>
                <div>
                    <h3 className="text-[#3A4562] my-5">Employment type</h3>
                    <div className="flex">
                        {job.employment_type.map((et, index) => <p key={index} className="text-[#435da4] text-sm font-bold rounded-lg border border-[#55699E]  bg-[#A1B1DB] w-[150px] py-3 text-center mr-2">{et}</p>)}
                    </div>
                    <h3 className="text-[#3A4562] my-5">Benefits</h3>
                    <div className="flex">
                        {job.benefits.map((et, index) => <p key={index} className="text-[#988B49] text-sm font-bold rounded-lg border border-[#FFCF00]  bg-[#FFCF0026] w-[150px] py-3 text-center mr-2">{et}</p>)}
                    </div>
                </div>
                <div className="border-b-2">
                    <h1 className="text-2xl font-bold text-[#3A4562] mb-4 mt-10">Attached images</h1>
                </div>
                <div className="flex mt-5 mb-24">
                {job.pictures.map((pic, index) => <img key={index} className="sm:h-[130px] sm:w-[200px] sm:mr-6 rounded-lg xs:mr-3 xs:w-[270px] xs:h-[90px]" src={`${pic}`}></img>)}
                </div>
                <NavLink to={'/'} className="bg-[#c6cee1] text-[#3B4564] lg:ml-[-70px] p-3 rounded-lg hover:bg-[#b4ccff] smd:inline-block xs:hidden"><img src={arrow} className="inline-block mr-5"></img>Return to job bord</NavLink>
            </div>
            </div>
            <div className="border-b-2 smd:hidden">
                    <h1 className="text-2xl font-bold text-[#3A4562] mb-4 mt-10">Contacts</h1>
                </div>
            <div className="smd:w-1/3 smd:ml-14 mt-4">
                {   
                    isLoaded
                    ? <JobMap lat={job.location.lat} lng={job.location.long}/>
                    : <div>Loading.....</div>
                }
            </div>
        </div>
        
    )
} 

export default JobDetails;