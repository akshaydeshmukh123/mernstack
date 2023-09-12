import React from "react";

const CustomPagination = ({ OnpageChange, currentPage, totalpages }) => {

    
  const pageItems = [];

  for (let i = 1; i <= 4; i++) {
    pageItems.push(
      <button
        key={i}
        
        onClick={() => OnpageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination">
      <button
        
        onClick={() => OnpageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageItems}

      <button
        
        onClick={() => OnpageChange(currentPage + 1)}
        disabled={currentPage === totalpages}
      >NEXT</button>
    </div>
  );
};

export default CustomPagination;
