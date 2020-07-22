import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { auth } from '../../firebase/firebase.util';
// import {saveCartCollectionAsync} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import  {selectCartItems} from '../../redux/cart/cart.selectors'
import {NavLink} from 'reactstrap';
import {editDisplay, saveCollectionStart} from '../../redux/cart/cart.actions'
import { signOutStart } from '../../redux/user/user.actions'

const LogOutModal = (props) => {
  const {
    buttonLabel,
    className,
    saveCartCollectionAsync, 
    cartItems,
    currentUser,
    editDisplay,
    signOutStart,
    saveCollectionStart
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
            Are you sure you want to log out?
        </ModalBody>
        <ModalFooter>
            {/* <Button color="secondary" onClick={() => {
              editDisplay(false);
              signOutStart();
            }}>Don't Save</Button> */}
          {' '}
          <Button color="warning" onClick={()=> {
            editDisplay(false);
            signOutStart(currentUser.id, cartItems);
            // saveCollectionStart(currentUser.id, cartItems)
            // saveCartCollectionAsync(currentUser.id, cartItems)
          }}>Log Out</Button>
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
        editDisplay: (booleanValue) => dispatch(editDisplay(booleanValue)),
        signOutStart: (userID, cartItems) => dispatch(signOutStart({userID, cartItems})),
        // saveCollectionStart: (userID, cartItems) => dispatch(saveCollectionStart(userID, cartItems))
        // saveCartCollectionAsync: (collection, userID) => dispatch(saveCartCollectionAsync(collection, userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOutModal);