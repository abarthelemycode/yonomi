import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Product } from 'components'
import { productsActions }  from 'features/products'

const ProductsList = ({ items, actions }) => (
  <div className="whiteBox__section">
    { items.map(item => <Product key={item.id} item={item} {...actions} />)}
  </div>
)

const mapStateToProps = state => ({
    items: state.productsState.items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(productsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
