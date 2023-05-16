import * as React from 'react';
import {bootstrapRemoteApp} from 'angular-remote/Module';
import {ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState} from "react";

import { Link, Route, Routes } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "angular-remote-root": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const RemoteReactApp = React.lazy(() => import('remote-app/Module'));


const RemoteAngularApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    bootstrapRemoteApp();
  }, []);
  return <div className="a-module"><angular-remote-root/></div>;
};


export function App() {

  const [additionalAppFlag, setAdditionalAppFlag] = useState(false);
  const [message, setMessage] = useState('');

  const addRemoteReactAppHandler = useCallback(() =>{
    setAdditionalAppFlag(!additionalAppFlag);
  },[additionalAppFlag, setAdditionalAppFlag])


  const setMessageHandler = useCallback((event:ChangeEvent) =>{
    const value = (event.target as HTMLInputElement).value;
    setMessage(value);
  }, [setMessage]);

  return (
    <>
      <React.Suspense fallback={null}>
        <h1>Основное host приложение</h1>
        <RemoteReactApp />
      </React.Suspense>
      <RemoteAngularApp/>
      <button onClick={addRemoteReactAppHandler}>{additionalAppFlag ? '- Удалить':'+ Добавать'} remote приложение react</button>
      <span style={{paddingLeft: '10px'}}>Сообщение для remote: <input type="text" onChange={setMessageHandler}/></span>
      {additionalAppFlag && <RemoteReactApp message={message}/>}
    </>
  );
}

export default App;
