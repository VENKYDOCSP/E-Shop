import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import brand1 from '../../assets/brands/brand1.svg'
import brand2 from '../../assets/brands/brand2.svg'
import brand3 from '../../assets/brands/brand3.svg'
import brand4 from '../../assets/brands/brand4.svg'
import brand5 from '../../assets/brands/brand5.svg'
import banner from '../../assets/banner/banner.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/skyblue'
import '@splidejs/react-splide/css/sea-green'
import '@splidejs/react-splide/css/core'
import CounterSection from './CounterSection'
import ButtonComponent from '../Button'

const Banner = () => {

    const bannerContent = [
        {
            title: 'FIND CLOTHES THAT MATCH YOUR STYLE',
            description:
                'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
            button: 'Shop Now',
            img: 'banner1.png'
        }
    ]

    const counters = [
        { target: 200, label: 'Brands' },
        { target: 2000, label: 'High-Quality Products' },
        { target: 30000, label: 'Happy Customers' },
    ];

    const brands = [
        { img: brand1, alt: 'brand1' },
        { img: brand2, alt: 'brand2' },
        { img: brand3, alt: 'brand3' },
        { img: brand4, alt: 'brand4' },
        { img: brand5, alt: 'brand5' },
        { img: brand1, alt: 'brand1' }
    ]

    return (
        <Box sx={{ backgroundColor: '#F2F0F1', borderRadius: '30px', px: 0 }}>
            <Box sx={{ px: { xs: 2, sm: 6, md: 6 }, py: { xs: 0, md: 0 } }}>
                <Grid2 container spacing={2}>
                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 12, lg: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 2, fontSize: { xs: '1.8rem', sm: '1.9rem', md: '2.5rem', lg: '3rem' }, textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' },mt:{xs:10,sm:10,md:8,lg:0} }}>
                            {bannerContent[0].title}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 3, fontFamily: 'satoshi', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' } }}>
                            {bannerContent[0].description}
                        </Typography>
                        <ButtonComponent name={bannerContent[0].button} link="/products" color="#ffffff" size="large" variant="contained" align="center" sx={{ margin:{ xs:'auto',sm:'auto',md:'auto',lg:'unset'}, display: 'block' }} />
                        <CounterSection counters={counters} />
                    </Grid2>
                    <Grid2 spacing={2} size={{ xs: 12, sm: 12, md: 12, lg: 6 }} align="center">
                        <Box
                            component="img"
                            src={banner}
                            alt="banner"
                            sx={{
                                width: '80%',
                                objectFit: 'cover',
                                maxWidth: { xs: '80%', md: '50%', lg: '100%' },
                                borderRadius: '20px',
                                mx: 'auto'
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Box>

            <Box sx={{ backgroundColor: '#000000', mt: -1, py: 0, zIndex: 99, position: 'relative' }}>

                <Splide
                    options={{
                        type: 'loop',
                        arrows: false,
                        drag: true,
                        pagination: false,
                        perPage: 5,
                        breakpoints: {
                            640: {
                                perPage: 1
                            }
                        },
                        autoplay: true,
                        interval: 4500,
                        speed: 800,
                        easing: 'ease-in-out',
                        gap: "1rem",
                        perMove: 1,
                        rewindByDrag: true
                    }}
                >
                    {brands.map((item, index) => (
                        <SplideSlide key={index}>
                            <img src={item.img} alt={`brandImg${index}`} style={{ maxWidth: '100%' }} />
                        </SplideSlide>
                    ))}
                </Splide>
            </Box>
        </Box >
    )
}

export default Banner
