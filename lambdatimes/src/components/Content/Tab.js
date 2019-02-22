import React from 'react';
import { theme } from '../../App';
import PT from 'prop-types';
import styled from 'styled-components';

const TabStyled = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${pr => pr.color};
  background-color: ${pr => pr.backgroundColor};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${pr => pr.border};

  &:hover {
    text-decoration: underline;
  }
`;

const Tab = ({ tab, selectedTab, selectTabHandler}) => {
  let backgroundColor;
  let color;
  let border;
  if (tab === selectedTab) {
    backgroundColor = theme.backgroundColor.activeTab;
    color = theme.color.activeTab;
    border = theme.border.activeTab;
  } else {
    backgroundColor = theme.backgroundColor.tab;
    color = theme.color.tab;
    border = theme.border.tab;
  };
      
  return (
    <TabStyled
      backgroundColor ={backgroundColor}
      color= {color}
      border= {border}
      onClick= {() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </TabStyled>
  );
};

Tab.propTypes = {
  tab: PT.string.isRequired,
  selectedTab: PT.string.isRequired,
  selectTabHandler: PT.func.isRequired,
}

export default Tab;
