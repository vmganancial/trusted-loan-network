import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import LoanOptions from './LoanOptions';
import AboutUs from './AboutUs';
import Team from './Team';
import FeedbackSection from './FeedbackSection';
import Footer from './Footer';
import ChatBot from './ChatBot';
import LoanEligibilityForm from './LoanEligibilityForm';
import ComingSoon from './ComingSoon';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import AgentList from './AgentList';

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Handle case where hash element is not found (optional: scroll to top)
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#f8f6f2] min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LoanOptions />
              <AboutUs />
              <Team />
              <FeedbackSection />
            </>
          }
        />
        <Route path="/personal-loan" element={<LoanEligibilityForm loanType="Personal Loan" />} />
        <Route path="/business-loan" element={<LoanEligibilityForm loanType="Business Loan" />} />
        <Route path="/doctors-loan" element={<LoanEligibilityForm loanType="Doctors Loan" />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agents" element={<AgentList />} />
      </Routes>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default AppRoutes;
