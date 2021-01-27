import React, { useState } from 'react';
import AccordionItem from './AccordionItem.js';

function Accordion(props) {
    const [bindIndex, setBindIndex] = useState(props.defaultIndex);
  
    const changeItem = itemIndex => {
      if (typeof props.onItemClick === 'function') props.onItemClick(itemIndex);
      if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    };
    const items = props.children.filter(item => item.type.name === 'AccordionItem');
  
    return (
      <div className="wrapper">
        {items.map(({ props }) => (
          <AccordionItem
            isCollapsed={bindIndex === props.index}
            label={props.label}
            handleClick={() => changeItem(props.index)}
            children={props.children}
          />
        ))}
      </div>
    );
  }

export default Accordion;