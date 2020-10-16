import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileId, setProfileId } from '../../app/store/renewalSlice';

export default (props) => {
  const pId = useSelector(selectProfileId);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Profile ID</h4>
        <p>
          Please provide your new profile ID below.
          The profile ID can be just the numeric code or the full link. Leave
          blank if the Profile ID has not changed.
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
