import React, { useState } from 'react';

const ItemList = ({ items, onFilmSelect }) => {
  return (
    <div className="filmList">
      {items.map(item => (
        <div key={item._id} className="filmListItem">
          <div>{item.filmTitle}</div>
          <div><button onClick={() => onFilmSelect(item._id)}>Show Details</button></div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
