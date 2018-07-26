import React, { Component } from 'react';
import StarList from '../StarList/StarList';
import NewStar from '../NewStar/NewStar';

class Star extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starList: [{
        name: 'Will Smith',
        role: 'Chris Gardner',
        movie: 'The Pursuit of Happyness',
        popularity: 8
      },
      {
        name: 'Keanu Reeves',
        role: 'Neo',
        movie: 'The Matrix',
        popularity: 8.7
      },
      {
        name: 'Benedict Cumberbatch',
        role: 'Alan Turing ',
        movie: 'The Imitation Game',
        popularity: 8
      }],
      newStar: {
        name: '',
        role: '',
        movie: '',
        popularity: ''
      }
    }
  }



  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      starList:
        [
          ...this.state.starList,
          this.state.newStar
        ],
      newStar: {
        ...this.state.newStar,
        name: '',
        role: '',
        movie: '',
        popularity: ''
      }
    })
  };

  render() {

    this.handleChangeFor = (propertyName) => (event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value
        }
      });
    };

    return (
      <div>
        <NewStar
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
          starList={this.state.starList}
          newStar={this.state.newStar}
        />
        <StarList starList={this.state.starList} />
      </div>
    )
  }
}

export default Star;