import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { ProgressBar } from 'react-bootstrap'
import Footer from '../../components/general/footer'
import { useFunding } from '../../context/fundingContext'

export function ControlFunding() {

    const { getFundingById } = useFunding();
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
        RegisterDate: ""
    });

    const params = useParams();

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
                    Category: post[0].CategoryName,
                    Goal: post[0].Goal,
                    CurrentGoal: post[0].CurrentGoal,
                    RegisterDate: post[0].RegisterDate
                });

            }
        })();
    }, [params.id, getFundingById]);

    return (
        <div className="base-container">
            <div className="container  my-5 ">
                <h4 className="text-center">{post.Title}</h4>
                <p className="text-center">{post.FastDescrption}</p>

                <div className="row">
                    <div className="col-sm-8 text-center mx-auto mb-2" >
                        <div className="ratio ratio-16x9">
                            <iframe src={post.FundingVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-sm">

                        <div className="card">
                            <div className='card-header mb-4'>
                                <h3>Detalles del proyecto</h3>
                            </div>
                            <div className="card-body col px-5 pb-5 pt-4">
                                <div className="row mb-3">
                                    <div>
                                        {post.CurrentGoal >= post.Goal ?
                                            <ProgressBar min={0} now={(post.CurrentGoal * 100) / post.Goal} max={100} variant="success" />
                                            : <ProgressBar min={0} now={(post.CurrentGoal * 100) / post.Goal} max={100} variant="dark" />
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <h4>{post.CurrentGoal} Bs.</h4>
                                </div>
                                <div className="row">
                                    <p>contribuido de {post.Goal} Bs.</p>
                                </div>
                                <div>
                                    <h4>Categoria</h4>
                                </div>
                                <div>
                                    <p>{post.Category}</p>
                                </div>
                            </div>
                            <div className="card-footer col px-5 pb-5 pt-4">
                                {post.RegisterDate}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <div className="container my-5">
                <div className="row">
                    <div className="col-sm">
                        <h3>Historia del proyecto</h3>
                        <p>{post.Description}</p>
                        <img src={post.FundingImage1} className="img-fluid m-4 rounded mx-auto d-block"></img>
                        <p>{post.Question1}</p>
                        <img src={post.FundingImage2} className="img-fluid m-4 rounded mx-auto d-block"></img>
                        <p>{post.Question2}</p>
                        <img src={post.FundingImage3} className="img-fluid m-4 rounded mx-auto d-block"></img>
                        <p>{post.Question3}</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}