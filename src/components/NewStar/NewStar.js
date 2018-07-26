import React, { Component } from 'react';

class NewStar extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')} placeholder="Name" />
        <input type="text" value={this.props.newStar.role} onChange={this.props.handleChangeFor('role')} placeholder="Role" />
        <input type="text" value={this.props.newStar.movie} onChange={this.props.handleChangeFor('movie')} placeholder="Movie" />
        <input type="number" value={this.props.newStar.popularity} onChange={this.props.handleChangeFor('popularity')} placeholder="Popularity" />
        <input type="submit" value="Click Me" />
      </form>
    );
  }
}

export default NewStar;