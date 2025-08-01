import React, { useState } from 'react';
import StarRating from './StarRating';
import ProductDetailModal from './ProductDetailModal';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [detailOpen, setDetailOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    
    // Add visual feedback
    const button = e.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.backgroundColor = '#4caf50';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#dc2626';
    }, 1000);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    setDetailOpen(true);
  };

  return (
    <>
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: isHovered 
            ? '0 8px 25px rgba(0,0,0,0.15)' 
            : '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          cursor: 'pointer',
          border: '1px solid #f0f0f0'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleViewDetails}
      >
        {/* Product Image */}
        <div style={{ 
          padding: '20px', 
          height: '220px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
            loading="lazy"
          />
          
          {/* Quick View Overlay */}
          {isHovered && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.2s ease'
            }}>
              <span style={{
                backgroundColor: 'white',
                color: '#dc2626',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}>
                Click to view details
              </span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div style={{ 
          padding: '20px', 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Category Badge */}
          <div style={{
            backgroundColor: '#e3f2fd',
            color: '#be185d',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: '500',
            textTransform: 'uppercase',
            alignSelf: 'flex-start',
            letterSpacing: '0.5px'
          }}>
            {product.category}
          </div>
          
          {/* Product Title */}
          <h3 style={{ 
            margin: 0,
            fontSize: '16px', 
            color: '#333',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.4',
            fontWeight: '600',
            minHeight: '44px'
          }}>
            {product.title}
          </h3>
          
          {/* Price */}
          <div style={{ 
            fontSize: '24px', 
            color: '#dc2626', 
            fontWeight: 'bold',
            marginBottom: '4px'
          }}>
            ${product.price}
          </div>
          
          {/* Rating */}
          <StarRating 
            rating={product.rating?.rate || 0} 
            count={product.rating?.count || 0} 
          />
          
          {/* Action Buttons */}
          <div style={{ 
            marginTop: 'auto', 
            paddingTop: '16px', 
            display: 'flex', 
            gap: '8px',
            flexDirection: 'column'
          }}>
            <button 
              onClick={handleViewDetails}
              style={{
                backgroundColor: 'transparent',
                color: '#dc2626',
                border: '2px solid #dc2626',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#dc2626';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View Details
            </button>
            
            <button 
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#be185d';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(25, 118, 210, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <ProductDetailModal 
        product={product}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
    </>
  );
};

export default ProductCard;