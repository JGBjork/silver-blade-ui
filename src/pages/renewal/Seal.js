import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeal, setSeal } from '../../app/store/renewalSlice';

export default () => {
  const seal = useSelector(selectSeal);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Seal</h4>
        <p>
          Please provide the current code seal to be renewed.
        </p>
      </div>
      <label htmlFor="seal">Seal</label>
      <textarea className="w-100"
                id="seal"
                rows="6"
                value={seal}
                onChange={e => dispatch(setSeal(e.target.value))}>
      </textarea>
    </>
  );
}
