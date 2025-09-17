import Image from 'next/image'

export default function ClientsPage() {
  const clients = [
    { name: 'IRS', logo: '/irs-logo.png' },
    { name: 'CFPB', logo: '/cfpb-logo.png' },
    { name: 'Library of Congress', logo: '/loc-logo.jpg' },
    { name: 'Federal Reserve Board', logo: '/frb-logo.png' },
    { name: 'SBA', logo: '/sba-logo.jpg' },
    { name: 'USITC', logo: '/usitc-logo.jpg' },
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gov-gray-800 mb-12">Clients & Partners</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-gov-gray-700 mb-8">
            DataSource has been privileged to serve numerous federal agencies and organizations over our 30+ year history. Our commitment to quality and security has earned us the trust of some of the most important institutions in government.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-datasource-blue mb-8">Our Federal Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={80}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-datasource-blue mb-6">Contract Vehicles</h2>
          <div className="card">
            <h3 className="text-xl font-semibold text-gov-gray-800 mb-3">GSA Contract</h3>
            <p className="text-gov-gray-700 mb-2">
              <strong>Contract Number:</strong> GS-35F-410GA
            </p>
            <p className="text-gov-gray-700">
              DataSource&rsquo;s GSA contract provides federal agencies with streamlined procurement options for our ABIS system and related services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}