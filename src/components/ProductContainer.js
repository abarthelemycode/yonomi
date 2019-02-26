import React from 'react'

import Product from './Product'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../redux/actions'

const ProductContainer = ({ items, actions }) => (
  <div className="whiteBox__section">
    { items.map(item => <Product key={item.id} item={item} {...actions} />)}
  </div>
)

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
