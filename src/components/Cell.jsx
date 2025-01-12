import React from 'react';

const Cell = ({ value, onClick }) => {
  const getCellClass = () => {
    if (value === null) return 'cell empty';
    return value === 1 ? 'cell player1' : 'cell player2';
  };

  return (
    <div className={getCellClass()} onClick={onClick}>
      {value !== null && <span>{value === 1 ? '🔴' : '🟡'}</span>}
    </div>
  );
};

export default Cell;