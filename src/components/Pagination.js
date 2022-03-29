import React, { useState } from "react";

export default function Pagination({ page, setPage, max }) {
  const [paginationState, setPaginationState] = useState(1);
  const nextPage = () => {
    setPaginationState(paginationState + 1);
    setPage(page + 1);
  };

  const prevPage = () => {
    setPaginationState(paginationState - 1);
    setPage(page - 1);
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      setPage(paginationState);
      if (paginationState < 1 || paginationState > Math.ceil(max)) {
        setPage(1);
        setPaginationState(1);
      }
    }
  };

  return (
    <div>
      <button disabled={page === 1 || page < 1} onClick={prevPage}>
        prev
      </button>
      <button
        disabled={page === Math.ceil(max) || page > Math.ceil(max)}
        onClick={nextPage}
      >
        next
      </button>
    </div>
  );
}
