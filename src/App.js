import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.css';
const Layout = lazy(() => import("layout"));
const Page = lazy(() => import("container/Page"));
const Page404 = lazy(() => import("container/Page404"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="*" element={<Page404/>} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
