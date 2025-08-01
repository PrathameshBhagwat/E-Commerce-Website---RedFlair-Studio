import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';
import api from './services/api';
import './styles/global.css';

// Header Component with Myntra Theme
const Header = ({ onCartClick }) => {
  const { getTotalItems } = useCart();

  return (
    <header style={{
      background: 'linear-gradient(135deg, #dc2626 0%, #be185d 50%, #1a1a1a 100%)',
      color: 'white',
      padding: '16px 0',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #ffffff, #fdf2f8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            RedFlair Studio Store
          </h1>
          <p style={{ 
            margin: '4px 0 0 0', 
            fontSize: '14px',
            opacity: 0.9
          }}>
            Discover amazing products at great prices
          </p>
        </div>
        
        <button
          onClick={onCartClick}
          style={{
            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
            border: '2px solid rgba(255,255,255,0.4)',
            color: 'white',
            cursor: 'pointer',
            position: 'relative',
            padding: '12px 16px',
            fontSize: '16px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            fontWeight: '500',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)';
            e.target.style.transform = 'translateY(-2px) scale(1.05)';
            e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '20px' }}>🛒</span>
          <span>Cart</span>
          {getTotalItems() > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              animation: 'pulse 2s infinite',
              boxShadow: '0 2px 8px rgba(249, 115, 22, 0.4)'
            }}>
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

// Product Grid Component
const ProductGrid = ({ products }) => {
  return (
    <div 
      className="product-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        padding: '0'
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Main App Content Component
const AppContent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Retry function for error handling
  const handleRetry = () => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  };

  if (loading) {
    return <LoadingSpinner message="Loading awesome products..." />;
  }

  if (error) {
    return (
      <div style={{ 
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <ErrorAlert 
          message={error} 
          onRetry={handleRetry}
          type="error"
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fdf2f8 0%, #fef7ff 50%, #fff7ed 100%)' }}>
      <Header onCartClick={() => setCartOpen(true)} />

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Hero Section with Myntra Theme */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          padding: '32px',
          background: 'linear-gradient(135deg, #dc2626 0%, #be185d 30%, #1a1a1a 70%, #f97316 100%)',
          borderRadius: '20px',
          color: 'white',
          boxShadow: '0 10px 30px rgba(220, 38, 38, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            background: 'rgba(249, 115, 22, 0.2)',
            borderRadius: '50%',
            animation: 'pulse 3s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '60px',
            height: '60px',
            background: 'rgba(236, 72, 153, 0.3)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
          
          <h2 style={{ 
            fontSize: '36px',
            margin: '0 0 12px 0',
            fontWeight: '700',
            position: 'relative',
            zIndex: 2
          }}>
            Featured Products
          </h2>
          <p style={{ 
            fontSize: '18px',
            margin: 0,
            opacity: 0.9,
            position: 'relative',
            zIndex: 2
          }}>
            Discover our curated collection of {products.length} amazing products
          </p>
        </div>

        {/* Products Stats with Myntra Theme */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {[
            { label: 'Total Products', value: products.length, icon: '📦', color: '#dc2626' },
            { label: 'Categories', value: [...new Set(products.map(p => p.category))].length, icon: '🏷️', color: '#be185d' },
            { label: 'Avg Rating', value: (products.reduce((sum, p) => sum + (p.rating?.rate || 0), 0) / products.length).toFixed(1), icon: '⭐', color: '#f97316' },
            { label: 'Price Range', value: `${Math.min(...products.map(p => p.price))} - ${Math.max(...products.map(p => p.price))}`, icon: '💰', color: '#1a1a1a' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fef7ff 100%)',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(220, 38, 38, 0.1)',
              border: '2px solid rgba(220, 38, 38, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 8px 30px rgba(220, 38, 38, 0.2)';
              e.target.style.borderColor = 'rgba(220, 38, 38, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 20px rgba(220, 38, 38, 0.1)';
              e.target.style.borderColor = 'rgba(220, 38, 38, 0.1)';
            }}>
              <div style={{ 
                fontSize: '28px', 
                marginBottom: '12px',
                filter: `hue-rotate(${index * 45}deg)`
              }}>{stat.icon}</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: '#be185d', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <ProductGrid products={products} />

        {/* No products message */}
        {products.length === 0 && !loading && !error && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
            <h3 style={{ color: '#1a1a1a', marginBottom: '8px' }}>No products found</h3>
            <p style={{ margin: 0, color: '#be185d' }}>Check back later for new arrivals!</p>
          </div>
        )}
      </main>

      {/* Footer with Myntra Theme */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #dc2626 100%)',
        color: 'white',
        padding: '40px 20px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>
            RedFlair Studio Store
          </h3>
          <p style={{ margin: '0 0 16px 0', opacity: 0.8 }}>
            Built with React, featuring a modern shopping experience with Myntra-inspired design
          </p>
          <div style={{ fontSize: '14px', opacity: 0.6 }}>
            © 2025 RedFlair Studio Store. Built for educational purposes.
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Additional Styles for Myntra Theme */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes myntraPulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
          }
          
          @media (max-width: 768px) {
            .product-grid {
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            }
          }
          
          @media (max-width: 480px) {
            .product-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// Root App Component
const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;