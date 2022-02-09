import React from 'react';

const ItemContent = ({ type }) => {
  let item;
  switch (type) {
    case 'TEXTO':
      item = <p>Hola</p>;
      break;
    default:
      item = <p>Default</p>;
  }
  return <div>{item}</div>;
};

export default ItemContent;
