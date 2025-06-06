import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { NotificationProvider } from "./context/NotificationContext"
import ProtectedRoute from "./components/common/ProtectedRoute"

// Pages
import LandingPage from "./pages/LandingPage"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import FarmerDashboard from "./pages/farmer/FarmerDashboard"
import BuyerDashboard from "./pages/buyer/BuyerDashboard"
import Marketplace from "./pages/marketplace/Marketplace"
import AddProduct from "./pages/farmer/AddProduct"
import ManageListings from "./pages/farmer/ManageListings"
import OrderManagement from "./pages/farmer/OrderManagement"
import Cart from "./pages/buyer/Cart"
import OrderHistory from "./pages/buyer/OrderHistory"
import ProductDetail from "./pages/marketplace/ProductDetail"
import Settings from "./pages/Settings"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <CartProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/product/:id" element={<ProductDetail />} />

              {/* Protected Farmer Routes */}
              <Route
                path="/farmer/dashboard"
                element={
                  <ProtectedRoute role="farmer">
                    <FarmerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer/add-product"
                element={
                  <ProtectedRoute role="farmer">
                    <AddProduct />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer/manage-listings"
                element={
                  <ProtectedRoute role="farmer">
                    <ManageListings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer/orders"
                element={
                  <ProtectedRoute role="farmer">
                    <OrderManagement />
                  </ProtectedRoute>
                }
              />

              {/* Protected Buyer Routes */}
              <Route
                path="/buyer/dashboard"
                element={
                  <ProtectedRoute role="buyer">
                    <BuyerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/buyer/cart"
                element={
                  <ProtectedRoute role="buyer">
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/buyer/orders"
                element={
                  <ProtectedRoute role="buyer">
                    <OrderHistory />
                  </ProtectedRoute>
                }
              />

              {/* Common Protected Routes */}
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
