import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = ({ open, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (!open) return null;

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: window.innerWidth > 768 ? '450px' : '100vw',
        backgroundColor: 'white',
        zIndex: 1000,
        padding: '0',
        overflowY: 'auto',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.15)',
        animation: 'slideInRight 0.3s ease',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '24px',
          borderBottom: '1px solid #eee',
          backgroundColor: '#fafafa',
          position: 'sticky',
          top: 0,
          zIndex: 1
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center'
          }}>
            <h2 style={{ 
              margin: 0, 
              color: '#333',
              fontSize: '20px',
              fontWeight: '600'
            }}>
              Shopping Cart ({cartItems.length})
            </h2>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                padding: '4px',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
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
          
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              style={{
                backgroundColor: 'transparent',
                color: '#f44336',
                border: '1px solid #f44336',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500',
                marginTop: '12px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f44336';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#f44336';
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
        
        {/* Cart Content */}
        <div style={{ flex: 1, padding: '0' }}>
          {cartItems.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '60px 24px',
              color: '#666'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
              <h3 style={{ color: '#333', marginBottom: '8px' }}>Your cart is empty</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>Add some products to get started!</p>
            </div>
          ) : (
            <div style={{ padding: '0' }}>
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  style={{ 
                    padding: '20px 24px',
                    borderBottom: index === cartItems.length - 1 ? 'none' : '1px solid #f0f0f0',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#fafafa'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {/* Item Header */}
                  <div style={{ display: 'flex', marginBottom: '16px' }}>
                    <div style={{ 
                      width: '70px', 
                      height: '70px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '8px',
                      padding: '8px',
                      marginRight: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    
                    <div style={{ flexGrow: 1, minWidth: 0 }}>
                      <h4 style={{ 
                        fontSize: '14px', 
                        color: '#333',
                        margin: '0 0 8px 0',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.3',
                        fontWeight: '500'
                      }}>
                        {item.title}
                      </h4>
                      <div style={{ 
                        fontSize: '18px', 
                        color: '#dc2626', 
                        fontWeight: 'bold'
                      }}>
                        ${item.price}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#f44336',
                        cursor: 'pointer',
                        fontSize: '18px',
                        padding: '4px',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ffebee';
                        e.target.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'scale(1)';
                      }}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                  
                  {/* Quantity Controls and Subtotal */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      padding: '4px'
                    }}>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        style={{
                          backgroundColor: item.quantity <= 1 ? '#e0e0e0' : '#fff',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          width: '36px',
                          height: '36px',
                          cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: item.quantity <= 1 ? '#999' : '#333',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          if (item.quantity > 1) {
                            e.target.style.backgroundColor = '#f0f0f0';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (item.quantity > 1) {
                            e.target.style.backgroundColor = '#fff';
                          }
                        }}
                      >
                        −
                      </button>
                      
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '600',
                        minWidth: '32px', 
                        textAlign: 'center',
                        color: '#333'
                      }}>
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        style={{
                          backgroundColor: '#fff',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          width: '36px',
                          height: '36px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: '#333',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#f0f0f0';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#fff';
                        }}
                      >
                        +
                      </button>
                    </div>
                    
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#333'
                    }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with Total */}
        {cartItems.length > 0 && (
          <div style={{ 
            padding: '24px',
            borderTop: '2px solid #eee',
            backgroundColor: '#fafafa',
            position: 'sticky',
            bottom: 0
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              fontSize: '18px'
            }}>
              <span style={{ fontWeight: '600', color: '#333' }}>
                Total ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):
              </span>
              <span style={{ 
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#dc2626'
              }}>
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            
            <button 
              style={{
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                padding: '16px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                width: '100%',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#be185d';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 16px rgba(25, 118, 210, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#dc2626';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              onClick={() => alert('Checkout functionality would be implemented here!')}
            >
              🚀 Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0;
              transform: translateX(100%);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default CartSidebar;