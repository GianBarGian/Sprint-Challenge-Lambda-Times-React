import React from 'react';
import PT from 'prop-types';


const Tab = ({ tab, selectedTab, selectTabHandler}) => {
  let tabClass = ""
  tab === selectedTab
  ? tabClass = "tab active-tab"
  : tabClass = "tab";
      
  return (
    <div
      className={tabClass}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PT.string.isRequired,
  selectedTab: PT.string.isRequired,
  selectTabHandler: PT.func.isRequired,
}

export default Tab;
