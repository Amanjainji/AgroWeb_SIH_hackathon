"use client"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../context/NotificationContext"

const ProductCard = ({ product }) => {
  const { currentUser } = useAuth()
  const { addToCart } = useCart()
  const { success } = useNotification()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
    success(`Added ${product.name} to cart`)
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-48 w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price.toFixed(2)}/kg</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {product.category}
            </span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>Available: {product.quantity} kg</p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {product.location}
              </p>
            </div>
            {currentUser && currentUser.role === "buyer" && (
              <button
                onClick={handleAddToCart}
                className="ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            )}
          </div>
          <div className="mt-2 flex items-center">
            <img
              className="h-6 w-6 rounded-full mr-2"
              src={product.farmerAvatar || "/placeholder.svg"}
              alt={product.farmerName}
            />
            <p className="text-xs text-gray-500">{product.farmerName}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
