import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/header/header.component';
import LandingPage from './pages/landingPage/landingPage.component'
import SignInPage from './pages/signInPage/signInPage.component';
import SignUpPage from './pages/signUpPage/signUpPage.component';
import HomePage from './pages/homePage/homePage.component'
import MyAccount from './pages/userAccountPage/userAccountPage.component'
import ShopPage from './pages/shopPage/shopPage.component'
import CheckoutPage from './pages/checkoutPage/checkoutPage.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';
import { createUserProfileDocument} from './firebase/firebase.util';
import {addCartCollection} from './redux/cart/cart.actions'
import {auth} from './firebase/firebase.util';
import { checkUserSession } from './redux/user/user.actions'

class App extends Component {
  // unsubscribeFromAuth = null
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession();
    // const {setCurrentUser, addCartCollection} = this.props
    // returns a function that when we can close subscription
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async(authUser) => {
    //   if(authUser) {
    //     let userRef = await createUserProfileDocument(authUser);
    //     userRef.onSnapshot(snapShot => {
    //       const { cart } = snapShot.data();  
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //       addCartCollection(cart)
    //     })
    //   } else {
    //     setCurrentUser(authUser);
    //   }  
    // });
  }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();

  // }
  render() {
    const {currentUser} = this.props;
    return(
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/shop' render ={(props) => (
            currentUser ? (
              <ShopPage {...props}/>
            ) : (
              <Redirect to='/homepage'/>
            )
          )} />
          <Route exact path='/checkoutPage' render ={() => (
            currentUser ? (
              <CheckoutPage />
            ) : (
              <Redirect to='/homepage'/>
            )
          )}/>
          <Route exact path='/' render ={() => (
            currentUser ? (
              <Redirect to='/homepage'/>
            ) : (
              <LandingPage />
            )
          )}/>
          <Route exact path='/myAccount' render ={() => (
            currentUser ? (
              <MyAccount />
            ) : (
              <Redirect to='/'/>
            )
          )}/>
          <Route exact path='/homepage' render={() => (
            currentUser ? (
              <HomePage />
            ) :(
              <Redirect to='/'/>
            )
          )}/>
          <Route exact path='/SignIn' render={() => (
            currentUser ? (
              <Redirect to='/homepage'/>
            ) :(
              <SignInPage />)
          )}/>
          <Route exact path='/SignUp' render={() => (
            currentUser ? (
              <Redirect to='/homepage'/>
            ) :(
              <SignUpPage />)
          )}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  }
  // return {
  //   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  //   addCartCollection: (collection) => dispatch(addCartCollection(collection)),
  // }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
