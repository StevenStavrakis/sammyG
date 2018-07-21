import React from 'react'
import Link from 'gatsby-link'

function Back(props) {
    return (
      <h1>
        {(function() {
            let current = new Date();
            let returnDate = new Date(2019, 9, 21);
            console.log(returnDate.getMonth())
            console.log(current.getMonth() + 1)
            if (current.getDate() >= returnDate.getDate() && current.getMonth() +1 >= returnDate.getMonth()) {
                return "Oh you know it!"
            } else {
                return "Nope. Not yet."
            }
        })()}
      </h1>
    );
  }


export default Back