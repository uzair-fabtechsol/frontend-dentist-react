import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import { 
  Stethoscope, 
  Heart, 
  Github, 
  Twitter, 
  Linkedin,
  Mail 
} from 'lucide-react'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a2332',
        color: 'white',
        mt: 'auto',
      }}
    >
      {/* Main Footer Content */}
      <Box 
        className="px-4 py-12 md:px-8"
        sx={{ maxWidth: '1400px', mx: 'auto' }}
      >
        <Box className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <Box className="md:col-span-1">
            <Box className="flex items-center gap-2 mb-4">
              <Box 
                className="p-2 rounded-lg"
                sx={{ bgcolor: 'rgba(212, 175, 55, 0.2)' }}
              >
                <Stethoscope className="w-5 h-5" style={{ color: '#d4af37' }} />
              </Box>
              <Typography variant="h6" fontWeight={700}>
                DentaCare Pro
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ color: '#c0c5ce', mb: 3 }}
            >
              Empowering dental professionals with intelligent tools for better patient care.
            </Typography>
            <Box className="flex gap-2">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <IconButton 
                  key={index}
                  size="small"
                  sx={{ 
                    color: '#c0c5ce',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': { 
                      bgcolor: '#d4af37',
                      color: '#1a2332' 
                    }
                  }}
                >
                  <Icon className="w-4 h-4" />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2, color: '#d4af37' }}>
              Quick Links
            </Typography>
            {['Home', 'Dashboard', 'Curriculum', 'Chat with Vicky'].map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                sx={{ 
                  display: 'block',
                  color: '#c0c5ce',
                  py: 0.5,
                  '&:hover': { color: '#d4af37' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* Resources */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2, color: '#d4af37' }}>
              Resources
            </Typography>
            {['Documentation', 'API Reference', 'Support', 'Community'].map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                sx={{ 
                  display: 'block',
                  color: '#c0c5ce',
                  py: 0.5,
                  '&:hover': { color: '#d4af37' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2, color: '#d4af37' }}>
              Contact Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: '#c0c5ce', mb: 1 }}
            >
              support@dentacare.pro
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: '#c0c5ce', mb: 1 }}
            >
              +1 (555) 123-4567
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: '#c0c5ce' }}
            >
              123 Medical Center Dr.<br />
              Suite 100, Healthcare City
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Bar */}
      <Box 
        sx={{ 
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          py: 3,
          px: 4,
          bgcolor: '#141b27',
        }}
      >
        <Box 
          className="flex flex-col md:flex-row items-center justify-between gap-2 max-w-[1400px] mx-auto"
        >
          <Typography 
            variant="body2" 
            sx={{ color: '#8b95a5' }}
            className="flex items-center gap-1"
          >
            © 2024 DentaCare Pro. Made with 
            <Heart className="w-3 h-3 fill-current" style={{ color: '#d4af37' }} /> 
            for dental professionals.
          </Typography>
          <Box className="flex gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                variant="body2"
                sx={{ 
                  color: '#8b95a5',
                  '&:hover': { color: '#d4af37' }
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
