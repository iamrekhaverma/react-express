import React from 'react';
import Service from "../services/index";
export default class AddEditShip extends React.Component {
  state = {
    shipname: "",
    class: "",
    commissioned: "",
    builder: "",
    length: "",
    breadth: "",
    draught: "",
    displacement: "",
    speed: "",
    range: "",
    armaments: "",
    sensors: "",
    complement: ""
  }
  handleChange = (event) => {
   const { target } = event;
   const { name, value } = target;
   console.log("target",name,value)
   this.setState({[name]: value})
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log("dtaa",this.state)
    const shipInfo = this.state;
    console.log("shipinfo",Object.values(shipInfo))
    Service.postRequest('/submit-form-data', Object.values(shipInfo))
  }
  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <h3> Add Ship Info</h3>
            <button type="submit" value="Submit">Submit</button>
            <input type="text" id="shipname" name="shipname" placeholder="Add ship name.." onChange={this.handleChange} value={this.state.shipname}/>
            <input type="text" id="class" name="class" placeholder="Add class.." onChange={this.handleChange} value={this.state.class} />
            <input id="commissioned" type="text" name="commissioned" placeholder="Commissioned.." onChange={this.handleChange} value={this.state.commissioned}/>
            <input type="text" id="builder" name="builder" placeholder="Builder.." onChange={this.handleChange} value={this.state.builder}/>
            <input type="text" id="length" name="length" placeholder="Length.." onChange={this.handleChange} value={this.state.length}/>
            <input type="text" id="breadth" name="breadth" placeholder="Breadth.." onChange={this.handleChange} value={this.state.breadth}/>
            <input type="text" id="draught" name="draught" placeholder="Draught.." onChange={this.handleChange} value={this.state.draught}/>
            <input type="text" id="displacement" name="displacement" placeholder="Displacement.." onChange={this.handleChange} value={this.state.displacement}/>
            <input type="text" id="speed" name="speed" placeholder="Speed.." onChange={this.handleChange} value={this.state.speed}/>
            <input type="text" id="range" name="range" placeholder="Range.." onChange={this.handleChange} value={this.state.range}/>
            <input type="number" id="complement" name="complement" placeholder="complement.." onChange={this.handleChange} value={this.state.complement}/>
            <textarea name="armaments" onChange={this.handleChange} value={this.state.armaments} placeholder="Armaments..."></textarea>
            <textarea name="sensors" onChange={this.handleChange} value={this.state.sensors} placeholder="Sensors..."></textarea>
            {/* <textarea>Some text...</textarea> */}
        </form>
      )
  }
}