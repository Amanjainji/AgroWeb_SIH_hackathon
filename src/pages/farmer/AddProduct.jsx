"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import { useNotification } from "../../context/NotificationContext"
import LoadingSpinner from "../../components/common/LoadingSpinner"

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    unit: "kg",
    location: "",
    harvestDate: "",
    expiryDate: "",
    organic: false,
    image: null,
  })
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const { success, error } = useNotification()
  const navigate = useNavigate()

  const categories = ["Vegetables", "Fruits", "Grains", "Herbs", "Dairy", "Meat", "Other"]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }))

      const reader = new FileReader()
      reader.onload = (e) => setImagePreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      success("Product added successfully!")
      navigate("/farmer/manage-listings")
    } catch (err) {
      error("Failed to add product. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <PageHeader title="Add New Product" description="List your fresh produce in the marketplace" />

      <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Product Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                  placeholder="e.g., Organic Tomatoes"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="category" className="form-label">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="form-input"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="form-input"
                  placeholder="Describe your product, growing methods, etc."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="price" className="form-label">
                  Price per {formData.unit} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required
                    step="0.01"
                    min="0"
                    className="form-input pl-7"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="form-label">
                  Available Quantity *
                </label>
                <div className="flex">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    required
                    min="0"
                    className="form-input rounded-r-none"
                    placeholder="0"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                  <select
                    name="unit"
                    className="form-input rounded-l-none border-l-0 w-20"
                    value={formData.unit}
                    onChange={handleChange}
                  >
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                    <option value="pieces">pcs</option>
                    <option value="bunches">bunches</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="form-label">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="form-input"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="harvestDate" className="form-label">
                  Harvest Date
                </label>
                <input
                  type="date"
                  id="harvestDate"
                  name="harvestDate"
                  className="form-input"
                  value={formData.harvestDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="expiryDate" className="form-label">
                  Best Before Date
                </label>
                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  className="form-input"
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="organic"
                  name="organic"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  checked={formData.organic}
                  onChange={handleChange}
                />
                <label htmlFor="organic" className="ml-2 block text-sm text-gray-900">
                  Certified Organic
                </label>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Product Image</h3>

            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="mx-auto h-32 w-32 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null)
                        setFormData((prev) => ({ ...prev, image: null }))
                      }}
                      className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button type="button" onClick={() => navigate("/farmer/manage-listings")} className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn btn-primary">
              {loading ? <LoadingSpinner size="sm" /> : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default AddProduct
