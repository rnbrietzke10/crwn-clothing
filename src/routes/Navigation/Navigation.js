import { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // const handleShowCart = () => {
  //   console.log(showCart);
  //   setShowCart(!showCart);
  // };
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
