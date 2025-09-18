'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function SophisticatedHomepage() {
  const [currentLogo, setCurrentLogo] = useState(0)
  const [mounted, setMounted] = useState(false)

  const clientLogos = [
    { src: '/cfpb-logo.png', alt: 'CFPB', name: 'Consumer Financial Protection Bureau' },
    { src: '/frb-logo.png', alt: 'FRB', name: 'Federal Reserve Board' },
    { src: '/irs-logo.png', alt: 'IRS', name: 'Internal Revenue Service' },
    { src: '/loc-logo.jpg', alt: 'LOC', name: 'Library of Congress' },
    { src: '/sba-logo.jpg', alt: 'SBA', name: 'Small Business Administration' },
    { src: '/usitc-logo.jpg', alt: 'USITC', name: 'US International Trade Commission' },
  ]

  const features = [
    {
      icon: '🎯',
      title: 'Smart Case Routing',
      description: 'Intelligent assignment of cases based on complexity, priority, and agent expertise for optimal processing efficiency.'
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Advanced machine learning algorithms predict processing times and identify potential bottlenecks before they occur.'
    },
    {
      icon: '✅',
      title: 'Automated Compliance',
      description: 'Built-in compliance checks ensure all security protocols are met automatically throughout the investigation process.'
    },
    {
      icon: '📈',
      title: 'Intelligent Reporting',
      description: 'Dynamic dashboards and reports provide real-time insights into case progress and organizational performance metrics.'
    }
  ]

  const benefits = [
    { title: 'Speed', value: 70, suffix: '% faster', description: 'Processing time reduction' },
    { title: 'Accuracy', value: 99.9, suffix: '% error-free', description: 'Investigation precision' },
    { title: 'Scale', value: 100, suffix: '% unlimited', description: 'Capacity for growth' }
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % clientLogos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [clientLogos.length])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-white opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/20 to-purple-500/20"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rotate-45 animate-spin"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Floating DataSource Logo */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
              <Image
                src="/dsource-logo.png"
                alt="DataSource"
                width={200}
                height={80}
                className="h-16 w-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* Glass-morphism Text Container */}
          <div className="mb-12 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Intelligent Personnel Security
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                for Modern Government
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light leading-relaxed">
              Revolutionizing federal security processes with AI-powered precision and unmatched efficiency
            </p>
          </div>

          {/* Elegant CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/abis"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span className="flex items-center justify-center">
                Explore ABIS Platform
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* ABIS Excellence Section */}
      <section className="py-24 bg-white relative">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Elegant ABIS Logo Frame */}
            <div className="inline-block mb-8 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/abis-logo.png"
                alt="ABIS Logo"
                width={250}
                height={120}
                className="h-24 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Excellence in Every Detail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ABIS represents the pinnacle of personnel security technology, meticulously crafted for federal excellence
            </p>
          </div>

          {/* Feature Cards with Gradient Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Federal Focused', desc: 'Built exclusively for government security processes' },
              { title: 'AI-Powered', desc: 'Advanced algorithms optimize every workflow' },
              { title: 'Scalable Architecture', desc: 'Grows seamlessly with your organization' },
              { title: 'Comprehensive Security', desc: 'End-to-end encryption and compliance' },
              { title: 'Real-time Analytics', desc: 'Instant insights for informed decisions' },
              { title: '25 Years Expertise', desc: 'Decades of security domain knowledge' }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative p-8 bg-white rounded-2xl shadow-xl border border-gray-100 group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Intelligent by Design</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities that transform how government handles personnel security
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 lg:max-w-lg">
                  <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-6xl opacity-50">{feature.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Trust Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partners in Excellence</h2>
            <p className="text-xl text-gray-600">Trusted by leading federal agencies nationwide</p>
          </div>

          {/* Elegant Logo Carousel */}
          <div className="relative">
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl ${
                      index === currentLogo ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                      title={logo.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Measurable Impact</h2>
            <p className="text-xl text-gray-600">Quantifiable improvements in every metric that matters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  {/* Circular Progress Indicator */}
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - benefit.value / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{benefit.value}{benefit.suffix}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background with Abstract Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
               }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience the Next Generation
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light leading-relaxed">
              Transform your personnel security operations with intelligent automation and unparalleled precision
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-white text-blue-900 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <span className="flex items-center justify-center">
                  Get Started Today
                  <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg">
                Watch Demo
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-blue-200 focus:outline-none"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}