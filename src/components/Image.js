import React from 'react';

const Image = props => (
  <div className="card">
    <img className="card-img-top" src={props.source} alt="Card image cap" />>
    <button type="button" class="btn btn-primary">
      Primary
    </button>
    <button type="button" class="btn btn-danger">
      Danger
    </button>
  </div>
);

export default Image;
