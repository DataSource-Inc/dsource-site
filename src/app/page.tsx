import HeroSection from '@/components/home/HeroSection'
import ServicesCard from '@/components/home/ServicesCard'
import AboutCard from '@/components/home/AboutCard'
import ClientLogos from '@/components/home/ClientLogos'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Flagship Product Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-gray-800 mb-4">Our Flagship Product</h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/abis-logo.png"
                alt="ABIS Logo"
                width={200}
                height={100}
                className="h-24 w-auto"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-datasource-blue mb-4">What Is ABIS?</h3>
            <p className="text-lg text-gov-gray-700 mb-6">
              ABIS is a comprehensive case management system that has been designed and built <strong>exclusively</strong> for <strong>Federal Personnel Security Processes</strong>, providing end-to-end processing for all tiers of background investigations and security clearances.
            </p>
            <h3 className="text-2xl font-semibold text-datasource-blue mb-4">Why Choose ABIS?</h3>
            <p className="text-lg text-gov-gray-700 mb-8">
              ABIS architecture includes many dynamic and user-defined features that provide adaptability to change and put the customer in charge of their own implementation. Together, these aspects of ABIS design, along with the breadth and depth of functionality included in ABIS based on DataSource&rsquo;s 25 years of subject matter expertise in Personnel Security, make ABIS a superior choice for Federal Agencies.
            </p>
            <Link href="/abis" className="btn-primary inline-block">
              Learn More About ABIS
            </Link>
          </div>
        </div>
      </section>

      {/* Services and About Cards */}
      <section className="section-padding bg-gov-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServicesCard />
            <AboutCard />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />
    </>
  );
}
