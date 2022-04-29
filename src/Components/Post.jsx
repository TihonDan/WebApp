import React from 'react'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'

export default function Post(props) {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <>
                    <Card style={{
                        width: '500px',
                        alignItems: "center",
                        margin: '15px'
                    }} border="primary"
                    >
                        <Card.Img variant="top" src="https://www.thebrokebackpacker.com/wp-content/uploads/2019/07/adventure-travel-004-beginner-steps.jpg"
                        />
                        <Card.ImgOverlay>
                            <Card.Title>{props.post.title}</Card.Title>
                        </Card.ImgOverlay>
                        <Card.Body>
                            <Card.Text>
                                {props.post.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            </div>
            <div>
                <Button variant='primary' onClick={() => alert('Yes')}>Like</Button>
            </div>
        </div>
    )
}
