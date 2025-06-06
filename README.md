# AgroWeb - Smart Farming Marketplace

A comprehensive frontend application for connecting farmers and buyers directly, featuring smart farming tools and a marketplace for fresh produce.

## Features

### For Farmers
- **Smart Dashboard**: Overview of farm performance, orders, and analytics
- **Crop Recommendations**: AI-powered suggestions based on soil type, region, and weather
- **Pest Detection**: Upload crop images to identify pests and diseases with treatment recommendations
- **Weather Forecasts**: Accurate weather predictions with farming tips
- **Product Management**: Add, edit, and manage product listings
- **Order Management**: Track and manage customer orders
- **Farm Profile**: Detailed farm information and certifications

### For Buyers
- **Marketplace**: Browse fresh produce directly from farmers
- **Advanced Filters**: Filter by category, region, price, and more
- **Shopping Cart**: Add products and manage quantities
- **Order Tracking**: Track order status and delivery updates
- **Order History**: View past orders and reorder favorites
- **Farmer Profiles**: Learn about farmers and their practices

### Common Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **User Authentication**: Secure login and registration with role-based access
- **Real-time Notifications**: Stay updated with order status and marketplace alerts
- **Settings Management**: Customize profile, notifications, and preferences
- **Search & Discovery**: Find products and farmers easily

## Technology Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: Lucide React (via SVG)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Download and Extract**
   - Download the project zip file from v0
   - Extract to your desired directory

2. **Install Dependencies**
   \`\`\`bash
   cd agroweb-frontend
   npm install
   \`\`\`

3. **Start Development Server**
   \`\`\`bash
   npm start
   \`\`\`
   The application will open in your browser at `http://localhost:3000`

### Demo Accounts

For testing purposes, you can use these demo login credentials:

**Farmer Account:**
- Email: `farmer@demo.com`
- Password: `demo123`

**Buyer Account:**
- Email: `buyer@demo.com`
- Password: `demo123`

Or use the quick demo login buttons on the login page.

## Key Features Implementation

### Authentication System
- Role-based authentication (Farmer/Buyer)
- Protected routes based on user roles
- Persistent login state with localStorage
- Demo accounts for easy testing

### Smart Farming Tools
- **Crop Recommendation Engine**: Form-based input for soil, region, season, and water availability
- **Pest Detection**: Image upload with simulated AI analysis
- **Weather Integration**: Mock weather API with 3-day forecasts and farming tips

### Marketplace Features
- **Product Catalog**: Grid layout with filtering and sorting
- **Shopping Cart**: Add/remove items, quantity management
- **Order Management**: Status tracking for both farmers and buyers
- **Product Details**: Comprehensive product information with reviews

### Responsive Design
- Mobile-first approach
- Tailwind CSS for consistent styling
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in `src/index.css`
- Individual component styling using Tailwind classes

### Mock Data
Mock data is used for demonstration. Replace with real API calls:
- Product data in components and pages
- User authentication in `AuthContext`
- Order management in respective components

### API Integration
To connect with a real backend:
1. Replace mock data with API calls
2. Update authentication context with real endpoints
3. Implement proper error handling
4. Add loading states for API requests

## Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


## Support

For support and questions:
- Check the documentation
- Review the code comments
- Test with the provided demo accounts
- Ensure all dependencies are properly installed

---

**AgroWeb** - Connecting farmers and buyers for a sustainable future! 🌱
