import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import Button from '../../components/Button'

const statsData = [
  { 
    label: 'Total Patients', 
    value: '2,847', 
    change: '+12%', 
    icon: Users,
    color: '#1785f7'
  },
  { 
    label: 'Appointments Today', 
    value: '18', 
    change: '+3', 
    icon: Calendar,
    color: '#22c55e'
  },
  { 
    label: 'Revenue This Month', 
    value: '$48,250', 
    change: '+8.2%', 
    icon: TrendingUp,
    color: '#f59e0b'
  },
  { 
    label: 'Avg. Wait Time', 
    value: '12 min', 
    change: '-5%', 
    icon: Clock,
    color: '#8b5cf6'
  },
]

const upcomingAppointments = [
  { time: '09:00 AM', patient: 'Sarah Johnson', type: 'Routine Checkup', status: 'confirmed' },
  { time: '10:30 AM', patient: 'Mike Williams', type: 'Root Canal', status: 'confirmed' },
  { time: '11:45 AM', patient: 'Emily Davis', type: 'Teeth Cleaning', status: 'pending' },
  { time: '02:00 PM', patient: 'James Brown', type: 'Crown Fitting', status: 'confirmed' },
]

const Home = () => {
  return (
    <Box className="space-y-8">
      {/* Welcome Section */}
      <Box 
        className="rounded-2xl p-6 md:p-8"
        sx={{
          background: 'linear-gradient(135deg, #1785f7 0%, #106de3 50%, #174b91 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome back, Dr. Smith! 👋
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: '600px' }}>
          You have 18 appointments scheduled for today. Your first patient arrives in 45 minutes.
        </Typography>
        <Button 
          variant="contained" 
          endIcon={<ArrowRight className="w-4 h-4" />}
          sx={{ 
            mt: 3, 
            bgcolor: 'white', 
            color: 'primary.main',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
          }}
        >
          View Today's Schedule
        </Button>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {statsData.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card className="hover-lift h-full">
                <CardContent className="flex items-start justify-between">
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: stat.change.startsWith('+') ? 'success.main' : 'error.main',
                        fontWeight: 600 
                      }}
                    >
                      {stat.change} from last month
                    </Typography>
                  </Box>
                  <Box 
                    className="p-3 rounded-xl"
                    sx={{ bgcolor: `${stat.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      {/* Upcoming Appointments */}
      <Card>
        <CardContent>
          <Box className="flex items-center justify-between mb-4">
            <Typography variant="h6" fontWeight={600}>
              Today's Appointments
            </Typography>
            <Button variant="text" size="small" endIcon={<ArrowRight className="w-4 h-4" />}>
              View All
            </Button>
          </Box>
          
          <Box className="space-y-3">
            {upcomingAppointments.map((apt, index) => (
              <Box 
                key={index}
                className="flex items-center justify-between p-4 rounded-xl"
                sx={{ bgcolor: 'grey.50' }}
              >
                <Box className="flex items-center gap-4">
                  <Box 
                    className="px-3 py-2 rounded-lg text-center"
                    sx={{ bgcolor: 'primary.main', color: 'white', minWidth: '80px' }}
                  >
                    <Typography variant="body2" fontWeight={600}>
                      {apt.time}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" fontWeight={600}>
                      {apt.patient}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {apt.type}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-center gap-2">
                  {apt.status === 'confirmed' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                  )}
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: apt.status === 'confirmed' ? 'success.main' : 'warning.main',
                      fontWeight: 600,
                      textTransform: 'capitalize'
                    }}
                  >
                    {apt.status}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Home

