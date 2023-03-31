import { useFunding } from '../../context/fundingContext'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { NotElements } from './notElements'
import "../../css/cards.css"

export function FundCardsComplete() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const { postsCompleted } = useFunding()

    return(  <div>
        {postsCompleted.length != 0?  
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
          {postsCompleted.map(postGreen => (
            <Col key={postGreen.IdFunding}>
                {postGreen.CurrentGoal >= postGreen.Goal && <Card>
                    <Link to={"/funding/" + postGreen.IdFunding} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <Card.Header className="text-center">
                            <strong className='text-wrap'>{postGreen.Title}</strong>
                        </Card.Header>
                        <Card.Img variant="top" src={postGreen.FundingImage1}/>
                        <Card.Body>
                                {postGreen.CurrentGoal >= postGreen.Goal ? <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="success" label={postGreen.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(postGreen.CurrentGoal/postGreen.Goal)*100} variant="dark" label={postGreen.CurrentGoal + "Bs."} />}                        
                                <Card.Text className="p-2">
                                    <div className="flex justify-center "><p className="text-muted text-center">Meta: {postGreen.Goal}Bs.</p></div>
                                    <div className="text-wrap justify-center">{postGreen.FastDescription}</div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Campaña subida el: {moment(postGreen.RegisterDate).format('DD/MM/YYYY')}</small>
                        </Card.Footer>
                    </Link>
                </Card>}
                
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