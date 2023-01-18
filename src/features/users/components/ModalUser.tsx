import React, { useState, useEffect, ChangeEventHandler } from 'react'
import { Modal, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { useAppDispatch } from '../../../app/hooks'
import { addUser, editUser } from '../actions'
import { defualtEmptyUser } from '../constans'
import { User } from '../types'

interface Props {
    status: string,
    defaultUser?: User,
    setAddShow?: (s: boolean) => void
}

export const ModalUser: React.FC<Props> = ({ status, defaultUser,  setAddShow}) => {

    const dispatch = useAppDispatch()
    const [show, setShow] = useState(true)

    const [user, setUser] = useState<User>(defualtEmptyUser)


    useEffect(() => {
        setShow(true)
        status === 'edit' && setUser(defaultUser || defualtEmptyUser)
    }, [status, defaultUser])


    const closeModal = () => {
        setShow(false)
        status === 'add' && setAddShow && setAddShow(false)
    }
    const handleInputChange = (event: any, field?: string) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setUser(field ?
            { ...user, [field]: { ...(user as any)[field], [name]: value } } :
            { ...user, [name]: value });
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        closeModal()
        status === 'edit' ? dispatch(editUser.request(user)) : dispatch(addUser.request(user))
    }
    return (
        <>
            <Modal show={show}>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>{status} user </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <Form.Group controlId='exampleForm.ControlInput1'>

                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                name='name'
                                type='text'
                                defaultValue={defaultUser?.name}
                                onChange={handleInputChange}
                            />

                            <Form.Label>user name:</Form.Label>
                            <Form.Control
                                name='username'
                                type='text'
                                defaultValue={defaultUser?.username}
                                onChange={handleInputChange}
                            />

                            <Form.Label>email:</Form.Label>
                            <Form.Control
                                name='email'
                                type='email'
                                defaultValue={defaultUser?.email}
                                onChange={handleInputChange}
                            />
                            <span>address: </span>

                            <Card className='p-4 mt-2 mb-2'>
                                <Row>
                                    <Col md={6}>
                                        <Form.Label>street:</Form.Label>
                                        <Form.Control
                                            name='street'
                                            type='text'
                                            defaultValue={defaultUser?.address.street}
                                            onChange={() => handleInputChange('address')}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>suite:</Form.Label>
                                        <Form.Control
                                            name='suite'
                                            type='text'
                                            defaultValue={defaultUser?.address.suite}
                                            onChange={(e) => handleInputChange(e, 'address')}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Label>city:</Form.Label>
                                        <Form.Control
                                            name='city'
                                            type='text'
                                            defaultValue={defaultUser?.address.city}
                                            onChange={(e) => handleInputChange(e, 'address')}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>zipcode:</Form.Label>
                                        <Form.Control
                                            name='zipcode'
                                            type='text'
                                            defaultValue={defaultUser?.address.zipcode}
                                            onChange={(e) => handleInputChange(e, 'address')}
                                        />
                                    </Col>
                                </Row>
                            </Card>
                            <Form.Label>phone:</Form.Label>
                            <Form.Control
                                name='phone'
                                type='tel'
                                defaultValue={defaultUser?.phone}
                                onChange={handleInputChange}
                            />
                            <Form.Label>website:</Form.Label>
                            <Form.Control
                                name='website'
                                type='text'
                                defaultValue={defaultUser?.website}
                                onChange={handleInputChange}
                            />
                            <span>company: </span>
                            <Card className='p-4 mt-2 mb-2'>
                                <Row>
                                    <Col md={6}>
                                        <Form.Label>name:</Form.Label>
                                        <Form.Control
                                            name='name'
                                            type='text'
                                            defaultValue={defaultUser?.company.name}
                                            onChange={(e) => handleInputChange(e, 'company')}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>catchPhrase:</Form.Label>
                                        <Form.Control
                                            name='catchPhrase'
                                            type='text'
                                            defaultValue={defaultUser?.company.catchPhrase}
                                            onChange={(e) => handleInputChange(e, 'company')}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label>bs:</Form.Label>
                                        <Form.Control
                                            name='bs'
                                            type='text'
                                            defaultValue={defaultUser?.company.bs}
                                            onChange={(e) => handleInputChange(e, 'company')}
                                        />
                                    </Col>

                                </Row>
                            </Card>

                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
