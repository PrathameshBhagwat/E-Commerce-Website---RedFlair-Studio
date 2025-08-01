# Mini E-Commerce Product Listing App

A modern, responsive e-commerce frontend application built with React, featuring product listings, detailed product views, and cart functionality.

## 🚀 Features

- **Product Listing**: Browse through a collection of products fetched from a public API
- **Product Details**: View detailed information about each product in a modal
- **Shopping Cart**: Add products to cart, manage quantities, and view total price
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Smooth loading indicators while fetching data
- **Error Handling**: Graceful error handling with retry functionality
- **Modern UI**: Clean, Material Design-inspired interface

## 🛠️ Technologies Used

- **React 18** - Frontend framework with functional components and hooks
- **Axios** - HTTP client for API requests
- **Context API** - State management for cart functionality
- **CSS3** - Custom styling with responsive design
- **Fake Store API** - External API for product data

## 📋 API Integration

This app uses the [Fake Store API](https://fakestoreapi.com/) for product data:

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product details
- `GET /products/categories` - Fetch all categories
- `GET /products/category/:category` - Fetch products by category

## 🏗️ Project Structure

```
mini-ecommerce-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CartSidebar.js
│   │   ├── ProductCard.js
│   │   ├── ProductDetailModal.js
│   │   ├── StarRating.js
│   │   ├── LoadingSpinner.js
│   │   └── ErrorAlert.js
│   ├── context/
│   │   └── CartContext.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── global.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PrathameshBhagwat/E-Commerce-Website---RedFlair-Studio
   cd E-Commerce-Website---RedFlair-Studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app.

## 📦 Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel]
3. Deploy automatically with zero configuration


## 🎯 Key Components

### CartContext
- Manages global cart state using React Context
- Provides functions for adding, removing, and updating cart items
- Calculates total price and item count

### ProductCard
- Displays individual product information
- Handles add to cart functionality
- Opens product detail modal on click

### CartSidebar
- Sliding sidebar showing cart contents
- Quantity controls for each item
- Remove items functionality
- Display total price

### ProductDetailModal
- Modal displaying full product information
- Image, description, rating, and category
- Add to cart functionality

## 🎨 Styling

The app uses a modern, clean design with:

- **Color Scheme**: Primary blue (#1976d2) with neutral grays
- **Typography**: Roboto font family for clean readability
- **Responsive Grid**: CSS Grid for flexible product layouts
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Focus states and keyboard navigation support

## 📱 Responsive Design

- **Desktop**: Multi-column product grid
- **Tablet**: Adjusted grid with fewer columns
- **Mobile**: Single column layout with full-width cart sidebar

## 🔧 Customization

### Adding New Features

1. **Product Categories Filter**: Extend the API service to fetch categories
2. **Search Functionality**: Add search input and filtering logic
3. **User Authentication**: Integrate with authentication provider
4. **Payment Integration**: Add checkout and payment processing

### Styling Customization

- Modify colors in `src/styles/global.css`
- Adjust component styles in individual component files
- Add new animations and transitions

## 🐛 Troubleshooting

### Common Issues

1. **API Request Failures**
   - Check internet connection
   - Verify API endpoint availability
   - Check browser console for error messages

2. **Build Errors**
   - Ensure all dependencies are installed
   - Check for syntax errors in code
   - Clear node_modules and reinstall if needed

3. **Deployment Issues**
   - Verify build process completes successfully
   - Check deployment platform documentation
   - Ensure environment variables are set correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [React](https://reactjs.org/) for the amazing framework
- [Create React App](https://create-react-app.dev/) for the project setup

## 📧 Contact

For questions or support, please open an issue on GitHub or contact [bhagwatprathamesh2626@gmail.com].

---

**Happy Shopping! 🛒**
