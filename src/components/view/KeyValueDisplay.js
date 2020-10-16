import React from 'react';

function KeyValueDisplay(props) {
  return(
    <div className="row">
      <div className="col-4 col-sm-3 col-lg-2">
        <span className="text-primary font-weight-bold">{props.objKey}</span></div>
      <div className={`col-8 col-sm-9 col-lg-10 ${props.className}`}>{props.value}</div>
    </div>
  );
}

function KeyValueLinkDisplay(props) {
  return(
    <div className="row">
      <div className="col-4 col-sm-3 col-lg-2">
        <span className="text-primary font-weight-bold">{props.objKey}</span></div>
      <div className={`col-8 col-sm-9 col-lg-10 ${props.className}`}>
        <a href={props.href} className="text-primary" target="_blank" rel="noopener noreferrer">
          {props.value}
        </a>
      </div>
    </div>
  );
}

export {
  KeyValueDisplay,
  KeyValueLinkDisplay
}
