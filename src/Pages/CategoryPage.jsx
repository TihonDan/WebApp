import { Button } from 'bootstrap'
import React from 'react'
import { Card, Row, Col, Container, Pagination } from 'react-bootstrap'

const CategoryPage = ({ _posts, category }) => {
    return (
        <div className="justify-content-center" key={_posts.id}>
            {
                _posts.map((_posts, i) => {
                    if (_posts.id == category) {
                        return (
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
                                    <Card.Title>{_posts.title}</Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Card.Text>
                                        {_posts.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className="justify-content-center">
                                {/* <Button variant='primary' >Like</Button> */}
                            </div>
                            </>            
                        )
                    }
                })

            }
        </div>
    )
}

export default CategoryPage;
