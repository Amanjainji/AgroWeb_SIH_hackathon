"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import EmptyState from "../../components/common/EmptyState"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { useNotification } from "../../context/NotificationContext"

const ManageListings = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState(null)
  const { success, error } = useNotification()

  useEffect(() => {
    // Simulate API call to fetch farmer's products
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "Organic Tomatoes",
          category: "Vegetables",
          price: 5.99,
          quantity: 50,
          unit: "kg",
          status: "active",
          image: "/placeholder.svg?height=100&width=100",
          views: 124,
          orders: 8,
        },
        {
          id: 2,
          name: "Fresh Carrots",
          category: "Vegetables",
          price: 3.49,
          quantity: 30,
          unit: "kg",
          status: "active",
          image: "/placeholder.svg?height=100&width=100",
          views: 89,
          orders: 5,
        },
        {
          id: 3,
          name: "Green Lettuce",
          category: "Vegetables",
          price: 2.99,
          quantity: 0,
          unit: "kg",
          status: "out_of_stock",
          image: "/placeholder.svg?height=100&width=100",
          views: 67,
          orders: 3,
        },
      ]
      setProducts(mockProducts)
      setLoading(false)
    }, 1500)
  }, [])

  const handleStatusToggle = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              status: product.status === "active" ? "inactive" : "active",
            }
          : product,
      ),
    )
    success("Product status updated successfully")
  }

  const handleDelete = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== productId))
      success("Product deleted successfully")
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  const handleSaveEdit = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)))
    setEditingProduct(null)
    success("Product updated successfully")
  }

  if (loading) {
    return (
      <Layout>
        <PageHeader title="Manage Listings" description="Edit and manage your product listings" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader title="Manage Listings" description="Edit and manage your product listings" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Your Products</h3>
            <p className="text-sm text-gray-500">{products.length} products listed</p>
          </div>
          <Link to="/farmer/add-product" className="btn btn-primary">
            Add New Product
          </Link>
        </div>

        {products.length === 0 ? (
          <EmptyState
            title="No products listed yet"
            description="Start by adding your first product to the marketplace."
            actionLink="/farmer/add-product"
            actionText="Add Product"
            icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="card overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-48 w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === "active"
                          ? "bg-green-100 text-green-800"
                          : product.status === "inactive"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status === "out_of_stock"
                        ? "Out of Stock"
                        : product.status === "active"
                          ? "Active"
                          : "Inactive"}
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-lg font-semibold text-gray-900">
                      ${product.price.toFixed(2)}/{product.unit}
                    </p>
                    <p className="text-sm text-gray-500">
                      Available: {product.quantity} {product.unit}
                    </p>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{product.views} views</span>
                    <span>{product.orders} orders</span>
                  </div>

                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(product)} className="flex-1 btn btn-outline text-xs py-1">
                      Edit
                    </button>
                    <button
                      onClick={() => handleStatusToggle(product.id)}
                      className={`flex-1 btn text-xs py-1 ${
                        product.status === "active" ? "btn-outline" : "btn-primary"
                      }`}
                    >
                      {product.status === "active" ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-2 py-1 text-red-600 hover:text-red-800"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {editingProduct && (
          <EditProductModal product={editingProduct} onSave={handleSaveEdit} onCancel={() => setEditingProduct(null)} />
        )}
      </div>
    </Layout>
  )
}

const EditProductModal = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      ...product,
      ...formData,
      price: Number.parseFloat(formData.price),
      quantity: Number.parseInt(formData.quantity),
    })
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Edit Product</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="form-label">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="form-label">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="0"
                className="form-input"
                required
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button type="button" onClick={onCancel} className="btn btn-outline">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManageListings
