import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import { 
  Stethoscope, 
  Bell, 
  Search, 
  Settings,
  Crown 
} from 'lucide-react'

const Header = () => {
  return (
    <Box
      component="header"
      className="glass-effect sticky top-0 z-50"
      sx={{
        px: { xs: 2, md: 4 },
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Box className="flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo & Brand */}
        <Box className="flex items-center gap-3">
          <Box 
            className="p-2 rounded-xl"
            sx={{ 
              background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
              boxShadow: '0 4px 15px rgba(26, 35, 50, 0.3)',
            }}
          >
            <Stethoscope className="w-6 h-6 text-white" />
          </Box>
          <Box>
            <Typography 
              variant="h6" 
              className="font-bold"
              sx={{ lineHeight: 1.2, color: 'primary.main' }}
            >
              DentaCare Pro
            </Typography>
            <Box className="flex items-center gap-1">
              <Crown className="w-3 h-3" style={{ color: '#d4af37' }} />
              <Typography variant="caption" color="text.secondary">
                Premium Dental Assistant
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Search Bar - Hidden on mobile */}
        <Box 
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full"
          sx={{ 
            bgcolor: 'grey.100',
            border: '1px solid',
            borderColor: 'grey.200',
            minWidth: '300px',
          }}
        >
          <Search className="w-4 h-4" style={{ color: '#8b95a5' }} />
          <Typography variant="body2" color="text.secondary">
            Search patients, appointments...
          </Typography>
        </Box>

        {/* Actions */}
        <Box className="flex items-center gap-1 md:gap-2">
          <IconButton 
            className="hover-lift"
            sx={{ 
              bgcolor: 'grey.100',
              '&:hover': { bgcolor: 'grey.200' }
            }}
          >
            <Badge badgeContent={3} color="error" max={9}>
              <Bell className="w-5 h-5" style={{ color: '#2d3e50' }} />
            </Badge>
          </IconButton>
          
          <IconButton 
            className="hover-lift hidden sm:flex"
            sx={{ 
              bgcolor: 'grey.100',
              '&:hover': { bgcolor: 'grey.200' }
            }}
          >
            <Settings className="w-5 h-5" style={{ color: '#2d3e50' }} />
          </IconButton>

          <Avatar 
            sx={{ 
              ml: 1,
              width: 40, 
              height: 40,
              bgcolor: 'primary.main',
              border: '2px solid',
              borderColor: 'secondary.main',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            DR
          </Avatar>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
