import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import {useForm} from 'react-hook-form'
const FormValidationHandling = () => {
  const {register, handleSubmit, formState:{errors} } = useForm();
  return (
    <div>
        <form style={{display: 'flex', flexDirection: 'column', gap: 5, brder: '1px solid black', width: '300px', margin: "0 auto", paddingTop: '200px'}} onSubmit={handleSubmit((data) => console.log(data) )}>
        
          <TextField error={Boolean(errors.email)} helperText={Boolean(errors.email) ? (<Typography>Invalid Email</Typography>): null} type={"email"} {...register("email", {
            validate: (val) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val),
          })}/>
          <TextField helperText={Boolean(errors.password) ? (<Typography>Password Minium Length should be 6 </Typography>): null} error={Boolean(errors.password)} type={"password"} {...register("password", {minLength: 6, required: true})} />
          <Button disabled={Boolean(errors.email) || Boolean(errors.password)} variant='contained' type={"submit"}>Submit</Button>
        </form>
    </div>
  )
}

export default FormValidationHandling