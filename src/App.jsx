import 'styles/globals.css';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='' element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
