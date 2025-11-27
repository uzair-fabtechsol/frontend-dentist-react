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
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
                  bgcolor: active ? 'primary.main' : 'transparent',
                  color: active ? 'white' : 'text.secondary',
                  borderBottom: active ? '2px solid' : '2px solid transparent',
                  borderColor: active ? 'secondary.main' : 'transparent',
                  '&:hover': {
                    bgcolor: active ? 'primary.light' : 'grey.100',
                    color: active ? 'white' : 'primary.main',
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
