import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexcolor}) => {
 const[alert,setAlert]=useState(false)
 const bcg =rgb.join(',')
 const hexvalue=`#${hexcolor}`
 useEffect(()=>{
   const timeout = setTimeout(()=>{setAlert(false)},3000)
return ()=>clearTimeout(timeout)
 },[alert])
 return (
    <article onClick={()=>{
      setAlert(true)
    navigator.clipboard.writeText(hexvalue)}}
    className={`color ${index>10 && 'color-light'}`}
    style={{backgroundColor: `rgb(${bcg})`}}>
      <p className='precent-value'>{weight}%</p>
      <p className='color-value'>{hexvalue}</p>
    {alert &&<p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
