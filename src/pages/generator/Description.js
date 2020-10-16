import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDescription, selectDescription, } from '../../app/store/generatorSlice';

export default () => {
  const description = useSelector(selectDescription);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Description</h4>
        <p>
          Please provide a description of the code and its idea.
        </p>
      </div>
      <div className="alert alert-info">
        <p>
          The description should be as precise yet short as possible.
          It should preferable contain information that can only be known
          after the code has been written. You may choose the name under which
          it is published on SoloLearn.
        </p>
        <p>
          The seal binds to the author and the description; that means that those
          two fields cannot be altered through a seal renewal.
        </p>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description"
                  className="w-100"
                  maxLength="276"
                  rows="6"
                  value={description}
                  onChange={e => dispatch(setDescription(e.target.value))}>
        </textarea>
      </div>
    </>
  );
}
