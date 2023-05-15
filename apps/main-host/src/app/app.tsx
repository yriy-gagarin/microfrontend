import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const RemoteApp = React.lazy(() => import('remote-app/Module'));


export function App() {

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./remote-app">RemoteApp</Link>
        </li>
        <li>
          <Link to="./angular-remote-app">Angular RemoteApp</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/*" element={<NxWelcome title="main-host" />} />
        <Route path="/remote-app" element={<RemoteApp />} />
        <Route path="/angular-remote-app" element={<>todo</>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
