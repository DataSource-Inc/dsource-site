import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-full overflow-hidden" style={{height: '600px'}}>
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Modern building architecture"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 sm-px-6 lg-px-8 text-center text-white">
          <h1 className="text-4xl md-text-5xl lg-text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Trusted Background Investigation System Provider for Federal Government Personnel Security Departments
          </h1>
          <p className="text-lg md-text-xl mb-8 max-w-3xl mx-auto">
            DataSource services entail software engineering and project management, which follow proven processes for successful completion of projects. We also provide ongoing support to Federal Personnel Security offices for staff augmentation and cloud hosting.
          </p>
          <div className="flex flex-col sm-flex-row gap-4 justify-center">
            <Link href="/abis" className="btn-primary inline-block">
              Learn About ABIS
            </Link>
            <Link href="/contact" className="btn-secondary inline-block">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}