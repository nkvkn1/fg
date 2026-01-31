import React from 'react'
import LapHeader from './LapHeader/LapHeader'
import MobHeader from './MobHeader/MobHeader'


const Header = () => {
  return (
    <div className='Header'>
      <div className="LapHeader"><LapHeader /></div>
      <div className="MobHeader"><MobHeader /></div>
    </div>
  )
}

export default Header
