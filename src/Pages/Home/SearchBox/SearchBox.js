import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBox = ({handleOnSearch}) => {
    return (
      <div>
        <Form className="mt-2">
            <h3>Availabe Services For Campus Monitoring and Management</h3>
          <FormControl
            type="search"
            placeholder="Search"
            className="mx-auto w-50"
            aria-label="Search"
            onChange={handleOnSearch}
          />
        </Form>
      </div>
    );
};

export default SearchBox;