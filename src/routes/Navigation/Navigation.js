import { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/User.context';
import { CartContext } from '../../contexts/Cart.context';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './Navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
