import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

import '../../css/login.css';
import Footer from "../../components/general/footer"

export function CodeVerication() {
    
    const navigate = useNavigate();
    var errorVerication = false;

    return (
        <div className="base-container">
            <div className="container-sm position-relative my-5 card shadow-lg bg-body rounded" Style="width:30rem;">
                <div className="row">
                    <div className="col text-start m-5">
                        <div className="mb-4">
                            <h3>Recuperar contraseña -  Confirmar email</h3>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    code: '',
                                }}
                                validationSchema={Yup.object({
                                    code: Yup.string().required('* Código es un campo requerido'),
                                })}
                                onSubmit={async (values, actions) => {
                                    const numberConfirm = sessionStorage.getItem('numberConfirm');
                                    if (values.code.trim() == numberConfirm.trim()) {
                                        errorVerication = false;
                                        navigate('/changePassword');
                                    } else {
                                        errorVerication = true
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="code" className="form-label">Ingrese código de verificación enviado a su correo electronico</label>
                                                <ErrorMessage component="p" name="code" className="col text-danger" />
                                                {
                                                    errorVerication == true ?
                                                        <div>
                                                            <section className="col text-danger">
                                                                <p>* Código ingresado incorrecto</p>
                                                            </section>
                                                        </div>
                                                        :
                                                        <div></div>
                                                }

                                            </div>
                                            <Field name='code' type="text" className="form-control" />
                                        </div>

                                        <div className="text-center">
                                            <div className="mt-4">
                                                <button type="submit" className="button btn-outline-login">
                                                    Enviar email para recuperar contraseña
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