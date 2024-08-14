import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import '../../assets/styles/auth.css';


type FormValues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// Yup form validation
const FormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
                .min(8, 'Password must have at least 8 characters')
                .required('Password is required'),
    confirmPassword: yup.string()
                .oneOf([yup.ref('password'), undefined], 'Passwords must match')
                .required('Confirm password is required'),
})


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [backendErrorMessage, setBackendErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: yupResolver(FormSchema),
    });


    const handleFormSubmit: SubmitHandler<FormValues> = async (data) => { 
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/create', {
                name: data.name,
                email: data.email,
                password: data.password,
            });

            if (response.data.success) {
                navigate('/login');
            } else {
                console.error('Error when registering', response.data);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setBackendErrorMessage(error.response?.data.message);
            }
        }
            
    }
    

    const toggleShowPassword = (prevState: boolean) => {
        setShowPassword(!prevState);
    }
    const toggleShowConfirmPassword = (prevState: boolean) => {
        setShowConfirmPassword(!prevState);
    }

    return (
        <div className="auth-container">
            <form className='auth-form' onSubmit={handleSubmit(handleFormSubmit)}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <input type="text" {...register("name")} id="name" name="name" aria-label="Name" required />
                    <label htmlFor="name">Name</label>
                    <p className='form-errors'>{ errors && errors.name?.message }</p>
                </div>
                <div className="form-group">
                    <input type="email" {...register("email")} id="email" name="email" aria-label="Email" required />
                    <label htmlFor="email">Email</label>
                    <p className='form-errors'>{ errors && errors.email?.message }</p>
                </div>
                <div className="form-group password-group">
                    <input id="password" 
                           {...register("password")}
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
                    <p className='form-errors'>{ errors && errors.password?.message }</p>
                </div>
                <div className="form-group password-group">
                    <input id="confirmPassword"
                           {...register("confirmPassword") }
                           name="confirmPassword"
                           type={ showConfirmPassword ? "text" : "password"}
                           aria-label="Confirm Password"
                           required />
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <span className='show-pass-icon' 
                          aria-label="Toggle password visibility"
                          onClick={() => toggleShowConfirmPassword(showConfirmPassword)}>
                          { showConfirmPassword 
                          ? <FontAwesomeIcon icon={faEyeSlash} />
                          : <FontAwesomeIcon icon={faEye} />
                          }
                    </span>
                    <p className='form-errors'>{ errors && errors.confirmPassword?.message }</p>
                    <p className='form-errors form-backend-errors'>{ backendErrorMessage && backendErrorMessage }</p>
                </div>
                <button className="submit-button" type="submit" disabled={isSubmitting}>
                    { isSubmitting ? "Submitting..." : "Sign up" }
                </button>
                <span className='auth-link'>
                    Already have an account? <Link to="/login" >Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Signup
