import React from 'react';
import Service from "../services/index";
export default class AddEditShip extends React.Component {
  state = {
    shipname: "",
    class: "",
    commisioned: "",
    builders: "",
    "length(m)": "",
    "breadth(m)": "",
    "draught(m)": "",
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
    Service.postRequest('/submit-htmlForm-data', shipInfo)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
        <div className="center-heading"><h3>Add Ship Info</h3></div>
            <div className="flex-items">
              <label htmlFor="shipname" className="col-sm-2 col-htmlForm-label">Shipname </label><input type="text" id="shipname" name="shipname" placeholder="Add ship name.." onChange={this.handleChange} value={this.state.shipname}/>
              <label htmlFor="class" className="col-sm-2 col-htmlForm-label">Class </label><input type="text" id="class" name="class" placeholder="Add class.." onChange={this.handleChange} value={this.state.class} />
            </div>
            <div className="flex-items">
            <label htmlFor="class" className="col-sm-2 col-htmlForm-label">Commisioned&nbsp;&nbsp;</label><input id="commisioned" type="text" name="commisioned" placeholder="Commisioned.." onChange={this.handleChange} value={this.state.commisioned}/>
            <label htmlFor="class" className="col-sm-2 col-htmlForm-label"> Builders</label><input type="text" id="builders" name="builders" placeholder="Builders.." onChange={this.handleChange} value={this.state.builders}/>
            </div>
            <div className="padding-left">
              <span className="flex-items"><label htmlFor="length(m)" className="col-sm-2 col-htmlForm-label">Length(m)&nbsp;</label><input type="number" id="length(m)" name="length(m)" placeholder="Length(m).." onChange={this.handleChange} value={this.state['length(m)']}/></span>
              <span className="flex-items"><label htmlFor="breadth(m)" className="col-sm-2 col-htmlForm-label">Breadth(m)&nbsp;</label><input type="number" id="breadth(m)" name="breadth(m)" placeholder="Breadth(m).." onChange={this.handleChange} value={this.state['breadth(m)']}/></span>
              <span className="flex-items"><label htmlFor="draught(m)" className="col-sm-2 col-htmlForm-label">Draught(m)&nbsp;</label><input type="number" id="draught(m)" name="draught(m)" placeholder="Draught(m).." onChange={this.handleChange} value={this.state['draught(m)']}/></span>
              <span className="flex-items"><label htmlFor="displacement" className="col-sm-2 col-htmlForm-label">Displacement&nbsp;&nbsp;</label><input type="number" id="displacement" name="displacement" placeholder="Displacement.." onChange={this.handleChange} value={this.state.displacement}/></span>
              <span className="flex-items"><label htmlFor="speed" className="col-sm-2 col-htmlForm-label">Speed&nbsp;</label><input type="number" id="speed" name="speed" placeholder="Speed.." onChange={this.handleChange} value={this.state.speed}/></span>
              <span className="flex-items"><label htmlFor="range" className="col-sm-2 col-htmlForm-label">Range</label><input type="number" id="range" name="range" placeholder="Range.." onChange={this.handleChange} value={this.state.range}/></span>
              <span className="flex-items"><label htmlFor="complement" className="col-sm-2 col-htmlForm-label">Complement: </label><input type="number" id="complement" name="complement" placeholder="Complement.." onChange={this.handleChange} value={this.state.complement}/></span>
            </div>
            <div>
              <span className="flex-items"><label htmlFor="armaments" className="col-sm-2 col-htmlForm-label">Armaments&nbsp;</label><textarea name="armaments" onChange={this.handleChange} value={this.state.armaments} placeholder="armaments..."></textarea></span>
              <span className="flex-items"><label htmlFor="sensors" className="col-sm-2 col-htmlForm-label">Sensors&nbsp;</label> <textarea name="sensors" onChange={this.handleChange} value={this.state.sensors} placeholder="Sensors..."></textarea></span>
            </div>
            <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
      )
  }
}