import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Box from '@mui/material/Box'
import { ExternalContext } from '../../context/CustomContext'


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const {setOpenlogin} = useContext(ExternalContext)
    const open = Boolean(anchorEl)
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogin = () => {
        setOpenlogin(true)
        handleClose()
    }


  

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="secondary"
            >
                <Box
                    boxShadow={1}
                    alignItems="center"
                    bgcolor={'white'}
                    justifyContent="center"
                    width={60}
                    height={35}
                    borderRadius={8}
                >
                    <MenuIcon sx={{marginBottom:.6}} fontSize="small" />
                    <AccountCircleIcon  fontSize="large" />
                </Box>
            </Button>
            <Menu
                sx={{
                    '& .MuiPaper-root': {
                        minWidth: 120,
                    },
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {(
                    <div>
                        <MenuItem onClick={handleLogin}>Login</MenuItem>
                        <MenuItem onClick={handleLogin}>signup</MenuItem>
                    </div>
                )}
            </Menu>
        </div>
    )
}
