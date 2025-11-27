import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import LinearProgress from '@mui/material/LinearProgress'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Award,
  CheckCircle2,
  Lock,
  Star,
  ArrowRight
} from 'lucide-react'
import Button from '../../components/Button'

const courses = [
  {
    title: 'Advanced Root Canal Techniques',
    description: 'Master the latest endodontic procedures and technologies.',
    duration: '4 hours',
    lessons: 12,
    progress: 75,
    status: 'in_progress',
    rating: 4.8,
  },
  {
    title: 'Digital Dentistry Fundamentals',
    description: 'Introduction to CAD/CAM and digital workflow in dental practice.',
    duration: '6 hours',
    lessons: 18,
    progress: 100,
    status: 'completed',
    rating: 4.9,
  },
  {
    title: 'Pediatric Dentistry Best Practices',
    description: 'Learn effective techniques for treating young patients.',
    duration: '3 hours',
    lessons: 10,
    progress: 30,
    status: 'in_progress',
    rating: 4.7,
  },
  {
    title: 'Implantology Masterclass',
    description: 'Comprehensive guide to dental implant procedures.',
    duration: '8 hours',
    lessons: 24,
    progress: 0,
    status: 'locked',
    rating: 4.9,
  },
]

const Curriculum = () => {
  return (
    <Box className="space-y-6">
      {/* Page Header */}
      <Box className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Box>
          <Typography variant="h4" fontWeight={700} color="primary.main">
            Learning Curriculum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Continue your professional development journey
          </Typography>
        </Box>
        <Box className="flex items-center gap-3">
          <Box className="text-right">
            <Typography variant="h5" fontWeight={700} sx={{ color: '#d4af37' }}>
              156
            </Typography>
            <Typography variant="caption" color="text.secondary">
              CE Credits Earned
            </Typography>
          </Box>
          <Box 
            className="p-3 rounded-xl"
            sx={{ 
              background: 'linear-gradient(135deg, #d4af37 0%, #b8952e 100%)',
            }}
          >
            <Award className="w-6 h-6 text-white" />
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Grid container spacing={3}>
        {[
          { label: 'Courses Completed', value: '8', icon: CheckCircle2, color: '#28a745' },
          { label: 'In Progress', value: '3', icon: Play, color: '#1a2332' },
          { label: 'Total Hours', value: '42', icon: Clock, color: '#4a90e2' },
          { label: 'Certificates', value: '5', icon: Award, color: '#d4af37' },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <Grid item xs={6} md={3} key={index}>
              <Card className="hover-lift">
                <CardContent className="flex items-center gap-3">
                  <Box 
                    className="p-2 rounded-lg"
                    sx={{ bgcolor: `${stat.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700} color="primary.main">
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      {/* Courses Grid */}
      <Typography variant="h6" fontWeight={600} color="primary.main" sx={{ mt: 4 }}>
        Your Courses
      </Typography>
      
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="hover-lift h-full">
              <CardContent>
                <Box className="flex items-start justify-between mb-3">
                  <Box 
                    className="p-3 rounded-xl"
                    sx={{ 
                      background: course.status === 'locked' 
                        ? 'linear-gradient(135deg, #8b95a5 0%, #6c757d 100%)'
                        : 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
                      border: course.status !== 'locked' ? '2px solid #d4af37' : 'none',
                    }}
                  >
                    {course.status === 'locked' ? (
                      <Lock className="w-5 h-5 text-white" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-white" />
                    )}
                  </Box>
                  <Chip 
                    label={
                      course.status === 'completed' ? 'Completed' :
                      course.status === 'in_progress' ? 'In Progress' : 'Locked'
                    }
                    size="small"
                    sx={{ 
                      fontWeight: 600,
                      bgcolor: course.status === 'completed' ? '#28a74515' :
                               course.status === 'in_progress' ? '#1a233215' : 'grey.200',
                      color: course.status === 'completed' ? '#28a745' :
                             course.status === 'in_progress' ? '#1a2332' : 'grey.600',
                    }}
                  />
                </Box>

                <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {course.description}
                </Typography>

                {/* Meta */}
                <Box className="flex items-center gap-4 mb-3">
                  <Box className="flex items-center gap-1">
                    <Clock className="w-4 h-4" style={{ color: '#8b95a5' }} />
                    <Typography variant="caption" color="text.secondary">
                      {course.duration}
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-1">
                    <Play className="w-4 h-4" style={{ color: '#8b95a5' }} />
                    <Typography variant="caption" color="text.secondary">
                      {course.lessons} lessons
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-1">
                    <Star className="w-4 h-4" style={{ color: '#d4af37', fill: '#d4af37' }} />
                    <Typography variant="caption" color="text.secondary">
                      {course.rating}
                    </Typography>
                  </Box>
                </Box>

                {/* Progress */}
                {course.status !== 'locked' && (
                  <Box className="mb-4">
                    <Box className="flex justify-between mb-1">
                      <Typography variant="caption" color="text.secondary">
                        Progress
                      </Typography>
                      <Typography variant="caption" fontWeight={600}>
                        {course.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress}
                      sx={{ 
                        height: 6, 
                        borderRadius: 3,
                        bgcolor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: course.progress === 100 ? '#28a745' : '#1a2332',
                        }
                      }}
                    />
                  </Box>
                )}

                <Button 
                  variant={course.status === 'locked' ? 'outlined' : 'contained'}
                  color={course.status === 'locked' ? 'primary' : 'secondary'}
                  fullWidth
                  disabled={course.status === 'locked'}
                  endIcon={course.status !== 'locked' && <ArrowRight className="w-4 h-4" />}
                >
                  {course.status === 'completed' ? 'Review Course' :
                   course.status === 'in_progress' ? 'Continue' : 'Unlock Course'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Curriculum
