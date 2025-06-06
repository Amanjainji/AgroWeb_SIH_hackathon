import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import CropRecommendation from "../../components/farmer/CropRecommendation"
import PestDetection from "../../components/farmer/PestDetection"
import WeatherForecast from "../../components/farmer/WeatherForecast"
import { Link } from "react-router-dom"

const FarmerDashboard = () => {
  const stats = [
    { name: "Active Listings", value: "12", change: "+2", changeType: "increase" },
    { name: "Total Orders", value: "48", change: "+12%", changeType: "increase" },
    { name: "Revenue This Month", value: "$2,847", change: "+18%", changeType: "increase" },
    { name: "Pending Orders", value: "3", change: "-1", changeType: "decrease" },
  ]

  const recentOrders = [
    { id: 1, buyer: "John Smith", product: "Organic Tomatoes", quantity: "25 kg", status: "pending", amount: "$125" },
    { id: 2, buyer: "Sarah Johnson", product: "Fresh Carrots", quantity: "15 kg", status: "confirmed", amount: "$45" },
    { id: 3, buyer: "Mike Wilson", product: "Green Lettuce", quantity: "10 kg", status: "delivered", amount: "$30" },
  ]

  return (
    <Layout>
      <PageHeader
        title="Farmer Dashboard"
        description="Manage your farm, track orders, and get smart recommendations"
      />

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
            <Link
              to="/farmer/add-product"
              className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Add Product</h4>
              <p className="text-xs text-gray-500 mt-1">List new produce</p>
            </Link>

            <Link
              to="/farmer/manage-listings"
              className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center"
            >
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
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Manage Listings</h4>
              <p className="text-xs text-gray-500 mt-1">Edit your products</p>
            </Link>

            <Link to="/farmer/orders" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
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
              <h4 className="text-sm font-medium text-gray-900">View Orders</h4>
              <p className="text-xs text-gray-500 mt-1">Track your sales</p>
            </Link>

            <Link to="/marketplace" className="card p-4 hover:shadow-lg transition-shadow duration-200 text-center">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-900">Marketplace</h4>
              <p className="text-xs text-gray-500 mt-1">Browse products</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Orders */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
              <Link to="/farmer/orders" className="text-sm text-green-600 hover:text-green-500">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{order.buyer}</p>
                    <p className="text-xs text-gray-500">
                      {order.product} - {order.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{order.amount}</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "confirmed"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Forecast */}
          <WeatherForecast />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crop Recommendation */}
          <CropRecommendation />

          {/* Pest Detection */}
          <PestDetection />
        </div>
      </div>
    </Layout>
  )
}

export default FarmerDashboard
