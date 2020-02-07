import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  /* Adapt the colors based on primary prop */

  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = (props) => {
  console.log(props)
  // const text = props.primary ? 'Primary' : 'Secondary'
  return (
    <div>
      <Btn primary={props.primary}>{props.text}</Btn>
    </div>
  );
}

export default Button;