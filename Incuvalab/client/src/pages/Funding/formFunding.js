import React from "react";
import { Formik, Form, Field } from 'formik'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useState, useEffect } from 'react'
import { useFunding } from "../../context/fundingContext";
import FooterAdmin from "../../components/general/footerAdmin";

export function FundingForm(props) {

    const { createFunding, updateFunding } = useFunding();
    const { postsCat } = useFunding();

    const { getFundingById } = useFunding();
    const [post, setPost] = useState({
        idFunding: "",
        title: "",
        question1: "",
        question2: "",
        question3: "",
        fastDescrption: "",
        description: "",
        fundingImage1: null,
        fundingImage2: null,
        fundingImage3: null,
        fundingVideo: "",
        socialMedia: "",
        category: "",
        idCategory: "",
        goal: "",
        currentGoal: "",
        accountNumber: ""
    });

    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.id) {
                const post = await getFundingById(params.id);

                setPost({
                    idFunding: post[0].IdFunding,
                    title: post[0].Title,
                    question1: post[0].Question1,
                    question2: post[0].Question2,
                    question3: post[0].Question2,
                    fastDescription: post[0].FastDescription,
                    description: post[0].Description,
                    fundingImage1: post[0].FundingImage1,
                    fundingImage2: post[0].FundingImage2,
                    fundingImage3: post[0].FundingImage3,
                    fundingVideo: post[0].FundingVideo,
                    socialMedia: post[0].SocialMedia,
                    category: post[0].Category,
                    idCategory: post[0].IdCategory,
                    goal: post[0].Goal,
                    currentGoal: post[0].CurrentGoal,
                    accountNumber: post[0].AccountNumber
                });

            }
        })();
    }, [params.id, getFundingById]);

    return (
        <div>
            <div className="container-sm my-2 p-5">
                
                <div className="mb-4">
                    <h2>Crear una campaña</h2>
                </div>

                <h4>Presentación del proyecto</h4>
                <hr />

                <Formik className="form"
                    initialValues={post}

                    validationSchema={Yup.object({

                    })}

                    onSubmit={async (values, actions) => {
                        if (post.idFunding != "") {
                            const posts = await updateFunding(values);
                            if (posts != null) {
                                window.location.replace('/controlPageAprove')
                            }
                        } else {
                            const posts = await createFunding(values);
                            if (posts != null) {
                                window.location.replace('/controlPageAprove')
                            }
                        }
                    }}

                    enableReinitialize={true}>

                    {({ handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <section id="first">
                                <div className="row mb-3">
                                    <div className="col  text-secondary">
                                        Escribe un título y un subtítulo de forma clara y concisa para transmitir rápidamente la esencia de tu proyecto. Ambos aparecerán tanto en la página del proyecto como en la de prelanzamiento.
                                        También los verán los posibles patrocinadores si tu proyecto aparece en las páginas de la categoría, en los resultados de búsqueda o en los correos electrónicos que enviamos a nuestra comunidad.
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Título</label>
                                        <Field name='title' className="form-control" maxLength="300"/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col form-group mb-3 ">
                                        <label className="fw-semibold">Descripcion breve</label>
                                        <Field component="textarea" name='fastDescription' className="form-control" maxLength="300" rows="4" />
                                    </div>
                                    <div className="col form-group ">
                                        <label className="fw-semibold">Descripcion General</label>
                                        <Field component="textarea" name='description' className="form-control" maxlength="1000" rows="4" />
                                    </div>
                                </div>

                                <a className="flex btn btn-success" href="#second">Ir a la siguiente sección</a>
                            </section>

                            <section id="second" >
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>
                                <p>Cuéntale a las personas por qué deberían entusiasmarse con tu proyecto. Sé específico, y a la vez claro y conciso.</p>
                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Misión del creador de la campaña</h4>
                                    <li><strong>¿Cuál el plan para tu proyecto, y en qué margen de tiempo?</strong></li>
                                    <p>Establece un cronograma claro y específico para los patrocinadores.</p>

                                    <li><strong>¿Qué presupuesto tienes?</strong></li>
                                    <p> Un simple desglose demuestra que has pensado bien las cosas y que tienes un plan razonable, es decir, eres una persona fiable que usará los fondos de los patrocinadores de una forma adecuada.
                                    </p>
                                    <li><strong>¿Por qué este proyecto?</strong></li>
                                    <p>Transmite tu entusiasmo sobre el proyecto a la gente, hazle sentir tu compromiso de llevarlo a cabo.</p>

                                    <Field name='question1' type="text" component="textarea" Style="height:280px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-3" href="#three">Ir a la siguiente sección</a>
                            </section>
                            <section id="three">
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>

                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Visión de la campaña</h4>
                                    <li><strong>¿Qué quieres crear?</strong></li>
                                    <p>¡Cuántos más detalles, mejor! Incluye bocetos, muestras, prototipos y contagia tu entusiasmo a los patrocinadores.</p>

                                    <li><strong>¿Cómo surgió la idea para este proyecto?</strong></li>
                                    <p> Cuenta cómo comenzó todo y hasta dónde has llegado en este momento. De esta forma, los patrocinadores pueden entender qué tipo de trabajo ofreces y cómo lo manejas.
                                    </p>

                                    <Field name='question2' type="text" component="textarea" Style="height:360px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-5" href="#four">Ir a la siguiente sección</a>
                            </section>

                            <section id="four">
                                <h3 className="fw-semibold mt-5">Presenta tu proyecto</h3>

                                <div className="form-group  text-secondary">
                                    <h4 className="fw-semibold">Sobre ti y/o tu equipo de trabajo</h4>
                                    <li><strong>¿Quién eres?</strong></li>
                                    <p>Preséntate. Presenta a tu equipo y trabajos similares que realizaste en el pasado, o mejor aún: ¡muestra unos ejemplos!</p>

                                    <li><strong>Riesgos y desafíos</strong></li>
                                    <p>Sé honesto acerca de los posibles riesgos y desafíos del proyecto y cómo planeas superarlos para completarlo.</p>

                                    <Field name='question3' type="text" component="textarea" Style="height:360px;" maxlength="1000" className="form-control" />
                                </div>
                                <a className="flex btn btn-success mt-5" href="#five">Ir a la siguiente sección</a>
                            </section>

                            <section id="five">
                                <div className="mt-5">
                                    <h4>Muestra graficamente la identidad del la campaña</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div clasNames="form-group mb-5">
                                        <h5 className="fw-semibold">Imagen del Proyecto</h5>
                                        <p className=" text-secondary">
                                            Agrega una imagen que represente claramente tu proyecto y que se vea bien en diferentes tamaños, ya que aparecerá en la página de tu proyecto, en el sitio web, y (cuando se comparta) en las redes sociales.
                                            Tu imagen debe tener al menos 1024x576 píxeles. Se recortará en una proporción de 16:9.
                                            Evita imágenes con banners, distintivos o texto que podrían ser ilegibles en formatos más pequeños o ser penalizados por el algoritmo de Facebook. Además, reducen tus posibilidades de aparecer en la página de inicio y en los boletines de Kickstarter.
                                        </p>
                                        <input name='fundingImage1' type="file" onChange={(e) => setFieldValue('fundingImage1',e.target.files[0]) } className="form-control" />
                                    </div>

                                    <div className="form-group mb-5">
                                        <h5 className="fw-semibold">Producto final</h5>
                                        <p className=" text-secondary"> 
                                            Agrega una imagen ilustrativa de tu prodcuto final
                                        </p>
                                        <input name='fundingImage2' type="file" onChange={(e) => setFieldValue('fundingImage2',e.target.files[0]) } className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <h5 className="fw-semibold">Proceso de producción</h5>
                                        <p className=" text-secondary">
                                            Agrega una imagen del proceso de produción por el cual paso tu producto final.
                                        </p>
                                        <input name='fundingIamge3' type="file" onChange={(e) => setFieldValue('fundingImage3',e.target.files[0]) } className="form-control" />
                                    </div>
                                </div>

                                <a className="flex btn btn-success mt-5" href="#six">Ir a la siguiente sección</a>

                            </section>

                            <section id="six">
                                <div className="my-5">
                                    <h4>Más información</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Link de la video presentacion de la compaña</label>
                                        <Field name='fundingVideo' type="text" className="form-control" maxlength="1000" placeholder="https://www.youtube.com/embed/tuVideo" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Social media</label>
                                        <p className=" text-secondary">Agrega el link de una red socal de preferencia para una mejor visualización de la campaña.</p>
                                        <Field name='socialMedia' type="text" className="form-control" maxlength="250" placeholder="Facebook, Twiter o Instagram" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Categoria</label>
                                        <p className=" text-secondary">Elige una categoría  para ayudar a los patrocinadores a encontrar tu proyecto.</p>
                                        <br />
                                        <Field name="idCategory" className="form-select" component="select">
                                            <option value="0" defaultValue >Elige una categoria</option>
                                            {postsCat.map(postCat => (
                                                <option value={postCat.IdCategory} >
                                                    {postCat.CategoryName}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                            </section>
                            <section id="seven">
                                <div className="my-4">
                                    <h4>Planifica y administra las finanzas de tu proyecto</h4>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Número de cuenta</label>
                                        <p className=" text-secondary">Agrega la cuenta corriente donde deseas recibir los fondos.</p>
                                        <Field name='accountNumber' maxlength="30" type="text" className="form-control" />
                                    </div>
                                    <div className="col form-group mb-3">
                                        <label className="fw-semibold">Meta a reacudar</label>
                                        <p className=" text-secondary">Define una meta alcanzable que cubra lo que necesitas para completar tu proyecto.
                                            El financiamiento es todo o nada. Si no cumples tu meta, no recibirás ninguna contribución.</p>
                                        <div className="input-group">
                                            <Field name='goal' maxlength="8"  type="text" className="form-control" placeholder="0.00" />
                                            <span className="input-group-text">Bs.</span>
                                            <span className="input-group-text">0.00</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                post.idFunding != "" ?
                                    <div className="text-center">
                                        <div className="card-body mt-4 text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Modificar campaña
                                            </button>
                                        </div>
                                    </div> :
                                    <div className="text-center">
                                        <div className="card-body mt-4  text-center">
                                            <button type="submit" className="button btn-outline-login">
                                                Crear campaña
                                            </button>
                                        </div>
                                    </div>
                            }

                        </Form>
                    )}
                </Formik>
            </div>
            <FooterAdmin/>
        </div>
    )
}