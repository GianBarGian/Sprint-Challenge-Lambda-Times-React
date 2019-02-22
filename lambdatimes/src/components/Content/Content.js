import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const ContentContainerStyled = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;
 

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab,
    })
  };

  filterCards = () => {
    return this.state.cards.filter(card => {
      if (this.state.selected === 'all'|| this.state.selected === card.tab) {
        return true;
      }
      return false;
    });
  };

  render() {
    return (
      <ContentContainerStyled>
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </ContentContainerStyled>
    );
  }
}
