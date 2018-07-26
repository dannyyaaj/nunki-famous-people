import React, { Component } from 'react';

class StarList extends Component {

  render() {

    const arrayOfStars = this.props.starList.map((star, index) => {
      return <li key={index}> {star.name || "Christian Bale"} is famous for the role of {star.role || "Batman"} in {star.movie || "Dark Knight Rises"}. Rotten tomato, has its popularity level at {star.popularity || 10} out of 10.</li>
    })

    return (

      <div>
        <ul>
          {arrayOfStars}
        </ul>
      </div>
    )
  }
}
export default StarList;