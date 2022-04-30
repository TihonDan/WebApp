import React, { Component, useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class TestInput extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        var val = e.target.value;
        this.setState({ name: val })
    }

    handleSubmit(e) {
        e.preventDefault();
        var testName = this.state.name;
        // alert("Имя: " + this.state.name)
        console.log(testName);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <p>
                        <InputGroup className='mb-3'>
                            <InputGroup.Text id='basic-addon'>Name</InputGroup.Text>
                            <FormControl placeholder='Username'
                                value={this.state.name}
                                onChange={this.onChange}/>
                        </InputGroup>
                    </p>
                    <Button variant='primary' type="submit">Отправить</Button>
                </Form>
            </div>
        )
    }
}
