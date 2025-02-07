import './App.css';
import Routes from './routes/Routes';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const pathName = useLocation()
  console.log(pathName, "pathName")
  useEffect(() => {
    console.log("App")
    window.scrollTo(0, 0)
  }, [pathName.pathname])
  return (
    <>
      <Header />
      <Box sx={{ mt: 6 }}>
        <Routes />
      </Box>
      <Footer />
    </>
  );
}

export default App;
