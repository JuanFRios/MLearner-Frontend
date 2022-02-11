import React from 'react';
import ItemContent from 'components/lesson/ItemContent';

const ReadingCodeLesson = ({ content }) => {
  content.sort((a, b) => a.orden - b.orden);
  const itemsContent = content.map((item) => (
    <ItemContent type={item.clave} value={item.valor} key={item._id} />
  ));
  return (
    <div>
      <ul>{itemsContent}</ul>
      <ItemContent type='IMAGEN' value='i' />
    </div>
  );
};

export default ReadingCodeLesson;
