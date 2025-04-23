import React, { useState } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresList = [
    {
      id: 1,
      title: "4K Ultra HD Recording",
      description: "Capture breathtaking clarity with 3840×2160 resolution—perfect for professional content that stands out on any screen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "#f97316"
    },
    {
      id: 2,
      title: "180° Rotatable Lens",
      description: "Capture dynamic angles without moving the device—ideal for action sports, creative vlogging, and detailed inspections.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "#36A8DA"
    },
    {
      id: 3,
      title: "4G Internet & Video Calls",
      description: "Stay connected anywhere with cellular coverage—stream live events, conduct remote meetings, or make emergency calls with one click.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "#FD5201"
    },
    {
      id: 4,
      title: "Long-Lasting Battery",
      description: "Record up to 8 hours continuously or 24+ hours on standby—never miss important moments with auto-save technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13v-1a4 4 0 00-4-4H9.4a4 4 0 00-4 4v1m8-1v2m0 4h.01M17 21H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "#10b981"
    },
    {
      id: 5,
      title: "Infrared Night Vision",
      description: "See clearly up to 10m in complete darkness—essential for overnight security monitoring and wildlife observation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      color: "#6366f1"
    },
    {
      id: 6,
      title: "Motion Detection",
      description: "Save battery and storage with smart recording that activates only when movement is detected—perfect for surveillance and time-lapse creation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "#ec4899"
    },
    {
      id: 7,
      title: "Dual Storage Options",
      description: "Store up to 256GB locally on TF cards plus secure AES-256 encrypted cloud backup—access your footage anywhere, anytime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      color: "#a855f7"
    },
    {
      id: 8,
      title: "Professional Mounting Clip",
      description: "Hands-free recording with our robust, low-profile clip—securely attaches to uniforms, helmets, backpacks, or vehicle dashboards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      ),
      color: "#f59e0b"
    }
  ];

  // Group features into two rows for tab display
  const featuresRow1 = featuresList.slice(0, 4);
  const featuresRow2 = featuresList.slice(4, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a1622] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="hidden lg:block absolute top-40 left-10 w-72 h-72 rounded-full bg-[#FD5201]/10 blur-3xl animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#36A8DA]/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#FD5201]/5 to-[#36A8DA]/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animated reveal */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex justify-center">
            <span className="inline-block text-white font-medium text-sm mb-3 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] px-5 py-1.5 rounded-full shadow-lg shadow-[#FD5201]/20">
              Revolutionary Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Stunning Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of portable recording with our cutting-edge features designed for professionals
          </p>
        </div>

        {/* Featured main section - Interactive 3D cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
          {/* Main large feature card */}
          <div className="w-full lg:w-1/2 max-w-xl perspective-1000">
            <div 
              className="relative h-96 w-full transition-transform duration-700 ease-out transform-style-3d hover:rotate-y-10 hover:rotate-x-10 group"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = (x - centerX) / 20;
                const rotateX = (centerY - y) / 20;
                
                card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl p-8 flex flex-col justify-between transform-style-3d backface-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FD5201]/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#36A8DA]/20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="p-3 bg-[#36A8DA]/10 rounded-full inline-flex mb-6 backdrop-blur-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#36A8DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">4K Ultra HD Recording</h3>
                  <p className="text-gray-300 text-lg">
                    Capture breathtaking clarity with 3840×2160 resolution at 30fps. Our advanced image sensor delivers exceptional low-light performance and vibrant colors that truly pop.
                  </p>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <button className="text-[#FD5201] font-medium flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white">
                    <span className="w-2 h-2 bg-[#36A8DA] rounded-full mr-1.5"></span>
                    4K UHD
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of smaller features */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featuresList.slice(1, 5).map((feature) => (
              <div 
                key={feature.id}
                className="relative bg-[#0a1622]/90 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 hover:border-[feature.color] transition-all duration-300 overflow-hidden group hover:shadow-lg"
                style={{ '--feature-color': feature.color }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`} style={{ background: feature.color }}></div>
                
                <div className="relative z-10">
                  <div className={`p-2.5 rounded-xl inline-flex mb-4`} style={{ background: `${feature.color}20` }}>
                    <div className="text-[#36A8DA]" style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#FD5201] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{feature.description}</p>
                </div>
                
                <div className={`w-0 group-hover:w-full h-1 absolute bottom-0 left-0 transition-all duration-500 opacity-0 group-hover:opacity-100`} 
                  style={{ background: `linear-gradient(to right, ${feature.color}, ${feature.color}90)` }}>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature tabs - Interactive selection */}
        <div className="mb-8">
          <div className="tab-container mb-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Category tabs - First row */}
              <div className="w-full md:w-1/3 space-y-3">
                {featuresRow1.map(feature => (
                  <div 
                    key={feature.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-3
                      ${activeFeature === feature.id ? 
                        'bg-gradient-to-r from-[#0a1622] to-[#0a1622]/80 border-l-4 border-[#FD5201] shadow-lg' : 
                        'bg-[#0a1622]/50 hover:bg-[#0a1622]/80'}`}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className={`p-2 rounded-lg ${activeFeature === feature.id ? 'bg-[#FD5201]/20 text-[#FD5201]' : 'bg-[#36A8DA]/10 text-[#36A8DA]'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${activeFeature === feature.id ? 'text-white' : 'text-gray-300'}`}>{feature.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Feature details panel */}
              <div className="w-full md:w-1/3 bg-gradient-to-br from-[#0a1622] to-black border border-gray-800 rounded-2xl p-8 flex flex-col min-h-[300px] justify-between relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA]"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                
                {activeFeature ? (
                  <>
                    <div>
                      <div className="p-3 bg-gradient-to-br from-[#FD5201]/20 to-[#36A8DA]/20 rounded-xl inline-flex mb-6 backdrop-blur-md">
                        {featuresList.find(f => f.id === activeFeature)?.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{featuresList.find(f => f.id === activeFeature)?.title}</h3>
                      <p className="text-gray-300">{featuresList.find(f => f.id === activeFeature)?.description}</p>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <button className="text-[#FD5201] font-medium flex items-center group">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-lg">
                    Select a feature to see details
                  </div>
                )}
              </div>
              
              {/* Category tabs - Second row */}
              <div className="w-full md:w-1/3 space-y-3">
                {featuresRow2.map(feature => (
                  <div 
                    key={feature.id}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-3
                      ${activeFeature === feature.id ? 
                        'bg-gradient-to-r from-[#0a1622] to-[#0a1622]/80 border-l-4 border-[#FD5201] shadow-lg' : 
                        'bg-[#0a1622]/50 hover:bg-[#0a1622]/80'}`}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className={`p-2 rounded-lg ${activeFeature === feature.id ? 'bg-[#FD5201]/20 text-[#FD5201]' : 'bg-[#36A8DA]/10 text-[#36A8DA]'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${activeFeature === feature.id ? 'text-white' : 'text-gray-300'}`}>{feature.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards with floating elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature highlight card 1 */}
          <div className="relative p-6 md:p-8 bg-gradient-to-br from-[#0a1622] to-[#070d14] rounded-2xl border border-gray-800 overflow-hidden group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD5201]/0 to-[#36A8DA]/0 group-hover:from-[#FD5201]/5 group-hover:to-[#36A8DA]/5 transition-all duration-700"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FD5201]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#FD5201]/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#FD5201] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#36A8DA] rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FD5201] transition-colors">Premium Image Quality</h3>
                <p className="text-gray-400">Our advanced image processor ensures stunning clarity in all conditions, from bright daylight to low light environments. Capture moments exactly as you see them.</p>
              </div>
              
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">4K</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Wide Angle</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">HDR</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature highlight card 2 */}
          <div className="relative p-6 md:p-8 bg-gradient-to-br from-[#0a1622] to-[#070d14] rounded-2xl border border-gray-800 overflow-hidden group hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#36A8DA]/0 to-[#FD5201]/0 group-hover:from-[#36A8DA]/5 group-hover:to-[#FD5201]/5 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#36A8DA]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#36A8DA]/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#36A8DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#FD5201] rounded-full"></div>
                    <div className="w-2 h-2 bg-[#36A8DA] rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#36A8DA] transition-colors">Always Connected</h3>
                <p className="text-gray-400">With built-in 4G connectivity, you're always online no matter where your adventure takes you. Share your footage instantly or make emergency calls with a single tap.</p>
              </div>
              
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">4G LTE</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">Wi-Fi</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">SOS Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax background elements */}
      <div className="hidden xl:block absolute top-1/4 left-10 w-6 h-6 bg-[#FD5201] rounded-full blur-sm opacity-30"></div>
      <div className="hidden xl:block absolute top-3/4 right-20 w-4 h-4 bg-[#36A8DA] rounded-full blur-sm opacity-30"></div>
      <div className="hidden xl:block absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full blur-sm opacity-20"></div>
    </section>
  );
};

export default Features;