import React from 'react';

export default (props) => {

  return (
    <div className="markdown">
      <textarea
        onChange={e => props.update(e.target.value)}
        defaultValue={props.value}
      ></textarea>
    </div>
  );
}
