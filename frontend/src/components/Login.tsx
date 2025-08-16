import { FC, Fragment, useState } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Login: FC<{}> = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function sendCredentials(event: any) {
    console.info('Sending user/pass', username, password);
  }

  return (
    <Fragment>
      <Stack spacing={2}>
        <TextField variant="outlined" label="UserName" value={username} onChange={(event)=>{setUsername(event.target.value)}}></TextField>
        <TextField variant="outlined" label="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}}></TextField>
        <Button variant="contained" onClick={sendCredentials}>Submit</Button>
      </Stack>
    </Fragment>
  );
};
export default Login;
