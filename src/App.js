import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import TomatoButton from './TomatoButton';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Title = styled.section`
  color: pink;
  font-size: 5rem;  
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Button primary={true} text={"Primary"} />
      <Button primary={false} text={"Secondary"} />
      <TomatoButton />
    </Wrapper>
  );
}

export default App;
