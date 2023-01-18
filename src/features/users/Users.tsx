import { useEffect, useState } from 'react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Header } from './components/Header';
import { getUsersList } from './actions';
import { UserList } from './components/UserList';
import { Search } from './components/Search';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ModalUser } from './components/ModalUser';
import { getLoadingSelector } from './selectors';
import { LoadingState } from './constans';
import './style.css'


export const Users: React.FC = () => {

    const dispatch = useAppDispatch()
    const loading = useAppSelector(getLoadingSelector)
    const [searchValue, setSearchValue] = useState('')
    const [addShow, setAddShow] = useState(false)
    useEffect(() => {
        dispatch(getUsersList.request());
    }, [])

    return (
        <div>
            <Header />
            {loading === LoadingState.REQUEST &&
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {loading === LoadingState.SUCCESS &&
                <Container>
                    <Row className='justify-content-between mt-5'>
                        <Col md='auto'>
                            <Search setSearchValue={setSearchValue} />
                        </Col>
                        <Col md='auto'>
                            <Button onClick={() => setAddShow(true)}>Add</Button>
                        </Col>
                    </Row>
                    <UserList searchValue={searchValue} />
                </Container>
            }
            {addShow && <ModalUser status='add' setAddShow={setAddShow}/>}
        </div>
    )
};
