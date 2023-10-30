import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import { RiKey2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { login, currUser } from '../../Redux/Auth/action';

const Signin = () => {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({email:"", password:""});

    const [openSnackBar, setOpenSnackBar] = useState(false);

    const {auth} = useSelector(store => store);

    const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    const handleSnackBar = () => {
        setOpenSnackBar(false);
    }

    const handleSignin = (e) => {
        e.preventDefault();
        console.log(inputData);
        setOpenSnackBar(true);
        dispatch(login(inputData));
    }


    useEffect(() => {

        console.log("auth",auth.reqUser);

        if(token){
            dispatch(currUser(token));
        }
    }, [token]);
    
    useEffect(()=>{
        
        if(auth.reqUser?.name){
            navigate("/");
        }
    },[auth.reqUser]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData((values)=>({...values,[name]:value}));
    }

    return (
        <div className=''>
            <div className='flex justify-center items-center h-screen '>
                <div className='w-[30%] shadow-md p-10 bg-[#FFCF95] border-orange-400 border-2'>
                    <form onSubmit={handleSignin}
                          className='space-y-5'>
                            <div class="relative mb-6">
                                <MdEmail className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/6 left-2 text-[#454c4c]" />
                                <p className='mb-2 font-bold text-blue-600'>Email:  </p>
                                <input 
                                type="email" 
                                name='email'
                                autocomplete="on"
                                placeholder='you@example.com'
                                className="py-2 pl-11 outline bg-[#CDEDFF] outline-orange-400 w-full form-input rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.email}
                                required/>
                            </div>

                            {/* add hide and unhide function */}
                            <div class="relative mb-6">
                                <RiKey2Fill style = {{transform: 'rotate(180deg)' }} className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/6 left-2 text-[#454c4c]" />
                                <p className='mb-2 font-bold text-blue-600'>Password:  </p>
                                <input 
                                type="password" 
                                name='password'
                                autocomplete="on" 
                                placeholder='Password'
                                className="py-2 outline pl-11 bg-[#CDEDFF] outline-orange-400 w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.password}
                                required/>
                            </div>

                            <div >
                                <button 
                                type='submit' 
                                className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                onClick={handleSnackBar}>
                                    Login
                                </button>
                            </div>

                        </form>
                          <div className='flex space-y-5 items-center justify-center mt-5'>
                            <button 
                            onClick={()=>navigate('/register')}
                            variant='contained'>
                                <p className='text-orange-600'>Need an YipYap Account? <span className='text-blue-600 underline'>Click Here!</span></p>
                            </button>
                          </div>
                </div>
            </div>
            <div>
            <Snackbar open={openSnackBar} autoHideDuration={3000} onClose={handleSnackBar}>
                <Alert onClose={handleSnackBar} severity="success" sx={{ width: '100%' }}>
                    Login Successful!
                </Alert>
            </Snackbar>
            </div>
        </div>
    )
}

export default Signin;