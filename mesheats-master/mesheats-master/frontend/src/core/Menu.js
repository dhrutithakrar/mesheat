import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from "../Auth/helper";
import { Container, Nav, Navbar, NavDropDown } from "react-bootstrap";
import Logo from '../res/logo.gif';

import '../Styles.css';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#256333", px: 4}
    } else {
        return { color: "#256333", px: 4 }
    }
}

const Menu = ({ history }) => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top">
            <Container className="nav">
                <Navbar.Brand href="#home"><img className="image" src={Logo} height="150px" width="150px"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1">
                        <Nav.Link  style={currentTab(history, '/')} href="/">Home</Nav.Link>
                        <Nav.Link  style={currentTab(history, '/cart')} href="/cart">Cart</Nav.Link>
                        {
                            isAuthenticated() && isAuthenticated().user.role === 0 && (
                                <Nav.Link style={currentTab(history, '/user/dashboard')} href='/user/dashboard'>Dashboard</Nav.Link>
                            )
                        }
                        {
                            isAuthenticated() && isAuthenticated().user.role === 1 && (
                                <Fragment>
                                    <Nav.Link style={currentTab(history, '/user/dashboard')} href='/user/dashboard'>User-Dashboard</Nav.Link>
                                    <Nav.Link style={currentTab(history, '/admin/dashboard')} href='/admin/dashboard'>Admin-Dashboard</Nav.Link>
                                </Fragment>
                            )
                        }
                        {
                            !isAuthenticated() && (
                                <Fragment>
                                    <Nav.Link style={currentTab(history, '/signup')} href='/signup'>Sign Up</Nav.Link>
                                    <Nav.Link style={currentTab(history, '/signin')} href='/signin'>Sign In </Nav.Link>
                                </Fragment>
                            )
                        }
                        {
                            isAuthenticated() && (
                                <Nav.Link 
                                style={currentTab(history, '/')}
                                onClick={() => {
                                    signout(() => {
                                        history.push("/")
                                    })
                                }}>Sign Out</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        //     <ul className="nav nav-tabs bg-dark">
        //         <li className="nav-item">
        //             <Link style={currentTab(history, "/")} className="nav-link" to="/">
        //                 Home
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link style={currentTab(history, "/cart")} className="nav-link" to="/cart">
        //                 Cart
        //             </Link>
        //         </li>
        //         {
        //             isAuthenticated() && isAuthenticated().user.role === 0 && (
        //                 <li className="nav-item">
        //                     <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
        //                         Dashboard
        //                     </Link>
        //                 </li>
        //             )
        //         }
        //         {
        //             isAuthenticated() && isAuthenticated().user.role === 1 && (
        //                 <Fragment>
        //                     <li className="nav-item">
        //                         <Link style={currentTab(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
        //                             User Dashboard
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link style={currentTab(history, "/admin/dashboard")} className="nav-link" to="/admin/dashboard">
        //                             Admin Dashboard
        //                         </Link>
        //                     </li>
        //                 </Fragment>
        //             )
        //         }
        //         {
        //             !isAuthenticated() && (
        //                 <Fragment>
        //                     <li className="nav-item">
        //                         <Link style={currentTab(history, "/signup")} to="/signup" className="nav-link">
        //                             Sign Up
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link style={currentTab(history, "/signin")} to="/signin" className="nav-link">
        //                             Sign In
        //                         </Link>
        //                     </li>
        //                 </Fragment>
        //             )
        //         }
        //         {
        //             isAuthenticated() && (
        //                 <li className="nav-item">
        //                     <span className="nav-link text-warning"
        //                         onClick={() => {
        //                             signout(() => {
        //                                 history.push("/")
        //                             })
        //                         }}>
        //                         Sign Out
        //                     </span>
        //                 </li>
        //             )
        //         }
        //     </ul>
        // </div>
    )
}

export default withRouter(Menu);