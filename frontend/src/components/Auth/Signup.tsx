import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import '../../assets/styles/auth.css';



function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = (prevState: boolean) => {
        setShowPassword(!prevState);
    }
    const toggleShowConfirmPassword = (prevState: boolean) => {
        setShowConfirmPassword(!prevState);
    }

    return (
        <div className="auth-container">
            <form className='signup-form'>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <input type="text" id="name" name="name" aria-label="Name" required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" aria-label="Email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-group password-group">
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
                <div className="form-group password-group">
                    <input id="confirm-password"
                           name="confirm-password"
                           type={ showConfirmPassword ? "text" : "password"}
                           aria-label="Confirm Password"
                           required />
                    <label htmlFor="confirm-password">Confirm password</label>
                    <span className='show-pass-icon' 
                          aria-label="Toggle password visibility"
                          onClick={() => toggleShowConfirmPassword(showConfirmPassword)}>
                          { showConfirmPassword 
                          ? <FontAwesomeIcon icon={faEyeSlash} />
                          : <FontAwesomeIcon icon={faEye} />
                          }
                    </span>
                </div>
                <button className="submit-button" type="submit">Sign up</button>
                <span className='auth-link'>
                    Already have an account? <Link to="/login" >Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Signup
