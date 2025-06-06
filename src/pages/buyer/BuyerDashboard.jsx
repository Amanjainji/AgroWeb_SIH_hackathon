import { Link } from "react-router-dom"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"

const BuyerDashboard = () => {
  const stats = [
    { name: "Total Orders", value: "24", change: "+3", changeType: "increase" },
    { name: "This Month Spent", value: "$1,247", change: "+8%", changeType: "increase" },
    { name: "Favorite Farmers", value: "8", change: "+2", changeType: "increase" },
    { name: "Cart Items", value: "5", change: "+1", changeType: "increase" },
  ]

  const recentOrders = [
    {
      id: 1,
      farmer: "Green Valley Farm",
      product: "Organic Tomatoes",
      quantity: "5 kg",
      status: "delivered",
      amount: "$29.95",
      date: "2024-01-15",
    },
    {
      id: 2,
      farmer: "Sunny Acres",
      product: "Fresh Carrots",
      quantity: "3 kg",
      status: "in_transit",
      amount: "$10.47",
      date: "2024-01-14",
    },
    {
      id: 3,
      farmer: "Mountain View Farm",
      product: "Green Lettuce",
      quantity: "2 kg",
      status: "confirmed",
      amount: "$5.98",
      date: "2024-01-13",
    },
  ]

  const recommendedProducts = [
    {
      id: 1,
      name: "Organic Spinach",
      farmer: "Fresh Fields Farm",
      price: 4.99,
      image: "/placeholder.svg?height=80&width=80",
    },
    { id: 2, name: "Sweet Corn", farmer: "Golden Harvest", price: 3.49, image: "/placeholder.svg?height=80&width=80" },
    {
      id: 3,
      name: "Bell Peppers",
      farmer: "Rainbow Gardens",
      price: 6.99,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <Layout>
      <PageHeader title="Buyer Dashboard" description="Discover fresh produce and manage your orders" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((item) => (
            <div key={item.name} className="card p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">{item.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                </div>
                <div
                  className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${
                    item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/marketplace" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Browse Marketplace</h4>
              <p className="text-xs text-gray-500 mt-1">Find fresh produce</p>
            </Link>

            <Link to="/buyer/cart" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
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
              </div>
              <h4 className="text-sm font-medium text-gray-900">View Cart</h4>
              <p className="text-xs text-gray-500 mt-1">Review your items</p>
            </Link>

            <Link to="/buyer/orders" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Order History</h4>
              <p className="text-xs text-gray-500 mt-1">Track your orders</p>
            </Link>

            <Link to="/settings" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Settings</h4>
              <p className="text-xs text-gray-500 mt-1">Manage account</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Orders */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
              <Link to="/buyer/orders" className="text-sm text-green-600 hover:text-green-500">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.product}</p>
                    <p className="text-xs text-gray-500">
                      {order.farmer} - {order.quantity}
                    </p>
                    <p className="text-xs text-gray-500">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "in_transit"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status.replace("_", " ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Products */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recommended for You</h3>
              <Link to="/marketplace" className="text-sm text-green-600 hover:text-green-500">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.farmer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${product.price}/kg</p>
                    <button className="text-xs text-green-600 hover:text-green-500">Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal Highlights */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Seasonal Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🎃</span>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Winter Squash</h4>
              <p className="text-xs text-gray-500 mt-1">Perfect for hearty winter meals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🥬</span>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Leafy Greens</h4>
              <p className="text-xs text-gray-500 mt-1">Fresh and crisp winter varieties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🍎</span>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Winter Apples</h4>
              <p className="text-xs text-gray-500 mt-1">Sweet and crunchy varieties</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BuyerDashboard
