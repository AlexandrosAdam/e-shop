import React, { FC } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider as GnosisProvider, Loader } from "@epignosis_llc/gnosis";
import { ThemeProvider, SerializedStyles } from "@emotion/react";
import { theme } from "./styles/";
import global from "./styles/global";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GnosisProvider
        theme={theme}
        globalStyles={global as unknown as SerializedStyles}
      >
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes />
          </Router>
        </QueryClientProvider>
      </GnosisProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
