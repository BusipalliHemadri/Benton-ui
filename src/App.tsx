import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { PropertiesPage } from './pages/property';
import { PropertyDetails } from './pages/property/components/PropertyDetails';
import { AddPropertyForm } from './components/forms/property forms/AddProperty/AddPropertyForm';
import Header from './components/header'; // Import the Header component
import { UnitDetails } from './pages/property/components/TenantInfo';
import { RentersTable } from './pages/renters/components/RentersTable';
import LoginForm from './components/ui/login';

export const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginForm onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Properties Page Route */}
        <Route
          path="/properties"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <PropertiesPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Add Property Route under /properties/add */}
        <Route
          path="/properties/add"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <AddPropertyForm />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Property Details Route */}
        <Route
          path="/property/:id"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <PropertyDetails />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Unit Details Route */}
        <Route
          path="/property/:id/unit/:unitId"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <UnitDetails />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/renters"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <RentersTable />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
