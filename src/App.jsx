import { Container, Typography } from '@mui/material'; // Import Container and Typography components from Material UI

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h1" align="center">
          Welcome to My App
        </Typography>
        <Typography variant="h3" align="center">
          This is a simple application using Material UI for styling.
        </Typography>
      </Container>
    </div>
  );
}

export default App;
