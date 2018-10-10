import React from 'react'
import Item from './Item'

const DisplayShopList = props => {
    return (
        <ol className="item-list">
          {props.items.map((item, index) => <Item key={index} item={item} />)}
        </ol>
    );
 }

export default DisplayShopList