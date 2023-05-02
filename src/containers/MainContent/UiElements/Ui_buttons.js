import React, { Component } from "react";
import AUX from "../../../hoc/Aux_";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
} from "reactstrap";
import Sponsored_Lease from "../Ecommerce/sponsored_lease/Sponsored_Lease";
import Select from "react-select";
import "./Ui_buttons.css";
//import ImageUpload from "./Testing"

class Ui_buttons extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
    this.state = {
      innerContent: " ",
      innerDate: "", // initial state for the inner content
    };
    // this.state = {
    //     showName: '', // Set initial state to false
    //     showPrice: 'N ',
    //     showProduct: '',
    //     showInterest: 'N' + '',
    //     showDate: '',
    //     showStatus: ''
    //   };
    //   this.state = {
    //     isContainerVisible: true // Initial state for the container visibility
    //   };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  handleClick = (e) => {
    console.log("omoooo");
    const element = e.target;
    //console.log(element.parentElement.parentElement.parentElement);
    let main = element.parentElement.parentElement.parentElement;
    console.log(main);
    console.log(main.children[2]);
    let name = main.children[2].textContent;
    let price = main.children[4].textContent;
    let product = main.children[6].textContent;
    let date = main.children[1].textContent;
    let interest = main.children[7].textContent;
    let description = main.children[7].textContent;
    // this.setState(prevStates => ({
    //     containerVisible: !prevStates.containerVisible // Toggle the container visibility
    //   }))
    // this.state = {
    //     showName: name, // Set initial state to false
    //     showPrice: 'N ',
    //     showProduct: '',
    //     showInterest: 'N' + '',
    //     showDate: '',
    //     showStatus: ''
    //   }
    this.setState({ name });
    this.setState({ price });
    this.setState({ product });
    this.setState({ date });
    this.setState({ interest });
    //this.setState({ name });
    console.log(name);
  };

  // render(){
  //     const { isContainerStyled } = this.state;
  // }

  render() {
    const options = [
      { value: "Alaska", label: "Alaska" },
      { value: "Connecticut", label: "Connecticut" },
      { value: "Delaware", label: "Delaware" },
      { value: "Florida", label: "Florida" },
      { value: "Georgia", label: "Georgia" },
      { value: "Indiana", label: "Indiana" },
      { value: "Maine", label: "Maine" },
      { value: "Maryland", label: "Maryland" },
      { value: "Massachusetts", label: "Massachusetts" },
      { value: "Michigan", label: "Michigan" },
      { value: "New Hampshire", label: "New Hampshire" },
      { value: "New Jersey", label: "New Jersey" },
      { value: "New York", label: "New York" },
      { value: "North Carolina", label: "North Carolina" },
      { value: "Ohio", label: "Ohio" },
      { value: "Pennsylvania", label: "Pennsylvania" },
      { value: "Rhode Island", label: "Rhode Island" },
      { value: "South Carolina", label: "South Carolina" },
      { value: "Vermont", label: "Vermont" },
      { value: "Virginia", label: "Virginia" },
      { value: "West Virginia", label: "West Virginia" },
    ];

    const { selectedOption1 } = this.state;

    return (
      <AUX>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card m-b-20">
                  <div className="card-body">
                    <h4 className="mt-0 header-title">Example</h4>
                    <p className="text-muted m-b-30 font-14">
                      This is an experimental awesome platform to lease your
                      properties.
                    </p>
                    <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      >
                        <table
                          id="tech-companies-1"
                          className="table  table-striped"
                        >
                          <thead>
                            <tr>
                              <th>
                                <input type="checkbox" name="" id="" />
                              </th>
                              <th data-priority="1">DATE & TIME</th>
                              <th data-priority="3">LEASOR</th>
                              <th data-priority="1">LEASE</th>
                              <th data-priority="3">PRICE (N)</th>
                              <th data-priority="3">APPROVAL</th>
                              <th data-priority="6">CATEGORY</th>
                              <th data-priority="6">INTEREST (%)</th>
                              <th data-priority="6">PAYMENT DUE</th>
                              <th data-priority="6">PAYMENT</th>
                              <th data-priority="6">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <span className="co-name">
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 10:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td>12000</td>
                              <td>APPROVED</td>
                              <td>ASUS ROG Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button
                                    onClick={this.handleClick}
                                    outline
                                    color="dark"
                                  >
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 06:01PM</td>
                              <td>Sadio Mane</td>
                              <td>Sadio Mane</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Bajaj Power Bike</td>
                              <td>5.5</td>
                              <td>May 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button
                                    onClick={this.handleClick}
                                    outline
                                    color="dark"
                                  >
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Aug 20 / 01:01AM</td>
                              <td>Karim Benzema</td>
                              <td>Joao Felix</td>
                              <td> 131,000</td>
                              <td>APPROVED</td>
                              <td>Red Rolls Royce</td>
                              <td>22.5</td>
                              <td>Sept 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button
                                    onClick={this.handleClick}
                                    outline
                                    color="dark"
                                  >
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Jan 20 / 02:01AM</td>
                              <td>Muhammed Salah</td>
                              <td>Joao Felix</td>
                              <td> 311,000</td>
                              <td>APPROVED</td>
                              <td>Private Jet</td>
                              <td>3.5</td>
                              <td>July 18</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button
                                    onClick={this.handleClick}
                                    outline
                                    color="dark"
                                  >
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Oct 30 / 04:01PM</td>
                              <td>Enzo Fernandez</td>
                              <td>Joao Felix</td>
                              <td> 10,000</td>
                              <td>APPROVED</td>
                              <td>Brown Rolex Wrist Watch</td>
                              <td>1.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button
                                    onClick={this.handleClick}
                                    outline
                                    color="dark"
                                  >
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>ASUS ROG Laptop</td>
                              <td>2.5</td>
                              <td>Mar 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Mar 20 / 9:01AM</td>
                              <td>Kai Havertz</td>
                              <td>Joao Felix</td>
                              <td> 1,000</td>
                              <td>APPROVED</td>
                              <td>Laptop</td>
                              <td>4.5</td>
                              <td>May 28</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="co-name">
                                  {" "}
                                  <input type="checkbox" name="" id="" />{" "}
                                </span>
                              </th>
                              <td>Feb 8 / 8:01AM</td>
                              <td>Fernandez</td>
                              <td>Garnacho</td>
                              <td> 12,000</td>
                              <td>Monitor</td>
                              <td>Laptop</td>
                              <td>7.2</td>
                              <td>Feb 2</td>
                              <td>
                                {" "}
                                <Button outline color="dark">
                                  PAID
                                </Button>{" "}
                              </td>
                              <td>
                                {" "}
                                <Link to="#">
                                  {" "}
                                  <Button outline color="dark">
                                    VIEW
                                  </Button>{" "}
                                </Link>{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Edit */}
        <div className="account">
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card m-b-20">
                    <div className="card-body">
                      <h4 className="mt-0 header-title">Basic Information</h4>
                      <p className="text-muted m-b-30 font-14">
                        Fill all information below
                      </p>

                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="productname">Leasor</label>
                              <input
                                id="productname"
                                name="productname"
                                value={this.state.name}
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label for="manufacturername">Price</label>
                              <input
                                id="manufacturername"
                                name="manufacturername"
                                value={this.state.price}
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="productdesc">
                                Product Description
                              </label>
                              <textarea
                                className="form-control"
                                id="productdesc"
                                value={this.state.product}
                                rows="1"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label for="manufacturerbrand">Date & Time</label>
                              <input
                                id="manufacturerbrand"
                                name="manufacturerbrand"
                                value={this.state.date}
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label for="price">Interest</label>
                              <input
                                id="price"
                                name="price"
                                value={this.state.interest}
                                type="text"
                                className="form-control"
                              />
                            </div>

                            <div className="form-group">
                              <label className="control-label">Category</label>
                              <select className="form-control select2">
                                <option>Select</option>
                                <option value="AK">Gadgets</option>
                                <option value="HI">Home Appliances</option>
                                <option value="HI">Vehicles</option>
                                <option value="HI">Wears</option>
                                <option value="HI">Kitchen Utensils</option>
                                <option value="HI">Clothing Accessories</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="control-label">Features</label>

                              <Select
                                value={selectedOption1}
                                onChange={this.handleChange1}
                                options={options}
                                isMulti={true}
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Product Image</label> <br />
                              {/* <ImageUpload /> */}
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-success waves-effect waves-light"
                        >
                          Save Changes
                        </button>
                        <button
                          type="submit"
                          className="btn btn-secondary waves-effect"
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* <div className="card m-b-20">
                                <div className="card-body">

                                    <h4 className="mt-0 header-title">Meta Data</h4>
                                    <p className="text-muted m-b-30 font-14">Fill all information below</p>

                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="metatitle">Meta title</label>
                                                    <input id="metatitle" name="productname" type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="metakeywords">Meta Keywords</label>
                                                    <input id="metakeywords" name="manufacturername" type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label for="metadescription">Meta Description</label>
                                                    <textarea className="form-control" id="metadescription" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-success waves-effect waves-light">Save Changes</button>
                                        <button type="submit" className="btn btn-secondary waves-effect">Cancel</button>

                                    </form>
                                </div>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ImageUpload /> */}
      </AUX>
    );
  }
}

export default Ui_buttons;
