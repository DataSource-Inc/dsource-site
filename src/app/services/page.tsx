export default function ServicesPage() {
  const services = [
    {
      title: 'Systems Development Life Cycle (SDLC)',
      description: 'Full lifecycle development services including project management, application design and development, system modernization and migration.',
    },
    {
      title: 'Project Management',
      description: 'Experienced project managers who follow proven processes for successful completion of projects on time and within budget.',
    },
    {
      title: 'Application Design & Development',
      description: 'Custom software development tailored to your specific needs, with expertise in federal government requirements and compliance.',
    },
    {
      title: 'Systems Modernization & Migration',
      description: 'Transform legacy systems with modern technologies while preserving critical business logic and data integrity.',
    },
    {
      title: 'Staff Augmentation',
      description: 'Skilled professionals to supplement your team for Personnel Security offices and other federal programs.',
    },
    {
      title: 'Cloud Hosting Services',
      description: 'FedRAMP-approved cloud hosting solutions with robust security and compliance for government applications.',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gov-gray-800 mb-12">Our Services</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-gov-gray-700">
            DataSource provides full Systems Development Life Cycle (SDLC) services, including project management, application design and development, and system modernization and migration for government and commercial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card h-full">
              <h3 className="text-xl font-semibold text-datasource-blue mb-3">{service.title}</h3>
              <p className="text-gov-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}