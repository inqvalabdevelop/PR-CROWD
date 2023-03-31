import { useFunding } from '../../context/fundingContext'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NotElements } from './notElements'
import "../../css/cards.css"
import { Link } from "react-router-dom"

export function FundCardsAprobe() {
    const { postsToAprobe } = useFunding()
    const { publishFunding } = useFunding()
    const { moveFundingToBault } = useFunding()

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
        {postsToAprobe.length != 0?
            <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
                {postsToAprobe.map(postAprove => (
                    <Col>
                        <Card key={postAprove.IdFunding}>
                                <Card.Header className="text-wrap">
                                    <a class="btn" href={"/controlFunding/" + postAprove.IdFunding}>
                                    <strong className="text-wrap">{postAprove.Title}</strong>
                                    </a>
                                </Card.Header>
                                <Card.Img variant="top" src={postAprove.FundingImage1} />
                                <Card.Body>
                                    {postAprove.CurrentGoal >= postAprove.Goal ? <ProgressBar className="m-2" now={(postAprove.CurrentGoal / postAprove.Goal) * 100} variant="success" label={postAprove.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2" now={(postAprove.CurrentGoal / postAprove.Goal) * 100} variant="dark" label={postAprove.CurrentGoal + "Bs."} />}
                                    <Card.Text className="p-2">
                                        <div className="flex justify-center ">
                                            <Col>
                                                <Row>
                                                    <p className="text-muted text-center">Meta: {postAprove.Goal}Bs.</p>
                                                </Row>
                                                <Row className="flex p-3">
                                                    <ButtonGroup className="flex dgrid gap-2 p-2" aria-label="Options">
                                                        <Button variant="success" size="sm" onClick={() => { publishFunding(postAprove.IdFunding); refreshPage(); }}>Publicar</Button>
                                                        <Link to={'/createFunding/'+postAprove.IdFunding} className='btn btn-warning' size="sm">Editar</Link>
                                                        <Button variant="danger" size="sm" onClick={() => { moveFundingToBault(postAprove.IdFunding); refreshPage(); }}>Denegar</Button>
                                                    </ButtonGroup>
                                                </Row>
                                            </Col>
                                        </div>
                                        <div className="text-wrap justify-center">{postAprove.FastDescription}</div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Campaña subida el: {moment(postAprove.RegisterDate).format('DD/MM/YYYY')}</small>
                                </Card.Footer>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </CardGroup>:
        <div className='notElement'>
            <NotElements/>
        </div>
        }
       </div>
    );
}