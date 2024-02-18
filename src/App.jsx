import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ui/ProtectedRoute"
import AppLayout from "./ui/AppLayout";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast";
import Cpu from "./pages/Cpu";
import CpuCooler from "./pages/CpuCooler"
import Mobo from "./pages/Mobo"
import Gpu from "./pages/Gpu"
import Os from "./pages/Os"
import Psu from "./pages/Psu"
import Case from "./pages/Case"
import Ram from "./pages/Ram"
import Storage from "./pages/Storage"
import Account from "./pages/Account";
import Builder from "./pages/Builder";
import Product from "./pages/Product";
import Fan from "./pages/Fan";
import Settings from "./pages/Settings";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {

  return (
    <DarkModeProvider>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
            <Route path="home" element={<Home />} />
            <Route path="builder" element={<Builder />} />
            <Route path="product/:gid" element={<Product />} />
            <Route path="cpu" element={<Cpu />} />
            <Route path="cpu-cooler" element={<CpuCooler />} />
            <Route path="mobo" element={<Mobo />} />
            <Route path="gpu" element={<Gpu />} />
            <Route path="os" element={<Os />} />
            <Route path="psu" element={<Psu />} />
            <Route path="case" element={<Case />} />
            <Route path="case-fan" element={<Fan />} />
            <Route path="ram" element={<Ram />} />
            <Route path="Storage" element={<Storage />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings/>}/>
            </Route>
            <Route path="login" element={<Login/>} />
            <Route path="*" />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
