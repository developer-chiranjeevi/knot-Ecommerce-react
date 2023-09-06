import {Card,Button, Typography} from "@material-tailwind/react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import validationSchema from '../yup/signinSchema';

const SigninComp = () =>{



    return(
        <div className="">
            <Card color="transparent" className="px-6 py-8">
                <Typography variant="h4" className="text-primary text-center uppercase">knot.in</Typography>
                <Formik initialValues={{email:"",password:""}} validationSchema={validationSchema} onSubmit={(values)=>console.log(values)}>
                    {
                        () =>(
                            <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                    <label className="block text-sm font-medium text-gray-900 dark:text-primary">Email</label>
                                    <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary" placeholder="name@example.com" required=""/>
                                    <ErrorMessage component="p" name="email" className="text-red"/> 
                                    <label className="block text-sm font-medium text-gray-900 dark:text-primary">Password</label>
                                    <Field type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary" placeholder="****************" required="" />
                                    <ErrorMessage component="p" name="password" className="text-red"/> 
                                </div>
                                <Button type="submit" className="mt-6 w-full bg-primary">
                                    Login
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-flex items-center ml-2 mb-0.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Button>
                            </Form>
                        )
                    }
                </Formik>
                
               
                <Typography as="a" href="/signup" className="mt-4 text-start font-normal text-tertiary lg:hover:underline">New To Knot? Create a Account</Typography>
            </Card>
            
        </div>
    )
};


export default SigninComp;