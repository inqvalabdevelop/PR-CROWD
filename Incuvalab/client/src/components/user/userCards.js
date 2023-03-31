import { useUser } from '../../context/userContext'
import moment from 'moment'
import { Card, CardGroup, Row, Col, Container, Badge, Button, ButtonGroup } from 'react-bootstrap'
import avatar from '../../images/profile.webp'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Formik, Form, Field, ErrorMessage } from 'formik'

export function UserCards() {

    const {postsUsersList} = useUser()
    const {deleteUserById} = useUser()

    return (
        <CardGroup>
            <Row xs={5} md={1} className="g-4 rounded">
                {postsUsersList.map(postUserEditList => (
                    <Col>
                        <Card key={postUserEditList.IdUser}>
                            <Card.Header>
                                {postUserEditList.IdUser === 1 ? 
                                <>
                                 <h5>Owner <ButtonGroup className="position-sticky start-100 flex dgrid gap-2 m-2"></ButtonGroup> </h5>  
                                </> : 

                                <h5>{postUserEditList.TypeUserName} <ButtonGroup className="position-sticky start-100 flex dgrid gap-2 m-2">

                                    <Formik initialValues={{}}
                                        onSubmit={async (values, actions) => {
                                            const result = await deleteUserById(postUserEditList.IdUser)
                                            if (result > 0) {
                                                window.location.reload(false);
                                            }
                                        }} >
                                        {({ handleSubmit }) => (
                                            <Form onSubmit={handleSubmit} className='col'>
                                                <button type='submit' className="btn btn-danger btn-sm">Eliminar</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </ButtonGroup> </h5>}

                            </Card.Header>
                            <Card.Body>
                                <Container className="d-flex">
                                    <Col sm={3} className="mx-4">
                                        <img src={avatar} className="profile-image my-5" height="110" width="110" alt="profile_picture" />
                                    </Col>
                                    <Col className="ml-6" sm={8}>
                                        <Card.Title className="flex">{postUserEditList.LastName + " "  + postUserEditList.Name + " (" + postUserEditList.UserName + ")"}</Card.Title>
                                        <Card.Text className="pl-3">
                                            <li>{postUserEditList.Email}</li>
                                            <li>{postUserEditList.PhoneNumber}</li>
                                            <li>Registrado: {moment(postUserEditList.RegisterDate).format('DD/MM/YYYY')} a las: {moment(postUserEditList.RegisterDate).format('HH:mm a')}</li>
                                            <li>Ultima modificación: {moment(postUserEditList.LastUpdate).format('DD/MM/YYYY')} a las: {moment(postUserEditList.LastUpdate).format('HH:mm a')}</li>
                                        </Card.Text>
                                    </Col>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardGroup>
    );
}