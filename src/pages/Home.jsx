import { Typography, Container, Button } from '@mui/material'
import React from 'react'
import ProductCard from '../component/ProductCard'
import Banner from '../layouts/Navbar/Banner'
import { Box } from '@mui/system'
import MapIcon from '@mui/icons-material/Map'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import Property from '../data'

function Home() {
    const notMap = true

    return (
        <Box>
            {notMap && (
                <>
                    <Banner />
                    <Container
                        maxWidth="xl"
                        sx={{
                            width: '94%',
                        }}
                    >
                        <Typography pt={2} pb={2} color="primary" variant="h4">
              Looking for the perfect stay?
                        </Typography>
                        <ProductCard property={Property} />
                    </Container>
                </>
            )}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'sticky',
                    bottom: 60,
                    zIndex: 10,
                    width: '100%',
                }}
            >
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#222222',
                            color: 'white',
                            borderRadius: 6,
                            height: 50,
                        }}
                        size="medium"
                        endIcon={notMap ? <MapIcon /> : <FormatListBulletedIcon />}
                    >
                        {notMap ? 'Show Map' : 'Show List'}
                    </Button>
                </Box>
            </div>
        </Box>
    )
}

export default Home
