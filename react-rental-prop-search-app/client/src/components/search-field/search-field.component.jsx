import React from 'react';

const SearchField = (props) => (
    <div>
    {console.log(props)}
    <form onSubmit={(event) => props.submitIt(event)}>
        <div className="form-input">
            <input 
                type="text"
                name="zipcode"
                placeholder="Enter zipcode"
                value={props.zipcode}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
            <button type="submit">Submit</button>
    </form>
    </div>

);

export default SearchField;