import React from 'react';

export default (props) => {

  return (
    <div
      className="markup"
      dangerouslySetInnerHTML={props.createMarkup()}
    ></div>
  );
}
