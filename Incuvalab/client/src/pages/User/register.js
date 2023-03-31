import React from "react";
import Footer from "../../components/general/footer"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import '../../css/login.css'
import { useUser } from "../../context/userContext";

export function Register() {

    const { registerUser, getemailCoincidences } = useUser();
    let errorLogin = false;
    const navigate = useNavigate();

    function getUsername(firstName, lastName) {
        let username = firstName + lastName;
        let userRows = new RegExp('^{$username}(-[0-3]*)?$');
        let countUser = Math.random() * (0 - 100) - 100;

        return (countUser > 1) ? userRows + '-' + countUser : username;
    }

    return (
        <div className="base-container">

            <div className="container-sm my-5 card shadow-lg bg-body rounded">
                <div className="row">
                    <div className="col gradient position-relative p-5">
                        <div className="top-50 start-50 mt-5 pt-5 text-light text-center">
                            <h1>¡Bienvenido!</h1>
                            <h3 className="">Estamos a tu disposición para ayudarte.</h3>
                            <p className="my-4">¿Ya tienes una cuenta?</p>
                            <form action="/login">
                                <button className="btn-option" type="sumit">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>

                    <div className="col text-start m-5">
                        <div className="mb-5">
                            <h1>Registro</h1>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    name: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    cbxCkeckPrivacyPolicy: '',
                                    username: ''
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('* Nombre es un campo requerido'),
                                    lastName: Yup.string().required('* Apellido es un campo requerido'),
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    password: Yup.string().required('* Contraseña es un campo requerido').min(8, '* Contraseña demasiado corta - Ingrese por lo menos 8 caracteres.'),
                                    confirmPassword: Yup.string().required('* Confimación de la contraseña es un campo requerido').oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden'),
                                    cbxCkeckPrivacyPolicy: Yup.boolean().required('* Debes aceptar los terminos y condiciones').oneOf([true], '* Debes aceptar los terminos y condiciones')
                                })}
                                onSubmit={async (values, actions) => {
                                    values.username = getUsername(values.name, values.lastName);
                                    const postsEmail = await getemailCoincidences(values);

                                    if (postsEmail[0].email == 0) {
                                        const posts = await registerUser(values);

                                        if (posts.length > 0) {
                                            navigate('/login')
                                        } else {

                                        }
                                    } else {
                                        errorLogin = true;
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row">
                                            {
                                                errorLogin == true ?
                                                    <div>
                                                        <section className="col text-danger">
                                                            <p>* Email ya registrado</p>
                                                        </section>
                                                    </div>
                                                    :
                                                    <div></div>
                                            }
                                            <div className="row">
                                                <ErrorMessage component="p" name="name" className="col text-danger" />
                                                <ErrorMessage component="p" name="lastName" className="col text-danger" />
                                            </div>
                                            <div className=" col form-group mb-3">
                                                <Field name='name' className="form-control" placeholder="Ingresa tu nombre" />
                                            </div>
                                            <div className="col form-group mb-3">
                                                <Field name='lastName' className="form-control" placeholder="Ingresa tu apellido" />
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="email" className="col text-danger" />
                                            </div>
                                            <Field name='email' type="email" className="form-control" placeholder="Ingresa tu correo" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="password" className="col text-danger" />
                                            </div>
                                            <Field name='password' type="password" className="form-control" placeholder="Contraseña" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <ErrorMessage component="p" name="confirmPassword" className="col text-danger" />
                                            </div>
                                            <Field name='confirmPassword' type="password" className="form-control" placeholder="Confirma tu contraseña" />
                                        </div>

                                        <div class="form-check">
                                            <Field name="cbxSendEmailProyects" className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Envíenme una combinación semanal de proyectos seleccionados exclusivamente para mí, además de noticias ocasionales de IncUVa Lab
                                            </label>
                                        </div>

                                        <div class="form-check">
                                            <ErrorMessage component="p" name="cbxCkeckPrivacyPolicy" className="col text-danger" />
                                            <Field name="cbxCkeckPrivacyPolicy" className="form-check-input" type="checkbox" id="gridCheck" />
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Acepto la <Link to={'/'} className="link-secondary text-center">Política de privacidad</Link> , <Link to={'/'} className="link-secondary text-center">Política de cookies y los Términos de uso</Link>.
                                            </label>
                                        </div>

                                        <div className="text-center">
                                            <div className="mt-4 text-center">
                                                <button type="submit" className="button btn-outline-login">
                                                    Crear cuenta
                                                </button>

                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
