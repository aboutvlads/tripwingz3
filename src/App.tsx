import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DealsSection } from './components/DealsSection';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { DealPage } from './pages/DealPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDealsPage } from './pages/admin/AdminDealsPage';
import { LoginPage } from './pages/admin/LoginPage';
import { useAuthStore } from './stores/authStore';

function HomePage() {
  return (
    <>
      <Hero />
      <DealsSection />
      <HowItWorks />
    </>
  );
}

function App() {
  const checkUser = useAuthStore((state) => state.checkUser);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <HomePage />
              <Footer />
            </div>
          }
        />
        <Route path="/deal/:id" element={<DealPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="deals" element={<AdminDealsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;