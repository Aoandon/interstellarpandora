import React from 'react';      

const Board = ({ job: { company, desc, logo, isnew, featured, position, role, level, postedAt, contract, location, languages, tools, },handleTagClick,}) => {
    
    const tags = [role, level];

    if (languages) {
        tags.push(...languages);
    }
    if (tools) {
        tags.push(...tools);
    }

    return (
        
        <div className={`flex flex-col bg-black bg-opacity-80 shadow-lg my-16 mx-10 m-4 p-2 sm:flex-row rounded  ${isnew && 'border-l-4 border-yellow-100 border-solid'}`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 sm:mt-0" src={logo} alt={company} />
            </div>

            <div className="flex flex-col ml-4">
                <h3 className="font-bold text-yellow-50">{company}
                {isnew && (<span className="bg-yellow-100 m-1 p-1 rounded text-xs text-black">New</span>)}
                {featured && (<span className="m1- p-1 text-xs">Featured</span>)}
                </h3>
                <h2 className="font-bold text-ml text-yellow-100 my-2 sm:my-0">{position}</h2>
                <p className="text-white">{desc}</p>
                <p className="text-white">{postedAt} · {contract} · {location}</p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-grey-200 border-solid sm:ml-auto sm:border-0">
                {tags ? (tags.map((tag) => <span onClick={() => handleTagClick(tag)} className="  bg-black bg-opacity-60 mr-2 p-2 rounded text-ml text-yellow-100">{tag}</span>)) : ''}
            </div>
        </div>
    )
};

export default Board;   