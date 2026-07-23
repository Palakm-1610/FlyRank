import React from 'react';

export default function SettingsV1({onSubmit}){
  return (
    <form onSubmit={(e)=>{e.preventDefault(); const fd = new FormData(e.target); onSubmit && onSubmit(Object.fromEntries(fd));}}>
      <label>
        Display name
        <input name="displayName" placeholder="Your name" required />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
