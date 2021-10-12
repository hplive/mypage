import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Solid from '@fortawesome/fontawesome-free-solid'
import * as Brands from '@fortawesome/free-brands-svg-icons'
import Icon from '@mdi/react'
import * as MdiJsIcon from '@mdi/js'
import './style.css'


const RenderIcon = (item) => {
  if (item.icon !== "") {
    return <FontAwesomeIcon icon={Brands[item.icon]} />
  } else if (item.mdi !== "") {
    return <Icon path={MdiJsIcon[item.mdi]}
      size={3}
      horizontal
      vertical
      rotate={180}
      color="white" />
  } else return <FontAwesomeIcon icon={Solid.faHashtag} />

}

const RenderCard = (elevation) => {
  return <div className="cardFeature column" key={elevation.id}>
    <span  className="text-center card" >
      <div className="containerCard"> {RenderIcon(elevation)} {elevation.id}</div>
    </span>
  </div>
}

function Cardlist(item) {
  return (
    <div className="row">
      {item.props.map((elevation) => (
        RenderCard(elevation)
      ))}
    </div>

    // <div>

    //   {item.props.map((elevation) => (

    //     <span key={elevation.id} className="text-center card" >
    //       {RenderIcon(elevation)}
    //       {elevation.id}
    //     </span>
    //   )
    //   )}
    // </div>



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