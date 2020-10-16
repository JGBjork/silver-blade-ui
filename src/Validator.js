import React from 'react';
import Abstract from './pages/validator/Abstract';
import Seal from './pages/validator/Seal';
import Validate from './pages/validator/Validate';
import { Pager } from './components/container/Pager';

export default (props) => {
  return (
    <Pager {...props}>
      <Abstract />
      <Seal />
      <Validate />
    </Pager>
  );
}
