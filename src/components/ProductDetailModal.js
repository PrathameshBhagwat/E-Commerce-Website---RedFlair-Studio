import React from 'react';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';

const ProductDetailModal = ({ product, open, onClose }) => {
  const { addToCart } = useCart();

  if (!product || !open) return null;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '700px',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          animation: 'slideUp 0.3s ease-out'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px',
          borderBottom: '1px solid #eee',
          paddingBottom: '16px'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '24px', 
            color: '#333',
            fontWeight: '600'
          }}>
            Product Details
          </h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#666',
              padding: '4px',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f5f5f5';
              e.target.style.color = '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#666';
            }}
          >
            ×
          </button>
        </div>
        
        {/* Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '32px',
          alignItems: 'start'
        }}>
          {/* Product Image */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            padding: '24px',
            minHeight: '300px'
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '350px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h3 style={{ 
              marginTop: 0, 
              marginBottom: '16px',
              color: '#333',
              fontSize: '20px',
              lineHeight: '1.4',
              fontWeight: '600'
            }}>
              {product.title}
            </h3>
            
            <div style={{ 
              fontSize: '32px', 
              color: '#1a1a1a', 
              fontWeight: 'bold', 
              margin: '16px 0'
            }}>
              ${product.price}
            </div>
            
            <div style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              display: 'inline-block',
              marginBottom: '20px',
              fontWeight: '500',
              textTransform: 'capitalize'
            }}>
              {product.category}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <StarRating 
                rating={product.rating?.rate || 0} 
                count={product.rating?.count || 0} 
                size="large"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                color: '#333', 
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600'
              }}>
                Description
              </h4>
              <p style={{ 
                lineHeight: '1.6', 
                color: '#666',
                fontSize: '14px',
                margin: 0
              }}>
                {product.description}
              </p>
            </div>
            
            {/* Action Button */}
            <button 
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#be185d';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1a1a1a';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetailModal;