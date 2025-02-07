import {  Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/Button'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: 'center', py: 5,mt:5 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Page Not Found</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>The page you're looking for doesn't exist.</Typography>
            <ButtonComponent variant="contained" name="Go to Home" color="white" onClick={() => navigate('/')}>Go to Home</ButtonComponent>
        </Box>
    );
};

export default NotFound;
