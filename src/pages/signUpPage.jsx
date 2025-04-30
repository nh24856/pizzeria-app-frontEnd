import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/backgrounds/authBackground'
import Card from '../components/card/authCard'
import Title from '../components/inputFields/authTitle'
import InputField from '../components/inputFields/authInputField'
import Button from '../components/buttons/authButton'
import axios from 'axios'
import SuccessAuth from '../components/notications/successAuth'
import FailedAuth from '../components/notications/failedAuth'

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        fullNames: "",
        email: "",
        telephone: "",
        password: "" });
    
    const [isError, setIsError] = useState(false) 

    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("/api/users/signup", formData);
            if(response.data && response.data.message){
                setIsSuccess(true)
                setTimeout(() => {
                    setIsSuccess(false);
                  }, 3000);
            }else{
                setIsError(true)
            }
            
        } catch (error) {
            console.error('Signup error:', error.response?.data || error.message);
            alert('Signup Error: ' +(error.response?.data.error));
            
        }
    }
  return (
    <Background>
        <Card>
            <Title text="Join the Pizzeria Family! 🍕"/>
            <form className="mt-6" method='post' onSubmit={handleSubmit}>
                <InputField type="text" name="fullNames" placeholder="Your Full Names" onChange={handleChange} />
                <InputField type="email" name="email" placeholder="example@gmail.com" onChange={handleChange} />
                <InputField type="text" name="telephone" placeholder="078xxxxxxx" onChange={handleChange} />
                <InputField type="password" name="password" placeholder="************" onChange={handleChange} />
            <Button btnName="Signup" />
            </form>
            <p className="text-center mt-4">
                Already Have an Account?{""}
            </p>
            <Link to='/login' className="text-red-600 font-bold">Login</Link>
            <SuccessAuth open={isSuccess} onclose={() => setIsSuccess(false)} text="Signed up Successful" />
            <FailedAuth open={isError} onclose={ () => setIsError(false) } text="Failed to signup" />
        </Card>
    </Background>
  )
}

export default SignUpPage
