import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    email:Yup.string().email("Please Enter a Valid Email").required("This Field is Required"),
    password:Yup.string().required("This Field is Required")
    .min(6,"Password Must Have Atleast 6 Characters")
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password Should contain at least one uppercase and lowercase character"),
});

export default validationSchema;