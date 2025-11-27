import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

const Loader = ({ message = 'Loading...', size = 40 }) => {
  return (
    <Box 
      className="flex flex-col items-center justify-center gap-3 py-12"
    >
      <CircularProgress 
        size={size} 
        thickness={4}
        sx={{
          color: 'primary.main',
        }}
      />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}

export default Loader

