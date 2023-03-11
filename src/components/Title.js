import React, { useState, useReducer } from 'react';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  // const handleToggleEditing = () => {
  //   dispatch(toggleEditing());
  // }

  // const handleTitleUpdate = (title) => {
  //   dispatch(updateTitle(title));
  // }

  return (
    <div>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.title.title,
    editing: state.title.editing
  }
}

export default connect(mapStateToProps, {})(Title);
