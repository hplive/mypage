import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './style.css'

function Cardlist(item) {
  return (
    <div>

      {item.props.map((elevation) => (
         
          <div className="text-center card" >
            { elevation.id }
            {/* <CardText>{ elevation.id }</CardText> */}
          </div>        
      )
      )}


    </div>



  )
}





// function Cardlist(item) {
//   console.log(item.props)
//   return (
//     <div> 
//       {item.props.map(c => html(c)) }
//     </div>
//   )
// }
export default Cardlist;