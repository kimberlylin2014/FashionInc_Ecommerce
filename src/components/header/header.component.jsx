import React, {useState} from 'react';
import './header.styles.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  import {withRouter, Redirect} from 'react-router-dom';
  import { connect } from 'react-redux';
  import {createStructuredSelector} from 'reselect'
  import { selectCurrentUser } from '../../redux/user/user.selectors'
  import { auth } from '../../firebase/firebase.util'

  
  const Header = ({currentUser, history, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
      <div className="Header">
        <Navbar color="light" light expand="md">
          <div className='container'>
            <NavbarBrand  onClick={() => history.push('/homePage')}> TRENDING FASHION INC.</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {currentUser ?  
                  <NavItem>
                    <NavLink onClick={()=> history.push('/myAccount')}>My Account</NavLink>
                  </NavItem>
                  : 
                    "" 
                }  
                {currentUser ?  
                  <NavItem>
                    <NavLink onClick={()=> auth.signOut()}>Log Out</NavLink>
                  </NavItem>
                  : 
                    "" 
                }  
              </Nav>
            </Collapse>
          </div>   
        </Navbar>
      </div>
    );
  }
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

  export default withRouter(connect(mapStateToProps)(Header));