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

  import {withRouter} from 'react-router-dom';
  import { connect } from 'react-redux';
  import {createStructuredSelector} from 'reselect'
  import { selectCurrentUser } from '../../redux/user/user.selectors'
  import { auth } from '../../firebase/firebase.util'

  
  const Header = ({currentUser, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="Header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" onClick={() => props.history.push('/')}> Trending Fashion Inc.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {currentUser ?  
                <NavItem>
                  <NavLink onClick={()=> auth.signOut()}>Sign Out</NavLink>
                </NavItem> :
                 "" 
              }  
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

  export default withRouter(connect(mapStateToProps)(Header));