import { Link } from 'react-router-dom'
import Footer from '../../components/general/footer'
import '../../css/userProfile.css'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { useState, useEffect } from 'react'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import { useUser } from '../../context/userContext'


export function UserProfile() {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));

    const { getFollowedFunding,
         getDonatedFunding, 
        getUserFunding } = useUser();
        
    const [postFollowed, setPostFollowed] = useState({
    });

    const [postDonated, setPostDonated] = useState({
    });

    const [postFunding, setPostFunding] = useState({
    });

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
        <div className="App">
            <br />
            <h2 className="font-semibold position-relative pl-5 pb-3">Mi Registro de Campañas</h2>
            <div className="container position-relative p-4" id="container">
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
            <br />
            <Footer />
        </div>
    );
}
