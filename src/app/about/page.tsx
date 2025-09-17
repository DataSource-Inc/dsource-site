export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gov-gray-800 mb-12">About DataSource Inc.</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-datasource-blue mb-4">Our History</h2>
            <p className="text-lg text-gov-gray-700 mb-4">
              Since DataSource was established in 1994, we have worked to bring real, measurable value to our customers. We are serious about the quality of our products and services, and about delivering them on time and within budget.
            </p>
            <p className="text-lg text-gov-gray-700 mb-4">
              As a CMMI® Level 2 company, we have made our commitment to quality more than lip service. DataSource has received many industry commendations, including:
            </p>
            <ul className="list-disc list-inside text-gov-gray-700 ml-4 space-y-2">
              <li>Global Best Practices award</li>
              <li>Nomination for IRS Guardian award</li>
              <li>Gartner Group acknowledgement of superior performance</li>
              <li>Capital area Ernst & Young Entrepreneur of the Year for President and CEO Pamela Hopkins</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-datasource-blue mb-4">Our Commitment</h2>
            <p className="text-lg text-gov-gray-700 mb-4">
              We know that our federal customers are facing serious budget challenges. Our continuing commitment is to meet the technology objectives entrusted to us with maximum responsibility. Our past performance attests to our success at making this promise a reality for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-datasource-blue mb-3">Woman-Owned Small Business</h3>
              <p className="text-gov-gray-700">
                Based in McLean, Virginia, DataSource is a certified woman-owned small business committed to diversity and inclusion in the technology sector.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-datasource-blue mb-3">CMMI Level 2 Certified</h3>
              <p className="text-gov-gray-700">
                Our CMMI Level 2 certification demonstrates our commitment to following proven management processes that lead to predictable, successful project outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}