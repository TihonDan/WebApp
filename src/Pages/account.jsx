import React, { Component } from 'react'
import {
    Card, CardImg
}
    from 'react-bootstrap'

export default class account extends Component {
    render() {
        return (
            <>
                {/* <Modal.Dialog>
                    <Modal.Body>
                        <Button variant='primary'
                                style={{width: '180px',
                                        height: '150px'
                                        }}>IMG</Button>
                    </Modal.Body>
                </Modal.Dialog> */}
                <Card className="bg-white text-white"
                    style={{
                        width: '800px',
                        height: '450px',
                        alignItems: "center",
                        backgroundColor: "white"
                    }}>
                    <img style={{
                        width: '160px',
                        height: '150px',
                        
                    }} 
                        src="https://mykaleidoscope.ru/uploads/posts/2021-10/1634164058_39-mykaleidoscope-ru-p-rizhii-tsvet-volos-krasivaya-pricheska-dev-41.jpg"
                        />
                    <Card.ImgOverlay>
                        <Card.Text>

                        </Card.Text>
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </>
        )
    }
}
