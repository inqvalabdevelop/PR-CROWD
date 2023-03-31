import { useUser } from "../../context/userContext";
import Footer from "../../components/general/footer"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import '../../css/login.css';

export function FormChangePassword() {

    const { setPasswordForget } = useUser();

    const navigate = useNavigate();
    var errorVerication = false;

    return (
        <div className="base-container">
            <div className="container-sm position-relative my-5 card shadow-lg bg-body rounded" Style="width:30rem;">
                <div className="row">
                    <div className="col text-start m-5">
                        <div className="mb-4">
                            <h3>Cambiar contraseña</h3>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    password: '',
                                    newPasswordConfirm:'',
                                    email: sessionStorage.getItem('emailConfirm')
                                }}
                                validationSchema={Yup.object({
                                    password: Yup.string().required('* Contraseña es un campo requerido').min(8, '* Contraseña demasiado corta - Ingrese por lo menos 8 caracteres.'),
                                    newPasswordConfirm: Yup.string().required('* Confirmación de contraseña es un campo requerido').oneOf([Yup.ref('password'), null], '* Las contraseñas no coinciden'),
                                })}
                                onSubmit={async (values, actions) => {
                                    const setPasswordConfirm = await setPasswordForget(values)
                                    if (setPasswordConfirm == 1) {
                                        sessionStorage.clear();
                                        navigate('/login')
                                    }else{
                                        errorVerication = true;
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        {
                                            errorVerication == true ?
                                                <div>
                                                    <section className="col text-danger">
                                                        <p>* Error en cambio de contraseña. Intentalo más tarde</p>
                                                    </section>
                                                </div>
                                                :
                                                <div></div>
                                        }
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="password" className="form-label">Crea una nueva contraseña</label>
                                                <ErrorMessage component="p" name="password" className="col text-danger" />
                                            </div>
                                            <Field name='password' type="password" className="form-control" />
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="newPasswordConfirm" className="form-label">Confirma tu contraseña</label>
                                                <ErrorMessage component="p" name="newPasswordConfirm" className="col text-danger" />
                                            </div>
                                            <Field name='newPasswordConfirm' type="password" className="form-control" />
                                        </div>

                                        <div className="text-center">
                                            <div className="mt-4">
                                                <button type="submit" className="button btn-outline-login">
                                                    Cambiar contraseña
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
    );
}