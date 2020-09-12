import React from 'react';

const SearchField = (props) => (

        <div className="form-input">
            <input 
                type="text"
                name="zipcode"
                placeholder="Enter zipcode"
                value={props.zipcode}
                onChange={(event) => props.handleChange(event)}
            />
        </div>

);

export default SearchField;