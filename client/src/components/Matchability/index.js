import React from 'react'
import './style.css'

export default function Matchability({score}) {
  const percentage = (100/8)*score

  let renderPercentage;

    if (percentage>66){
      renderPercentage=(
        <div className="res-sphereGreen">{percentage}% match!</div>
      )
    } else if (33<percentage && percentage<66){
      renderPercentage=(
        <div className="res-sphereYellow">{percentage}% match!</div>
      )
    } else if (percentage<33){
      renderPercentage= (
        <div className="res-sphereRed">{percentage}% match!</div>
      )
  
    }
  

  return (
    <>
    {renderPercentage}
    </>
  )
}
