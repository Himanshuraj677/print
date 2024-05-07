import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/dropdownList.css"
const dropdownList = () => {
    const list = [
        {
        name:'category1',
        path: '/category1'
        },
        {
            name:'category2',
            path: '/category2'  
        },
        {
            name:'category3',
            path: '/category3'  
        },
        {
            name:'category4',
            path: '/category4'  
        }

    ]
  return (

    <div className='product-list'>
      <ul>
      {list.map((item, index) => (
        <li key={index}>
            <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default dropdownList
