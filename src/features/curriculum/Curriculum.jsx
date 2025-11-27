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
          <Typography variant="h4" fontWeight={700}>
            Learning Curriculum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Continue your professional development journey
          </Typography>
        </Box>
        <Box className="flex items-center gap-3">
          <Box className="text-right">
            <Typography variant="h5" fontWeight={700} color="primary.main">
              156
            </Typography>
            <Typography variant="caption" color="text.secondary">
              CE Credits Earned
            </Typography>
          </Box>
          <Box 
            className="p-3 rounded-xl"
            sx={{ 
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            }}
          >
            <Award className="w-6 h-6 text-white" />
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Grid container spacing={3}>
        {[
          { label: 'Courses Completed', value: '8', icon: CheckCircle2, color: '#22c55e' },
          { label: 'In Progress', value: '3', icon: Play, color: '#1785f7' },
          { label: 'Total Hours', value: '42', icon: Clock, color: '#8b5cf6' },
          { label: 'Certificates', value: '5', icon: Award, color: '#f59e0b' },
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
                    <Typography variant="h5" fontWeight={700}>
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
      <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
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
                        ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)'
                        : 'linear-gradient(135deg, #1785f7 0%, #106de3 100%)',
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
                    color={
                      course.status === 'completed' ? 'success' :
                      course.status === 'in_progress' ? 'primary' : 'default'
                    }
                    sx={{ fontWeight: 600 }}
                  />
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {course.description}
                </Typography>

                {/* Meta */}
                <Box className="flex items-center gap-4 mb-3">
                  <Box className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <Typography variant="caption" color="text.secondary">
                      {course.duration}
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-1">
                    <Play className="w-4 h-4 text-gray-400" />
                    <Typography variant="caption" color="text.secondary">
                      {course.lessons} lessons
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
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
                        bgcolor: 'grey.100',
                      }}
                    />
                  </Box>
                )}

                <Button 
                  variant={course.status === 'locked' ? 'outlined' : 'contained'}
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

