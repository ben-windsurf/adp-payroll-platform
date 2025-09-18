import React from 'react'
import { useNotifications } from '../contexts/NotificationContext'

export default function NotificationBadges() {
  const { notifications, removeNotification } = useNotifications()

  if (notifications.length === 0) return null

  return (
    <div style={{ 
      position: 'fixed', 
      top: '80px', 
      right: '20px', 
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {notifications.map(notification => (
        <div 
          key={notification.id}
          className={`badge ${notification.type || 'success'}`}
          style={{ 
            cursor: 'pointer',
            padding: '8px 12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
          onClick={() => removeNotification(notification.id)}
        >
          {notification.message}
        </div>
      ))}
    </div>
  )
}
