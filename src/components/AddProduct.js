import React, { Component } from 'react'

export default class AddProduct extends Component {
  constructor(){
    super();
    this.state = {
      nbItem : 1,
      text: ''
    }
  }

  inputChangedHandler(e) {
    this.setState({ text: e.target.value})
  }

  selectChangedHandler(e) {
    this.setState({ nbItem: e.target.value})
  }

  clickButtonHandler(e){
    const text = this.state.text.trim()
    if(text.length !== 0){
      this.props.addItem(this.state)
    }
  }

  keyDownHandler(e) {
    const text = e.target.value.trim()
    if (e.which === 13 && text.length !== 0) {
      this.props.addItem(this.state)
    }
  }

  render() {
    const { nbItemsRange, addItem } = this.props

    return (
      <div className="whiteBox__section">
          <form className="addItem" onSubmit={(e)=> e.preventDefault()}>
              <select className="addItem__selectNbItems"
                value={this.state.nbItems}
                onChange={(e)=>this.selectChangedHandler(e)} >
                { nbItemsRange.map(i => <option key={i} value={i}>{i}</option>)}
              </select>
              <input type="text" className="addItem__inputText" placeholder="Ajouter un article"
                value={this.state.text}
                autoFocus={true}
                onChange={(e)=>this.inputChangedHandler(e)}
                onKeyDown={(e)=> this.keyDownHandler(e)}
              />
              <button className="addItem__addbutton"
                type="button"
                onClick={(e)=> this.clickButtonHandler(e) }
              />
          </form>
      </div>
    )
  }
}

//
// const AddProduct = () => (
//     <div className="whiteBox__section">
//         <form className="addItem" >
//             <select value="1" readOnly={true} className="addItem__selectNbItems">
//               { nbItemsRange.map(i => <option key={i} value={i}>{i}</option>)}
//             </select>
//             <input type="text" className="addItem__inputText" placeholder="Ajouter un article"
//
//             />
//             <button className="addItem__addbutton"
//
//             />
//         </form>
//     </div>
// )
//

// export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);



  // handleKeyDown = e => {
  //   console.log("keydown submit")
  //   const text = e.target.value.trim()
  //   if (e.which === 13) {
  //     this.submit(null)
  //     // this.props.onSave(text)
  //     // if (this.props.newTodo) {
  //     //   this.setState({ text: '' })
  //     // }
  //   }
  // }
  // submit = e => {
  //   console.log("click submit")
  //   // const text = e.target.value.trim()
  //   // if (e.which === 13) {
  //   //   // this.props.onSave(text)
  //   //   // if (this.props.newTodo) {
  //   //   //   this.setState({ text: '' })
  //   //   // }
  //   // }
  // }
  // handleChange = e => {
  //   this.setState({ text: e.target.value })
  // }

// input
// value={this.state.text}
// onChange={this.handleChange}
// onKeyDown={this.handleKeyDown}
