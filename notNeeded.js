/////Buttons.js

import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { Dropdown,Button, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup  } from 'reactstrap';
class Ui_buttons extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

 
render(){
    return(
           <AUX>
		   <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Examples</h4>
                                <p className="text-muted m-b-30 font-14">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>

                                <div className="button-items">
                                   

                                    <Button color="primary">primary</Button>{' '}
                                    <Button color="secondary">secondary</Button>{' '}
                                    <Button color="success">success</Button>{' '}
                                    <Button color="info">info</Button>{' '}
                                    <Button color="warning">warning</Button>{' '}
                                    <Button color="danger">danger</Button>{' '}
                                    <Button  className="btn btn-dark waves-effect waves-light">Dark</Button>
                                    <Link to="#" className="btn btn-link waves-effect">Link</Link>
                                    <Button  className="btn btn-light waves-effect">Light</Button>                                    
                                    <Button color="purple">purple</Button>{' '}
                                    <Button color="pink">Pink</Button>{' '}
                                    <Button color="brown">Brown</Button>{' '}
                                    <Button color="blue-grey">Blue-grey</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Outline buttons</h4>
                                <p className="text-muted m-b-30 font-14">In need of a button, but not the hefty
                                    background colors they bring? Replace the default modifier classNamees with
                                    the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove
                                    all background images and colors on any button.</p>

                                <div className="button-items">
                                  
                                <Button color="primary">primary</Button>{' '}
                                    <Button outline color="secondary">secondary</Button>{' '}
                                    <Button outline color="success">success</Button>{' '}
                                    <Button outline color="info">info</Button>{' '}
                                    <Button outline color="warning">warning</Button>{' '}
                                    <Button outline color="danger">danger</Button>{' '}
                                    <Button outline color="dark" >Dark</Button>
                                    <Button outline color="light" >Light</Button>                                    
                                    <Button outline color="purple">purple</Button>{' '}
                                    <Button outline color="pink">Pink</Button>{' '}
                                    <Button outline color="brown">Brown</Button>{' '}
                                    <Button outline color="blue-grey">Blue-grey</Button>{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button tags</h4>
                                <p className="text-muted m-b-30 font-14">The <code className="highlighter-rouge">.btn</code>
                                    classNamees are designed to be used with the <code
                                            className="highlighter-rouge">&lt;button&gt;</code> element.
                                    However, you can also use these classNamees on <code
                                            className="highlighter-rouge">&lt;a&gt;</code> or <code
                                            className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                    some browsers may apply a slightly different rendering).</p>

                                <div className="button-items">
                                <Link to="#" ><Button color="primary">Link</Button>{' '}</Link>
                                <Button className="btn btn-success waves-effect waves-light">Button</Button>{' '}
                                    <input className="btn btn-info" type="button" value="Input" />
                                    <input className="btn btn-danger" type="submit" value="Submit" />
                                    <input className="btn btn-warning" type="reset" value="Reset" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Sizes</h4>
                                <p className="text-muted m-b-30 font-14">Fancy larger or smaller buttons? Add
                                    <code className="highlighter-rouge">.btn-lg</code> or <code
                                            className="highlighter-rouge">.btn-sm</code> for additional sizes.
                                </p>

                                <div className="button-items">
                                <Button size="lg" color="primary">Large button</Button>{' '}
                                <Button size="lg" color="secondary">Large button</Button>{' '}
                                <Button size="sm" color="primary">Small button</Button>{' '}
                                <Button size="sm" color="secondary">Small button</Button>{' '}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Block Buttons</h4>
                                <p className="text-muted m-b-30 font-14">Create block level buttons—those that
                                    span the full width of a parent—by adding <code
                                            className="highlighter-rouge">.btn-block</code>.</p>

                                <div className="button-items">
                                <Button color="primary" size="lg" block>Block level button</Button>
                               <Button color="secondary" size="sm" block>Block level button</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Toggle states</h4>
                                <p className="text-muted m-b-30 font-14">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                    to toggle a button’s <code className="highlighter-rouge">active</code>
                                    state. If you’re pre-toggling a button, you must manually add the <code
                                            className="highlighter-rouge">.active</code> className
                                    <strong>and</strong> <code
                                            className="highlighter-rouge">aria-pressed="true"</code> to the
                                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                                </p>

                                <div className="button-items">
                                    <button type="button" className="btn btn-success waves-effect waves-light" data-toggle="button" aria-pressed="false" autoComplete="off">
                                        Single toggle
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Checkbox buttons</h4>
                                <p className="text-muted m-b-30 font-14">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                    other elements, such as <code className="highlighter-rouge">
                                        &lt;label&gt;</code>s, to provide checkbox or radio style button
                                    toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                    <code className="highlighter-rouge">.btn-group</code> containing those
                                    modified buttons to enable toggling in their respective styles.</p>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-secondary">
                                        <input type="checkbox"  defaultChecked autoComplete="off" /> Checked-1
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="checkbox" defaultChecked autoComplete="off" /> Checked-2
                                    </label>
                                    <label className="btn btn-secondary">
                                        <input type="checkbox" defaultChecked autoComplete="off" /> Checked-3
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Radio buttons</h4>
                                <p className="text-muted m-b-30 font-14">Bootstrap’s <code
                                        className="highlighter-rouge">.button</code> styles can be applied to
                                    other elements, such as <code className="highlighter-rouge">
                                        &lt;label&gt;</code>s, to provide checkbox or radio style button
                                    toggling. Add <code
                                            className="highlighter-rouge">data-toggle="buttons"</code> to a
                                    <code className="highlighter-rouge">.btn-group</code> containing those
                                    modified buttons to enable toggling in their respective styles.</p>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-primary active">
                                        <input type="radio" name="options" id="option1" /> Active
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option2"  /> Radio
                                    </label>
                                    <label className="btn btn-primary">
                                        <input type="radio" name="options" id="option3"  /> Radio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button group</h4>
                                <p className="text-muted m-b-30 font-14">Wrap a series of buttons with <code
                                        className="highlighter-rouge">.btn</code> in <code
                                        className="highlighter-rouge">.btn-group</code>.</p>

                                <div className="btn-group" role="group" aria-label="Basic example">
                                <ButtonGroup>
                                   <Button  color="secondary">Left </Button>{' '}
                                   <Button  color="secondary">Middle </Button>{' '}
                                   <Button  color="secondary">Right </Button>{' '}
                                </ButtonGroup>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Button toolbar</h4>
                                <p className="text-muted m-b-30 font-14">Combine sets of button groups into
                                    button toolbars for more complex components. Use utility classNamees as
                                    needed to space out groups, buttons, and more.</p>

                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <ButtonGroup>
                                        <Button  color="secondary">1 </Button>{' '}
                                        <Button  color="secondary">2 </Button>{' '}
                                        <Button  color="secondary">3 </Button>{' '}
                                        <Button  color="secondary">4 </Button>{' '}
                                    </ButtonGroup>
                                    </div>
                                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <ButtonGroup>
                                        <Button  color="secondary">5 </Button>{' '}
                                        <Button  color="secondary">6 </Button>{' '}
                                        <Button  color="secondary">7 </Button>{' '}
                                        </ButtonGroup>
                                    </div>
                                    <div className="btn-group" role="group" aria-label="Third group">
                                    <ButtonGroup>
                                      <Button  color="secondary">8 </Button>{' '}
                                   </ButtonGroup>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Sizing</h4>
                                <p className="text-muted m-b-30 font-14">Instead of applying button sizing
                                    classNamees to every button in a group, just add <code
                                            className="highlighter-rouge">.btn-group-*</code> to each <code
                                            className="highlighter-rouge">.btn-group</code>, including each one
                                    when nesting multiple groups.</p>

                                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                <ButtonGroup>
                                        <Button size="lg" color="secondary">Left </Button>{' '}
                                        <Button size="lg" color="secondary">Middle </Button>{' '}
                                        <Button size="lg" color="secondary">Right </Button>{' '}
                                    </ButtonGroup>
                                </div>

                                <br/>

                                <div className="btn-group m-t-10" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>

                                <br/>

                                <div className="btn-group btn-group-sm m-t-10" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary">Left</button>
                                    <button type="button" className="btn btn-secondary">Middle</button>
                                    <button type="button" className="btn btn-secondary">Right</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Vertical variation</h4>
                                <p className="text-muted m-b-30 font-14">Make a set of buttons appear vertically
                                    stacked rather than horizontally. Split button dropdowns are not
                                    supported here.</p>

                                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <button type="button" className="btn btn-secondary">Button</button>
                                    <div className="btn-group" role="group">
                                    <Dropdown isOpen={this.state.dropdownOpen}  toggle={this.toggle}>
                                        <DropdownToggle className="btn btn-secondary" tag="a" style={{ color : "#fff" }}> Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                    </div>
                                    <button type="button" className="btn btn-secondary">Button</button>
                                    <button type="button" className="btn btn-secondary">Button</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
		 
           </AUX>
        );
    }
}

