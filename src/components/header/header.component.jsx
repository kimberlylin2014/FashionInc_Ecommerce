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

  import CheckoutDropdown from '../checkoutDropdown/checkoutDropdown.component';
  import CartIcon from '../cartIcon/cartIcon.component'

  import {withRouter} from 'react-router-dom';
  import { connect } from 'react-redux';
  import {createStructuredSelector} from 'reselect'
  import { selectCurrentUser } from '../../redux/user/user.selectors'
  import { auth } from '../../firebase/firebase.util'
  import  {getCartVisibility, selectCartItems} from '../../redux/cart/cart.selectors'
  import {toggleDisplay} from '../../redux/cart/cart.actions'

  import {saveCartCollectionAsync} from '../../redux/cart/cart.actions';
// import { selectCollectionPreview } from '../../redux/shop/shop.selectors';
  import LogOutModal from '../logOutModal/logOutModal.component'

  const Header = ({currentUser, cartVisibility, 
                  toggleDisplay, history, saveCartCollectionAsync, cartItems, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <div className="Header">
        <Navbar color="light" light expand="md">
          <div className='container'>
            <NavbarBrand  onClick={() => history.push('/homePage')}> TRENDING INC.</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {currentUser ?  
                  <NavItem>
                    <NavLink onClick={()=> history.push('/myAccount')}> <span className='username'>{currentUser.displayName}'s</span>  Account</NavLink>
                  </NavItem>
                  : 
                    "" 
                }  
                
                {currentUser ?  
                  <NavItem>
                    <NavLink onClick={()=> history.push('/shop')} >Shop Overview</NavLink>
                  </NavItem>
                  : 
                    "" 
                }  
                {currentUser ?  
                  <NavItem>
                    <LogOutModal buttonLabel='Log Out' className='logout'/>
                  </NavItem>
                  : 
                    "" 
                }  
                {currentUser ?  
                  <NavItem >
                    <CartIcon />
                  </NavItem>
                  : 
                    "" 
                }  
                {cartVisibility ? <CheckoutDropdown /> : ""}
                  
              </Nav>
 
            </Collapse>
 
          </div>   
  
        </Navbar>
       
      </div>
    );
  }
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartVisibility: getCartVisibility,
    cartItems: selectCartItems
  });

  const mapDispatchToProps = (dispatch) => {
    return {
        toggleDisplay: () => dispatch(toggleDisplay()),
        saveCartCollectionAsync: (collection, userID) => dispatch(saveCartCollectionAsync(collection, userID))
    }
}
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));