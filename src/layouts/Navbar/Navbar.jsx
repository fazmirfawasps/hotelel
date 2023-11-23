import React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Divider,
    Container,
    useMediaQuery
} from '@mui/material'
import { Stack, } from '@mui/system'
import BasicMenu from './BasicMenu'
import CustomizedSnackbars from '../../component/Customsnak'
import LanguageIcon from '@mui/icons-material/Language'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const matches = useMediaQuery('(min-width:600px)')

    return (
        <>
            <Box></Box>
            <Box sx={{ position: 'sticky', top: 0, zIndex: 5 }}>
                <Container maxWidth="xl" sx={{ width: '98%' }}>
                    <AppBar
                        sx={{ minWidth: '100%', boxShadow: 'none' }}
                        position="static"
                        color="nav"
                    >
                        <Toolbar>
                            <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 600 }}>
                                {' '}
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: 'none', color: '#a64942' }}
                                >
                                    {' '}
                  Hotel{' '}
                                </NavLink>{' '}
                            </Typography>

                            <Stack direction="row" spacing={1.5} mr={5}>
                                {matches ? (
                                    <Box
                                        component={'span'}
                                        sx={{ paddingTop: 2, cursor: 'pointer' }}
                                    >
                    Host an experience
                                    </Box>
                                ) : (
                                    ''
                                )}
                                <Box component={'span'} sx={{ paddingTop: 2 }}>
                                    <LanguageIcon fontSize="small" />
                                </Box>
                                <BasicMenu />
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Container>
                <Divider />

                <CustomizedSnackbars />
            </Box>
        </>
    )
}

export default Navbar
