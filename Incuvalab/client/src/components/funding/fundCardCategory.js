import { useFunding } from '../../context/fundingContext'
import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { NotElements } from './notElements'
import "../../css/cards.css"

export function FundCardsCat() {
    //ARREGLAR EL RUTEO DE LAS IMAGENES
    const { postsCatFund } = useFunding()
    
    return(
        <div>
        {postsCatFund .length != 0?
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
          {postsCatFund.map(catpost => (
              <Col>
            <Card key={catpost.IdFunding}>
            <Link to={"/funding/" + catpost.IdFunding} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card.Header className='text-wrap'>
                    {catpost.Title}
                </Card.Header>
                <Card.Img variant="top" src={catpost.FundingImage1}/>
                <Card.Body>
                {catpost.CurrentGoal >= catpost.Goal ? <ProgressBar className="m-2"  now={(catpost.CurrentGoal/catpost.Goal)*100} variant="success" label={catpost.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(catpost.CurrentGoal/catpost.Goal)*100} variant="dark" label={catpost.CurrentGoal + "Bs."} />}
                        <Card.Text className="p-2">
                            <div className="flex justify-center "><p className="text-muted">Meta: {catpost.Goal}Bs.</p></div>
                            <div className="text-wrap justify-center">{catpost.FastDescription}</div>
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Campaña subida el: {moment(catpost.RegisterDate).format('DD/MM/YYYY')}</small>
                </Card.Footer>
            </Link>
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