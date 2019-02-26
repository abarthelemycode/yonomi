import React, { Component } from 'react'

export default class Recap extends Component {

  render() {
    const { items } = this.props
    let message = "";
    let lastItems = items.filter((item) => (item.checked === false))

    if(items.length === 0){
      message = "La liste est vide."
    } else {
      if(lastItems.length === 0){
        message = "Tous les articles ont été récupérés."
      }
      else if (lastItems.length === 1) {
        message = "Encore un article à récupérer."
      }
      else {
        message = "Encore "+ lastItems.length +" articles à récupérer."
      }
    }

    return (
      <div className="whiteBox__section">
        <small>{ message }</small>
      </div>
    )
  }
}
