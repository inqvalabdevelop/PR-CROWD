
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import '../../css/login.css';
import { useUser } from "../../context/userContext";
import Footer from "../../components/general/footer"

export function EmailVerification() {

    const { getNumberConfirmation, getemailCoincidences } = useUser();

    const navigate = useNavigate();
    var errorVerication = false;

    return (
        <div className="base-container">
            <div className="container-sm position-relative my-5 card shadow-lg bg-body rounded" Style="width:30rem;">
                <div className="row">
                    <div className="col text-start m-5">
                        <div className="mb-4">
                            <h3>Recuperar contraseña</h3>
                        </div>

                        <div className="content mb-4" >
                            <Formik className="form"
                                initialValues={{
                                    email: '',
                                }}
                                validationSchema={Yup.object({
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                })}
                                onSubmit={async (values, actions) => {
                                    const postsEmail = await getemailCoincidences(values);

                                    if (postsEmail[0].email != 0) {
                                        errorVerication = false;
                                        const numberConfirm = await getNumberConfirmation(values);
                                        sessionStorage.setItem('numberConfirm', numberConfirm.codeV);
                                        sessionStorage.setItem('emailConfirm', values.email);
                                        navigate('/formCodeConfirmation')
                                    } else {
                                        errorVerication = true
                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>

                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <label htmlFor="email" className="form-label">Ingrese la dirección de correo electrónico verificada de su cuenta de usuario y le enviaremos un enlace para restablecer la contraseña.</label>
                                                <ErrorMessage component="p" name="email" className="col text-danger" />
                                                {
                                                    errorVerication == true ?
                                                        <div>
                                                            <section className="col text-danger">
                                                                <p>* Email no existente</p>
                                                            </section>
                                                        </div>
                                                        :
                                                        <div></div>
                                                }

                                            </div>
                                            <Field name='email' type="email" className="form-control" placeholder="nombre@ejemplo.com" />
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