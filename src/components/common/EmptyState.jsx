import { Link } from "react-router-dom"

const EmptyState = ({
  title = "No data available",
  description = "Get started by creating a new item.",
  icon: Icon,
  actionLink,
  actionText = "Create New",
}) => {
  return (
    <div className="text-center py-12">
      {Icon && (
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {actionLink && (
        <div className="mt-6">
          <Link
            to={actionLink}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {actionText}
          </Link>
        </div>
      )}
    </div>
  )
}

export default EmptyState
