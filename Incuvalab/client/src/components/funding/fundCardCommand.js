import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { useFunding } from '../../context/fundingContext'
import { NotElements } from './notElements'
import "../../css/cards.css"

export function FundCardsCommand() {
    const { postsFunding , moveFundingToBault } = useFunding()

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
        {postsFunding.length != 0?
        <div>
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
                {postsFunding.map(post => (
                    <Col>
                        <Card key={post.IdFunding}>
                                <Card.Header className="text-wrap">
                                    <a class="btn" href={"/controlFunding/" + post.IdFunding}>
                                    <strong className="text-wrap">{post.Title}</strong>
                                    </a>
                                </Card.Header>
                                <Card.Img variant="top" src={post.FundingImage1}/>
                            
                                <Card.Body>
                                    <div className="flex justify-center ">
                                    </div>
                                    {post.CurrentGoal >= post.Goal ? <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="success" label={post.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="dark" label={post.CurrentGoal + "Bs."} />}
                                    <Card.Text className="p-2">
                                        <div className="flex justify-center ">
                                            <Col>
                                                <Row >
                                                    <p className="text-muted text-center">Meta: {post.Goal}Bs.</p>
                                                </Row>
                                                <Row className="flex p-3">
                                                    <ButtonGroup className="flex dgrid gap-2 m-2" aria-label="Options">
                                                        <Link to={'/createFunding/'+post.IdFunding} className='btn btn-warning' size="sm">Editar</Link>
                                                        <Button variant="danger" size="sm" onClick={() => { moveFundingToBault(post.IdFunding); refreshPage(); }}>Eliminar</Button>
                                                    </ButtonGroup>
                                                </Row>
                                            </Col>
                                        </div>
                                        <div className="text-wrap justify-center">{post.FastDescription}</div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Campaña subida el: {moment(post.RegisterDate).format('DD/MM/YYYY')}</small>
                                </Card.Footer>
                        </Card>
                    </Col>
                ))
                }
            </Row>
            
        </CardGroup>
        </div>:
        <div className='notElement'>
            <NotElements/>
        </div>
        }
       </div>
    );
}