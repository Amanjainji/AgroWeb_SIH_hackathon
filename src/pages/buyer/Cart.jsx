"use client"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import EmptyState from "../../components/common/EmptyState"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../context/NotificationContext"

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart()
  const { success } = useNotification()
  const navigate = useNavigate()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleCheckout = () => {
    // Simulate checkout process
    success("Order placed successfully!")
    clearCart()
    navigate("/buyer/orders")
  }

  if (cart.length === 0) {
    return (
      <Layout>
        <PageHeader title="Shopping Cart" description="Review your selected items" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <EmptyState
            title="Your cart is empty"
            description="Start shopping to add items to your cart."
            actionLink="/marketplace"
            actionText="Browse Marketplace"
            icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            )}
          />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader title="Shopping Cart" description="Review your selected items" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Cart Items ({cart.length})</h3>
                <button onClick={clearCart} className="text-sm text-red-600 hover:text-red-500">
                  Clear Cart
                </button>
              </div>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.farmerName}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                      <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}/kg</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 rounded-md border border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-600 hover:text-red-500 mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">
                      ${(getTotalPrice() + 5 + getTotalPrice() * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button onClick={handleCheckout} className="w-full btn btn-primary mb-3">
                Proceed to Checkout
              </button>

              <Link to="/marketplace" className="w-full btn btn-outline text-center block">
                Continue Shopping
              </Link>

              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="text-sm font-medium text-green-900 mb-2">Delivery Information</h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Free delivery on orders over $50</li>
                  <li>• Same-day delivery available</li>
                  <li>• Fresh produce guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
