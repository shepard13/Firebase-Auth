import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../UI/Button';
import { RootState } from '../../../store';
import { signOut } from '../../../store/actions/AuthAction';
import icon from '../../assets/images/icons8-tooth-40.png';
import './Header.css';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const logOutClickHandler = () => {
    dispatch(signOut());
  };

  return (
    <nav className='navbar is-spaced has-shadow'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link
            className='navbar-item'
            to={!authenticated ? '/' : '/dashboard'}
          >
            VinStomat
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-items'>
            {!authenticated ? (
              <div className='button'>
                <Button
                  text='Sign up'
                  onClick={() => history.push('/signup')}
                  className='is-primary'
                />
                <Button
                  text='Sign in'
                  onClick={() => history.push('/signin')}
                  className='is-primary'
                />
              </div>
            ) : (
              <Button text='Sign Out' onClick={logOutClickHandler} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <header className='header'>
<div className='flex-container'>
  <div className='logo'>
    <img className='logo-icon' src={icon} />
    <h1>VMKSP</h1>
  </div>
  <nav className='nav'>
    <ul>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Contact</a>
      <a href='#'>INFO</a>
    </ul>
  </nav>
</div>
</header> */
}
