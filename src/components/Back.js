import React from 'react'
import Link from 'gatsby-link'

function Back(props) {
    return (
      <div>
        {(function() {
            let current = new Date();
            let returnDate = new Date(2019, 9, 21);
            console.log(returnDate.getMonth())
            console.log(current.getMonth() + 1)
            if (current.getDate() >= returnDate.getDate() && current.getMonth() +1 >= returnDate.getMonth()) {
                return <div><h1>Oh you know it!</h1><p>Somebody grab the Pep, it's party time!</p></div>
            } else {
                return <div><h1>Nope. Not yet.</h1><p>I wonder what he's doing right now...</p></div>
            }
        })()}
        </div>
      
    );
  }


export default Back