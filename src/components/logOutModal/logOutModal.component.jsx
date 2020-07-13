import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { auth } from '../../firebase/firebase.util';
import {saveCartCollectionAsync} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import  {selectCartItems} from '../../redux/cart/cart.selectors'
import {NavLink} from 'reactstrap'

const LogOutModal = (props) => {
  const {
    buttonLabel,
    className,
    saveCartCollectionAsync, 
    cartItems,
    currentUser
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <NavLink onClick={toggle}> {buttonLabel}</NavLink>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Logging Out</ModalHeader>
        <ModalBody>
            Would you like to save your shopping cart items before logging out?
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={() => {
                    auth.signOut()
            }}>Don't Save</Button>
          {' '}
          <Button color="warning" onClick={()=> {
                saveCartCollectionAsync(currentUser.id, cartItems)
          }}>Save Cart</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems
  });

  const mapDispatchToProps = (dispatch) => {
    return {
        saveCartCollectionAsync: (collection, userID) => dispatch(saveCartCollectionAsync(collection, userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOutModal);