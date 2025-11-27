import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Chip from '@mui/material/Chip'
import { 
  Activity, 
  PieChart, 
  BarChart3, 
  Target,
  TrendingUp,
  Calendar,
  Clock,
  DollarSign
} from 'lucide-react'
import Button from '../../components/Button'

const recentActivity = [
  { action: 'Appointment completed', patient: 'Sarah J.', time: '10 min ago', type: 'success' },
  { action: 'New patient registered', patient: 'John D.', time: '25 min ago', type: 'info' },
  { action: 'Payment received', patient: 'Emily R.', time: '1 hour ago', type: 'success' },
  { action: 'Appointment rescheduled', patient: 'Mike W.', time: '2 hours ago', type: 'warning' },
]

const Dashboard = () => {
  return (
    <Box className="space-y-6">
      {/* Page Header */}
      <Box className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your practice performance at a glance
          </Typography>
        </Box>
        <Box className="flex gap-2">
          <Button variant="outlined" startIcon={<Calendar className="w-4 h-4" />}>
            This Week
          </Button>
          <Button variant="contained" color="secondary" startIcon={<Activity className="w-4 h-4" />}>
            Generate Report
          </Button>
        </Box>
      </Box>

      {/* Charts Row */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} lg={8}>
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center justify-between mb-4">
                <Box>
                  <Typography variant="h6" fontWeight={600} color="primary.main">
                    Revenue Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monthly revenue performance
                  </Typography>
                </Box>
                <Box className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: '#28a745' }} />
                  <Typography variant="body2" color="success.main" fontWeight={600}>
                    +15.3% vs last month
                  </Typography>
                </Box>
              </Box>
              
              {/* Chart Placeholder */}
              <Box 
                className="rounded-xl flex items-center justify-center"
                sx={{ 
                  bgcolor: 'grey.50', 
                  height: '300px',
                  border: '2px dashed',
                  borderColor: 'grey.300',
                }}
              >
                <Box className="text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2" style={{ color: '#c0c5ce' }} />
                  <Typography variant="body2" color="text.secondary">
                    Revenue chart visualization
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Treatment Distribution */}
        <Grid item xs={12} lg={4}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
                Treatment Distribution
              </Typography>
              
              {/* Pie Chart Placeholder */}
              <Box 
                className="rounded-xl flex items-center justify-center mb-4"
                sx={{ 
                  bgcolor: 'grey.50', 
                  height: '180px',
                  border: '2px dashed',
                  borderColor: 'grey.300',
                }}
              >
                <Box className="text-center">
                  <PieChart className="w-10 h-10 mx-auto mb-2" style={{ color: '#c0c5ce' }} />
                  <Typography variant="caption" color="text.secondary">
                    Pie chart
                  </Typography>
                </Box>
              </Box>

              {/* Legend */}
              <Box className="space-y-2">
                {[
                  { label: 'Cleanings', value: '35%', color: '#1a2332' },
                  { label: 'Fillings', value: '25%', color: '#28a745' },
                  { label: 'Root Canals', value: '20%', color: '#d4af37' },
                  { label: 'Other', value: '20%', color: '#4a90e2' },
                ].map((item) => (
                  <Box key={item.label} className="flex items-center justify-between">
                    <Box className="flex items-center gap-2">
                      <Box 
                        className="w-3 h-3 rounded-full" 
                        sx={{ bgcolor: item.color }} 
                      />
                      <Typography variant="body2">{item.label}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={600}>{item.value}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Bottom Row */}
      <Grid container spacing={3}>
        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
                Recent Activity
              </Typography>
              
              <Box className="space-y-3">
                {recentActivity.map((item, index) => (
                  <Box 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    sx={{ bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}
                  >
                    <Box 
                      className="w-2 h-2 rounded-full"
                      sx={{ 
                        bgcolor: item.type === 'success' ? '#28a745' : 
                                 item.type === 'warning' ? '#d4af37' : '#4a90e2'
                      }}
                    />
                    <Box className="flex-1">
                      <Typography variant="body2" fontWeight={500}>
                        {item.action}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.patient}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {item.time}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Goals */}
        <Grid item xs={12} md={6}>
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center justify-between mb-4">
                <Typography variant="h6" fontWeight={600} color="primary.main">
                  Monthly Goals
                </Typography>
                <Chip 
                  label="On Track" 
                  size="small" 
                  sx={{ 
                    fontWeight: 600,
                    bgcolor: '#28a74515',
                    color: '#28a745',
                  }}
                />
              </Box>
              
              <Box className="space-y-4">
                {[
                  { label: 'Patient Visits', current: 156, target: 200, icon: Target },
                  { label: 'Revenue Target', current: 48250, target: 60000, icon: DollarSign, format: '$' },
                  { label: 'Avg Wait Time', current: 12, target: 10, icon: Clock, unit: 'min', inverse: true },
                ].map((goal) => {
                  const Icon = goal.icon
                  const progress = goal.inverse 
                    ? Math.max(0, 100 - ((goal.current - goal.target) / goal.target * 100))
                    : (goal.current / goal.target) * 100
                  
                  return (
                    <Box key={goal.label}>
                      <Box className="flex items-center justify-between mb-1">
                        <Box className="flex items-center gap-2">
                          <Icon className="w-4 h-4" style={{ color: '#8b95a5' }} />
                          <Typography variant="body2">{goal.label}</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight={600}>
                          {goal.format}{goal.current.toLocaleString()}{goal.unit} / {goal.format}{goal.target.toLocaleString()}{goal.unit}
                        </Typography>
                      </Box>
                      <Box 
                        className="h-2 rounded-full overflow-hidden"
                        sx={{ bgcolor: 'grey.200' }}
                      >
                        <Box 
                          className="h-full rounded-full"
                          sx={{ 
                            width: `${Math.min(progress, 100)}%`,
                            bgcolor: progress >= 80 ? '#28a745' : progress >= 50 ? '#d4af37' : '#dc3545',
                          }}
                        />
                      </Box>
                    </Box>
                  )
                })}
              </Box>

              {/* Team */}
              <Box className="mt-6 pt-4" sx={{ borderTop: '1px solid', borderColor: 'grey.200' }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Team Members Online
                </Typography>
                <AvatarGroup max={5}>
                  {['Dr. Smith', 'Dr. Jones', 'Lisa M.', 'Tom R.', 'Amy K.'].map((name) => (
                    <Avatar 
                      key={name} 
                      sx={{ 
                        width: 36, 
                        height: 36, 
                        bgcolor: '#1a2332',
                        fontSize: '0.875rem',
                        border: '2px solid #d4af37',
                      }}
                    >
                      {name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                  ))}
                </AvatarGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
