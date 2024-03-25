import { ThemeProvider } from "styled-components";
import TestAdminPage from "./pages/TestAdminPage";
import { lightTheme } from "./utils/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <TestAdminPage/>
      </ThemeProvider>
    </>
  )
}

export default App
