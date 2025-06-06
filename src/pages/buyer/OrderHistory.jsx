"use client"

import { useState, useEffect } from "react"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { useNotification } from "../../context/NotificationContext"

const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const { success, error } = useNotification()

  useEffect(() => {
    // Simulate API call to fetch buyer's orders
    setTimeout(() => {
      const mockOrders = [
        {
          id: 1,
          orderNumber: "ORD-001",
          farmer: {
            name: "Green Valley Farm",
            email: "contact@greenvalley.com",
          },
          items: [
            { name: "Organic Tomatoes", quantity: 5, unit: "kg", price: 5.99 },
            { name: "Fresh Basil", quantity: 1, unit: "bunch", price: 2.99 },
          ],
          total: 32.94,
          status: "delivered",
          orderDate: "2024-01-15",
          deliveryDate: "2024-01-17",
          trackingNumber: "TRK123456",
        },
        {
          id: 2,
          orderNumber: "ORD-002",
          farmer: {
            name: "Sunny Acres",
            email: "hello@sunnyacres.com",
          },
          items: [{ name: "Fresh Carrots", quantity: 3, unit: "kg", price: 3.49 }],
          total: 10.47,
          status: "in_transit",
          orderDate: "2024-01-14",
          deliveryDate: "2024-01-16",
          trackingNumber: "TRK123457",
        },
        {
          id: 3,
          orderNumber: "ORD-003",
          farmer: {
            name: "Mountain View Farm",
            email: "orders@mountainview.com",
          },
          items: [{ name: "Green Lettuce", quantity: 2, unit: "kg", price: 2.99 }],
          total: 5.98,
          status: "confirmed",
          orderDate: "2024-01-13",
          deliveryDate: "2024-01-15",
          trackingNumber: "TRK123458",
        },
        {
          id: 4,
          orderNumber: "ORD-004",
          farmer: {
            name: "Organic Gardens",
            email: "support@organicgardens.com",
          },
          items: [
            { name: "Mixed Greens", quantity: 1, unit: "kg", price: 7.99 },
            { name: "Cherry Tomatoes", quantity: 2, unit: "kg", price: 8.99 },
          ],
          total: 25.97,
          status: "cancelled",
          orderDate: "2024-01-10",
          deliveryDate: "2024-01-12",
          trackingNumber: "TRK123459",
        },
      ]
      setOrders(mockOrders)
      setLoading(false)
    }, 1500)
  }, [])

  const handleCancelOrder = (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: "cancelled" } : order)))
      success("Order cancelled successfully")
    }
  }

  const handleReorder = (order) => {
    success(`Items from order ${order.orderNumber} added to cart`)
  }

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true
    return order.status === filter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800"
      case "in_transit":
        return "bg-yellow-100 text-yellow-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <Layout>
        <PageHeader title="Order History" description="Track and manage your orders" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader title="Order History" description="Track and manage your orders" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="card p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <p className="text-2xl font-semibold text-gray-900">{orders.length}</p>
              </div>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">In Progress</p>
                <p className="text-2xl font-semibold text-blue-600">
                  {orders.filter((o) => o.status === "confirmed" || o.status === "in_transit").length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Delivered</p>
                <p className="text-2xl font-semibold text-green-600">
                  {orders.filter((o) => o.status === "delivered").length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Cancelled</p>
                <p className="text-2xl font-semibold text-red-600">
                  {orders.filter((o) => o.status === "cancelled").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="sm:hidden">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            >
              <option value="all">All Orders</option>
              <option value="confirmed">Confirmed</option>
              <option value="in_transit">In Transit</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-8">
              {[
                { key: "all", label: "All Orders" },
                { key: "confirmed", label: "Confirmed" },
                { key: "in_transit", label: "In Transit" },
                { key: "delivered", label: "Delivered" },
                { key: "cancelled", label: "Cancelled" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`${
                    filter === tab.key
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="card overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-sm font-medium text-gray-900">Order #{order.orderNumber}</h3>
                    <span
                      className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                    >
                      {order.status.replace("_", " ")}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Placed on {new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Total: ${order.total.toFixed(2)}</p>
                  {order.status === "in_transit" && (
                    <p className="text-xs text-gray-500">Tracking: {order.trackingNumber}</p>
                  )}
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Farmer</h4>
                  <p className="text-sm font-medium text-gray-900">{order.farmer.name}</p>
                  <p className="text-xs text-gray-500">{order.farmer.email}</p>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Items</h4>
                  <ul className="space-y-2">
                    {order.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex justify-between">
                        <span>
                          {item.name} ({item.quantity} {item.unit})
                        </span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
                {(order.status === "confirmed" || order.status === "in_transit") && (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="text-sm text-red-600 hover:text-red-500"
                  >
                    Cancel Order
                  </button>
                )}
                {order.status === "delivered" && (
                  <button onClick={() => handleReorder(order)} className="text-sm text-green-600 hover:text-green-500">
                    Reorder
                  </button>
                )}
                <button className="text-sm text-gray-600 hover:text-gray-900">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {filter === "all" ? "You haven't placed any orders yet." : `No ${filter} orders found.`}
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default OrderHistory
