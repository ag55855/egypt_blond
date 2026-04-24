import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import MapPage from "./pages/Map";
import Requests from "./pages/Requests";
import Reports from "./pages/Reports";
import Hospitals from "./pages/Hospitals";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/inventory"} component={Inventory} />
      <Route path={"/map"} component={MapPage} />
      <Route path={"/requests"} component={Requests} />
      <Route path={"/reports"} component={Reports} />
      <Route path={"/hospitals"} component={Hospitals} />
      <Route path={"/alerts"} component={Alerts} />
      <Route path={"/settings"} component={Settings} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
