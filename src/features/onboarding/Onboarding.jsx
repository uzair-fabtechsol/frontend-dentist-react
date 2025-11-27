import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import LinearProgress from '@mui/material/LinearProgress'
import { 
  UserCircle, 
  Building2, 
  FileText, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import Button from '../../components/Button'

const steps = [
  { label: 'Personal Info', icon: UserCircle },
  { label: 'Practice Details', icon: Building2 },
  { label: 'Documents', icon: FileText },
  { label: 'Billing Setup', icon: CreditCard },
  { label: 'Complete', icon: CheckCircle },
]

const Onboarding = () => {
  const currentStep = 1 // Demo: second step

  return (
    <Box className="space-y-8">
      {/* Header */}
      <Box className="text-center mb-8">
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome to DentaCare Pro 🎉
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Let's get your practice set up. This should only take a few minutes.
        </Typography>
      </Box>

      {/* Progress */}
      <Card className="mb-8">
        <CardContent sx={{ py: 4 }}>
          <Box className="mb-4">
            <Box className="flex justify-between mb-2">
              <Typography variant="body2" color="text.secondary">
                Setup Progress
              </Typography>
              <Typography variant="body2" fontWeight={600} color="primary.main">
                40% Complete
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={40} 
              sx={{ 
                height: 8, 
                borderRadius: 4,
                bgcolor: 'grey.100',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: 'linear-gradient(90deg, #1785f7, #22c55e)',
                }
              }}
            />
          </Box>

          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={() => (
                      <Box 
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        sx={{
                          bgcolor: index <= currentStep ? 'primary.main' : 'grey.200',
                          color: index <= currentStep ? 'white' : 'grey.500',
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </Box>
                    )}
                  >
                    <Typography 
                      variant="caption" 
                      fontWeight={index === currentStep ? 600 : 400}
                      color={index === currentStep ? 'primary.main' : 'text.secondary'}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </CardContent>
      </Card>

      {/* Current Step Content */}
      <Card>
        <CardContent sx={{ py: 6, px: 4 }}>
          <Box className="text-center mb-8">
            <Box 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              sx={{ 
                background: 'linear-gradient(135deg, #1785f7 0%, #106de3 100%)',
                boxShadow: '0 8px 24px rgba(23, 133, 247, 0.3)',
              }}
            >
              <Building2 className="w-8 h-8 text-white" />
            </Box>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Practice Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tell us about your dental practice so we can customize your experience.
            </Typography>
          </Box>

          {/* Placeholder Form Area */}
          <Box 
            className="rounded-xl p-8 text-center"
            sx={{ 
              bgcolor: 'grey.50', 
              border: '2px dashed',
              borderColor: 'grey.200',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Practice details form will be implemented here.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Fields: Practice Name, Address, Phone, Specialties, Team Size, etc.
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box className="flex justify-between mt-8">
            <Button 
              variant="outlined" 
              startIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Previous
            </Button>
            <Button 
              variant="contained" 
              endIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Onboarding

