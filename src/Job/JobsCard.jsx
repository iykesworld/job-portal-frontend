import React, { useEffect, useState } from 'react'
import './Job.css'
import jobs_Data from '../data/jobs.js'
import JobSingleCard from './JobSingleCard.jsx';
import Pagination from './Pagination.jsx';

const JobsCard = () => {
    const [jobs,setJobs] = useState(jobs_Data)
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Default');
    const [sort, setSort] = useState('Default');
    // handle search input
    const handleSearchChange = (event)=>{
        setSearch(event.target.value);
    }
    // handle filter change
    const handleFilterChange = (event)=>{
        setFilter(event.target.value);
    }
    // handle sort change
    const handleSortChange =(event)=>{
        setSort(event.target.value)
    }
     // Filter and Sort Jobs
     useEffect(() => {
        let updatedJobs = [...jobs_Data];

        // Search by Job Title
        if (search) {
            updatedJobs = updatedJobs.filter((job) =>
                job.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by Job Type
        if (filter !== 'Default') {
            updatedJobs = updatedJobs.filter((job) => job.type === filter);
        }

        // Sort Jobs
        if (sort === 'A-Z') {
            updatedJobs.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === 'Z-A') {
            updatedJobs.sort((a, b) => b.title.localeCompare(a.title));
        }

        setJobs(updatedJobs);
        setCurrentPage(1); // Reset to first page on filter or search change
    }, [search, filter, sort]);
    // pagination
    const jobsPerPage = 6;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;

    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
    const paginate  =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

  return (
    <div className='jobscard-main'>
        <div className="jobscard-searchcontainer">
            <div className="jobscard-selection-wrapper">
                <div className="jobscard-types">
                <div className='jobscard-filter-icon'><i className="ri-filter-line"></i></div>
                    <label htmlFor="">Types</label>
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="Default">All Jobs</option>
                        <option value="Fullt-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div className="jobscard-types">
                    <label htmlFor="">Sort by</label>
                    <select value={sort} onChange={handleSortChange}>
                        <option value="">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
            </div>
            <form className='form-search'>
                <input type="text" placeholder='Search: Type Job Title' value={search} onChange={handleSearchChange} />
            </form>
        </div>
    <div className='jobscard'>
        {
            currentJobs.length>0 ? (
                currentJobs.map((data)=>{
                    return <JobSingleCard
                    key={data.id}
                    jobColor={data.color}
                    jobDate={data.date}
                    jobImage={data.imgURL}
                    jobCompany={data.company}
                    jobTitle={data.title}
                    jobRole={data.type}
                    jobLevel={data.level}
                    jobExperience={data.experience}
                    jobDetails={data.details}
                    jobApply={data.apply}
                    theLink={data.id}
                    /> 
                })
            ) : (
                <p>No job Found</p>
            )
        }
    </div>
    <Pagination
    jobsPerPage ={jobsPerPage}
    totalJobs = {jobs.length}
    paginate = {paginate}
    activePage = {currentPage}
    />
    </div>
  )
}

export default JobsCard