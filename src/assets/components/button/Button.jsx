import React from 'react';

import'./button.scss';

const Button = (props) => {
  const theme = props.theme

 

  return (
    <button className={`btn-${theme}`}>{props.children}</button>
  )
}

export default Button