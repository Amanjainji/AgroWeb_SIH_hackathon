// Mock data for development and testing
export const mockProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 5.99,
    quantity: 50,
    unit: "kg",
    location: "Green Valley",
    image: "/placeholder.svg?height=200&width=200",
    farmerName: "John Farmer",
    farmerAvatar: "/placeholder.svg?height=40&width=40",
    farmerId: "farmer123",
    rating: 4.8,
    dateAdded: "2024-01-15",
    description: "Fresh organic tomatoes grown without pesticides.",
    organic: true,
    harvestDate: "2024-01-10",
    expiryDate: "2024-01-25",
  },
  // Add more mock products as needed
]

export const mockFarmers = [
  {
    id: "farmer123",
    name: "John Farmer",
    email: "john@greenvalley.com",
    farmName: "Green Valley Farm",
    location: "Green Valley",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    totalProducts: 12,
    joinDate: "2020-03-15",
  },
  // Add more mock farmers as needed
]

export const mockOrders = [
  {
    id: 1,
    orderNumber: "ORD-001",
    buyerId: "buyer123",
    farmerId: "farmer123",
    products: [{ id: 1, name: "Organic Tomatoes", quantity: 5, price: 5.99 }],
    total: 29.95,
    status: "pending",
    orderDate: "2024-01-15",
    deliveryDate: "2024-01-18",
  },
  // Add more mock orders as needed
]
