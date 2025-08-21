import React from 'react'
import kickerIcon from '../../assets/kicker-icon.svg'

const Kicker = (props) => {
  return (
    <div><img className='kicker' src={kickerIcon} /> <span>{props.text}</span></div>
  )
}

export default Kicker