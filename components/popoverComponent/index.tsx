import React from 'react';
import Hooks from './hook';
import Entry from './components/entry';
import Cotent from './components/content';
import { Props } from './typings';

export default (props: Props) => {
  return (
    <Hooks.Provider initialState={props}>
      <Entry></Entry>
      <Cotent></Cotent>
    </Hooks.Provider>
  );
};
