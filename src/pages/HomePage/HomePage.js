import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import logo from '../../../resources/images/react.png';

const StyledText = styled.h1`
  color: red;
  font-size: 2em;
  font-family: Verdana;
`;

export const HomePage = () => {
  const testContext = useSelector(state => state.testContext);
  const { test } = testContext;
  const dispatch = useDispatch();

  const handleToggle = () => {
    if(test) {
      return dispatch({type: 'DISABLE'});
    }
    return dispatch({type: 'ENABLE'});
  };
  
    return (
        <div>
          <StyledText>{`React is online at ${process.env.PORT}`}</StyledText>
          <StyledText>{`Current test value: ${test}` }</StyledText>
          <button onClick={handleToggle}>Toggle value</button>
            <img src={logo}/>
        </div>
    );
};
