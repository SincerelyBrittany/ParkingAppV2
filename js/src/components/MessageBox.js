import React,  { Component } from 'react';


export default class MessageBox extends Component{
  initEvents() {
    this.root.addEventListener('keydown', (e) => {
      const {target, keyCode} = e;
      if (target.classList.contains('input') || target.closest('input')) {
        this.updateValue(target.value, keyCode);
      }
    });
  }

  refreshProps(newObj) {
    this.value = newObj;
    this.render();
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }


  handleSubmit(e){
    e.preventDefault();
    const dispatch = this.props.store.dispatch

    dispatch('PARKING_INPUTS', {
      carcolor: e.target.carcolor.value,
      streetone: e.target.streetone.value,
      streettwo: e.target.streettwo.value,
      othernotes: e.target.othernotes.value
    })

  }

  render(){
    return(
      <div> 
        <p> ENTER THE COLOR OF YOUR CAR BELOW </p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Car Color:
            <input type="text" name="carcolor" placeholder="Car Color" />
          </label>

          <br></br>
          <br></br>
          <p> ENTER INTERSECTIONS </p>

          <label>
            Street One:
            <input type="text" name="streetone" placeholder="Street One" />
          </label>

          <br></br>
          <br></br>

          <label>
            Street Two:
            <input type="text" name="streettwo" placeholder="Street Two" />
          </label>



          <br></br>
          <br></br>

          <label>
            Other Notes:
            <input type="text" name="othernotes" placeholder="Other notes" />
          </label>

          <br></br>
          <br></br>
          <input type="submit" value="Enter" />
        </form>

      </div>
    )
  }
}


