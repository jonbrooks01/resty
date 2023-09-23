// import React from "react";
import "./Form.scss";

const Form = (props) => {
  function handleSubmit() {
    preventDefault();
    const formData = {
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
    };
    props.handleApiCall(formData);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;

// import React from 'react';

// class Form extends React.Component {

//   render() {
//     return (
// <>
//   <form onSubmit={this.handleSubmit}>
//     <label >
//       <span>URL: </span>
//       <input name='url' type='text' />
//       <button type="submit">GO!</button>
//     </label>
//     <label className="methods">
//       <span id="get">GET</span>
//       <span id="post">POST</span>
//       <span id="put">PUT</span>
//       <span id="delete">DELETE</span>
//     </label>
//   </form>
// </>
//     );
//   }
// }

// export default Form;
