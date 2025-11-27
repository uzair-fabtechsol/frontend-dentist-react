import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { 
  Shield, 
  Users, 
  Settings, 
  Database,
  Activity,
  AlertTriangle,
  CheckCircle,
  MoreVertical,
  UserPlus
} from 'lucide-react'
import Button from '../../components/Button'

const users = [
  { name: 'Dr. Sarah Smith', email: 'sarah@dentacare.pro', role: 'Admin', status: 'active', lastActive: '2 min ago' },
  { name: 'Dr. John Williams', email: 'john@dentacare.pro', role: 'Doctor', status: 'active', lastActive: '15 min ago' },
  { name: 'Lisa Martinez', email: 'lisa@dentacare.pro', role: 'Staff', status: 'active', lastActive: '1 hour ago' },
  { name: 'Mike Johnson', email: 'mike@dentacare.pro', role: 'Doctor', status: 'inactive', lastActive: '2 days ago' },
]

const systemSettings = [
  { label: 'Enable Two-Factor Auth', description: 'Require 2FA for all admin accounts', enabled: true },
  { label: 'Auto-backup Database', description: 'Daily automatic backups at midnight', enabled: true },
  { label: 'Email Notifications', description: 'Send email alerts for important events', enabled: false },
  { label: 'Maintenance Mode', description: 'Enable to show maintenance page to users', enabled: false },
]

const Admin = () => {
  return (
    <Box className="space-y-6">
      {/* Page Header */}
      <Box className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Box className="flex items-center gap-3">
          <Box 
            className="p-3 rounded-xl"
            sx={{ 
              background: 'linear-gradient(135deg, #dc3545 0%, #bd2130 100%)',
              boxShadow: '0 8px 24px rgba(220, 53, 69, 0.3)',
            }}
          >
            <Shield className="w-6 h-6 text-white" />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight={700} color="primary.main">
              Admin Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              System administration and user management
            </Typography>
          </Box>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<UserPlus className="w-4 h-4" />}
          sx={{
            background: 'linear-gradient(135deg, #dc3545 0%, #bd2130 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #e4606d 0%, #dc3545 100%)',
            }
          }}
        >
          Add New User
        </Button>
      </Box>

      {/* System Stats */}
      <Grid container spacing={3}>
        {[
          { label: 'Total Users', value: '24', icon: Users, color: '#1a2332', change: '+3 this week' },
          { label: 'Active Sessions', value: '12', icon: Activity, color: '#28a745', change: 'Real-time' },
          { label: 'Storage Used', value: '68%', icon: Database, color: '#4a90e2', change: '2.4 GB / 5 GB' },
          { label: 'System Alerts', value: '2', icon: AlertTriangle, color: '#d4af37', change: 'Action required' },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card className="hover-lift">
                <CardContent className="flex items-start justify-between">
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" fontWeight={700} color="primary.main">
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {stat.change}
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

      {/* Main Content */}
      <Grid container spacing={3}>
        {/* User Management */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box className="flex items-center justify-between mb-4">
                <Typography variant="h6" fontWeight={600} color="primary.main">
                  User Management
                </Typography>
                <Button variant="text" size="small">
                  View All Users
                </Button>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Last Active</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow key={index} hover>
                        <TableCell>
                          <Box className="flex items-center gap-3">
                            <Avatar sx={{ bgcolor: '#1a2332', border: '2px solid #d4af37' }}>
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </Avatar>
                            <Box>
                              <Typography variant="body2" fontWeight={600}>
                                {user.name}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {user.email}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={user.role}
                            size="small"
                            sx={{ 
                              fontWeight: 600,
                              bgcolor: user.role === 'Admin' ? '#dc354515' : 
                                       user.role === 'Doctor' ? '#1a233215' : 'grey.200',
                              color: user.role === 'Admin' ? '#dc3545' : 
                                     user.role === 'Doctor' ? '#1a2332' : 'grey.600',
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Box className="flex items-center gap-1">
                            {user.status === 'active' ? (
                              <CheckCircle className="w-4 h-4" style={{ color: '#28a745' }} />
                            ) : (
                              <AlertTriangle className="w-4 h-4" style={{ color: '#d4af37' }} />
                            )}
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: user.status === 'active' ? '#28a745' : '#d4af37',
                                textTransform: 'capitalize',
                              }}
                            >
                              {user.status}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary">
                            {user.lastActive}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Button variant="text" size="small" sx={{ minWidth: 'auto' }}>
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid item xs={12} lg={4}>
          <Card className="h-full">
            <CardContent>
              <Box className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5" style={{ color: '#8b95a5' }} />
                <Typography variant="h6" fontWeight={600} color="primary.main">
                  System Settings
                </Typography>
              </Box>

              <Box className="space-y-4">
                {systemSettings.map((setting, index) => (
                  <Box 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg"
                    sx={{ bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}
                  >
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        {setting.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {setting.description}
                      </Typography>
                    </Box>
                    <Switch 
                      defaultChecked={setting.enabled}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#d4af37',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#d4af37',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Button 
                variant="outlined" 
                fullWidth 
                sx={{ mt: 3 }}
                startIcon={<Settings className="w-4 h-4" />}
              >
                Advanced Settings
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Admin
