import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Counter from './counter';

function App() {
  return (
    <>
    <h1>State management with Zustang</h1>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Counter />
      </ThemeProvider>
    </>
  );
}

export default App;
