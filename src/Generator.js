import React from 'react';
import { Pager } from './components/container/Pager';
import Abstract from './pages/generator/Abstract';
import ProfileId from './pages/generator/ProfileId';
import CodeId from './pages/generator/CodeId';
import Author from './pages/generator/Author';
import Description from './pages/generator/Description';
import Confirm from './pages/generator/Confirm';
import Generate from './pages/generator/Generate';

export default (props) => {
  return (
    <Pager {...props}>
      <Abstract />
      <ProfileId />
      <CodeId />
      <Author />
      <Description />
      <Confirm />
      <Generate />
    </Pager>
  );
}
