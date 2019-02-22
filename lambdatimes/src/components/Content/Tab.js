import React from 'react';

const Tab = props => {
  let tabClass = ""
  props.tab === props.selectedTab
  ? tabClass = "tab active-tab"
  : tabClass = "tab";
      
  return (
    <div
      className={tabClass}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
