import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { productsActions } from 'features/products'

// composants
import { AddProduct, Recap, Header, Footer } from 'components';
// containers
import { ProductsList } from 'containers';


const App = ({nbItemsRange, items, actions}) => (
    <React.Fragment>
        <div className="container">
            <Header/>
            <div className="whiteBox">
              <AddProduct nbItemsRange={nbItemsRange} addItem={actions.addItem}/>
              <ProductsList />
              <Recap items={items}/>
            </div>
        </div>
        <Footer/>
    </React.Fragment>
);


const mapStateToProps = state => ({
  nbItemsRange: state.productsState.nbItemsRange,
  items: state.productsState.items
});

const mapDispatchToProps = dispatch => ({
  actions : bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
