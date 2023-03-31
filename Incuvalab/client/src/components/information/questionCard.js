import { Card, CardGroup, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function QuestionCards() {
    
  return(
    <CardGroup>
        <Row  xs={1} md={4} className="g-4 rounded"> 
        <Col>
            <Card>
            <Card.Header>
            <strong>¿En que Consiste está página?</strong>
            </Card.Header>
            <Card.Body>
              <p>IncUVaLab es una página web de "Crowd Funding" de Univalle que tiene la finalidad actualmente de apoyar proyectos pequeños economicamente, estos proyectos pueden ser desde inventos, hasta emprendimientos empresariales.</p>
            </Card.Body>
            </Card>
    
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>¿Como puedo ayudar?</strong>
            </Card.Header>
            <Card.Body>
              <p>Para ayudar a los proyectos actuales que se encuentran en la página debe registrarse en la página con su correo electronico, elegir a la campaña que más le interese una propuesta donde ya puede elegir el monto a donar, Todas las transacciónes son por pago QR.</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>¿Es Seguró?</strong>
            </Card.Header>
            <Card.Body>
              <p>El manejo de esta página es controlado totalmente por el equipo de Incuvalab que esta encargado y con contacto directo con la gente encargada de los distintos proyectos y campañas por lo que el dinero si llegara a la causa justa.</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>¿Mis Donaciones pueden ser anonimas?</strong>
            </Card.Header>
            <Card.Body>
              <p>En la versión actual de esta página todas lo son a menos que quiera dejar un comentario de apoyo en la campaña.</p>
            </Card.Body>
            </Card>
        </Col>
     
        <Col>
            <Card>
            <Card.Header>
            <strong>¿Qué sucede si un Proyecto llega a su meta?</strong>
            </Card.Header>
            <Card.Body>
              <p>Cuándo un proyecto llega a su meta significa que se lograra hacer realidad una brillante idea en la página pero aun asi, se puede seguir donando al o a los respectivos creadores de la campaña o propuesta.</p>
            </Card.Body>
            </Card>
    
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>¿Puedo Participar con mis Ideas?</strong>
            </Card.Header>
            <Card.Body>
              <p>Si se logra mucho apoyo en esta propuesta esto estaria planteado para una siguiente versión de la página donde cada persona sea fundación o alguien individualmente pueda publicar su idea en esta página y ser apoyado por muchas personas para lograr mostrarle al mundo su proyecto.</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>¿Qué más puedo esperar?</strong>
            </Card.Header>
            <Card.Body>
              <p>La Página tendra muchas actualizaciones con el tiempo que mejoraran la experiencia de los usuarios facilitandole información y añadiendo muchas más funcionalidades.</p>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
            <Card.Header>
            <strong>Montos de donación</strong>
            </Card.Header>
            <Card.Body>
              <p>Los montos de donación son precios fijos debido a los problemas que puede generar una donación libre desde la donación de algo muy bajo a algo muy alto que el servicio de pagos QR no cubre.</p>
            </Card.Body>
            </Card>
        </Col>
      </Row>
    </CardGroup>
    );
}