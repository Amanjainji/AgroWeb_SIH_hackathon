"use client"

import { useState, useEffect } from "react"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { useNotification } from "../../context/NotificationContext"

const OrderManagement = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")
  const { success, error } = useNotification()

  useEffect(() => {
    // Simulate API call to fetch orders
    setTimeout(() => {
      const mockOrders = [
        {
          id: 1,
          orderNumber: "ORD-001",
          buyer: {
            name: "John Smith",
            email: "john@example.com",
            phone: "+1 234 567 8900",
          },
          product: "Organic Tomatoes",
          quantity: 25,
          unit: "kg",
          price: 5.99,
          total: 149.75,
          status: "pending",
          orderDate: "2024-01-15",
          deliveryDate: "2024-01-18",
        },
        {
          id: 2,
          orderNumber: "ORD-002",
          buyer: {
            name: "Sarah Johnson",
            email: "sarah@example.com",
            phone: "+1 234 567 8901",
          },
          product: "Fresh Carrots",
          quantity: 15,
          unit: "kg",
          price: 3.49,
          total: 52.35,
          status: "confirmed",
          orderDate: "2024-01-14",
          deliveryDate: "2024-01-17",
        },
        {
          id: 3,
          orderNumber: "ORD-003",
          buyer: {
            name: "Mike Wilson",
            email: "mike@example.com",
            phone: "+1 234 567 8902",
          },
          product: "Green Lettuce",
          quantity: 10,
          unit: "kg",
          price: 2.99,
          total: 29.9,
          status: "delivered",
          orderDate: "2024-01-12",
          deliveryDate: "2024-01-15",
        },
        {
          id: 4,
          orderNumber: "ORD-004",
          buyer: {
            name: "Emily Davis",
            email: "emily@example.com",
            phone: "+1 234 567 8903",
          },
          product: "Organic Tomatoes",
          quantity: 20,
          unit: "kg",
          price: 5.99,
          total: 119.8,
          status: "cancelled",
          orderDate: "2024-01-10",
          deliveryDate: "2024-01-13",
        },
      ]
      setOrders(mockOrders)
      setLoading(false)
    }, 1500)
  }, [])

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
    success(`Order ${newStatus} successfully`)
  }

  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return true
    return order.status === filter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-blue-100 text-blue-800"
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
        <PageHeader title="Order Management" description="Manage and track your product orders" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader title="Order Management" description="Manage and track your product orders" />

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
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-2xl font-semibold text-yellow-600">
                  {orders.filter((o) => o.status === "pending").length}
                </p>
              </div>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Confirmed</p>
                <p className="text-2xl font-semibold text-blue-600">
                  {orders.filter((o) => o.status === "confirmed").length}
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
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="flex space-x-8">
              {[
                { key: "all", label: "All Orders" },
                { key: "pending", label: "Pending" },
                { key: "confirmed", label: "Confirmed" },
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

        {/* Orders Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Buyer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                        <div className="text-sm text-gray-500">{new Date(order.orderDate).toLocaleDateString()}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.buyer.name}</div>
                        <div className="text-sm text-gray-500">{order.buyer.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.product}</div>
                        <div className="text-sm text-gray-500">
                          {order.quantity} {order.unit} × ${order.price}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        {order.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(order.id, "confirmed")}
                              className="text-green-600 hover:text-green-900"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(order.id, "cancelled")}
                              className="text-red-600 hover:text-red-900"
                            >
                              Decline
                            </button>
                          </>
                        )}
                        {order.status === "confirmed" && (
                          <button
                            onClick={() => handleStatusUpdate(order.id, "delivered")}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Mark Delivered
                          </button>
                        )}
                        <button className="text-gray-600 hover:text-gray-900">View Details</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              {filter === "all" ? "You haven't received any orders yet." : `No ${filter} orders found.`}
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default OrderManagement
