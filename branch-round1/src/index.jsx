import React from 'react';
import {createRoot} from 'react-dom/client';
import SettingsV1 from './SettingsV1';

function App(){
  return <div><h1>Round 1 - Vague</h1><SettingsV1 onSubmit={(data)=>console.log('saved',data)}/></div>
}

const root = document.getElementById('root');
if(root) createRoot(root).render(<App />);

export {SettingsV1};
