"use client"

import { useState } from "react"
import LoadingSpinner from "../common/LoadingSpinner"

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    soilType: "",
    region: "",
    season: "",
    waterAvailability: "",
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock response based on inputs
      const recommendations = []

      if (formData.soilType === "clay" && formData.season === "summer") {
        recommendations.push({ crop: "Rice", confidence: 95, profit: "High" })
        recommendations.push({ crop: "Cotton", confidence: 85, profit: "Medium" })
      } else if (formData.soilType === "loam") {
        recommendations.push({ crop: "🌽 Corn", confidence: 90, profit: "High" })
        recommendations.push({ crop: "🥕 Carrots", confidence: 80, profit: "Medium" })
        recommendations.push({ crop: "🥬 Lettuce", confidence: 75, profit: "Medium" })
      } else {
        recommendations.push({ crop: "🌾 Wheat", confidence: 85, profit: "Medium" })
        recommendations.push({ crop: "🥔 Potatoes", confidence: 80, profit: "High" })
      }

      setResult(recommendations)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Crop Recommendation</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="soilType" className="form-label">
              Soil Type
            </label>
            <select
              id="soilType"
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select soil type</option>
              <option value="clay">Clay</option>
              <option value="loam">Loam</option>
              <option value="sandy">Sandy</option>
              <option value="silt">Silt</option>
            </select>
          </div>

          <div>
            <label htmlFor="region" className="form-label">
              Region
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select region</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
              <option value="central">Central</option>
            </select>
          </div>

          <div>
            <label htmlFor="season" className="form-label">
              Season
            </label>
            <select
              id="season"
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select season</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="monsoon">Monsoon</option>
              <option value="winter">Winter</option>
            </select>
          </div>

          <div>
            <label htmlFor="waterAvailability" className="form-label">
              Water Availability
            </label>
            <select
              id="waterAvailability"
              name="waterAvailability"
              value={formData.waterAvailability}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select water availability</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? <LoadingSpinner size="sm" /> : "Get Recommendations"}
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900 mb-3">Recommended Crops:</h4>
          <div className="space-y-3">
            {result.map((recommendation, index) => (
              <div key={index} className="bg-green-50 border border-green-200 rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-green-900">{recommendation.crop}</h5>
                    <p className="text-sm text-green-700">
                      Confidence: {recommendation.confidence}% | Profit Potential: {recommendation.profit}
                    </p>
                  </div>
                  <div className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CropRecommendation
