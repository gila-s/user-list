import * as React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getUserListSelector } from '../selectors';
import { User } from '../types';
import { deleteUser } from '../actions';
import { ModalUser } from './ModalUser';
import { useState } from 'react';

interface Props {
  searchValue: string
}

export const UserList: React.FC<Props> = ({ searchValue }) => {
  const dispatch = useAppDispatch()
  const userList: User[] = useAppSelector(getUserListSelector);
  const [editShow, setEditshow] = useState<User>()

  const deleteCoosenUser = (e: any, id: number) => {
    e.stopPropagation();
    dispatch(deleteUser.request(id))
  }

  const getFilterUserList = () => {
    return userList.filter((user) => user.name.toLowerCase().includes(searchValue) || user.username.toLowerCase().includes(searchValue))
  }

  return (
    <div>
      <Table bordered hover className='mt-5'>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            getFilterUserList().map((user) => (

              <tr role="button" onClick={() => setEditshow({...user})} key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td><Button onClick={(e) => deleteCoosenUser(e, user.id)}>delete</Button></td>
              </tr>

            )
            )}
        </tbody>
      </Table>
      {editShow && <ModalUser status='edit' defaultUser={editShow} />}
    </div>
  )
};

