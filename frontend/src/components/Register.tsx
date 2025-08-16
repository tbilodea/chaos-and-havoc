import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React, { FC, Fragment, useEffect, useState } from "react";

const Register: FC<{}> = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [uncheckedUsername, setUncheckedUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [usernameHelperMessage, setUsernameHelperMessage] = useState('');
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [retypedPass, setRetypedPass] = useState('');
  const [retypedPassError, setRetypedPassError] = useState(false);
  const [retypedPassHelperText, setRetypedPassHelperText] = useState('');

  useEffect(() => {
    console.log('Username needs to be checked', uncheckedUsername);
  }, [uncheckedUsername]);

  function updateEmail(value: string) {
    setEmail(value);

    if (value.trim() === '') {
      setEmailError(true);
      setEmailHelperText('This field is required.');
    } else if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setEmailError(true);
      setEmailHelperText('Not a valid email.');
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  }

  function updatePassword(value: string) {
    setPassword(value);

    if(value.trim() === '') {
      setPasswordError(true);
      setPasswordHelperText('This field is required.');
    } else if(value.length < 8) {
      setPasswordError(true);
      setPasswordHelperText('Password should be at least 8 characters.');
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }
  }

  function updateRetypedPassword(value: string) {
    setRetypedPass(value);

    if(value !== password) {
      setRetypedPassError(true);
      setRetypedPassHelperText('Password does not match.')
    } else {
      setRetypedPassError(false);
      setRetypedPassHelperText('')
    }
  }

  function checkUser(event: any) {
    setUncheckedUsername(username)
    console.log('checkuser ', event.target.value);
  }

  function sendRegister(event: any) {
    console.info('Sending user/pass', username, password, email);
  }

  function dataValid(): boolean {
    return !passwordError && !emailError && !retypedPassError && !usernameValid;
  }

  return (
    <Fragment>
      <Stack spacing={2}>
        <TextField variant="outlined" error={emailError} helperText={emailHelperText} label="Email" value={email} onChange={(event)=>{updateEmail(event.target.value)}}></TextField>
        <TextField variant="outlined" label="UserName" value={username} onBlur={(event)=>checkUser(event)} onChange={(event)=>{setUsername(event.target.value)}}></TextField>
        <TextField variant="outlined" error={passwordError} helperText={passwordHelperText} label="Password" value={password} onChange={(event)=>{updatePassword(event.target.value)}}></TextField>
        <TextField variant="outlined" error={retypedPassError} helperText={retypedPassHelperText} label="Retype Password" value={retypedPass} onChange={(event)=>{updateRetypedPassword(event.target.value)}}></TextField>
        <Button variant="contained" disabled={!dataValid()} onClick={sendRegister}>Submit</Button>
      </Stack>
    </Fragment>
  );
};
export default Register;
