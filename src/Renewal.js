import React from 'react';
import Abstract from './pages/renewal/Abstract';
import ProfileId from './pages/renewal/ProfileId';
import CodeId from './pages/renewal/CodeId';
import Seal from './pages/renewal/Seal';
import RenewalKey from './pages/renewal/RenewalKey';
import Confirm from './pages/renewal/Confirm';
import Renew from './pages/renewal/Renew';
import { Pager } from './components/container/Pager';

export default (props) => {
  return (
    <Pager {...props}>
      <Abstract />
      <ProfileId />
      <CodeId />
      <Seal />
      <RenewalKey />
      <Confirm />
      <Renew />
    </Pager>
  );
}
