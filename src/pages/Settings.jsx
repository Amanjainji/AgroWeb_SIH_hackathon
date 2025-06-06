"use client"

import { useState } from "react"
import Layout from "../components/common/Layout"
import PageHeader from "../components/common/PageHeader"
import { useAuth } from "../context/AuthContext"
import { useNotification } from "../context/NotificationContext"
import LoadingSpinner from "../components/common/LoadingSpinner"

const Settings = () => {
  const { currentUser } = useAuth()
  const { success, error } = useNotification()
  const [activeTab, setActiveTab] = useState("profile")
  const [loading, setLoading] = useState(false)

  const [profileData, setProfileData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    bio: "",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    orderUpdates: true,
    marketplaceAlerts: true,
    promotions: false,
    newsletter: true,
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      success("Profile updated successfully")
      setLoading(false)
    }, 1000)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      error("New passwords do not match")
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      success("Password updated successfully")
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
      setLoading(false)
    }, 1000)
  }

  const handleNotificationSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      success("Notification preferences updated")
      setLoading(false)
    }, 1000)
  }

  return (
    <Layout>
      <PageHeader title="Settings" description="Manage your account settings and preferences" />

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="card p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === "profile"
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("password")}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === "password"
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Password
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === "notifications"
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  Notifications
                </button>
                {currentUser?.role === "farmer" && (
                  <button
                    onClick={() => setActiveTab("farm")}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === "farm"
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Farm Details
                  </button>
                )}
                {currentUser?.role === "buyer" && (
                  <button
                    onClick={() => setActiveTab("payment")}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      activeTab === "payment"
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    Payment Methods
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="card p-6">
              {/* Profile Settings */}
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Profile Information</h2>
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full"
                          src={currentUser?.avatar || "/placeholder.svg"}
                          alt={currentUser?.name}
                        />
                      </div>
                      <div>
                        <button type="button" className="btn btn-outline">
                          Change Avatar
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input"
                          value={profileData.name}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          value={profileData.email}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          value={profileData.phone}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="form-input"
                          value={profileData.address}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="form-input"
                          value={profileData.city}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="state" className="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="form-input"
                            value={profileData.state}
                            onChange={handleProfileChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="form-label">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            className="form-input"
                            value={profileData.zipCode}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="bio" className="form-label">
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          name="bio"
                          rows={3}
                          className="form-input"
                          value={profileData.bio}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button type="submit" disabled={loading} className="btn btn-primary">
                        {loading ? <LoadingSpinner size="sm" /> : "Save Changes"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Password Settings */}
              {activeTab === "password" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Change Password</h2>
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="currentPassword" className="form-label">
                        Current Password
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        className="form-input"
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        className="form-input"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-input"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" disabled={loading} className="btn btn-primary">
                        {loading ? <LoadingSpinner size="sm" /> : "Update Password"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h2>
                  <form onSubmit={handleNotificationSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="orderUpdates"
                            name="orderUpdates"
                            type="checkbox"
                            checked={notificationSettings.orderUpdates}
                            onChange={handleNotificationChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="orderUpdates" className="font-medium text-gray-700">
                            Order Updates
                          </label>
                          <p className="text-gray-500">
                            Receive notifications about your order status and delivery updates.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="marketplaceAlerts"
                            name="marketplaceAlerts"
                            type="checkbox"
                            checked={notificationSettings.marketplaceAlerts}
                            onChange={handleNotificationChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="marketplaceAlerts" className="font-medium text-gray-700">
                            Marketplace Alerts
                          </label>
                          <p className="text-gray-500">
                            Get notified when new products matching your interests are available.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="promotions"
                            name="promotions"
                            type="checkbox"
                            checked={notificationSettings.promotions}
                            onChange={handleNotificationChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="promotions" className="font-medium text-gray-700">
                            Promotions
                          </label>
                          <p className="text-gray-500">Receive special offers, discounts, and promotional content.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            checked={notificationSettings.newsletter}
                            onChange={handleNotificationChange}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="font-medium text-gray-700">
                            Newsletter
                          </label>
                          <p className="text-gray-500">
                            Subscribe to our monthly newsletter with farming tips and seasonal updates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" disabled={loading} className="btn btn-primary">
                        {loading ? <LoadingSpinner size="sm" /> : "Save Preferences"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Farm Details (Farmer Only) */}
              {activeTab === "farm" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Farm Details</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="farmName" className="form-label">
                          Farm Name
                        </label>
                        <input
                          type="text"
                          id="farmName"
                          name="farmName"
                          className="form-input"
                          defaultValue="Green Valley Farm"
                        />
                      </div>
                      <div>
                        <label htmlFor="farmType" className="form-label">
                          Farm Type
                        </label>
                        <select id="farmType" name="farmType" className="form-input" defaultValue="organic">
                          <option value="organic">Organic</option>
                          <option value="conventional">Conventional</option>
                          <option value="hydroponic">Hydroponic</option>
                          <option value="aquaponic">Aquaponic</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="farmDescription" className="form-label">
                          Farm Description
                        </label>
                        <textarea
                          id="farmDescription"
                          name="farmDescription"
                          rows={3}
                          className="form-input"
                          defaultValue="We are a family-owned organic farm specializing in heirloom vegetables and herbs."
                        />
                      </div>
                      <div>
                        <label htmlFor="farmSize" className="form-label">
                          Farm Size (acres)
                        </label>
                        <input type="number" id="farmSize" name="farmSize" className="form-input" defaultValue="5" />
                      </div>
                      <div>
                        <label htmlFor="yearEstablished" className="form-label">
                          Year Established
                        </label>
                        <input
                          type="number"
                          id="yearEstablished"
                          name="yearEstablished"
                          className="form-input"
                          defaultValue="2010"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900 mb-3">Certifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="certOrganic"
                            name="certOrganic"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor="certOrganic" className="ml-2 text-sm text-gray-700">
                            USDA Organic
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="certNonGMO"
                            name="certNonGMO"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor="certNonGMO" className="ml-2 text-sm text-gray-700">
                            Non-GMO Project Verified
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="certFairTrade"
                            name="certFairTrade"
                            type="checkbox"
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor="certFairTrade" className="ml-2 text-sm text-gray-700">
                            Fair Trade Certified
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button type="submit" className="btn btn-primary">
                        Save Farm Details
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Payment Methods (Buyer Only) */}
              {activeTab === "payment" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Payment Methods</h2>
                  <div className="space-y-6">
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">Visa ending in 4242</p>
                            <p className="text-xs text-gray-500">Expires 12/2025</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
                          <button className="text-sm text-red-600 hover:text-red-900">Remove</button>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-outline w-full">
                      Add New Payment Method
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Settings
