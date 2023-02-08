import { Box, Button, TextField, Link, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { string, object } from 'yup';

const Login = () => {
  const {values, handleChange, handleSubmit, handleBlur, errors, isSubmitting, touched} = useFormik({
    initialValues:{
      Username:'',
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

  return (
    <>
      <Box 
        className="login-form-container"
        sx={{
            display:'flex',
            flexDirection:'column',
            m:'auto',
            width:'380px',
            height:'582px'
        }}>
          <Box className="login-form-header">

          </Box>
          <form>
            <TextField 
                label="Username" id="Username" name="Username" sx={{mb:'20px',}}
                value={values.Username}
                onChange={handleChange("Username")}
                disabled={isSubmitting}
                required
            /> 
            <TextField 
                type="password" label="Password" id="Password" name="Password" sx={{mb:'20px',}}
                value={values.Password}
                onChange={handleChange("Password")}
                onBlur={handleBlur("Password")}
                disabled={isSubmitting}
                required
                />
            <Button>Giriş Yap</Button>
          </form>
        </Box> 
    
        {/*<form>
            <TextField 
                label="Username" id="Username" name="Username" sx={{mb:'20px',}}
                value={values.Username}
                onChange={handleChange("Username")}
                disabled={isSubmitting}
                required
            ></TextField>
            <TextField 
                type="password" label="Password" id="Password" name="Password" sx={{mb:'20px',}}
                value={values.Password}
                onChange={handleChange("Password")}
                onBlur={handleBlur("Password")}
                disabled={isSubmitting}
                required
            ></TextField>
            {errors.Password && touched.Password ? <div>{errors.Password}</div> :null}
            <Box
                className="login-button-group" 
                sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                }}>
                <Button variant='contained' color="success" sx={{width:'30px'}} type="submit">Login</Button>
                <Link to="#" sx={{cursor:'pointer',}}>Forgotten your password?</Link>
            </Box>
            <Typography sx={{mt:'20px',}}>Don't have an Oxford ID? <span style={{color:'blue',}}>Register</span> for an account</Typography>
            </form>*/}
    
    </>
  )
}

export default Login;