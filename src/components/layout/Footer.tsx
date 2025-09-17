import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gov-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/dsource-logo.png"
              alt="DataSource Inc."
              width={150}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gov-gray-300 text-sm">
              Trusted Background Investigation System Provider for Federal Government Personnel Security Departments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gov-gray-300 hover-text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/abis" className="text-gov-gray-300 hover-text-white transition-colors">
                  ABIS Product
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gov-gray-300 hover-text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gov-gray-300 hover-text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="text-sm text-gov-gray-300 not-italic space-y-2">
              <p>
                DataSource, Inc.<br />
                1749 Old Meadow Road, Suite 350<br />
                McLean, VA 22102
              </p>
              <p>
                Phone: (703) 748-7180<br />
                Toll Free: (866) 991-3642<br />
                Fax: (703) 748-7180
              </p>
              <p>
                <a href="mailto:info@datasourceinc.com" className="hover-text-white transition-colors">
                  info@datasourceinc.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gov-gray-700">
          <div className="flex flex-col md-flex-row justify-between items-center text-sm text-gov-gray-400">
            <p>© {currentYear} DataSource Inc. All rights reserved.</p>
            <p className="mt-2 md-mt-0">
              CMMI® Level 2 Certified | Woman-Owned Small Business
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}