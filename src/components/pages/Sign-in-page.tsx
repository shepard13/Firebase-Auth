import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import { signIn, setError } from '../../store/actions/AuthAction';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signIn({ email, password }, () => setLoading(false)));
  };

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='has-text-centered is -size-2 mb-3'>Sign In</h2>
        <form className='form' onSubmit={submitHandler}>
          {error && <Message type='danger' msg={error} />}
          <Input
            name='email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder='Email'
            label='Email'
          />
          <Input
            name='Password'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder='Password'
            label='Password'
          />
          <p>
            <Link to='/forgot-password'>Forgot password?</Link>
          </p>
          <Button
            text={loading ? 'Loading...' : 'Sign In'}
            className='is-primary is-fullwidth mt-5'
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default SignIn;
