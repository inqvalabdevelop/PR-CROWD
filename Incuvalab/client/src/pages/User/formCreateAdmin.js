
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

import '../../css/login.css';
import { useUser } from "../../context/userContext";
import Footer from "../../components/general/footer"
import FooterAdmin from "../../components/general/footerAdmin";

export function AddAdminForm(props) {

    const { registerAdmin } = useUser()

    return (
        <div>
            <div className="container-sm  p-5">
                <div className="mb-4">
                    <div className="card">
                        <h2 className="card-header p-4">Añadir un nuevo administrador</h2>
                        <div className="card-body">
                            <Formik className="form"
                                initialValues={{
                                    name: '',
                                    lastname: '',
                                    secondlastname: '',
                                    email:'',
                                    phonenumber: '',
                                    address: ''
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('* Nombre es un campo requerido'),
                                    lastname: Yup.string().required('* Apellido Paterno es un campo requerido'),
                                    secondlastname: Yup.string().required('* Apellido Materno es un campo requerido'),
                                    email: Yup.string().required('* Email es un campo requerido').email('* Email invalido'),
                                    phonenumber: Yup.string().required('* Numero de telefono es un campo requerido'),
                                    address: Yup.string().required('* Dirección es un campo requerido')
                                })}
                                onSubmit={async (values, actions) => {
                                    const resultRegister = await registerAdmin(values);

                                    if (resultRegister.length > 0) {
                                        window.location.replace('/controlPageUser');
                                    } else {

                                    }
                                }}
                            >
                                {({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className='px-5 py-2'>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Nombre</label>
                                                    <ErrorMessage component="p" name="name" className="col text-danger" />
                                                    <Field name='name' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="row">
                                                    <label className="col">Apellido Paterno</label>
                                                    <label className="col">Apellido Materno</label>
                                                </div>
                                                <div className="row">
                                                    <ErrorMessage component="p" name="lastname" className="col text-danger" />
                                                    <ErrorMessage component="p" name="secondlastname" className="col text-danger" />
                                                </div>
                                                <div className=" col form-group mb-3">
                                                    <Field name='lastname' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                                <div className="col form-group mb-3">
                                                    <Field name='secondlastname' className="form-control form-control-sm" placeholder="Ingresa tu apellido" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Email</label>
                                                    <ErrorMessage component="p" name="email" className="col text-danger" />
                                                    <Field name='email' type='email' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Número de telefono</label>
                                                    <ErrorMessage component="p" name="phonenumber" className="col text-danger" />
                                                    <Field name='phonenumber' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className=" col form-group mb-3">
                                                    <label>Dirección</label>
                                                    <ErrorMessage component="p" name="address" className="col text-danger" />
                                                    <Field name='address' className="form-control form-control-sm" placeholder="Ingresa tu nombre" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <div className="mt-4 text-center">
                                                    <button type="submit" className="button btn-outline-login">
                                                        Añadir nuevo administrador
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAdmin/>
        </div>
    )
}