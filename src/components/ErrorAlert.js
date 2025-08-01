import React from 'react';

const ErrorAlert = ({ message, onRetry, type = 'error' }) => {
  const alertStyles = {
    error: {
      backgroundColor: '#ffebee',
      color: '#c62828',
      borderColor: '#ffcdd2'
    },
    warning: {
      backgroundColor: '#fff3e0',
      color: '#ef6c00',
      borderColor: '#ffcc02'
    },
    info: {
      backgroundColor: '#e3f2fd',
      color: '#1565c0',
      borderColor: '#90caf9'
    }
  };

  const currentStyle = alertStyles[type] || alertStyles.error;

  return (
    <div style={{
      backgroundColor: currentStyle.backgroundColor,
      color: currentStyle.color,
      padding: '16px 20px',
      borderRadius: '8px',
      border: `1px solid ${currentStyle.borderColor}`,
      margin: '20px auto',
      maxWidth: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px' }}>
          {type === 'error' ? '⚠️' : type === 'warning' ? '⚠️' : 'ℹ️'}
        </span>
        <span style={{ fontSize: '14px', lineHeight: '1.4' }}>
          {message}
        </span>
      </div>
      
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            backgroundColor: 'transparent',
            color: currentStyle.color,
            border: `1px solid ${currentStyle.color}`,
            borderRadius: '4px',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = currentStyle.color;
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = currentStyle.color;
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorAlert;