import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRenewalKey, setRenewalKey } from '../../app/store/renewalSlice';

export default () => {
  const rKey = useSelector(selectRenewalKey);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Renewal Key</h4>
        <p>Please provide the renewal key for the current seal.</p>
      </div>
      <div className="alert alert-info">
          The renewal key was issued along with the code seal. If you do not
          have the key any more, then the seal cannot be renewed. The renewal
          key cannot be restored.
      </div>
      <div>
        <label htmlFor="renewalKey">Renewal Key</label>
        <input type="text"
               id="renewalKey"
               className="w-100"
               maxLength="12"
               value={rKey}
               onChange={e => dispatch(setRenewalKey(e.target.value))} />
      </div>
    </>
  );
}
