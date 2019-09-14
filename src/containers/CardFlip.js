import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '../components/Card';
import CardBack from '../components/CardBack'

class CardFlip extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
  }

  handleClick = (e) =>{
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card key="front">
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </Card>

        <CardBack key="back">
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </CardBack>
      </ReactCardFlip>
    );
  };
};

export default CardFlip;