import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    setSearchValue: (searchValue: string) => void
}

export const Search: React.FC<Props> = ({setSearchValue}) => {
    return (
        <Form>
			<Form.Group>
				<Form.Control
					type="text"
                    placeholder="Search"
					onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
				/>
		    </Form.Group>
        </Form>
    )
};
