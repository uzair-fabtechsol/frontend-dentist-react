import { NavLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { 
  Home, 
  UserPlus, 
  LayoutDashboard, 
  BookOpen, 
  MessageCircle, 
  Shield 
} from 'lucide-react'

const navItems = [
  { path: '/home', label: 'Home', icon: Home },
  { path: '/onboarding', label: 'Onboarding', icon: UserPlus },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/curriculum', label: 'Curriculum', icon: BookOpen },
  { path: '/chat', label: 'Chat with Vicky', icon: MessageCircle },
  { path: '/admin', label: 'Admin Dashboard', icon: Shield },
]

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home'
    }
    return location.pathname === path
  }

  return (
    <Box
      component="nav"
      className="sticky top-[73px] z-40 overflow-x-auto"
      sx={{
        bgcolor: '#2d3e50', // --navy-secondary
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      }}
    >
      <Box 
        className="flex items-center gap-1 px-4 py-2 max-w-[1400px] mx-auto"
        sx={{ minWidth: 'max-content' }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="no-underline"
            >
              <Box
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200"
                sx={{
                  bgcolor: active ? '#1a2332' : 'transparent', // --navy-primary when active
                  color: active ? '#d4af37' : '#c0c5ce', // --accent-gold when active, --silver-medium otherwise
                  '&:hover': {
                    bgcolor: active ? '#1a2332' : 'rgba(26, 35, 50, 0.5)',
                    color: '#d4af37', // --accent-gold on hover
                  },
                }}
              >
                <Icon className="w-4 h-4" />
                <Typography 
                  variant="body2" 
                  fontWeight={active ? 600 : 500}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  {item.label}
                </Typography>
              </Box>
            </NavLink>
          )
        })}
      </Box>
    </Box>
  )
}

export default Navbar
