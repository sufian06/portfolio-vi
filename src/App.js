import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes/router';

function App() {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
