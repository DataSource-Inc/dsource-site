import Link from 'next/link'

export default function ServicesCard() {
  return (
    <div className="card h-full flex flex-col">
      <div className="bg-gov-gray-100 -m-6 mb-4 p-6 rounded-t-lg">
        <h2 className="text-2xl font-semibold text-gov-gray-800">Services</h2>
      </div>

      <div className="flex-grow">
        <p className="text-gov-gray-600 mb-4">
          A leading case management system serving Federal Personnel Security offices in adjudicating background investigations and clearances.
        </p>

        <p className="text-gov-gray-700 mb-6">
          Our ABIS Product Team brings <strong>25 years of subject matter expertise</strong> in Federal Personnel Security. DataSource has helped Federal Agencies on an array of software development initiatives since 1994.
        </p>

        <p className="text-gov-gray-700 mb-6">
          Our primary expertise is in Federal background investigations. We specifically built our flagship product, <strong>ABIS</strong>, for Federal Personnel Security offices.
        </p>
      </div>

      <Link
        href="/services"
        className="text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors inline-flex items-center"
      >
        Read More
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}