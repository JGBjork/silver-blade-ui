import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeal, setSeal } from '../../app/store/validatorSlice';

export default (props) => {
  const seal = useSelector(selectSeal);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Seal</h4>
        <p>
          Please provide the code seal below.
        </p>
      </div>
      <div>
        <label htmlFor="seal">Seal</label>
        <textarea id="seal"
                  className="w-100"
                  rows = "6"
                  value={seal}
                  onChange={e => dispatch(setSeal(e.target.value))} />
      </div>
    </>
  );
};
