import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem,
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
       
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
             
                <Navbar dark sticky="top" expand="md">
                <h3 class ="logo1"> &#123;S<span class="R">R</span>&#125;</h3>
                        <NavbarToggler onClick={this.toggleNav} />
                    <div className="container">
                 
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                              
                                <NavItem>
                                <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resume">
                                        <i className="fa fa-info fa-lg" /> Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects">
                                        <i className="fa fa-list fa-lg" /> Projects
                                    </NavLink>
                                </NavItem>
                                 <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                              
        );
                            </Nav>
                          
                        </Collapse>
                        
                        </div>
                </Navbar>
                   
            </React.Fragment>
        ) 
        }
}

export default Header;