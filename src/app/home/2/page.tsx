import Image from 'next/image';
import Link from 'next/link';

export default function CorporateHomepage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900">
        <Image
          src="/hero.jpg"
          alt="DataSource Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <div className="text-center max-w-4xl">
            <Image
              src="/dsource-logo.png"
              alt="DataSource Logo"
              width={300}
              height={100}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Securing America's Workforce Since 1999
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Trusted leader in personnel security systems and background investigation solutions for the Federal Government
            </p>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="text-gray-800">
                <div className="text-3xl font-bold text-[#003366]">25+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
              <div className="text-gray-800">
                <div className="text-3xl font-bold text-[#003366]">2M+</div>
                <div className="text-sm font-medium">Cases Processed</div>
              </div>
              <div className="text-gray-800">
                <div className="text-3xl font-bold text-[#003366]">15+</div>
                <div className="text-sm font-medium">Federal Agencies</div>
              </div>
              <div className="text-gray-800">
                <div className="text-3xl font-bold text-[#003366]">99.9%</div>
                <div className="text-sm font-medium">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">
                Federal Security Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over two decades, DataSource has been the trusted partner for Federal Personnel Security offices across the United States. Our deep understanding of government requirements, security protocols, and clearance processes sets us apart in the industry.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in developing and maintaining mission-critical systems that handle the most sensitive personnel investigations. Our expertise in security clearance processes, coupled with cutting-edge technology, ensures that federal agencies can efficiently and securely manage their personnel security operations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-[#003366]">ISO 27001</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                  <div className="text-2xl font-bold text-[#003366]">FedRAMP</div>
                  <div className="text-sm text-gray-600">Authorized</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about-us.jpg"
                alt="About DataSource"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABIS Showcase */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <Image
              src="/abis-logo.png"
              alt="ABIS Logo"
              width={200}
              height={80}
              className="mx-auto mb-6"
            />
            <h2 className="text-4xl font-bold mb-4">
              The Gold Standard in Personnel Security Systems
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              ABIS (Automated Background Investigation System) is the comprehensive case management solution trusted by Federal Personnel Security offices nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Case Management</h3>
              <p className="text-gray-300">Complete lifecycle management of personnel security cases</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Processing</h3>
              <p className="text-gray-300">Bank-level security for sensitive government data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-300">Streamlined processes that reduce manual effort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance Ready</h3>
              <p className="text-gray-300">Built-in compliance with federal security standards</p>
            </div>
          </div>

          <Link
            href="/abis"
            className="inline-block bg-white text-[#003366] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Explore ABIS Solutions
          </Link>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-6">
              Partnering with Federal Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by premier government agencies across the United States for mission-critical personnel security operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/cfpb-logo.png"
                alt="CFPB"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/frb-logo.png"
                alt="Federal Reserve Board"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/irs-logo.png"
                alt="IRS"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/loc-logo.jpg"
                alt="Library of Congress"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/sba-logo.jpg"
                alt="SBA"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 w-full h-24 flex items-center justify-center">
              <Image
                src="/usitc-logo.jpg"
                alt="USITC"
                width={120}
                height={60}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "DataSource has been instrumental in modernizing our personnel security operations. Their expertise and dedication to security excellence is unmatched in the industry."
            </blockquote>
            <cite className="text-sm font-semibold text-[#003366]">Federal Personnel Security Director</cite>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end personnel security services designed for the unique needs of federal agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#003366] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Background Investigations</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive background investigation processing and management systems that ensure thorough, efficient, and compliant security clearance procedures for federal personnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#003366] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Security Clearances</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced clearance management solutions that streamline the entire security clearance lifecycle, from initial application through periodic reinvestigations and continuous monitoring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#003366] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Case Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Sophisticated case management platforms that provide complete visibility and control over personnel security cases, ensuring efficient processing and compliance with federal standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#003366] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Continuous Vetting</h3>
              <p className="text-gray-600 leading-relaxed">
                Modern continuous vetting solutions that provide ongoing monitoring capabilities, ensuring personnel security remains current and effective throughout an employee's tenure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#003366] mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our team to learn how DataSource can help modernize your personnel security operations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">McLean, Virginia</p>
                    <p className="text-gray-600">Washington DC Metro Area</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GSA Contracts</h3>
                    <p className="text-gray-600">Multiple Active Schedules</p>
                    <p className="text-gray-600">SEWP & CIO-SP3 Certified</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Certifications</h3>
                    <p className="text-gray-600">ISO 27001 Certified</p>
                    <p className="text-gray-600">FedRAMP Authorized</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="your.email@agency.gov"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Agency</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Federal Agency or Department"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                    placeholder="Tell us about your personnel security needs..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#003366] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#004080] transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}