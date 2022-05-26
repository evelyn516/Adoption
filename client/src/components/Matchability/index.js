import React from 'react'
import './style.css'

export default function Matchability(score) {
  const percentage = ((100/8)*score)

  return (
    <div className='score' role='percent'>{percentage}% match!</div>
  )
}
