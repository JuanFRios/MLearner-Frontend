import React from 'react';
import ItemContent from 'components/lesson/ItemContent';

const ReadingCodeLesson = ({ content }) => {
  content.sort((a, b) => a.orden - b.orden);
  const itemsContent = content.map((item) => {
    if (item.clave === 'CODIGO') {
      return (
        <ItemContent
          type={item.clave}
          value={item.valor}
          valueCode={item.valorSampleCode}
          key={item._id}
        />
      );
    }
    return <ItemContent type={item.clave} value={item.valor} key={item._id} />;
  });
  return (
    <div>
      <ul>{itemsContent}</ul>
    </div>
  );
};

export default ReadingCodeLesson;
