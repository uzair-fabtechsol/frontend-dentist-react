import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <Box className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Box 
        component="main" 
        className="flex-1 px-4 py-8 md:px-8 lg:px-16"
        sx={{ 
          maxWidth: '1400px', 
          width: '100%', 
          mx: 'auto',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout

