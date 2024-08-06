import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Paper} from "@mui/material";
import loginStyle from './loginPage.module.scss';
import LoginForm from "../../components/LoginForm/index.js";


const defaultTheme = createTheme();


const  LoginPage = ({label='Sign in'}) => {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid className={loginStyle.backgroundImage} item xs={false} sm={4} md={7}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">{label}</Typography>
                        <LoginForm/>

                        {/*<Box component="form" noValidate  sx={{ mt: 1 }} >*/}
                        {/*    <TextField*/}
                        {/*        margin="normal"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="email"*/}
                        {/*        label="Email Address"*/}
                        {/*        name="email"*/}
                        {/*        autoComplete="email"*/}
                        {/*        autoFocus*/}
                        {/*    />*/}
                        {/*    <TextField*/}
                        {/*        margin="normal"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        name="password"*/}
                        {/*        label="Password"*/}
                        {/*        type="password"*/}
                        {/*        id="password"*/}
                        {/*        autoComplete="current-password"*/}
                        {/*    />*/}
                        {/*    <FormControlLabel*/}
                        {/*        control={<Checkbox value="remember" color="primary" />}*/}
                        {/*        label="Remember me"*/}
                        {/*    />*/}
                        {/*    <Button*/}
                        {/*        type="submit"*/}
                        {/*        fullWidth*/}
                        {/*        variant="contained"*/}
                        {/*        sx={{ mt: 3, mb: 2 }}*/}
                        {/*    >*/}
                        {/*        Sign In*/}
                        {/*    </Button>*/}
                        {/*</Box>*/}
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LoginPage;
