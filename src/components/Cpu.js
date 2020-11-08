import React from 'react';

export default class Cpu extends React.Component {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
