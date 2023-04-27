import React from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import { Stack } from '@mui/material';

const LoginAndRegisterButtons = () => {
  return (
    <div>
        <Stack
            spacing={4}
            align="center"
        >
            <LoginButton />
            <RegisterButton />
        </Stack> 
    </div>
  )
}

export default LoginAndRegisterButtons