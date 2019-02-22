import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

export const theme = {
  backgroundColor: {
    tab:  '#333',
    activeTab: '#fff',
  },
  
  color: {
    tab: '#fff',
    activeTab: '#333',
  },
  
  border: {
    tab: 'unset',
    activeTab: '2px solid #333',
  }
}

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <AppStyled>
      <TopBar />
      <Header />
      <Content />
    </AppStyled>
  );
}

export default App;
