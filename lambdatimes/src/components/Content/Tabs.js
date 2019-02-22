import React from 'react';
import Tab from './Tab';
import PT from 'prop-types';

const Tabs = ({ tabs, selectedTab, selectTabHandler }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
            tabs.map(tab => 
              <Tab 
                selectedTab={selectedTab} 
                selectTabHandler={selectTabHandler} 
                tab={tab}
                key={tab}
              />)    
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PT.arrayOf(PT.string).isRequired,
  selectedTab: PT.string.isRequired,
  selectTabHandler: PT.func.isRequired,
}
export default Tabs;
