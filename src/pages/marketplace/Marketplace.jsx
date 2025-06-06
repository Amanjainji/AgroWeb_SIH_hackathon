"use client"

import { useState, useEffect } from "react"
import Layout from "../../components/common/Layout"
import PageHeader from "../../components/common/PageHeader"
import ProductCard from "../../components/marketplace/ProductCard"
import ProductFilters from "../../components/marketplace/ProductFilters"
import LoadingSpinner from "../../components/common/LoadingSpinner"
import { useAuth } from "../../context/AuthContext"

const Marketplace = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()

  useEffect(() => {
    // Simulate API call to fetch products
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "Organic Tomatoes",
          category: "Vegetables",
          price: 5.99,
          quantity: 50,
          location: "Green Valley",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "John Farmer",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.8,
          dateAdded: "2024-01-15",
        },
        {
          id: 2,
          name: "Fresh Carrots",
          category: "Vegetables",
          price: 3.49,
          quantity: 30,
          location: "Sunny Hills",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Sarah Green",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.5,
          dateAdded: "2024-01-14",
        },
        {
          id: 3,
          name: "Green Lettuce",
          category: "Vegetables",
          price: 2.99,
          quantity: 20,
          location: "River Valley",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Mike Wilson",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.7,
          dateAdded: "2024-01-13",
        },
        {
          id: 4,
          name: "Red Apples",
          category: "Fruits",
          price: 4.99,
          quantity: 40,
          location: "Apple Orchard",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Emily Davis",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.9,
          dateAdded: "2024-01-12",
        },
        {
          id: 5,
          name: "Organic Milk",
          category: "Dairy",
          price: 6.99,
          quantity: 15,
          location: "Green Pastures",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "David Brown",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.6,
          dateAdded: "2024-01-11",
        },
        {
          id: 6,
          name: "Brown Rice",
          category: "Grains",
          price: 8.99,
          quantity: 25,
          location: "Rice Fields",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Linda Johnson",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.4,
          dateAdded: "2024-01-10",
        },
        {
          id: 7,
          name: "Fresh Basil",
          category: "Herbs",
          price: 2.99,
          quantity: 10,
          location: "Herb Garden",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Robert Smith",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.7,
          dateAdded: "2024-01-09",
        },
        {
          id: 8,
          name: "Free Range Eggs",
          category: "Dairy",
          price: 5.99,
          quantity: 20,
          location: "Happy Hens Farm",
          image: "/placeholder.svg?height=200&width=200",
          farmerName: "Jessica White",
          farmerAvatar: "/placeholder.svg?height=40&width=40",
          rating: 4.8,
          dateAdded: "2024-01-08",
        },
      ]
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 1500)
  }, [])

  const handleFilterChange = (filters) => {
    let filtered = [...products]

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Filter by region
    if (filters.region) {
      filtered = filtered.filter((product) => product.location === filters.region)
    }

    // Filter by price range
    if (filters.minPrice) {
      filtered = filtered.filter((product) => product.price >= Number.parseFloat(filters.minPrice))
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((product) => product.price <= Number.parseFloat(filters.maxPrice))
    }

    // Sort products
    switch (filters.sortBy) {
      case "price_low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price_high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
      default:
        filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
    }

    setFilteredProducts(filtered)
  }

  // Extract unique categories and regions for filters
  const categories = [...new Set(products.map((product) => product.category))]
  const regions = [...new Set(products.map((product) => product.location))]

  if (loading) {
    return (
      <Layout>
        <PageHeader title="Marketplace" description="Browse fresh produce directly from farmers" />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader title="Marketplace" description="Browse fresh produce directly from farmers" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Filters */}
        <ProductFilters onFilterChange={handleFilterChange} categories={categories} regions={regions} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
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
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Marketplace
