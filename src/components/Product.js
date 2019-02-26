import React, { Component } from 'react'

export default class Product extends Component {

  render() {
    const { item, toggleItem, deleteItem } = this.props

    return (
      <div className='item'>
          <input
              id={'item_'+ item.id}
              type='checkbox'
              className='item__check'
              onChange={(e) => toggleItem(item)}
          >
          </input>
          <label htmlFor={'item_'+ item.id} className='item__description'>
              <span className='item__nbItem'>{item.nbItem}</span>
              <span className='item__label'>{item.text}</span>
          </label>
          <button className='item__delete'
            onClick={(e) => deleteItem(item)}
          />
      </div>
    )
  }
}
