import Image from 'next/image'
import Link from 'next/link'

export default function AboutCard() {
  return (
    <div className="card h-full flex flex-col">
      <div className="bg-gov-gray-100 -m-6 mb-4 p-6 rounded-t-lg">
        <h2 className="text-2xl font-semibold text-gov-gray-800">About Us</h2>
      </div>

      <div className="relative h-48 -mx-6 mb-4">
        <Image
          src="/about-us.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-grow">
        <p className="text-gov-gray-700 mb-4">
          Since DataSource was established in <strong>1994</strong>, we have worked to bring real, measurable value to our customers.
        </p>

        <p className="text-gov-gray-700 mb-4">
          We are serious about the quality of our products and services, and about delivering them on time and within budget.
        </p>

        <p className="text-gov-gray-700 mb-6">
          As a <strong>CMMI® Level 2 company</strong>, we have made our commitment to quality more than lip service. DataSource has received many industry commendations.
        </p>
      </div>

      <Link
        href="/about"
        className="text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors inline-flex items-center"
      >
        Learn More About Us
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}