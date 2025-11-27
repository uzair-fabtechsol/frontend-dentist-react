import MuiButton from '@mui/material/Button'

const Button = ({ 
  children, 
  variant = 'contained', 
  color = 'primary',
  startIcon,
  endIcon,
  fullWidth = false,
  size = 'medium',
  ...props 
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      size={size}
      className="hover-lift"
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button

