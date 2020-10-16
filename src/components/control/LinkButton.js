import React from 'react';

export default (props) => {
  return (
    <div>
      <button className="btn text-primary" {...props}> 
        {props.children}
      </button>
    </div>
  );
};
