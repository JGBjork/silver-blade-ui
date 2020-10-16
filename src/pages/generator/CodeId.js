import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCodeId, selectCodeId, } from '../../app/store/generatorSlice';

export default () => {
  const cId = useSelector(selectCodeId);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Code ID</h4>
        <p>
          Please provide the ID of the code to be sealed below.
          The code ID may be just the unique identifier or the full link.
        </p>
      </div>
      <div>
        <label htmlFor="codeId">Code ID</label>
        <input type="text"
               id="codeId"
               maxLength="65"
               className="w-100"
               value={cId}
               placeholder="e.g. Wx5Ss7hbGusy"
               onChange={e => dispatch(setCodeId(e.target.value))} />
      </div>
    </>
  );
}
