import React from 'react';
import { toggleEditing } from '../actions/titleActions';

const TitleDisplay = (props)=> {
  // const handleClick = () => {
    // props.handleToggleEditing();
  // }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={() => props.toggleEditing()}
      />
  </h2>);
}

const mapStateToProps = state => {
  return {
    title: state.title.title
}
}

export default connect(mapStateToProps, {toggleEditing})(TitleDisplay);