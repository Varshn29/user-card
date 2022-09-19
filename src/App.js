import { Container } from '@mui/material';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <Container sx={{ bgcolor: '#2196f3', height: '657px', paddingTop: '30px' }}
      style={{ maxWidth: '1400px' }}>
      <DashBoard />
    </Container>
  );
}

export default App;
