import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    { name: 'IRS', logo: '/irs-logo.png' },
    { name: 'CFPB', logo: '/cfpb-logo.png' },
    { name: 'Library of Congress', logo: '/loc-logo.jpg' },
    { name: 'Federal Reserve Board', logo: '/frb-logo.png' },
    { name: 'SBA', logo: '/sba-logo.jpg' },
    { name: 'USITC', logo: '/usitc-logo.jpg' },
  ]

  return (
    <section className="bg-gov-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gov-gray-800 mb-12">
          Our Trusted Partners & Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={80}
                className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}