import { Title } from '@components/Title'
import { Box } from '@mui/material'

export const Header: React.FC = () => (
  <Box
    component="header"
    textAlign="center"
    mb={ 2 }
  >
    <Title />
  </Box>
)
