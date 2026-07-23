import SettingsV2 from './SettingsV2';
import React from 'react';
import {createRoot} from 'react-dom/client';

function App(){
  return <div><h1>Round 2 - Precise</h1><SettingsV2 onSubmit={(data)=>console.log('saved',data)}/></div>
}

const root = document.getElementById('root');
if(root) createRoot(root).render(<App />);

export {SettingsV2};
