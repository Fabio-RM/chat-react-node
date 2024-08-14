import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import '../../assets/styles/auth.css';

type FormValues = {
    email: string;
    password: string;
}

const FormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [backendErrorMessage, setBackendErrorMessage] = useState<string | null>(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(FormSchema),
    })

    const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/login', {
                email: data.email,
                password: data.password,
            });

            
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
            } else {
                console.error(response);
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
    
    return (
        <div className="auth-container">
            <form className='auth-form' onSubmit={handleSubmit(handleFormSubmit)}>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="email" 
                           {...register("email")}
                           id="email" 
                           name="email" 
                           aria-label="Email" 
                           required />
                    <label htmlFor="email">Email</label>
                    <p className='form-errors'>{ errors && errors.email?.message }</p>
                </div>
                <div className="form-group">
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
                    <p className='form-errors form-backend-errors'>{ backendErrorMessage && backendErrorMessage }</p>
                </div>
                
                { isSubmitting
                ? <button className="submit-button" type="submit" disabled>Submitting...</button>
                : <button className="submit-button" type="submit">Login</button>
                }
                
                <span className='auth-link'>
                    Don't have an account yet? <Link to="/signup" >Sign Up</Link>
                </span>
            </form>
        </div>
    )
}

export default Login
