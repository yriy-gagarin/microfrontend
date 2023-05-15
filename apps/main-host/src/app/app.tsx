import * as React from 'react';
import {bootstrapRemoteApp} from 'angular-remote/Module';
import {useEffect, useRef} from "react";

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

  return (
    <>
      <React.Suspense fallback={null}>
        <h1>Основное host приложение</h1>
        <RemoteReactApp />

        {/*      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./remote-app">RemoteApp</Link>
        </li>
        <li>
          <Link to="./angular-remote-app">Angular RemoteApp</Link>
        </li>
      </ul>*/}
        {/*      <Routes>
        <Route path="/remote-app" element={<RemoteReactApp />} />
        <Route path="/angular-remote-app" element={<>todo</>} />
      </Routes>*/}
      </React.Suspense>
      <RemoteAngularApp/>
    </>
  );
}

export default App;
