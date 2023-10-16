import React from 'react'

export default function Button(props) {
  return (
    <button className=" btn btn-circle" title ={props.title}>
        <i className={props.icon}></i>
    </button>
  )
}


