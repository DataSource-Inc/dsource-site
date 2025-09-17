import Image from 'next/image'
import Link from 'next/link'

export default function ABISPage() {
  const features = [
    'User-Defined Configurable Workflows',
    'Case Detail Tree Structure',
    'Easy Addition of New Case Types',
    'Impressive Automation of Customer Correspondence',
    'Reference Data Architecture',
  ]

  const highlights = [
    {
      title: 'Intuitive Design',
      description: 'Reinforces the natural flow of Personnel Security tasks with Personnel Security-specific Workflow.',
    },
    {
      title: 'Seamless Integration',
      description: 'With eDelivery (SAC, Completed Background Investigation Records, RSI\'s, Delayed Replies, Electronic File Releases (EFR\'s), Rap Back hits, and eApp Mass Initiation.',
    },
    {
      title: 'Automatic eAdjudication',
      description: 'For Tier 1 and Tier 2 investigations based on ODNI published guidelines.',
    },
    {
      title: 'User-Defined Role-Based Security',
      description: 'Comprehensive security controls tailored to your organization\'s needs.',
    },
    {
      title: 'Automatic Pre-Screening',
      description: 'Of cases to expedite EOD (Enter on Duty) determinations.',
    },
    {
      title: 'Robust Search Capability',
      description: 'Advanced search features for quick and efficient case management.',
    },
    {
      title: 'COR Functionality',
      description: 'For Contracting Officer Representatives to enter new contracts, assign personnel, invite new personnel, track assignments, and more.',
    },
    {
      title: 'Multiple APIs',
      description: 'Available for commonly used Government and third-party systems like USA Staffing, HRConnect, EmpowHR, Serena Business Manager, ServiceNow, and LexisNexis.',
    },
    {
      title: 'ODNI Quarterly Reporting',
      description: 'One-Touch Generation of ODNI Quarterly Reporting Metrics with standard Personnel Security Reports and Ad hoc Reporting capability.',
    },
    {
      title: 'SEAD3 Self-Reporting',
      description: 'Enables Subjects to self-report in ABIS for compliance.',
    },
    {
      title: 'FedRamp-Approved Cloud Hosting',
      description: 'Secure cloud hosting options available for your organization.',
    },
  ]

  const securityFeatures = [
    'Implements all NIST Security Controls (moderate level)',
    'Adheres to Principle of "least privilege"',
    'Supports Zero Trust principles as relevant for software applications',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-datasource-light-blue to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gov-gray-800 mb-4">
              ABIS - Automated Background Investigation System
            </h1>
            <p className="text-xl text-gov-gray-700 mb-8 max-w-4xl mx-auto">
              A modern, web-based case management system for prescreening and adjudicating background investigations and security clearances for both Federal government employees and contractor personnel.
            </p>
            <div className="flex justify-center mb-8">
              <Image
                src="/abis-logo.png"
                alt="ABIS Logo"
                width={300}
                height={150}
                className="h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-datasource-blue mb-8">
              What Is ABIS?
            </h2>
            <p className="text-lg text-gov-gray-700 mb-6">
              ABIS is a comprehensive case management system that has been designed and built <strong>exclusively</strong> for <strong>Federal Personnel Security Processes</strong>, providing end-to-end processing for all tiers of background investigations and security clearances.
            </p>
            <p className="text-lg text-gov-gray-700 mb-8">
              ABIS handles all types of investigations and clearances, and has Trusted Workforce functionality and features. Our system provides the tools and automation necessary to streamline your Personnel Security operations while maintaining the highest standards of security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Architecture Section */}
      <section className="section-padding bg-gov-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-12">
            ABIS Incorporates a Dynamic Data-Driven Architecture
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-datasource-blue mb-6">Featuring:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-datasource-blue mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gov-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-12">
            Featured Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gov-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding bg-datasource-light-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-8">
              Built to Securely Handle PII
            </h2>
            <p className="text-lg text-center text-gov-gray-700 mb-8">
              (Personally Identifiable Information)
            </p>
            <div className="bg-white rounded-lg p-8 shadow-md">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start mb-4 last:mb-0">
                  <svg className="h-6 w-6 text-datasource-blue mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg text-gov-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Information */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-12">
              Questions & Answers
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">
                  What Technologies are used in ABIS?
                </h3>
                <ul className="list-disc list-inside text-gov-gray-700 space-y-1 ml-4">
                  <li>Java</li>
                  <li>Tomcat Application Server</li>
                  <li>MS SQL Server</li>
                  <li>Business Intelligence Reporting Tool (BIRT)</li>
                  <li>Model-View-Controller Framework</li>
                  <li>HTML5/CSS3</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">
                  What other Software is required to use ABIS?
                </h3>
                <p className="text-gov-gray-700">
                  ABIS uses MS SQL Server RDBMS; your organization needs to have a license for MS SQL Server.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">
                  What is a typical timeline for implementing ABIS?
                </h3>
                <p className="text-gov-gray-700">
                  Timeline for implementing ABIS largely depends on the data migration and the interfaces desired. There is generally very little, if any, customization (additional coding) required outside of new interfaces as ABIS already meets most customer requirements "out of the box."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">
                  What Contractual options are available to implement ABIS for our Organization?
                </h3>
                <p className="text-gov-gray-700">
                  DataSource will implement ABIS in accordance with its <strong>GSA Contract Number GS-35F-410GA.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-gov-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-12">
              Why Partner with DataSource?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">Expertise</h3>
                <p className="text-gov-gray-700">
                  Our ABIS Product Team brings in-depth subject matter expertise in the Personnel Security/Adjudication business area. We have consistently refined ABIS over the past 25 years with up-to-date capabilities, including Trusted Workforce functionality.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">Best Practices</h3>
                <p className="text-gov-gray-700">
                  DataSource has 31 years of experience in software development and is independently assessed as CMMI® (Capability Maturity Model Integration) Level 2, which means that we follow a set of proven management processes that lead to predictable results in successful completion of projects.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">Dedicated Support</h3>
                <p className="text-gov-gray-700">
                  We are committed to working closely with our clients to understand their needs and keep them informed throughout each phase of ABIS implementation. We also provide continuing support following implementation for ABIS maintenance and operations.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-datasource-blue mb-3">Competitive Pricing</h3>
                <p className="text-gov-gray-700">
                  DataSource's subject matter knowledge and maturity of ABIS system enables us to provide a high-quality end product on a competitive basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-datasource-blue text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Personnel Security Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a demo and see how ABIS can streamline your background investigation processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-datasource-blue px-8 py-3 rounded-lg font-semibold hover:bg-gov-gray-100 transition-colors inline-block">
              Request a Demo
            </Link>
            <a href="tel:561-502-2822" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-datasource-blue transition-colors inline-block">
              Call: 561-502-2822
            </a>
          </div>
        </div>
      </section>
    </>
  )
}