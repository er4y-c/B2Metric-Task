import React, { useState } from 'react';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { Box, Button, TextField, IconButton, Typography, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const {values, handleChange, handleSubmit, handleBlur, errors, isSubmitting, touched} = useFormik({
    initialValues:{
      Email:'',
      Password:'',
    },
    onSubmit:(values,bag)=>{
      console.log(values);
      bag.resetForm();
    },
    validationSchema: object({
      Password: string().min(8)
    }),
  });

  const [show,setShow] = useState(false)

  return (
        <Box 
          className="form-container"
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            m:'auto',
            width:'380px',
            bgcolor:'#FFFFFF',
            border:'1px solid #DFE0EB',
            borderRadius:'8px'
        }}>
          <Box className="login-logo" 
            sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',mb:'30px',textAlign:'center',mt:'40px'}}>
          <div
                className='logo-icon' 
                style={{
                  width:'48px',
                  height:'48px',
                  backgroundColor:'#3751FF',
                  borderRadius:'30px',
              }}></div>
            <Typography sx={{color:'#A4A6B3',fontSize:'19px',fontWeight:'700',mt:'12px'}}>B2Metric</Typography>
          </Box>
          <Box className='login-header' sx={{textAlign:'center',mt:'32px',mb:'48px'}}>
            <Typography sx={{color:'#252733',fontSize:'24px',fontWeight:'700'}}>Log In to B2Metric</Typography>
            <Typography sx={{color:'#9FA2B4',fontSize:'14px',fontWeight:'400'}}>Enter your email and password below</Typography>
          </Box>
        <form style={{
          display:'flex',
          flexDirection:'column',
          width:'80%',
        }}
        onSubmit={handleSubmit}>
          
          <TextField 
            type="email" label="Email" id="Email" name="Email" sx={{mb:'20px',}}
            value={values.Email}
            onChange={handleChange("Email")}
            disabled={isSubmitting}
            required
          />
          <TextField 
            type={show?"text":"password" }
            label="Password" id="Password" name="Password" sx={{mb:'20px',}}
            value={values.Password}
            onChange={handleChange("Password")}
            onBlur={handleBlur("Password")}
            disabled={isSubmitting}
            required
            InputProps={{
              endAdornment:
              <InputAdornment position="end">
                <IconButton
                  onClick={()=>setShow(!show)}
                >
                  {show? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />
          {errors.Password && touched.Password ? <div>{errors.Password}</div>:null}
          <Button variant='contained'  sx={{bgcolor:"#3751FF",width:'100%',height:'48px',m:'auto'}} type="submit">Log In</Button>
          <Typography sx={{color:'#9FA2B4',fontSize:'14px',fontWeight:'400',mt:'20px',mb:'40px',textAlign:'center'}}>Don't have an account ? <span style={{color:'blue',}}>Signup</span></Typography>
        </form>
        </Box>
  )
}

export default Login;