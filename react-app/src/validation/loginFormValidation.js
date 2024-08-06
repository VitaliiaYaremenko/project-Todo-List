import * as Yup from 'yup';

const loginFormValidation = Yup.object({
    login: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
});

export default loginFormValidation;
