import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileId, selectProfileId, } from '../../app/store/generatorSlice';

export default (props) =>  {
  const pId = useSelector(selectProfileId);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Profile ID</h4>
        <p>
          Please provide your profile ID below.
          The prodile ID can be just the numeric code or the full link.
        </p>
      </div>
      <div>
        <label htmlFor="profileId">Profile ID</label>
        <input type="text"
               id="profileId"
               maxLength="45"
               className="w-100"
               value={pId}
               placeholder="e.g. 12345678"
               onChange={e => dispatch(setProfileId(e.target.value))} />
      </div>
    </>
  );
};
