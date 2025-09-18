import Image from 'next/image';
import Link from 'next/link';

// SVG Icons for features
const ShieldIcon = () => (
  <svg className="w-8 h-8 text-datasource-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8 text-datasource-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8 text-datasource-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8 text-datasource-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6 text-datasource-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function MinimalistHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-datasource-blue to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-datasource-light-blue to-transparent rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <Image
                src="/dsource-logo.png"
                alt="DataSource Inc."
                width={200}
                height={60}
                className="mx-auto"
                priority
              />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gov-gray-800 mb-6 leading-tight">
              Federal Personnel Security
              <span className="block text-datasource-blue">Excellence</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gov-gray-600 mb-12 max-w-3xl leading-relaxed">
              Trusted by federal agencies for over 25 years, we deliver comprehensive background investigation systems and expert personnel security solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/abis" className="inline-flex items-center btn-primary text-lg px-8 py-4 transition-all duration-300 custom-hover-shadow-lg">
                Explore ABIS
                <ArrowRightIcon />
              </Link>
              <Link href="/contact" className="inline-flex items-center btn-secondary text-lg px-8 py-4 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABIS Feature Section */}
      <section className="py-20 bg-gov-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="/abis-logo.png"
                alt="ABIS Logo"
                width={180}
                height={60}
                className="mx-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-800 mb-4">
              Our Flagship Solution
            </h2>
            <p className="text-lg text-gov-gray-600 max-w-2xl mx-auto">
              The Advanced Background Investigation System (ABIS) streamlines personnel security operations with modern, efficient case management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg transition-all duration-300 custom-hover-shadow-lg">
              <div className="flex justify-center mb-4">
                <ShieldIcon />
              </div>
              <h3 className="text-xl font-semibold text-gov-gray-800 mb-2">Secure & Compliant</h3>
              <p className="text-gov-gray-600 text-sm">Built to meet the highest federal security standards and compliance requirements.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg transition-all duration-300 custom-hover-shadow-lg">
              <div className="flex justify-center mb-4">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-semibold text-gov-gray-800 mb-2">Efficient Processing</h3>
              <p className="text-gov-gray-600 text-sm">Streamline case workflows and reduce processing times significantly.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg transition-all duration-300 custom-hover-shadow-lg">
              <div className="flex justify-center mb-4">
                <DatabaseIcon />
              </div>
              <h3 className="text-xl font-semibold text-gov-gray-800 mb-2">Comprehensive Data</h3>
              <p className="text-gov-gray-600 text-sm">Centralized repository for all background investigation data and documentation.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg transition-all duration-300 custom-hover-shadow-lg">
              <div className="flex justify-center mb-4">
                <CloudIcon />
              </div>
              <h3 className="text-xl font-semibold text-gov-gray-800 mb-2">Modern Platform</h3>
              <p className="text-gov-gray-600 text-sm">Cloud-based architecture ensuring scalability and accessibility.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/abis" className="inline-flex items-center text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors duration-300">
              Learn more about ABIS
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gov-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gov-gray-800 mb-4">
              Trusted by Federal Agencies
            </h2>
            <p className="text-gov-gray-600">
              Serving personnel security departments across government with reliable, proven solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/cfpb-logo.png"
                alt="Consumer Financial Protection Bureau"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/frb-logo.png"
                alt="Federal Reserve Board"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/irs-logo.png"
                alt="Internal Revenue Service"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/loc-logo.jpg"
                alt="Library of Congress"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/sba-logo.jpg"
                alt="Small Business Administration"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="grayscale custom-hover-grayscale-0 transition-all duration-300 transform hover:scale-105">
              <Image
                src="/usitc-logo.jpg"
                alt="U.S. International Trade Commission"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-800 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-gov-gray-600 max-w-2xl mx-auto">
              From software development to cloud hosting, we provide end-to-end personnel security solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group p-8 bg-white transition-all duration-300 custom-hover-shadow-lg rounded-lg border border-transparent hover:border-datasource-light-blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gov-gray-800">Personnel Security</h3>
                <ArrowRightIcon />
              </div>
              <p className="text-gov-gray-600 mb-6">
                Comprehensive background investigation systems and case management solutions tailored for federal agencies.
              </p>
              <Link href="/services" className="text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors">
                Learn More
              </Link>
            </div>

            <div className="group p-8 bg-white transition-all duration-300 custom-hover-shadow-lg rounded-lg border border-transparent hover:border-datasource-light-blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gov-gray-800">Case Management</h3>
                <ArrowRightIcon />
              </div>
              <p className="text-gov-gray-600 mb-6">
                Streamlined workflows and automated processes to enhance efficiency in personnel security operations.
              </p>
              <Link href="/services" className="text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors">
                Learn More
              </Link>
            </div>

            <div className="group p-8 bg-white transition-all duration-300 custom-hover-shadow-lg rounded-lg border border-transparent hover:border-datasource-light-blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gov-gray-800">Cloud Hosting</h3>
                <ArrowRightIcon />
              </div>
              <p className="text-gov-gray-600 mb-6">
                Secure, scalable cloud infrastructure designed specifically for government security requirements.
              </p>
              <Link href="/services" className="text-datasource-blue font-semibold hover:text-datasource-dark-blue transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-datasource-light-blue to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-800 mb-6">
            Ready to modernize your personnel security?
          </h2>
          <p className="text-lg text-gov-gray-600 mb-8 max-w-2xl mx-auto">
            Join the federal agencies that trust DataSource for their critical personnel security operations.
          </p>
          <Link href="/contact" className="inline-flex items-center btn-primary text-lg px-8 py-4 transition-all duration-300 custom-hover-shadow-lg">
            Get Started Today
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}