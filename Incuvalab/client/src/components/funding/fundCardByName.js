import moment from 'moment'
import { Card, ProgressBar, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import { useFunding } from '../../context/fundingContext'
import { NotElements } from './notElements'
import "../../css/cards.css"

export function FundCardsNam() {
    const {postsNamFund} = useFunding()
    return(
        <div>
        {postsNamFund.length != 0?
        <CardGroup>
            <Row xs={1} md={3} className="g-4 rounded">
          {postsNamFund.map(nampost => (
              <Col>
            <Card key={nampost.IdFunding}>
            <Link to={"/funding/" + nampost.IdFunding} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card.Header className='text-wrap'>
                    {nampost.Title}
                </Card.Header>
                <Card.Img variant="top" src={nampost.FundingImage1}/>
                <Card.Body>
                {nampost.CurrentGoal >= nampost.Goal ? <ProgressBar className="m-2"  now={(nampost.CurrentGoal/nampost.Goal)*100} variant="success" label={nampost.CurrentGoal + "Bs."} /> : <ProgressBar className="m-2"  now={(nampost.CurrentGoal/nampost.Goal)*100} variant="dark" label={nampost.CurrentGoal + "Bs."} />}
                        <Card.Text className="p-2">
                            <div className="flex justify-center "><p className="text-muted">Meta: {nampost.Goal}Bs.</p></div>
                            <div className="text-wrap justify-center">{nampost.FastDescription}</div>
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Campaña subida el: {moment(nampost.RegisterDate).format('DD/MM/YYYY')}</small>
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
        }</div>
        );
}