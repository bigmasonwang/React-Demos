import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.tittle}>
        <div className="title active" onClick={() => onTitleClicked(index)}>
          <i className="dropdown icon" />
          {item.tittle}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
