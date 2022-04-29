import React, {
    Component,
    useEffect,
    useState
} from 'react'
import {
    Navbar,
    Container,
    Offcanvas,
    Form,
    NavDropdown,
    FormControl,
    Button,
    Modal
}
    from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';


import Posts from './Posts';
import TestPage from './TestPage'

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant='dark' expand={false}>
                    <Container fluid >
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Brand href="/" >
                            <h2>NavBar</h2>
                        </Navbar.Brand>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                placement='end'
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <div className='d-flex justify-content-end'>
                            <App style={{ margin: "10px" }} />
                            <LogIn style={{ margin: "10px" }} />
                            <Button href="/acc" style={{ margin: "10px" }}>Acc</Button>
                        </div>

                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/categry1">
                                        <img src='https://cdn-icons-png.flaticon.com/512/6665/6665565.png'
                                            width='40px'
                                            height='40px' />
                                        Category1
                                    </Nav.Link>
                                    <Nav.Link href="/categry2">
                                        <img src='https://cdn-icons-png.flaticon.com/512/6665/6665572.png'
                                            width='40px'
                                            height='40px' />
                                        Category2
                                    </Nav.Link>
                                    <Nav.Link href="/categry3">
                                        <img src='https://cdn-icons-png.flaticon.com/512/6665/6665578.png'
                                            width='40px'
                                            height='40px' />
                                        Category2
                                    </Nav.Link>
                                    <Nav.Link href="/categry4">
                                        <img src='https://cdn-icons-png.flaticon.com/512/6665/6665584.png'
                                            width='40px'
                                            height='40px' />
                                        Category2
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exect path="/" element={<Posts />} />
                        <Route exect path="/categry1" element={<TestPage categry={1} />} />
                        <Route exect path="/categry2" element={<TestPage categry={2} />} />
                        <Route exect path="/categry3" element={<TestPage categry={3} />} />
                        <Route exect path="/categry4" element={<TestPage categry={4} />} />
                    </Routes>
                </Router>
            </>
        )
    }
}

function LogIn(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant='primary' onClick={handleShow} {...props}>
                LogIn
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='d-flex'>
                        <FormControl
                            type="login"
                            placeholder="Login"
                            className="me-2"
                            aria-label="Search"
                            placement='end' />
                        <FormControl
                            type="password"
                            placeholder="Password"
                            className="me-2"
                            aria-label="Search"
                            placement='end' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        LogIn
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control as="textarea" rows={8} />
                </Form>
            </Modal.Body>
            <Form className='d-flex' >
                <Modal.Footer>
                    <Button>To publish</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

function App(props) {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)} {...props}>
                +Create
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


