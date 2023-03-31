import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FundingProvider, useFunding } from '../../context/fundingContext'
import { NotElements } from './notElements'
import "../../css/cards.css"

export function FundCards() {

    const { postsFundingTop } = useFunding()

    return (<div>
        {postsFundingTop.length != 0?  
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
            {postsFundingTop.map(post => (
                    <Col>
                        <Card key={post.IdFunding}>
                            <a className="btn" href={"/funding/" + post.IdFunding[0]}>
                                <Card.Header className='text-wrap'>
                                    {post.Title}
                                </Card.Header>
                                <Card.Img variant="top" src={post.FundingImage1} />
                                <Card.Body>
                                    {post.CurrentGoal >= post.Goal ? <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="success" label={post.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2" now={(post.CurrentGoal / post.Goal) * 100} variant="dark" label={post.CurrentGoal + "Bs."} />}
                                    <Card.Text className="p-2">
                                        <div className="flex justify-center "><p className="text-muted">Meta: {post.Goal}Bs.</p></div>
                                        <div className="text-wrap justify-center">{post.FastDescription}</div>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted text-wrap">Campaña subida el: {moment(post.RegisterDate).format('DD/MM/YYYY')}</small>
                                </Card.Footer>
                            </a>
                        </Card>
                    </Col>
                ))}
            
            </Row>
            
        </CardGroup>:
        <div className='notElement'>
            <NotElements/>
        </div>
        }</div>
    );
}