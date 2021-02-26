import './App.css';
import React, { useState, useEffect } from 'react';
import data from './data.json';
import Board from './components/board/board';


function App() {

  const [jobs, setJobs] = useState([data]);
  const [filters, setFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterFunction = ({role, level, tools, languages}) => {

    if (filters.length === 0) {
      return true;
    } 



    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }

    return tags.some((tag) => filters.includes(tag));
  }

  const filteredJobs = jobs.filter(filterFunction);

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }
  

  const clearFilters = () => {
    setFilters([]);
  }

  console.log(jobs);
  console.log(filteredJobs)



  return (
    <div className="App">
      <h1>Interstellar Pandora</h1>
      <h2>Find your interstellar Job!</h2>
      <div className="container m-auto">
      <div className="bg-white flex flex-wrap shadow-md my-16 mx-10 p-6 rounded border-l-4 border-yellow-100 border-solid bg-opacity-50">
          <h3 className="bg-black flex rounded bg-opacity-80 text-yellow-50 m-1 p-1 sm:mb-0">Search by Company : </h3>
          <input onChange={(event) => { setSearchTerm(event.target.value); }} placeholder="Search for Company !" className="bg-black flex rounded bg-opacity-80 text-yellow-50 m-1 p-1 cursor-pointer sm:mb-0" type="text" />  
          <h3 className="bg-black flex rounded bg-opacity-80 text-yellow-50 m-1 p-1 sm:mb-0">Search by Position : </h3>
          <input onChange={(event) => { setSearchTerm(event.target.value); }} placeholder="Search for Position !" className="bg-black flex rounded bg-opacity-80 text-yellow-50 m-1 p-1 cursor-pointer sm:mb-0" type="text" />  

        {
          filters.length > 0 && filters.map((filter) => <span className="bg-black flex rounded bg-opacity-80 text-yellow-50 m-1 p-1 cursor-pointer sm:mb-0" onClick={() => handleFilterClick(filter)}> {filter} ×</span>)
        }
        {filters.length === 0 ? ('') :(  <button onClick={clearFilters} className='bg-black flex rounded m-1 p-1 font-bold text-yellow-50 ml-auto'>Clear</button>) }
        </div>
        
        {
          jobs.length === 0 ? (
            <p>Jobs are fetching...</p>
          ) : (
              filteredJobs.filter((val) => {
                if (searchTerm == "") {
                  return val
                } else if (val.company.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val 
                }
                else if (val.position.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val 
                }
              })  
              .map((job, key) => (
          <Board job={job} key={job.id} handleTagClick={handleTagClick}/>   
        ))
        )
    } 
      </div>
      </div>
  );
}

export default App;



// TODO 
// 1. Study the design and JSON [X]
// 2. Create the Job Board Component [X]
// 3. Get the data from the JSON [X]
// 4. Pass down the data to the JBC [X]
// 5. Style It [X]
// 6. Filter Component [X]
// 7  . Filter IT [X]