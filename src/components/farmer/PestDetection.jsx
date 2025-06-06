"use client"

import { useState } from "react"
import LoadingSpinner from "../common/LoadingSpinner"

const PestDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (!selectedFile) return

    setLoading(true)

    // Simulate API call for pest detection
    setTimeout(() => {
      const mockResults = [
        {
          pest: "Aphids",
          confidence: 92,
          severity: "Medium",
          treatment: "Apply neem oil spray every 3 days",
          description: "Small green insects found on leaves",
        },
        {
          pest: "Leaf Spot Disease",
          confidence: 78,
          severity: "Low",
          treatment: "Remove affected leaves and apply fungicide",
          description: "Brown spots on leaf surface",
        },
      ]

      setResult(mockResults)
      setLoading(false)
    }, 3000)
  }

  const handleReset = () => {
    setSelectedFile(null)
    setPreview(null)
    setResult(null)
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Pest Detection</h3>

      <div className="space-y-4">
        <div>
          <label className="form-label">Upload Plant Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {preview ? (
                <div className="relative">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Preview"
                    className="mx-auto h-32 w-32 object-cover rounded-md"
                  />
                  <button
                    onClick={handleReset}
                    className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleFileSelect}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </>
              )}
            </div>
          </div>
        </div>

        {selectedFile && !result && (
          <button onClick={handleAnalyze} disabled={loading} className="btn btn-primary w-full">
            {loading ? <LoadingSpinner size="sm" /> : "Analyze Image"}
          </button>
        )}

        {result && (
          <div className="mt-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">Detection Results:</h4>
            <div className="space-y-4">
              {result.map((detection, index) => (
                <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h5 className="font-medium text-yellow-900">{detection.pest}</h5>
                      <p className="text-sm text-yellow-700 mt-1">{detection.description}</p>
                      <div className="mt-2 flex items-center space-x-4 text-sm">
                        <span className="text-yellow-700">Confidence: {detection.confidence}%</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            detection.severity === "High"
                              ? "bg-red-100 text-red-800"
                              : detection.severity === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {detection.severity} Severity
                        </span>
                      </div>
                      <div className="mt-3 p-3 bg-white rounded border">
                        <h6 className="font-medium text-gray-900">Recommended Treatment:</h6>
                        <p className="text-sm text-gray-700 mt-1">{detection.treatment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleReset} className="mt-4 btn btn-outline w-full">
              Analyze Another Image
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default PestDetection
