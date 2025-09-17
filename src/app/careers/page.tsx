export default function CareersPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gov-gray-800 mb-12">Careers at DataSource</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-datasource-blue mb-4">Join Our Team</h2>
            <p className="text-lg text-gov-gray-700 mb-4">
              DataSource is always looking for talented professionals to join our team. We offer competitive salaries, excellent benefits, and the opportunity to work on challenging projects that make a difference in federal government operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold text-datasource-blue mb-3">Benefits</h3>
              <ul className="list-disc list-inside text-gov-gray-700 space-y-2">
                <li>Competitive salary</li>
                <li>Health, dental, and vision insurance</li>
                <li>401(k) with company matching</li>
                <li>Paid time off and holidays</li>
                <li>Professional development opportunities</li>
                <li>Flexible work arrangements</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-datasource-blue mb-3">Work Environment</h3>
              <p className="text-gov-gray-700">
                Join a team of dedicated professionals in a collaborative environment. We value innovation, integrity, and commitment to excellence in everything we do.
              </p>
            </div>
          </div>

          <div className="card bg-datasource-light-blue">
            <h3 className="text-xl font-semibold text-datasource-blue mb-3">How to Apply</h3>
            <p className="text-gov-gray-700 mb-4">
              To inquire about current openings or submit your resume for future opportunities, please email us at:
            </p>
            <a href="mailto:hr@datasourceinc.com" className="text-datasource-blue font-semibold hover:text-datasource-dark-blue">
              hr@datasourceinc.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}