import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import Tab from './Tab';

const TabsStyled = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopicsStyled = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleStyled = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <TabsStyled>
      <TopicsStyled>
        <TitleStyled>TRENDING TOPICS:</TitleStyled>
        {
            tabs.map(tab => 
              <Tab 
                selectedTab={selectedTab} 
                selectTabHandler={selectTabHandler} 
                tab={tab}
                key={tab}
              />)    
        }
      </TopicsStyled>
    </TabsStyled>
  );
};

Tabs.propTypes = {
  tabs: PT.arrayOf(PT.string).isRequired,
  selectedTab: PT.string.isRequired,
  selectTabHandler: PT.func.isRequired,
}
export default Tabs;
