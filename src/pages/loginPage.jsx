import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../components/backgrounds/authBackground'
import Card from '../components/card/authCard'
import Title from '../components/inputFields/authTitle'
import InputField from '../components/inputFields/authInputField'
import Button from '../components/buttons/authButton'
import axios from 'axios'
import SuccessAuth from '../components/notications/successAuth'
import FailedAuth from '../components/notications/failedAuth'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const [isSuccess, setIsSuccess] = useState(false)

    const [isFailure, setIsFailure] = useState(false)

    const [ error, setError] = useState("");

    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try {
        const response = await axios.post("/api/users/login", {
            email: formData.email,
            password: formData.password,
        });
        if (response.data && response.data.message){
            localStorage.setItem("token", response.data.token);
            const previousUrl = localStorage.getItem('previousUrl');
            if (previousUrl) {
                localStorage.removeItem('previousUrl');
                navigate(previousUrl);
            }else{
            navigate('/dashboard')
            }
            
        }else{
            setIsFailure(true);
            setTimeout(() => {
                setIsFailure(false);
              }, 3000);
        }
        
        }catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            setError((error.response?.data?.error || "Wrong Credentials, try again"));
        }
    }
  return (
    <Background>
        <Card>
            <Title text="Welcome Back to Pizzeria! 🍕"/>
            <form className="mt-6" method='post' onSubmit={handleSubmit}>
                <InputField type="email" name="email" value={formData.email} placeholder="example@gmail.com" onChange={handleChange} />
                <InputField type="password" name="password" value={formData.password} placeholder="************" onChange={handleChange} />
                {error && <p className="text-red-600 text-center">{error}</p>}
            <Button btnName="Login" />
            </form>
            <p className="text-center mt-4">
                Don't Have an Account?{""}
            </p>
            <p>
            <Link to='/signup' className="text-red-600 font-bold">SignUp</Link>
             | 
            <Link to='/' className='text-green-600 font-bold mt-4'>Home</Link>
            </p>
            <SuccessAuth open={isSuccess} onclose={() => setIsSuccess(false)} text="login Successful" />
            <FailedAuth open={isFailure} onclose={ () => setIsFailure(false)} text="failed to Login" />
        </Card>
    </Background>
  )
}

export default LoginPage;

