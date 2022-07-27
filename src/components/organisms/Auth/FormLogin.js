import React from 'react';
import { Link } from 'react-router-dom';
import Alert from 'sweetalert2';
import { AuthLayout } from '../../../layouts';
import { Field } from '../../atoms/Field';
import styles from './login.module.css';

const FormLogin = () => {

  return (
    <AuthLayout>
      <Card>
        <section className="style__login">
          <h3 className="style__login--title">Login</h3>
          <p className="style__login--subtitle">Hi, Welcome back!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                style={{ marginBottom: '30px' }}
                className="style__login--textfield"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <PasswordInput
                id="password"
                value={form.password}
                onChange={handleChange}
                isShowPassword={isShowPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={(e) => e.preventDefault()}
              />
            </div>
            <div>
              <Link to="/forgot" className="style__login--forgot">
                Forgot Password?
              </Link>
            </div>
            {isLoading ? (
              <Button isPrimary type="submit" className="style__login--button" disabled="disabled">
                <FontAwesomeIcon icon={faSpinner} spin />
                Loading...
              </Button>
            ) : (
              <Button isPrimary type="submit" className="style__login--button">
                Login
              </Button>
            )}
          </form>

          <Separator title="Login with" />
          <Button isOutline type="button" icon="google">
            Google
          </Button>

          <footer className="style__login--footer">
            <p className="style__login--text">
              Don&apos;t have and account?{' '}
              <Link to="/register" className="style__login--anchor">
                <span className="style__login--link">Sign Up</span>
              </Link>
            </p>
          </footer>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default FormLogin;