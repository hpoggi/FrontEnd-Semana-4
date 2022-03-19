import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick } = props;

  return (
    <div className="pagination">
      <button className="previous" onClick={onLeftClick}>
        Prev
      </button>
      <button className="next" onClick={onRightClick}>
        Next
      </button>
      {/* <button onClick={onLeftClick}>izq</button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>der</button> */}
    </div>
  );
};

export default Pagination;
