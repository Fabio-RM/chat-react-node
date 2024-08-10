import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import '../../assets/styles/auth.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (prevState: boolean) => {
        setShowPassword(!prevState);
    }
    
    return (
        <div className="auth-container">
            <form className='auth-form'>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="email" id="email" name="email" aria-label="Email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                    <input id="password" 
                           name="password"
                           type={ showPassword ? "text" : "password"} 
                           aria-label="Password"
                           required />
                    <label htmlFor="password">Password</label>
                    <span className='show-pass-icon' 
                          aria-label="Toggle password visibility"
                          onClick={() => toggleShowPassword(showPassword)}>
                            { showPassword 
                            ? <FontAwesomeIcon icon={faEyeSlash} />
                            : <FontAwesomeIcon icon={faEye} />
                            }
                    </span>
                </div>
                
                <button className="submit-button" type="submit">Login</button>
                <span className='auth-link'>
                    Don't have an account yet? <Link to="/signup" >Sign Up</Link>
                </span>
            </form>
        </div>
    )
}

export default Login
