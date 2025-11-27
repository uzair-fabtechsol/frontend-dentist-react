import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import { 
  Send, 
  Sparkles, 
  Bot, 
  User,
  Lightbulb,
  BookOpen,
  Stethoscope,
  HelpCircle
} from 'lucide-react'

const quickPrompts = [
  { label: 'Treatment Plans', icon: Stethoscope },
  { label: 'Patient Education', icon: BookOpen },
  { label: 'Best Practices', icon: Lightbulb },
  { label: 'Get Help', icon: HelpCircle },
]

const chatHistory = [
  {
    role: 'assistant',
    content: "Hello! I'm Vicky, your AI dental assistant. I'm here to help you with treatment planning, patient education materials, clinical guidelines, and more. How can I assist you today?",
    timestamp: '10:30 AM',
  },
  {
    role: 'user',
    content: "What's the recommended protocol for a patient presenting with acute periapical abscess?",
    timestamp: '10:32 AM',
  },
  {
    role: 'assistant',
    content: "For acute periapical abscess, here's the recommended protocol:\n\n**Immediate Management:**\n1. Establish drainage (through tooth or incision)\n2. Prescribe antibiotics if systemic involvement\n3. Pain management with appropriate analgesics\n\n**Definitive Treatment:**\n- Root canal therapy or extraction\n- Follow-up within 24-48 hours\n\nWould you like more details on any specific aspect?",
    timestamp: '10:32 AM',
  },
]

const Chat = () => {
  const [message, setMessage] = useState('')

  return (
    <Box className="h-[calc(100vh-300px)] min-h-[500px] flex flex-col">
      {/* Header */}
      <Box className="flex items-center justify-between mb-4">
        <Box className="flex items-center gap-3">
          <Box 
            className="p-3 rounded-xl"
            sx={{ 
              background: 'linear-gradient(135deg, #1a2332 0%, #2d3e50 100%)',
              boxShadow: '0 8px 24px rgba(26, 35, 50, 0.3)',
              border: '2px solid #d4af37',
            }}
          >
            <Bot className="w-6 h-6 text-white" />
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={700} color="primary.main">
              Chat with Vicky
            </Typography>
            <Box className="flex items-center gap-2">
              <Box className="w-2 h-2 rounded-full" style={{ backgroundColor: '#28a745' }} />
              <Typography variant="caption" color="text.secondary">
                AI Dental Assistant • Online
              </Typography>
            </Box>
          </Box>
        </Box>
        <Chip 
          icon={<Sparkles className="w-4 h-4" style={{ color: '#d4af37' }} />}
          label="Powered by AI"
          size="small"
          sx={{ 
            bgcolor: '#d4af3715',
            color: '#d4af37',
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Quick Prompts */}
      <Box className="flex gap-2 mb-4 flex-wrap">
        {quickPrompts.map((prompt, index) => {
          const Icon = prompt.icon
          return (
            <Chip
              key={index}
              icon={<Icon className="w-4 h-4" />}
              label={prompt.label}
              variant="outlined"
              clickable
              sx={{ 
                borderColor: 'grey.300',
                '&:hover': { borderColor: '#1a2332', bgcolor: '#1a233208' }
              }}
            />
          )
        })}
      </Box>

      {/* Chat Messages */}
      <Card className="flex-1 overflow-hidden">
        <CardContent className="h-full overflow-y-auto p-4">
          <Box className="space-y-4">
            {chatHistory.map((msg, index) => (
              <Box 
                key={index}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <Avatar 
                  sx={{ 
                    width: 36, 
                    height: 36,
                    bgcolor: msg.role === 'user' ? '#1a2332' : '#2d3e50',
                    border: msg.role === 'assistant' ? '2px solid #d4af37' : 'none',
                  }}
                >
                  {msg.role === 'user' ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </Avatar>
                <Box 
                  className={`max-w-[70%] p-4 rounded-2xl ${
                    msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'
                  }`}
                  sx={{ 
                    bgcolor: msg.role === 'user' ? '#1a2332' : 'grey.100',
                    color: msg.role === 'user' ? 'white' : 'text.primary',
                    border: msg.role === 'assistant' ? '1px solid' : 'none',
                    borderColor: 'grey.200',
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {msg.content}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      display: 'block',
                      mt: 1,
                      opacity: 0.7,
                      textAlign: msg.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    {msg.timestamp}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Input Area */}
      <Box className="mt-4">
        <Card>
          <CardContent sx={{ py: 2 }}>
            <Box className="flex items-center gap-2">
              <TextField
                fullWidth
                placeholder="Ask Vicky anything about dental care..."
                variant="outlined"
                size="small"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    bgcolor: 'grey.50',
                  }
                }}
              />
              <IconButton 
                sx={{ 
                  background: 'linear-gradient(135deg, #d4af37 0%, #b8952e 100%)',
                  color: '#1a2332',
                  '&:hover': { 
                    background: 'linear-gradient(135deg, #e9c84a 0%, #d4af37 100%)',
                  },
                  width: 44,
                  height: 44,
                }}
              >
                <Send className="w-5 h-5" />
              </IconButton>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Vicky can help with treatment protocols, patient education, and clinical guidelines.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Chat
