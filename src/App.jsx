import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import useAuthStore from './store/authStore';
import useItineraryStore from './store/itineraryStore'; // [NEW]
import useBookingStore from './store/bookingStore'; // [NEW]
import useBudgetStore from './store/budgetStore'; // [NEW]
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/ui/Navbar'; // Updated import
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Discover from './pages/Discover';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItineraryBuilder from './components/features/ItineraryBuilder';
import Itinerary from './pages/Itinerary';
import Budget from './pages/Budget';
import Settings from './pages/Settings';
import Bookings from './pages/Bookings';
import BookingReview from './pages/BookingReview';
import MyBookings from './pages/MyBookings';
import Translate from './pages/Translate';
import ProtectedRoute from './components/layout/ProtectedRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  // Initialize auth on app mount
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/itinerary/:id"
                element={
                  <ProtectedRoute>
                    <ItineraryBuilder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/itinerary"
                element={
                  <ProtectedRoute>
                    <Itinerary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/budget"
                element={
                  <ProtectedRoute>
                    <Budget />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-trips"
                element={
                  <ProtectedRoute>
                    <Itinerary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/bookings"
                element={
                  <ProtectedRoute>
                    <Bookings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/booking/review"
                element={
                  <ProtectedRoute>
                    <BookingReview />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-bookings"
                element={
                  <ProtectedRoute>
                    <MyBookings />
                  </ProtectedRoute>
                }
              />
              <Route path="/translate" element={<Translate />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
