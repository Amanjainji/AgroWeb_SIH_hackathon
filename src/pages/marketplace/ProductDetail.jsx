"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Layout from "../../components/common/Layout"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../context/NotificationContext"
import { useAuth } from "../../context/AuthContext"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { success } = useNotification()
  const { currentUser } = useAuth()

  useEffect(() => {
    // Simulate API call to fetch product details
    setTimeout(() => {
      const mockProduct = {
        id: Number.parseInt(id),
        name: "Organic Tomatoes",
        category: "Vegetables",
        price: 5.99,
        quantity: 50,
        unit: "kg",
        location: "Green Valley",
        image: "/placeholder.svg?height=400&width=400",
        farmerName: "John Farmer",
        farmerAvatar: "/placeholder.svg?height=40&width=40",
        farmerId: "farmer123",
        rating: 4.8,
        dateAdded: "2024-01-15",
        description:
          "These organic tomatoes are grown without pesticides or synthetic fertilizers. They are vine-ripened and hand-picked at the peak of freshness to ensure the best flavor and nutritional value.",
        nutritionFacts: {
          calories: 18,
          protein: "0.9g",
          carbs: "3.9g",
          fiber: "1.2g",
          sugar: "2.6g",
          fat: "0.2g",
        },
        harvestDate: "2024-01-10",
        expiryDate: "2024-01-25",
        organic: true,
        reviews: [
          {
            id: 1,
            user: "Sarah J.",
            rating: 5,
            comment: "These tomatoes are amazing! So fresh and flavorful.",
            date: "2024-01-16",
          },
          { id: 2, user: "Mike T.", rating: 4, comment: "Great quality, will buy again.", date: "2024-01-14" },
        ],
        relatedProducts: [
          { id: 2, name: "Fresh Basil", price: 2.99, image: "/placeholder.svg?height=100&width=100" },
          { id: 3, name: "Organic Lettuce", price: 3.49, image: "/placeholder.svg?height=100&width=100" },
        ],
      }
      setProduct(mockProduct)
      setLoading(false)
    }, 1500)
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0 && value <= product.quantity) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    success(`Added ${quantity} kg of ${product.name} to cart`)
  }

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link to="/marketplace" className="ml-2 text-gray-500 hover:text-gray-700">
                Marketplace
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-gray-700">{product.name}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="card overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto object-cover" />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {product.category}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}/{product.unit}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available: {product.quantity} {product.unit}
              </p>
            </div>

            <div className="border-t border-b py-4">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                className="h-10 w-10 rounded-full"
                src={product.farmerAvatar || "/placeholder.svg"}
                alt={product.farmerName}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Sold by {product.farmerName}</p>
                <p className="text-xs text-gray-500">{product.location}</p>
              </div>
            </div>

            {product.organic && (
              <div className="flex items-center bg-green-50 p-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-green-800">Certified Organic</span>
              </div>
            )}

            {currentUser && currentUser.role === "buyer" && (
              <div className="flex items-end space-x-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity ({product.unit})
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max={product.quantity}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="mt-1 block w-20 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <button onClick={handleAddToCart} className="btn btn-primary flex-1">
                  Add to Cart
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Harvest Date</p>
                <p className="font-medium">{new Date(product.harvestDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-gray-500">Best Before</p>
                <p className="font-medium">{new Date(product.expiryDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Nutrition Facts */}
          <div className="card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Nutrition Facts</h2>
            <div className="space-y-2">
              {Object.entries(product.nutritionFacts).map(([key, value]) => (
                <div key={key} className="flex justify-between py-1 border-b">
                  <span className="capitalize">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="card p-6 md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Customer Reviews</h2>
              <button className="text-sm text-green-600 hover:text-green-500">Write a Review</button>
            </div>
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-gray-900">{review.user}</span>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="card overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900">{relatedProduct.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">${relatedProduct.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
