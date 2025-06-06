"use client"

import { createContext, useState, useContext } from "react"

const NotificationContext = createContext()

export const useNotification = () => useContext(NotificationContext)

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  // Add a notification
  const addNotification = (message, type = "info", duration = 5000) => {
    const id = Math.random().toString(36).substr(2, 9)

    setNotifications((prev) => [...prev, { id, message, type, duration }])

    // Auto remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  // Helper functions for common notification types
  const success = (message, duration) => addNotification(message, "success", duration)
  const error = (message, duration) => addNotification(message, "error", duration)
  const info = (message, duration) => addNotification(message, "info", duration)
  const warning = (message, duration) => addNotification(message, "warning", duration)

  const value = {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    info,
    warning,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-md shadow-lg flex items-center justify-between max-w-md animate-fade-in ${
                notification.type === "success"
                  ? "bg-green-100 text-green-800 border-l-4 border-green-500"
                  : notification.type === "error"
                    ? "bg-red-100 text-red-800 border-l-4 border-red-500"
                    : notification.type === "warning"
                      ? "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500"
                      : "bg-blue-100 text-blue-800 border-l-4 border-blue-500"
              }`}
            >
              <p>{notification.message}</p>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </NotificationContext.Provider>
  )
}
