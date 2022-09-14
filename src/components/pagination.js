import React from 'react'

const Pagination = ({postsPerPage, totalPosts}) => {
    const pagenumbers = [];

    for(let i =1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination

// this page is an experiment: