import { Formik, Form, Field } from 'formik'
import '../../css/setting.css'
import { Col, Row, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from '../../images/profile.webp'
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useUser } from '../../context/userContext'
import Footer from '../../components/general/footer'

export function Settings() {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    const { getUserById, getFollowedCount, 
        getDonatedCount, getUserFundingCount, 
        getFollowedFunding, getDonatedFunding, 
        getUserFunding } = useUser()
    const [post, setPost] = useState({
    });
    const [postCount, setPostCount] = useState({
        countFollowedFunding: "",
        countDonationsFunding: "",
        countCreateFunding: ""
    });
    const [postFollowed, setPostFollowed] = useState({
    });

    const [postDonated, setPostDonated] = useState({
    });

    const [postFunding, setPostFunding] = useState({
    });

    useEffect(() => {
        (async () => {
            if (dataUser[0].IdUser != undefined) {
                const post = await getUserById(dataUser[0].IdUser);
                setPost(post[0]);
            }
        })();
    }, [dataUser[0].IdUser, getUserById]);

    useEffect(() => {
        (async () => {
            if (dataUser[0].IdUser != undefined) {
                const postCount = await getFollowedCount(dataUser[0].IdUser);
                const postCount2 = await getDonatedCount(dataUser[0].IdUser);
                const postCount3 = await getUserFundingCount(dataUser[0].IdUser);
                setPostCount({
                    countFollowedFunding: postCount[0].countFollowedFunding,
                    countDonationsFunding: postCount2[0].countDonationsFunding,
                    countCreateFunding: postCount3[0].countCreateFunding
                })
            }
        })();
    }, [dataUser[0].IdUser, getFollowedCount, getDonatedCount, getUserFundingCount]);

    useEffect(() => {
        (async () => {
            const postDonated = await getDonatedFunding(dataUser[0].IdUser)
            const postFollowed = await getFollowedFunding(dataUser[0].IdUser)
            const postFunding = await getUserFunding(dataUser[0].IdUser)
            setPostDonated(postDonated)
            setPostFollowed(postFollowed)
            setPostFunding(postFunding)
        })();
    }, [dataUser[0].IdUser, getFollowedFunding, getDonatedFunding, getUserFunding]);

    return (
        <div>
            <div className="container">
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar text-center">
                            <div className='mb-3'>
                                <h5>Mi perfil</h5>
                            </div>
                            <div className="profile-userpic">
                                <img src={avatar} className="img-responsive" alt="" />
                            </div>
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {post.Name + post.LastName}
                                </div>
                                <div className="profile-usertitle-job">
                                    {"@" + post.UserName}
                                </div>
                            </div>
                            <div className="profile-usermenu">
                                <ul className="nav">
                                    <li>
                                        <a href="/Settings/ConfigureAccount">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Confgurar cuenta </a>
                                    </li>
                                    <li>
                                        <a href="/Settings/ModifiedProfile">
                                            <i className="glyphicon glyphicon-user"></i>
                                            Editar perfil </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="glyphicon glyphicon-flag"></i>
                                            Ayuda </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="portlet light bordered">
                                <div className="row list-separated profile-stat">
                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                        <div className="uppercase profile-stat-title"> {postCount.countCreateFunding} </div>
                                        <div className="uppercase profile-stat-text">Campañas</div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                        <div className="uppercase profile-stat-title"> {postCount.countFollowedFunding} </div>
                                        <div className="uppercase profile-stat-text">Seguidas </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-6">
                                        <div className="uppercase profile-stat-title"> {postCount.countDonationsFunding} </div>
                                        <div className="uppercase profile-stat-text">Donadas </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="profile-desc-title">Información</h4>
                                    <span className="profile-desc-text">Email</span>
                                    <br />
                                    <span className="profile-desc-text">{post.Email}</span>
                                    <br />
                                    <span className="profile-desc-text">Número de telefono</span>
                                    <br />
                                    <span className="profile-desc-text">{post.PhoneNumber}</span>
                                    <br />
                                    <span className="profile-desc-text">Participa desde</span>
                                    <br />
                                    <span className="profile-desc-text">{moment(post.RegisterDate).format('DD/MM/YYYY')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">

                            <h3 className='my-3'>Mi panel de control</h3>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Campañas a las Que Sigues</Accordion.Header>
                                    {Object.keys(postFollowed).length != 0 ?
                                        <Accordion.Body>
                                            {postFollowed.map(postF => (
                                                <div>
                                                    {
                                                        postF.IdFunding != null ?
                                                            <Card key={postF.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postF.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postF.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postF.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card> :
                                                            <p>No sigues ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No sigues ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Campañas a las Que Donaste</Accordion.Header>
                                    {Object.keys(postDonated).length != 0 ?
                                        <Accordion.Body>
                                            {postDonated.map(postD => (
                                                <div>
                                                    {
                                                        postD.IdFunding != null ?
                                                            <Card key={postD.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postD.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postD.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postD.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card>
                                                            :
                                                            <p>No donaste a ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No donaste a ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Mis Campañas</Accordion.Header>
                                    {Object.keys(postFunding).length != 0 ?
                                        <Accordion.Body>
                                            {postFunding.map(postFU => (
                                                <div>
                                                    {
                                                        postFU.IdFunding != null ?
                                                            <Card key={postFU.IdFunding} className="my-3">
                                                                <Card.Header className='text-wrap'>
                                                                    {postFU.Title}
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        {postFU.FastDescription}
                                                                    </Card.Text>
                                                                </Card.Body>
                                                                <Card.Footer>
                                                                    <Link to={"/funding/" + postFU.IdFunding}>Ir a proyecto</Link>
                                                                </Card.Footer>
                                                            </Card> :
                                                            <p>No creaste ninguna campaña</p>
                                                    }
                                                </div>

                                            ))}
                                        </Accordion.Body>
                                        :
                                        <AccordionBody>No creaste ninguna campaña</AccordionBody>
                                    }
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
    );
}


