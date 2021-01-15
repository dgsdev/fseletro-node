/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'

export default props =>
   
   <div className="Card" style={{borderColor: props.color || '#007bff' }}>
     <div className="Footer" style={{backgroundColor: props.color || '#007bff' }}>
         {props.titulo}
     </div>  
     <div className="Content">
         {props.children}
     </div>
     </div>
     