import { useState, useEffect } from "react";
import Footer from "../../components/general/footer";

import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useFunding } from "../../context/fundingContext";
import OfertFunding from "../../components/funding/cardOfertFunding";
import Comment from "../../components/comment/commentFunding";
import CommentFrom from "../../components/comment/formCommentFunding";
import { Modal, ProgressBar, Button, ButtonGroup } from "react-bootstrap";
import "../../css/funding.css";
import * as Yup from 'yup'

export function FundingPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const QRCode = require("qrcode");

  const dataUser = JSON.parse(sessionStorage.getItem("user"));
  let id;

  if (dataUser == null) {
    id = 0;
  } else {
    id = dataUser[0].IdUser;
  }

  const { getFundingById, setFollowedFunding, getFollowedFunding } =
    useFunding();
  const [post, setPost] = useState({
    IdFunding: "",
    Title: "",
    Question1: "",
    Question2: "",
    Question3: "",
    FastDescrption: "",
    Description: "",
    FundingImage1: "",
    FundingImage2: "",
    FundingImage3: "",
    FundingVideo: "",
    SocialMedia: "",
    Category: "",
    Goal: "",
    CurrentGoal: "",
  });

  const [postFollowed, setPostFollowed] = useState({});

  const params = useParams();
  let qrCodeDonation = null;

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getFundingById(params.id);

        setPost({
          IdFunding: post[0].IdFunding,
          Title: post[0].Title,
          Question1: post[0].Question1,
          Question2: post[0].Question2,
          Question3: post[0].Question2,
          FastDescrption: post[0].FastDescription,
          Description: post[0].Description,
          FundingImage1: post[0].FundingImage1,
          FundingImage2: post[0].FundingImage2,
          FundingImage3: post[0].FundingImage3,
          FundingVideo: post[0].FundingVideo,
          SocialMedia: post[0].SocialMedia,
          Category: post[0].Category,
          Goal: post[0].Goal,
          CurrentGoal: post[0].CurrentGoal,
        });
      }
    })();
  }, [params.id, getFundingById]);

  useEffect(() => {
    (async () => {
      const postFollowed = await getFollowedFunding(id);
      setPostFollowed(postFollowed);
    })();
  }, [id, getFollowedFunding]);
  

  const validateFunc = (values, props) => {
    const errors = {};
  
    if (!values.donation) {
      handleClose();
    } 
    return errors;
  };

  return (
    <div className="base-container">
      <div className="container-sm  my-5 ">
        <h4 className="text-center">{post.Title}</h4>
        <p className="text-center">{post.FastDescrption}</p>

        <div className="row">
          <div className="col-sm-8 text-center mx-auto mb-2">
            <div className="ratio ratio-16x9">
              <iframe
                src={post.FundingVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <div className="card-body col px-5 pb-5 pt-4">
                <div className="row mb-3">
                  <div>
                    {post.CurrentGoal >= post.Goal ? (
                      <ProgressBar
                        min={0}
                        now={(post.CurrentGoal * 100) / post.Goal}
                        max={100}
                        variant="success"
                      />
                    ) : (
                      <ProgressBar
                        min={0}
                        now={(post.CurrentGoal * 100) / post.Goal}
                        max={100}
                        variant="dark"
                      />
                    )}
                  </div>
                </div>
                <div className="row">
                  <h4>{post.CurrentGoal} Bs.</h4>
                </div>
                <div className="row">
                  <p>contribuido de {post.Goal} Bs.</p>
                </div>

                <Formik
                  className="form"
                  initialValues={{
                    donation: "",
                    donationQR: null,
                  }}
                  validationSchema={Yup.object({
                    donation: Yup.number().required('* Monto de donación es un campo requerido')
                  })}

                  validate={validateFunc}
                  
                  onSubmit={async (values, actions) => {
                      let stringdata = JSON.stringify(values.donation);
                      QRCode.toDataURL(stringdata, function (err, code) {
                        if (err) return console.log("error occurred");
                        qrCodeDonation = code;
                      });
                    
                  }}

                  
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <div className="row">
                          <h3>Contribuir</h3>
                        </div>
                        <div className="row my-4">
                          <div className="col">Cantidad</div>
                          <div className="col">
                            <ErrorMessage  component="p" name="donation" className="text-danger" />
                            <Field
                              name="donation"
                              type="text"
                              className="form-control"
                              placeholder="0.0"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <h5>Detalles de donación</h5>
                        </div>
                        <div className="row form-switch form-check mb-3">
                          <div className="form-switch form-check">
                            <input
                              className="col form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                            />
                            <label
                              className="col form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              No mostrar publicamente mi nombre en la donación a
                              esta campaña
                            </label>
                          </div>
                        </div>
                        <div className="row ">
                          {dataUser == null ? (
                            <Link
                              to={"/login"}
                              className="col button btn-general btn btn-secondary"
                            >
                              Donar
                            </Link>
                          ) : (
                            <div>
                              <Button
                                type="submit"
                                className="col button btn-general btn btn-secondary"
                                onClick={handleShow}
                              >
                                Donar
                              </Button>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Escane el código QR</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div className="d-flex justify-content-center">
                                    <img alt="Donación QR"
                                      className="img-fluid w-100"
                                      src={qrCodeDonation}
                                    ></img>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          )}
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div className="row my-2">
                  {dataUser != null ? (
                    <Formik
                      initialValues={{
                        idUser: id,
                        idFunding: params.id,
                      }}
                      onSubmit={async (values, actions) => {
                        const resFollowed = await setFollowedFunding(values);
                        window.location.reload();
                      }}
                    >
                      {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className="col">
                          {Object.keys(postFollowed).length != 0 ? (
                            <div>
                              {postFollowed.length > 0 ? (
                                <div>
                                  {postFollowed.find(
                                    (element) => element.IdFunding == params.id
                                  ) != null ? (
                                    <button
                                      className="form-control col "
                                      disabled
                                    >
                                      Lo sigo!
                                    </button>
                                  ) : (
                                    <button
                                      type="submit"
                                      className="col button btn-general me-2"
                                    >
                                      Seguir
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <button
                                    type="submit"
                                    className="col button btn-general me-2"
                                  >
                                    Seguir
                                  </button>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div>
                              <button
                                type="submit"
                                className="col button btn-general me-2"
                              >
                                Seguir
                              </button>
                            </div>
                          )}
                        </Form>
                      )}
                    </Formik>
                  ) : (
                    <Link
                      to={"/login"}
                      className="col button btn-general btn me-2"
                    >
                      Seguir
                    </Link>
                  )}

                  {post.SocialMedia == null ? (
                    <Link
                      to={"/"}
                      className="col button btn btn-general text-center"
                    >
                      Visitar Social Media
                    </Link>
                  ) : (
                    <a
                      className="col button btn btn-general text-center"
                      href={post.SocialMedia}
                    >
                      Visitar Social Media
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-8 pe-4">
            <h5>Historia del proyecto</h5>
            <p>{post.Description}</p>
            <img src={post.FundingImage1} className="img-fluid m-4"></img>
            <p>{post.Question1}</p>
            <img src={post.FundingImage2} className="img-fluid m-4"></img>
            <p>{post.Question2}</p>
            <img src={post.FundingImage3} className="img-fluid m-4"></img>
            <p>{post.Question3}</p>
          </div>

          <div className="col-sm">
            <h5>Comentarios</h5>
            {sessionStorage.getItem("user") != null ? (
              <CommentFrom idFunding={post.IdFunding} idUser={id} />
            ) : (
              <CommentFrom idFunding={post.IdFunding} />
            )}
            <hr />
            <Comment idFunding={post.IdFunding} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
