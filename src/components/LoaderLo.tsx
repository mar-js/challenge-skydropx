import { Box } from '@mui/material'
import Loader from 'react-loader-spinner'

export const LoaderLo: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Loader
      type="Puff"
      color="#4e34e1"
      secondaryColor="#a29bbb"
      height={ 50 }
      width={ 55 }
      timeout={ 10000 }
    />
  </Box>
)
