import React from 'react';

const FormComponent = (props) =>(
      <form>
        <label>
          Name:
          <input type="text" name = 'city' value={props.name}/>
        </label>
        <input type="submit" value="Submit" onSubmit={props.handleSubmit}/>
      </form>
);

export default FormComponent;