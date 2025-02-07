import { Box, Container, Grid, Pagination, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Grid2 } from '@mui/material';
import React, { useEffect, useState, useMemo } from 'react';

import ProductJson from '../ProductJson';
import Product from '../components/Products/Product';
import useDebouncedValue from '../components/useDebouncedValue';
import Breadcrumbs from '../components/Breadcrumbs ';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../redux/features/category/categorySlice';

const POSTS_PER_PAGE = 8;



const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const categories = useSelector((state) => state.categories?.categories || "");
    // console.log(categories, "categories")
    const [selectedCategory, setSelectedCategory] = useState(categories || '');
    const debouncedValue = useDebouncedValue(search, 500);
    const dispatch = useDispatch();


    const useFilteredProducts = (searchTerm, selectedCategory) => {
        return useMemo(() => {
            let filtered = ProductJson;

            if (selectedCategory) {
                dispatch(setCategories(selectedCategory));
                filtered = filtered.filter((item) => item.category === selectedCategory);
            }

            if (searchTerm) {
                filtered = filtered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            }

            return filtered;
        }, [searchTerm, selectedCategory]);

    };
    const filteredProducts = useFilteredProducts(debouncedValue, selectedCategory);
    const totalPages = useMemo(() => Math.ceil(filteredProducts.length / POSTS_PER_PAGE), [filteredProducts]);

    const paginatedValue = useMemo(() => {
        return filteredProducts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    const handlePageChange = (_, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };

    const categoriesData = useMemo(() => {
        return Array.from(new Set(ProductJson.map((product) => product.category)));
    }, []);

    if (!ProductJson || ProductJson.length === 0) {
        return <Typography variant="h6">No products available.</Typography>;
    }

    return (
        <Container>
            <Breadcrumbs pageName="Products" />
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary', pb: 4, mt: 3, mb: 0 }}>
                    Products
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 5, flexWrap: 'wrap' }}>
                    <TextField
                        onChange={(e) => setSearch(e.target.value)}
                        label="Search by product name"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: '100%',
                            '& .MuiInputLabel-root': { fontFamily: 'Satoshi' },
                            '& .MuiOutlinedInput-root': { fontFamily: 'Satoshi', borderRadius: '30px' },
                        }}
                    />
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>All Categories</em>
                            </MenuItem>
                            {categoriesData.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Grid2 container spacing={2}>
                    {paginatedValue?.map((product) => (
                        <Grid2 key={product.id} spacing={2} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Product product={product} />
                        </Grid2>
                    ))}
                </Grid2>

                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="white"
                    sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}
                    aria-label="Products pagination"
                />
            </Box>
        </Container>
    );
};

export default Products;
