export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gov-gray-800 mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-datasource-blue mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gov-gray-800 mb-3">Request a Demo of ABIS</h3>
                <p className="text-gov-gray-700 mb-2">
                  <strong>Lukas Klotzsche</strong><br />
                  Director, Sales & Marketing
                </p>
                <p className="text-gov-gray-700">
                  Email: <a href="mailto:lklotzsche@datasourceinc.com" className="text-datasource-blue hover:text-datasource-dark-blue">lklotzsche@datasourceinc.com</a><br />
                  Phone: <a href="tel:561-502-2822" className="text-datasource-blue hover:text-datasource-dark-blue">561-502-2822</a>
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gov-gray-800 mb-3">Department Contacts</h3>
                <div className="space-y-3 text-gov-gray-700">
                  <p>
                    <strong>Software Development Services:</strong><br />
                    <a href="mailto:sales@datasourceinc.com" className="text-datasource-blue hover:text-datasource-dark-blue">sales@datasourceinc.com</a>
                  </p>
                  <p>
                    <strong>General Inquiries:</strong><br />
                    <a href="mailto:info@datasourceinc.com" className="text-datasource-blue hover:text-datasource-dark-blue">info@datasourceinc.com</a>
                  </p>
                  <p>
                    <strong>Human Resources:</strong><br />
                    <a href="mailto:hr@datasourceinc.com" className="text-datasource-blue hover:text-datasource-dark-blue">hr@datasourceinc.com</a>
                  </p>
                  <p>
                    <strong>Website Support:</strong><br />
                    <a href="mailto:support@datasourceinc.com" className="text-datasource-blue hover:text-datasource-dark-blue">support@datasourceinc.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div>
            <h2 className="text-2xl font-semibold text-datasource-blue mb-6">Our Office</h2>
            
            <div className="card">
              <address className="not-italic text-gov-gray-700 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gov-gray-800 mb-2">DataSource, Inc.</h3>
                  <p>
                    1749 Old Meadow Road<br />
                    Suite 350<br />
                    McLean, VA 22102
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Phone Numbers:</p>
                  <p>
                    Main: <a href="tel:703-748-7180" className="text-datasource-blue hover:text-datasource-dark-blue">(703) 748-7180</a><br />
                    Toll Free: <a href="tel:866-991-3642" className="text-datasource-blue hover:text-datasource-dark-blue">(866) 991-3642</a><br />
                    Fax: (703) 748-7180
                  </p>
                </div>
              </address>
            </div>

            <div className="mt-8">
              <div className="card bg-datasource-light-blue">
                <h3 className="text-lg font-semibold text-datasource-blue mb-3">Ready to Get Started?</h3>
                <p className="text-gov-gray-700 mb-4">
                  Contact us today to learn how ABIS can transform your Personnel Security operations.
                </p>
                <a href="tel:561-502-2822" className="btn-primary inline-block">
                  Call Now: 561-502-2822
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}