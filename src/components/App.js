import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ItemActions from '../redux/actions'

// Composants
import AddProduct from './AddProduct';
import ProductContainer from './ProductContainer';
import Recap from './Recap';
import ShopshopHeader from './ShopshopHeader';
import ShopshopFooter from './ShopshopFooter';


const App = ({nbItemsRange, items, actions}) => (
    <React.Fragment>
        <div className="container">
            <ShopshopHeader/>
            <div className="whiteBox">
              <AddProduct nbItemsRange={nbItemsRange} addItem={actions.addItem}/>
              <ProductContainer />
              <Recap items={items}/>
            </div>
        </div>
        <ShopshopFooter/>
    </React.Fragment>
);


const mapStateToProps = state => ({
  nbItemsRange: state.nbItemsRange,
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  actions : bindActionCreators(ItemActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
