import React, { Component } from 'react';

class Star extends Component {

  constructor(props) {
    super(props);
    this.state = {
      star: {
        name: '',
        role: '',
        movie: '',
        popularity: ''
      }
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      star: {
        ...this.state.star,
        [propertyName]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.star);
    this.setState({
      star: {
        ...this.state.star,
        name: '',
        role: '',
        movie: '',
        popularity: ''
      }
    });
  };

  render() {
    return (
      <div className="stars">

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.star.name} onChange={this.handleChangeFor('name')} placeholder="Name" />
          <input type="text" value={this.state.star.role} onChange={this.handleChangeFor('role')} placeholder="Role" />
          <input type="text" value={this.state.star.movie} onChange={this.handleChangeFor('movie')} placeholder="Movie" />
          <input type="number" value={this.state.star.popularity} onChange={this.handleChangeFor('popularity')} placeholder="Popularity" />
          <input type="submit" value="Click Me" />
        </form>

        <div>
          <p>
            {this.state.star.name || "Christian Bale"} is famous for the role of {this.state.star.role || "Batman"} in {this.state.star.movie || "Dark Knight Rises"}. Popularity level is {this.state.star.popularity || 10} out of 10.
          </p>
        </div>
      </div>

    )
  }

}

export default Star;