import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import RTL from "./components/RTL";
import DashboardLayout from "./components/DashboardLayout";
import Sales from "./components/sales";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <RTL>
        <DashboardLayout>
          <Sales />
        </DashboardLayout>
      </RTL>
    </StyledEngineProvider>
  );
}

export default App;
