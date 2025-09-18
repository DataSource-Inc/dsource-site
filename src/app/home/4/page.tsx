'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EnterpriseHomepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

        .enterprise-page {
          font-family: 'Inter', sans-serif;
        }

        .glow-text {
          text-shadow: 0 0 20px #00D4FF, 0 0 40px #00D4FF;
        }

        .glow-blue {
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
        }

        .neon-border {
          border: 2px solid #00D4FF;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .animate-counter {
          animation: countUp 2s ease-out forwards;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
        }

        .fade-in-up-delay {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.3s forwards;
        }

        .fade-in-up-delay-2 {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .btn-glow {
          background: linear-gradient(45deg, #00D4FF, #0080FF);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
          border: none;
          color: black;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
          transform: translateY(-2px);
          color: black;
        }

        .btn-glow-secondary {
          background: transparent;
          border: 2px solid #00D4FF;
          color: #00D4FF;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
        }

        .btn-glow-secondary:hover {
          background: #00D4FF;
          color: black;
          box-shadow: 0 0 25px rgba(0, 212, 255, 0.5);
          transform: translateY(-2px);
        }

        .hover-glow:hover {
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
          transform: scale(1.05);
          transition: all 0.3s ease;
        }

        .logo-spotlight {
          filter: brightness(0.7) grayscale(1);
          transition: all 0.3s ease;
        }

        .logo-spotlight:hover {
          filter: brightness(1) grayscale(0);
          transform: scale(1.1);
        }

        .tech-card {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 128, 255, 0.05));
          border: 1px solid rgba(0, 212, 255, 0.2);
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          border-color: #00D4FF;
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
          transform: translateY(-5px);
        }

        .electric-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #00D4FF, transparent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className={`enterprise-page ${isLoaded ? '' : 'opacity-0'}`}>
        {/* Bold Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
                 }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className={`fade-in-up ${isLoaded ? '' : 'opacity-0'}`}>
              <Image
                src="/dsource-logo.png"
                alt="DataSource Logo"
                width={300}
                height={120}
                className="mx-auto mb-8 glow-blue"
              />
            </div>

            <div className={`fade-in-up-delay ${isLoaded ? '' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 glow-text">
                REVOLUTIONIZING
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 glow-text">
                FEDERAL PERSONNEL SECURITY
              </h1>
            </div>

            <div className={`fade-in-up-delay-2 ${isLoaded ? '' : 'opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Powering the next generation of background investigations with cutting-edge technology and unmatched expertise
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact" className="btn-glow px-8 py-4 rounded-lg text-lg font-bold transform transition-all duration-300">
                  SECURE YOUR FUTURE
                </Link>
                <Link href="/abis" className="btn-glow-secondary px-8 py-4 rounded-lg text-lg font-bold transform transition-all duration-300">
                  EXPLORE ABIS
                </Link>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
        </section>

        {/* ABIS Power Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Image
                src="/abis-logo.png"
                alt="ABIS Logo"
                width={400}
                height={200}
                className="mx-auto mb-8 glow-blue hover-glow"
              />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 glow-text">
                POWER. PRECISION. PROTECTION.
              </h2>
              <div className="electric-line w-32 mx-auto mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="tech-card p-8 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">INTELLIGENT PROCESSING</h3>
                  <p className="text-gray-300">Advanced AI algorithms streamline complex investigation workflows</p>
                </div>
              </div>

              <div className="tech-card p-8 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">REAL-TIME ANALYTICS</h3>
                  <p className="text-gray-300">Instant insights and reporting for critical decision making</p>
                </div>
              </div>

              <div className="tech-card p-8 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">FORTRESS SECURITY</h3>
                  <p className="text-gray-300">Military-grade encryption and security protocols</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-24 bg-black border-t-2 border-blue-500/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 glow-text">
                BY THE NUMBERS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-black glow-text mb-4">
                  2.5M+
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">CASES PROCESSED</h3>
                <p className="text-gray-400">Investigations completed with precision</p>
              </div>

              <div className="text-center">
                <div className="text-6xl md:text-8xl font-black glow-text mb-4">
                  500K+
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">ACTIVE CLEARANCES</h3>
                <p className="text-gray-400">Security clearances under management</p>
              </div>

              <div className="text-center">
                <div className="text-6xl md:text-8xl font-black glow-text mb-4">
                  99.99%
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">SYSTEM RELIABILITY</h3>
                <p className="text-gray-400">Uptime for mission-critical operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                TRUSTED BY AMERICA'S
              </h2>
              <h2 className="text-4xl md:text-6xl font-black glow-text mb-12">
                MOST CRITICAL AGENCIES
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
              <div className="flex justify-center">
                <Image
                  src="/cfpb-logo.png"
                  alt="CFPB"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/frb-logo.png"
                  alt="Federal Reserve"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/irs-logo.png"
                  alt="IRS"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/loc-logo.jpg"
                  alt="Library of Congress"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/sba-logo.jpg"
                  alt="SBA"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/usitc-logo.jpg"
                  alt="USITC"
                  width={120}
                  height={80}
                  className="logo-spotlight h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 glow-text">
                NEXT-GENERATION TECHNOLOGY
              </h2>
              <div className="electric-line w-32 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <div className="tech-card p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-POWERED ANALYTICS</h3>
                <p className="text-gray-400">Machine learning algorithms for intelligent case analysis</p>
              </div>

              <div className="tech-card p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">REAL-TIME PROCESSING</h3>
                <p className="text-gray-400">Instant data processing and workflow automation</p>
              </div>

              <div className="tech-card p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">QUANTUM-READY ENCRYPTION</h3>
                <p className="text-gray-400">Future-proof security for classified information</p>
              </div>

              <div className="tech-card p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">CLOUD-NATIVE ARCHITECTURE</h3>
                <p className="text-gray-400">Scalable infrastructure for enterprise demands</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bold CTA */}
        <section className="py-24 relative overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
                 }}>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 glow-text">
                READY FOR THE FUTURE
              </h2>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-12 glow-text">
                OF PERSONNEL SECURITY?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <Link href="/contact" className="btn-glow px-8 py-4 rounded-lg text-lg font-bold transform transition-all duration-300">
                      START YOUR TRANSFORMATION
                    </Link>
                    <Link href="/abis" className="btn-glow-secondary px-8 py-4 rounded-lg text-lg font-bold transform transition-all duration-300">
                      SCHEDULE DEMO
                    </Link>
                  </div>
                </div>

                <div className="neon-border rounded-lg p-8 bg-black/50">
                  <h3 className="text-2xl font-bold text-white mb-6">SECURE CONTACT</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Agency Name"
                      className="w-full p-4 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Official Email"
                      className="w-full p-4 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <textarea
                      placeholder="Security Requirements"
                      rows={4}
                      className="w-full p-4 bg-gray-900 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button
                      type="submit"
                      className="btn-glow w-full py-4 rounded-lg text-lg font-bold transform transition-all duration-300"
                    >
                      INITIATE SECURE CONTACT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}