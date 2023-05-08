import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

function Pagination({setCurrentPage}) {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        className="pagination"
        nextLabel=" >"
        previousLabel="< "
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
      />

    </div>
  )
}

export default Pagination
