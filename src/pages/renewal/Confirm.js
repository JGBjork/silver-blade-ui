import React from 'react';
import { useSelector } from 'react-redux';
import { selectRenewal } from '../../app/store/renewalSlice';
import { KeyValueDisplay } from '../../components/view/KeyValueDisplay';

export default () => {
  const renewal = useSelector(selectRenewal);
  return (
    <>
      <div>
        <h4>Confirm</h4>
        <p>
          Please confirm the following information to be included in the seal.
        </p>
      </div>
      <div className="container-fluid">
        <KeyValueDisplay 
            objKey="Profile ID" 
            value={renewal.profileId === "" ? "[unchanged]" : renewal.profileId} />
        <KeyValueDisplay 
            objKey="Code ID" 
            value={renewal.codeId === "" ? "[unchanged]" : renewal.codeId} />
      </div>
    </>
  );
}
