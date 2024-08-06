import {useAuth} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import loginFormValidation from "../../validation/loginFormValidation.js";
import Box from "@mui/material/Box";
import InputForm from "../../UI/InputForm/index.js";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import {useEffect} from "react";
import Cookies from 'js-cookie';

const loginFormInitialValue = {
    login: '',
    password: '',
    rememberMe: false,
}

const LoginForm = ({}) => {
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const savedLogin = Cookies.get('login');
        const savedPassword = Cookies.get('password');
        const rememberMe = Cookies.get('rememberMe') === 'true';

        if (savedLogin && savedPassword) {
            formik.setValues({
                login: savedLogin,
                password: savedPassword,
                rememberMe: rememberMe,
            });
        }
    }, []);

    const formik = useFormik({
        initialValues: { ...loginFormInitialValue },
        validationSchema: loginFormValidation,
        onSubmit: (values, { setSubmitting }) => {
            if (values.rememberMe) {
                Cookies.set('login', values.login, { expires: 7 });
                Cookies.set('password', values.password, { expires: 7 });
                Cookies.set('rememberMe', true, { expires: 7 });
            } else {
                Cookies.remove('login');
                Cookies.remove('password');
                Cookies.remove('rememberMe');
            }
            login();
            navigate('/');
            setSubmitting(false);
        },
    });


    return (
        <Box component='form' onSubmit={formik.handleSubmit}>
            <InputForm
                id="login"
                type="email"
                name="login"
                label="Enter your login:"
                variant="outlined"
                fullWidth
                value={formik.values.login}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.login && Boolean(formik.errors.login)}
                helperText={formik.touched.login && formik.errors.login}
            />
            <InputForm
                id="password"
                type="password"
                name="password"
                label="Enter your password:"
                variant="outlined"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                />
            <FormControlLabel
                control={
                <Checkbox
                    value="remember"
                    color="primary"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}/>}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={formik.isSubmitting}
            >
                Sign In
            </Button>
        </Box>
    )
}

export default LoginForm;
