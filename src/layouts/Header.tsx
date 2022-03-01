import { Box } from '@mui/material'
import { Title } from 'src/components/Title'

export const Header: React.FC = () => (
  <Box
    component="header"
    textAlign="center"
    mb={ 2 }
  >
    <Title />
  </Box>
)
