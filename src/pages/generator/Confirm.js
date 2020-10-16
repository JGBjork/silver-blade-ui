import React from 'react';
import { useSelector } from 'react-redux';
import { KeyValueDisplay } from '../../components/view/KeyValueDisplay';
import { selectGenerator } from '../../app/store/generatorSlice';

export default () => {
  const generator = useSelector(selectGenerator)
  return (
    <>
      <div>
        <h4>Confirm</h4>
        <p>
          Please confirm the following information to be included in the seal.
        </p>
      </div>
      <div className="container-fluid">
        <KeyValueDisplay objKey="Profile ID" value={generator.profileId} />
        <KeyValueDisplay objKey="Code ID" value={generator.codeId} />
        <KeyValueDisplay objKey="Author" value={generator.author} />
        <KeyValueDisplay objKey="Description" value={generator.description} />
      </div>
    </>
  );
}
