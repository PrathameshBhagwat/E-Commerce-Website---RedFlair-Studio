import React from 'react';

const LoadingSpinner = ({ size = 60, message = 'Loading...' }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      gap: '20px'
    }}>
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #1976d2',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} 
      />
      <p style={{ 
        color: '#666', 
        fontSize: '16px',
        margin: 0,
        fontWeight: '500'
      }}>
        {message}
      </p>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;