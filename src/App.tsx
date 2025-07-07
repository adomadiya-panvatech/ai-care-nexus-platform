
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Communications from "./pages/Communications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="communications" element={<Communications />} />
            <Route path="care-coordination" element={<div className="p-8 text-center text-gray-500">Care Coordination - Coming Soon</div>} />
            <Route path="appointments" element={<div className="p-8 text-center text-gray-500">Appointments - Coming Soon</div>} />
            <Route path="reports" element={<div className="p-8 text-center text-gray-500">Reports & Billing - Coming Soon</div>} />
            <Route path="compliance" element={<div className="p-8 text-center text-gray-500">Compliance - Coming Soon</div>} />
            <Route path="settings" element={<div className="p-8 text-center text-gray-500">Settings - Coming Soon</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
