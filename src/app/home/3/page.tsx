import Image from 'next/image'
import Link from 'next/link'

export default function GovernmentHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Emergency/Important Notice Banner */}
      <div className="bg-red-600 text-white text-center py-2 px-4">
        <div className="container mx-auto">
          <p className="text-sm font-medium">
            <span className="font-bold">NOTICE:</span> ABIS is now available for federal procurement -
            Contact us for GSA Schedule pricing and implementation details
          </p>
        </div>
      </div>

      {/* Official Header */}
      <header className="bg-white border-b-4 border-blue-700 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gray-800">
                DataSource Inc.
              </div>
              <div className="bg-blue-700 text-white px-3 py-1 text-sm font-medium rounded">
                Federal Contractor
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/abis" className="text-blue-700 hover:text-blue-900 font-medium border-b-2 border-transparent hover:border-blue-700 pb-1">
                ABIS
              </Link>
              <Link href="/services" className="text-blue-700 hover:text-blue-900 font-medium border-b-2 border-transparent hover:border-blue-700 pb-1">
                Services
              </Link>
              <Link href="/about" className="text-blue-700 hover:text-blue-900 font-medium border-b-2 border-transparent hover:border-blue-700 pb-1">
                About
              </Link>
              <Link href="/contact" className="text-blue-700 hover:text-blue-900 font-medium border-b-2 border-transparent hover:border-blue-700 pb-1">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Message */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personnel Security Solutions for Federal Agencies
            </h1>
            <div className="max-w-3xl mx-auto mb-8">
              <ul className="text-lg text-gray-700 space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">•</span>
                  End-to-end background investigation case management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">•</span>
                  Federal Personnel Security Process compliance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">•</span>
                  25+ years of subject matter expertise
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">•</span>
                  Secure, scalable, and user-configurable
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/abis" className="bg-blue-700 text-white px-8 py-3 font-semibold border-2 border-blue-700 hover:bg-blue-800 hover:border-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Get Started with ABIS
              </Link>
              <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 font-semibold border-2 border-blue-700 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABIS Information Panel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-300 shadow-lg">
              {/* Header */}
              <div className="bg-blue-700 text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Featured Solution</h2>
                  <div className="bg-white text-blue-700 px-3 py-1 text-sm font-bold rounded">
                    RECOMMENDED
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/abis-logo.png"
                      alt="ABIS - Automated Background Investigation System"
                      width={200}
                      height={100}
                      className="h-20 w-auto"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Automated Background Investigation System (ABIS)
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      A comprehensive case management system designed exclusively for Federal Personnel Security Processes,
                      providing end-to-end processing for all tiers of background investigations and security clearances.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            25+ years of expertise built-in
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            User-defined configurations
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Dynamic, adaptable architecture
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Compliance:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Federal security standards
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            Section 508 accessibility
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            FISMA requirements
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link href="/abis" className="text-blue-700 hover:text-blue-900 font-medium underline">
                      Learn more about ABIS →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Partners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Federal Partners</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Trusted by federal agencies nationwide to deliver secure, reliable personnel security solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/cfpb-logo.png"
                alt="Consumer Financial Protection Bureau"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/frb-logo.png"
                alt="Federal Reserve Board"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/irs-logo.png"
                alt="Internal Revenue Service"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/loc-logo.jpg"
                alt="Library of Congress"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/sba-logo.jpg"
                alt="Small Business Administration"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="bg-white p-4 rounded border hover:shadow-md transition-shadow">
              <Image
                src="/usitc-logo.jpg"
                alt="US International Trade Commission"
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              <strong>GSA Schedule:</strong> Contract #GS-35F-0119Y |
              <Link href="/contact" className="text-blue-700 hover:text-blue-900 ml-1">
                Request pricing information
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services & Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Services Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-700">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">→</span>
                  <span className="text-gray-700">Background Investigation Systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">→</span>
                  <span className="text-gray-700">Personnel Security Software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">→</span>
                  <span className="text-gray-700">Case Management Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">→</span>
                  <span className="text-gray-700">System Integration Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-700 mr-3">→</span>
                  <span className="text-gray-700">Technical Support & Maintenance</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services" className="text-blue-700 hover:text-blue-900 font-medium underline">
                  View all services →
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-700">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/abis" className="text-blue-700 hover:text-blue-900 underline">
                    ABIS Product Overview
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline">
                    Implementation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline">
                    Security Compliance Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline">
                    Technical Specifications
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-blue-700 hover:text-blue-900 underline">
                    Training Materials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-700">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="text-sm">
                    DataSource Inc.<br />
                    Federal Solutions Division<br />
                    Washington, DC Metro Area
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-sm">
                    Monday - Friday<br />
                    8:00 AM - 6:00 PM EST
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emergency Support</h4>
                  <p className="text-sm">
                    24/7 availability for<br />
                    federal client emergencies
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="bg-blue-700 text-white px-4 py-2 font-medium hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Bar */}
      <section className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">FedRAMP Authorized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">FISMA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-medium">Section 508 Accessible</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
                <span className="text-sm font-medium">Secret Clearance Facility</span>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              Last updated: September 18, 2025
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}