export default Ui_buttons;   


//End of Buttons.js




                {/* Lease Nav Solomon  */}

                <li
                  className={
                    this.state.ui_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        ui_menu: !this.state.ui_menu,
                        email_menu: false,
                        dashboard_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                      })
                    }
                    className={
                      this.state.Tab === "ui"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-buffer"></i>{" "}
                    <span>
                      {" "}
                      Lease{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>{" "}
                  </Link>

                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.ui_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "buttons" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "buttons",
                          ""
                        )}
                        to="requests"
                      >
                        Requests
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={
                          this.state.SubTab === "colors" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "colors",
                          ""
                        )}
                        to="colors"
                      >
                        Quick Loan
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "cards" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "cards",
                          ""
                        )}
                        to="cards"
                      >
                        Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "tabs_accordions"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "tabs_accordions",
                          ""
                        )}
                        to="tabs_accordions"
                      >
                        Tabs &amp; Accordions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "modals" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "modals",
                          ""
                        )}
                        to="modals"
                      >
                        Modals
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "images" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "images",
                          ""
                        )}
                        to="images"
                      >
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "alerts" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "alerts",
                          ""
                        )}
                        to="alerts"
                      >
                        Alerts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "progressbars"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "progressbars",
                          ""
                        )}
                        to="progressbars"
                      >
                        Progress Bars
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "dropdowns" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "dropdowns",
                          ""
                        )}
                        to="dropdowns"
                      >
                        Dropdowns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "lightbox" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "lightbox",
                          ""
                        )}
                        to="lightbox"
                      >
                        Lightbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "navs" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(this, "ui", "navs", "")}
                        to="navs"
                      >
                        Navs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "pagination"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "pagination",
                          ""
                        )}
                        to="pagination"
                      >
                        Pagination
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "popover_tooltips"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "popover_tooltips",
                          ""
                        )}
                        to="popover_tooltips"
                      >
                        Popover & Tooltips
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "badge" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "badge",
                          ""
                        )}
                        to="badge"
                      >
                        Badge
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "carousel" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "carousel",
                          ""
                        )}
                        to="carousel"
                      >
                        Carousel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "video" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "video",
                          ""
                        )}
                        to="video"
                      >
                        Video
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "typography"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "typography",
                          ""
                        )}
                        to="typography"
                      >
                        Typography
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "sweet_alert"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "sweet_alert",
                          ""
                        )}
                        to="sweet_alert"
                      >
                        Sweet-Alert
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "grid" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(this, "ui", "grid", "")}
                        to="grid"
                      >
                        Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "animation" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "animation",
                          ""
                        )}
                        to="animation"
                      >
                        Animation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "highlight" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "highlight",
                          ""
                        )}
                        to="highlight"
                      >
                        Highlight
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "rating" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "rating",
                          ""
                        )}
                        to="rating"
                      >
                        Rating
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "nestable" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "nestable",
                          ""
                        )}
                        to="nestable"
                      >
                        Nestable
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "alertify" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "alertify",
                          ""
                        )}
                        to="alertify"
                      >
                        Alertify
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "rangeslider"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "rangeslider",
                          ""
                        )}
                        to="rangeslider"
                      >
                        Range Slider
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "sessiontimeout"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "sessiontimeout",
                          ""
                        )}
                        to="sessiontimeout"
                      >
                        Session Timeout
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Lease Nav Solomon  */}

                <li
                  className={
                    this.state.ui_menu
                      ? "has_sub active-menu nav-active"
                      : "has_sub"
                  }
                >
                  <Link
                    to="#"
                    onClick={() =>
                      this.setState({
                        ui_menu: !this.state.ui_menu,
                        email_menu: false,
                        dashboard_menu: false,
                        form_menu: false,
                        chart_menu: false,
                        table_menu: false,
                        icon_menu: false,
                        map_menu: false,
                        auth_menu: false,
                        extra_menu: false,
                        eco_menu: false,
                        emt_menu: false,
                      })
                    }
                    className={
                      this.state.Tab === "ui"
                        ? "waves-effect active-menu"
                        : "waves-effect"
                    }
                  >
                    <i className="mdi mdi-buffer"></i>{" "}
                    <span>
                      {" "}
                      Lease2{" "}
                      <span className="pull-right">
                        <i className="mdi mdi-chevron-right"></i>
                      </span>{" "}
                    </span>{" "}
                  </Link>
                  <ul
                    className="list-unstyled"
                    style={{ display: this.state.ui_menu ? "block" : "none" }}
                  >
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "buttons" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "buttons",
                          ""
                        )}
                        to="buttons"
                      >
                        Sponsored Lease
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "colors" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "colors",
                          ""
                        )}
                        to="colors"
                      >
                        Quick Loan
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "cards" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "cards",
                          ""
                        )}
                        to="cards"
                      >
                        Cards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "tabs_accordions"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "tabs_accordions",
                          ""
                        )}
                        to="tabs_accordions"
                      >
                        Tabs &amp; Accordions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "modals" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "modals",
                          ""
                        )}
                        to="modals"
                      >
                        Modals
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "images" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "images",
                          ""
                        )}
                        to="images"
                      >
                        Images
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "alerts" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "alerts",
                          ""
                        )}
                        to="alerts"
                      >
                        Alerts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "progressbars"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "progressbars",
                          ""
                        )}
                        to="progressbars"
                      >
                        Progress Bars
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "dropdowns" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "dropdowns",
                          ""
                        )}
                        to="dropdowns"
                      >
                        Dropdowns
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "lightbox" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "lightbox",
                          ""
                        )}
                        to="lightbox"
                      >
                        Lightbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "navs" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(this, "ui", "navs", "")}
                        to="navs"
                      >
                        Navs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "pagination"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "pagination",
                          ""
                        )}
                        to="pagination"
                      >
                        Pagination
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "popover_tooltips"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "popover_tooltips",
                          ""
                        )}
                        to="popover_tooltips"
                      >
                        Popover & Tooltips
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "badge" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "badge",
                          ""
                        )}
                        to="badge"
                      >
                        Badge
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "carousel" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "carousel",
                          ""
                        )}
                        to="carousel"
                      >
                        Carousel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "video" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "video",
                          ""
                        )}
                        to="video"
                      >
                        Video
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "typography"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "typography",
                          ""
                        )}
                        to="typography"
                      >
                        Typography
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "sweet_alert"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "sweet_alert",
                          ""
                        )}
                        to="sweet_alert"
                      >
                        Sweet-Alert
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "grid" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(this, "ui", "grid", "")}
                        to="grid"
                      >
                        Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "animation" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "animation",
                          ""
                        )}
                        to="animation"
                      >
                        Animation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "highlight" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "highlight",
                          ""
                        )}
                        to="highlight"
                      >
                        Highlight
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "rating" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "rating",
                          ""
                        )}
                        to="rating"
                      >
                        Rating
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "nestable" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "nestable",
                          ""
                        )}
                        to="nestable"
                      >
                        Nestable
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "alertify" ? "active-menu" : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "alertify",
                          ""
                        )}
                        to="alertify"
                      >
                        Alertify
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "rangeslider"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "rangeslider",
                          ""
                        )}
                        to="rangeslider"
                      >
                        Range Slider
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          this.state.SubTab === "sessiontimeout"
                            ? "active-menu"
                            : ""
                        }
                        onClick={this.setActiveTab.bind(
                          this,
                          "ui",
                          "sessiontimeout",
                          ""
                        )}
                        to="sessiontimeout"
                      >
                        Session Timeout
                      </Link>
                    </li>
                  </ul>
                </li>