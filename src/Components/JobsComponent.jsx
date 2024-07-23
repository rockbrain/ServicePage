import React from 'react'
let year= "2021"
let end_year="2017"
let title="Computer Science"
let country="Ukraine"
let description="Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri."

const n = 3;

 function JobsComponent() {
  return [...Array(n)].map((e, i) => <span key={i}>
    <div className=" container m-auto  job_profile_details grid grid-flow-row ">
    <p className="flex text-blue-500 "><p className="p-1">{year}</p><h1 className="p-1">-</h1><p className="p-1 ">{end_year}</p> <h1 className="p-1">/</h1><p className="p-1">{country}</p> </p>
    <h1 className="flex text-blue-500">{title}</h1>
    <p className="flex">{description}</p>
    </div></span>);
}

    
export default JobsComponent