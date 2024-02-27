import React from 'react'

function FarmPro(props) {
  return (
     <>
       <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, {props.id}) => (
        <Col key={props.id}>
          <Card>
            <Card.Img variant="top" src="props.image" />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default FarmPro