import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import { Item } from '../Item/Item'

export const NewCollections = () => {

  const [new_collection, setNew_Collections] = useState([]);

  useEffect(() => {
    fetch('https://smart-shopper-e79a.onrender.com/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_Collections(data));
  }, [])

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
