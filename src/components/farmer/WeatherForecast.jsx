"use client"

import { useState, useEffect } from "react"
import LoadingSpinner from "../common/LoadingSpinner"

const WeatherForecast = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to weather service
    setTimeout(() => {
      const mockWeatherData = {
        current: {
          temperature: 28,
          condition: "Partly Cloudy",
          humidity: 65,
          windSpeed: 12,
          icon: "⛅",
        },
        forecast: [
          {
            day: "Today",
            high: 32,
            low: 22,
            condition: "Sunny",
            icon: "☀️",
            precipitation: 0,
          },
          {
            day: "Tomorrow",
            high: 29,
            low: 20,
            condition: "Partly Cloudy",
            icon: "⛅",
            precipitation: 10,
          },
          {
            day: "Day 3",
            high: 26,
            low: 18,
            condition: "Rainy",
            icon: "🌧️",
            precipitation: 80,
          },
        ],
      }

      setWeather(mockWeatherData)
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weather Forecast</h3>
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Weather Forecast</h3>

      {/* Current Weather */}
      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium text-blue-900">Current Weather</h4>
            <p className="text-3xl font-bold text-blue-900">{weather.current.temperature}°C</p>
            <p className="text-blue-700">{weather.current.condition}</p>
          </div>
          <div className="text-4xl">{weather.current.icon}</div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <span className="text-blue-700">Humidity: {weather.current.humidity}%</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
              />
            </svg>
            <span className="text-blue-700">Wind: {weather.current.windSpeed} km/h</span>
          </div>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">3-Day Forecast</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {weather.forecast.map((day, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="text-center">
                <h5 className="font-medium text-gray-900">{day.day}</h5>
                <div className="text-2xl my-2">{day.icon}</div>
                <p className="text-sm text-gray-600">{day.condition}</p>
                <div className="mt-2">
                  <span className="text-lg font-semibold text-gray-900">{day.high}°</span>
                  <span className="text-sm text-gray-500 ml-1">{day.low}°</span>
                </div>
                <div className="mt-2 flex items-center justify-center text-xs text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  {day.precipitation}% rain
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Farming Tips */}
      <div className="mt-6 bg-green-50 rounded-lg p-4">
        <h4 className="text-md font-medium text-green-900 mb-2">Farming Tips</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Good weather for outdoor activities today</li>
          <li>• Consider watering crops before the rain on Day 3</li>
          <li>• Monitor humidity levels for pest prevention</li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherForecast
