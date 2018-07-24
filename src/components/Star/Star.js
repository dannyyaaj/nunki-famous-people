import React, { Component } from 'react';

class Star extends Component {

  constructor(props) {
    super(props);
    this.state = {
      star: {
        name: '',
        role: '',
        movie: ''
      }
    }
  }

  handleNameChange = (event) => {
  this.setState({
    star: {
      ...this.state.star,
      name: event.target.value
    }
  })
  }

  handleRoleChange = (event) => {
    this.setState({
      star: {
        ...this.state.star,
        role: event.target.value
      }
    })
  }

  handleMovieChange = (event) => {
    this.setState({
      ...this.state.star,
      movie: event.target.value
    })
  }

  handleClick = () => {
    console.log(this.state.star);
  }

  render() {
    return (
      <div className="stars">
        <input type="text" onChange={this.handleNameChange} placeholder="Name" />
        <input type="text" onChange={this.handleRoleChange} placeholder="Role" />
        <input type="text" onChange={this.handleMovieChange} placeholder ="Movie" />
        <button onClick={this.handleClick}>Submit</button>
        <div>
        <p>
         {this.state.star.name || "Christian Bale"} is famous for the role of {this.state.star.role || "Batman"} in {this.state.star.movie || "Dark Knight Rises"}
        </p>
      </div>
      </div>

      )
  }

}

export default Star;