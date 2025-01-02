import React, { useState, useEffect, useContext} from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import backgroundImage from '../../images/imag.jpeg';
import {useNavigate} from 'react-router-dom';

import {API} from '../../service/api';
import {DataContext} from '../../context/DataProvider';

const Background = styled(Box)`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  /* Ensures the image covers the entire area */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    border-radius: 18px;
    background-color:#f1ddcf;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    @media  (max-width: 1000px) and (min-width: 500px) {
        width: 300px;
  }
  @media (max-width: 500px) and (min-width: 350px){
    width: 250px;
  }
  @media(max-width: 350px){
    width: 200px;
    height: 300px;
  }
`;
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
    
    
`;
const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black', // Label color on focus
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black', // Underline color on focus
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'black', // Underline color on hover
  },
});

const LoginButton = styled(Button)`
    text-transform: none;
    background:#ca7355;
    color: #fff;
    height: 48px;
    border-radius: 18px;
    &:hover {
    background: #000; /* Changes button background to black on hover */
    color: #fff; /* Retains text color as white on hover */
  }
  @media  (max-width: 1000px) and (min-width: 500px) {
    height: 30px;
  }
  @media (max-width: 500px) and (min-width: 350px){
    height: 25px;
  }
  @media(max-width: 350px){
    height: 20px;
    font-size: 10px;
  }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    border-radius: 18px;
    color:rgb(0, 0, 0);
    font-weight: 700;
    height: 48px;
    &:hover {
    background: #000; /* Changes button background to black on hover */
    color: #fff; /* Retains text color as white on hover */
  }
  @media  (max-width: 1000px) and (min-width: 500px) {
    height: 30px;
  }
  @media (max-width: 500px) and (min-width: 350px){
    height: 25px;
  }
  @media(max-width: 350px){
    height: 20px;
    font-size: 10px;
  }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const loginInitialValues ={
  username: '',
  password: ''
};
const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};


const Login = ({isUserAuthenticated}) => {
  const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');
    const navigate= useNavigate();
    const {setAccount}= useContext(DataContext);
     
    useEffect(() => {
      showError(false);
    }, [login]);
    const onvalueChange = (e)=>{
      setLogin({...login, [e.target.name]: e.target.value});
    }
    const onInputChange=(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value });
    }
    const loginUser= async ()=>{
      let response= await API.userLogin(login);
      if(response.isSuccess){
        showError('');
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

        setAccount({name: response.data.name, username: response.data.username});
        isUserAuthenticated(true);
        setLogin(loginInitialValues);
        navigate('/');
      }else{
        showError('Something went Wrong!! Please try again later')
      }
    }
    const signupUser = async () => {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
        showError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
      } else {
        showError("Something went wrong! Please try again later.");
      }
    };
    const toggleSignup = () => {
      account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
      <Background>
        <Component>
          <Box>
            {account === 'login' ? (
              <Wrapper>
                
                <CustomTextField
                  variant="standard"
                  value= {login.username}
                  onChange={(e)=> onvalueChange(e)}
                  name="username"
                  label="Enter Username"
                />
                <CustomTextField
                  variant="standard"
                  value = {login.password}
                  onChange={(e)=> onvalueChange(e)}
                  name="password"
                  label="Enter Password"
                />
               

                {error && <Error>{error}</Error>}

                <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <SignupButton
                  onClick={() => toggleSignup()}
                  style={{ marginBottom: 50 }}
                >
                  Create an account
                </SignupButton>
              </Wrapper>
            ) : (
              <Wrapper>
                <CustomTextField variant="standard" onChange={(e)=> onInputChange(e)} name="name" label="Enter Name" />
                <CustomTextField variant="standard" onChange={(e)=> onInputChange(e)} name="username" label="Enter Username" />
                <CustomTextField variant="standard" onChange={(e)=> onInputChange(e)} name="password" label="Enter Password" />
                {error && <Error>{error}</Error>}
                <SignupButton onClick={()=>signupUser()}>Signup</SignupButton>
                <Text style={{ textAlign: "center" }}>OR</Text>
                <LoginButton variant="contained" onClick={() => toggleSignup()}>
                  Already have an account
                </LoginButton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Background>
    );
}
export default Login;