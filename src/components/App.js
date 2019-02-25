import React from 'react';
import { connect } from 'react-redux'

// Composants
import ShopshopFooter from './ShopshopFooter';

// TODO : A découper en composants et dynamiser
const App = ({nbItemsRange}) => (
    <React.Fragment>
        <div className="container">
            <h1 className="mainTitle">ShopShop</h1>
            <div className="whiteBox">   
                <div className="whiteBox__section">
                    <form className="addItem" >
                        <select value="1" readOnly="true" className="addItem__selectNbItems">
                            {nbItemsRange.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                        <input type="text" className="addItem__inputText" placeholder="Ajouter un article"/>
                        <button className="addItem__addbutton"/>
                    </form>
                </div>
                <div className="whiteBox__section">
                    <div className='item'>
                        <input
                            id='item_1'
                            type='checkbox'
                            className='item__check'>
                        </input>
                        <label for='item_1' class='item__description'>
                            <span className='item__nbItem'>2</span>
                            <span className='item__label'>Sabre Laser</span>
                        </label>
                        <button className='item__delete'/>
                    </div>
                    <div className='item item--checked'>
                        <input
                            id='item_2'
                            type='checkbox'
                            className='item__check'
                            checked>
                        </input>
                        <label for='item_2' class='item__description'>
                            <span className='item__nbItem'>1</span>
                            <span className='item__label'>Pack d'IPA Citra</span>
                        </label>
                        <button className='item__delete'/>
                    </div>
                    <div className='item'>
                        <input
                            id='item_3'
                            type='checkbox'
                            className='item__check'>
                        </input>
                        <label for='item_3' class='item__description'>
                            <span className='item__nbItem'>1</span>
                            <span className='item__label'>Livre "Introducing Eventstorming" par Alberto Brandolini</span>
                        </label>
                        <button className='item__delete'/>
                    </div>
                </div>
                <div className="whiteBox__section">
                    <small>Encore 3 articles à récupérer.</small>
                </div>
            </div>
        </div>
        <ShopshopFooter/>
    </React.Fragment>
);

const mapStateToProps = state => ({
    nbItemsRange: state.nbItemsRange,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);