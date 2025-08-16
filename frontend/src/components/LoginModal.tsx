import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`logregtab-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function LoginModal() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
         <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                <Tab label="Login" />
                <Tab label="Register" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Login></Login>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Register></Register>
            </CustomTabPanel>
        </Box>
    );
}

export default LoginModal;