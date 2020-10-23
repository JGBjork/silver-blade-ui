import React from 'react';
import FaqQuestion from '../view/FaqQuestion';
import FaqResponse from '../view/FaqResponse';

export default (props) => {
  return (
    <div className="container-fluid">
      <FaqQuestion caption={props.question} />
      <FaqResponse>
        {props.children}
      </FaqResponse>
    </div>
  );
};
