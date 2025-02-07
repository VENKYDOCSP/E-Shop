import { Box, Grid2, Typography, IconButton, Link } from '@mui/material';
import { Instagram, Twitter, GitHub } from '@mui/icons-material';

function Footer() {
    return (
        <Box className="" sx={{ backgroundColor: '#f5f5f5', mt: 5, py: 5, borderRadius: '30px' }}>
            <Grid2 container spacing={4} sx={{ px: 5, py: 3 }}>

                <Grid2 size={{ sm: 6, md: 2, lg: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2 }}>
                        SHOP.CO
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pb: 3, fontFamily: 'satoshi', fontSize: {
                        xs:"h5",sm:"18px"
                    } }}>
                        We have clothes that suit your style and which you’re proud to wear. From women to men.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, pt: 1, fontFamily: 'satoshi' }} >
                        <IconButton color="inherit" underline="none" aria-label="Instagram">
                            <Instagram />
                        </IconButton>
                        <IconButton color="inherit" underline="none" aria-label="Twitter">
                            <Twitter />
                        </IconButton>
                        <IconButton color="inherit" underline="none" aria-label="GitHub">
                            <GitHub />
                        </IconButton>
                    </Box>
                </Grid2>

                <Grid2 size={{ xs: 6, sm: 6, md: 4, lg: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2 }}>
                        Company
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">About</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Features</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Works</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Career</Link>
                    </Typography>
                </Grid2>

                <Grid2 size={{ xs: 6, sm: 6, md: 4, lg: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2 }}>
                        Help
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Customer Support</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Delivery Details</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Terms & Conditions</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Privacy Policy</Link>
                    </Typography>
                </Grid2>


                <Grid2 size={{ xs: 6, sm: 6, md: 4, lg: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2 }}>
                        FAQ
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Account</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Manage Delivery</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Orders</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Payments</Link>
                    </Typography>
                </Grid2>

                <Grid2 size={{ xs: 6, sm: 6, md: 2, lg: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2 }}>
                        Resources
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Free eBook</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">Development Tutorial</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none">How to - Blog</Link>
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', pt: 1, fontFamily: 'satoshi' }} >
                        <Link href="#" color="inherit" underline="none" >YouTube Playlist</Link>
                    </Typography>
                </Grid2>
            </Grid2>

            <Box sx={{ maxWidth: 1280, mx: 'auto', my: 2 }}>
                <hr />
            </Box>

            <Box >
                <Typography align='center' variant="body1" sx={{ color: 'text.secondary', fontFamily: 'satoshi' }}>
                    © 2000-2025, All rights reserved
                </Typography>

                {/* <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton color="inherit" underline="none">
                        <img src={payment1} alt="payment" />
                    </IconButton>
                    <IconButton color="inherit" underline="none">
                        <img src={payment2} alt="payment" />
                    </IconButton>
                    <IconButton color="inherit" underline="none">
                        <img src={payment3} alt="payment" />
                    </IconButton>
                    <IconButton color="inherit" underline="none">
                        <img src={payment4} alt="payment" />
                    </IconButton>
                    <IconButton color="inherit" underline="none">
                        <img src={payment5} alt="payment" />
                    </IconButton>
                </Box> */}
            </Box>
        </Box>
    );
}

export default Footer;
