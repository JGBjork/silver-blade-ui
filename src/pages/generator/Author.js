import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthor, selectAuthor, } from '../../app/store/generatorSlice';

export default () => {
  const author = useSelector(selectAuthor);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h4>Author</h4>
        <p>Please provide the author of the code to be sealed.</p>
      </div>
      <div className="alert alert-info">
        <p>
          The author can be your real name, your SoloLearn nick name, a
          pseudonym or a combination of those.
        </p>
        <p>
          The seal binds to the author and the description; that means that those
          two fields cannot be altered through a seal renewal.
        </p>
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text"
               id="author"
               className="w-100"
               maxLength="165"
               value={author}
               placeholder="e.g. Code Warrior (Edgar Fitzgerald)"
               onChange={e => dispatch(setAuthor(e.target.value))} />
      </div>
    </>
  );
}
