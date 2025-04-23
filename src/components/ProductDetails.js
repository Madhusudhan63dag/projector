import React, { useState, useRef, useEffect } from 'react';

const ProductDetails = ({ onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('standard');
  const [activeTab, setActiveTab] = useState('specs');
  const [activeSpecCategory, setActiveSpecCategory] = useState('Video & Display');
  const [selectedImage, setSelectedImage] = useState(0);
  const checkoutRef = useRef(null);
  const productRef = useRef(null);

  const variants = {
    standard: {
      name: "Standard Edition",
      basePrice: 5490,
      features: ["4G LTE Connectivity", "4K UHD Video", "8-hour Battery Life"]
    },
    pro: {
      name: "Professional Edition",
      basePrice: 6990,
      features: ["4G LTE Connectivity", "4K UHD Video", "12-hour Battery Life", "Extended Night Vision"]
    },
    ultimate: {
      name: "Ultimate Edition",
      basePrice: 8490,
      features: ["4G LTE Connectivity", "4K UHD Video", "16-hour Battery Life", "Extended Night Vision", "GPS Tracking"]
    }
  };

  // Product images for each variant (main + angles)
  const productImageSets = {
    standard: [
      "/images/recorder-standard.jpg", 
      "/images/recorder-standard-angle1.jpg",
      "/images/recorder-standard-angle2.jpg", 
      "/images/recorder-standard-angle3.jpg"
    ],
    pro: [
      "/images/recorder-pro.jpg", 
      "/images/recorder-pro-angle1.jpg",
      "/images/recorder-pro-angle2.jpg", 
      "/images/recorder-pro-angle3.jpg"
    ],
    ultimate: [
      "/images/recorder-ultimate.jpg", 
      "/images/recorder-ultimate-angle1.jpg",
      "/images/recorder-ultimate-angle2.jpg", 
      "/images/recorder-ultimate-angle3.jpg"
    ]
  };

  // Handle 3D rotation effect
  useEffect(() => {
    const productCard = productRef.current;
    if (!productCard) return;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = productCard.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      productCard.style.transform = `
        perspective(1000px) 
        rotateY(${x * 10}deg) 
        rotateX(${y * -10}deg)
        translateZ(20px)
      `;
    };
    
    const handleMouseLeave = () => {
      productCard.style.transform = `
        perspective(1000px) 
        rotateY(0deg) 
        rotateX(0deg)
        translateZ(0px)
      `;
    };
    
    productCard.addEventListener('mousemove', handleMouseMove);
    productCard.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      productCard.removeEventListener('mousemove', handleMouseMove);
      productCard.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [selectedVariant]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedImage(0);
  };

  const totalPrice = variants[selectedVariant].basePrice * quantity;

  const formatPrice = (price) => {
    return "₹" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(variants[selectedVariant], quantity, totalPrice);
    } else {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specCategories = [
    {
      category: "Video & Display",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "#F59E0B",
      specs: [
        { label: "Video Resolution", value: "4K UHD (3840×2160) @ 30 fps; 1080p @ 60 fps" },
        { label: "Display", value: "2.4″ IPS touchscreen" },
        { label: "Night Vision", value: "IR LEDs up to 10 m range" }
      ]
    },
    {
      category: "Connectivity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "#3B82F6",
      specs: [
        { label: "Cellular", value: "4G LTE (bands B1/B3/B7/B8/B20)" },
        { label: "Wi-Fi", value: "2.4 GHz 802.11b/g/n" },
        { label: "Bluetooth", value: "5.0 with A2DP support" }
      ]
    },
    {
      category: "Power & Storage",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#10B981",
      specs: [
        { label: "Battery", value: "3,000 mAh Li-ion; up to 8 hrs recording" },
        { label: "Storage", value: "MicroSD card slot (up to 256 GB)" },
        { label: "Cloud Backup", value: "Automatic sync when connected" }
      ]
    },
    {
      category: "Physical",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "#8B5CF6",
      specs: [
        { label: "Dimensions", value: "120 × 40 × 25 mm" },
        { label: "Weight", value: "150 g" },
        { label: "Controls", value: "One-click record, one-click call, power/mode switch" }
      ]
    }
  ];

  const applications = [
    {
      title: "Adventure & Sports",
      description: "Capture thrilling POV footage in any environment with reliable 4K clarity and rugged durability. Perfect for extreme sports, hiking trails, and water activities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/adventure-sports.jpg",
      color: "#F97316"
    },
    {
      title: "Security & Patrol",
      description: "Enhance situational awareness with real-time recording and streaming. Features like motion detection and night vision ensure you never miss critical moments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "/images/security-patrol.jpg",
      color: "#3B82F6"
    },
    {
      title: "Professional Inspections",
      description: "Conduct detailed site inspections with ultra-clear 4K video that captures every detail. Stream live to remote experts for real-time consultation and documentation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: "/images/professional-inspection.jpg",
      color: "#10B981"
    },
    {
      title: "Emergency Response",
      description: "Get immediate help with one-touch SOS calling that simultaneously transmits live video and GPS location. Essential for personal safety and remote operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: "/images/emergency-response.jpg",
      color: "#EF4444"
    }
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: "Setup",
      description: "Insert your SIM card & MicroSD card.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Power On",
      description: "Choose recording or standby mode via the side switch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Frame Shot",
      description: "Rotate the lens to frame your shot, then tap record.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Connect",
      description: "Stream, make video calls, or use one-click SOS.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Review",
      description: "Access footage via touchscreen, MicroSD, or cloud.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
        </svg>
      )
    }
  ];

  return (
    <section id="product-details" className="py-16 bg-gradient-to-br from-[#050a10] to-[#0a1018] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="hidden lg:block absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#FD5201]/5 blur-3xl animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-[#36A8DA]/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-white font-medium text-sm mb-3 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] px-5 py-1.5 rounded-full shadow-lg shadow-[#FD5201]/20">
            Next-Generation Vlogging
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            I & I vlog camera
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade portable recording with 4G connectivity and unmatched versatility
          </p>
        </div>

        {/* Hero product section with 3D card effect */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          {/* Product Image - Left Side */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div 
              ref={productRef} 
              className="bg-gradient-to-br from-[#0a1622]/90 to-[#050a10] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transition-all duration-300 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={productImageSets[selectedVariant][selectedImage]} 
                  alt={`I & I vlog camera ${variants[selectedVariant].name}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Dynamic status indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="inline-flex items-center bg-[#FD5201]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                    4K
                  </span>
                  <span className="inline-flex items-center bg-[#36A8DA]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                    4G
                  </span>
                </div>
                
                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/50 backdrop-blur-md rounded-full py-1.5 px-4 text-white font-bold">
                    {formatPrice(variants[selectedVariant].basePrice)}
                  </div>
                </div>
              </div>
              
              {/* Image thumbnails for different angles */}
              <div className="flex justify-center gap-3 p-4 border-t border-gray-800">
                {productImageSets[selectedVariant].map((img, index) => (
                  <div 
                    key={index} 
                    className={`w-16 h-16 border-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-[#FD5201] scale-110 shadow-lg shadow-[#FD5201]/20' 
                        : 'border-gray-700 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${variants[selectedVariant].name} angle ${index}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Details - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-[#0a1622]/90 to-black/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800/60 p-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">I & I vlog camera</h1>
                  <h2 className="text-xl text-[#36A8DA] font-medium mb-6">
                    {variants[selectedVariant].name}
                  </h2>
                  
                  <div className="mb-8">
                    <p className="text-3xl font-bold text-white mb-1.5">{formatPrice(variants[selectedVariant].basePrice)}</p>
                    <div className="flex items-center space-x-1 text-[#FD5201]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Free shipping & 30-day returns</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-3 text-gray-300">Key Features:</h3>
                    <ul className="space-y-3">
                      {variants[selectedVariant].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#FD5201]/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Variant Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-3 text-gray-300">Select Edition:</h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.keys(variants).map((key) => (
                        <button
                          key={key}
                          className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${selectedVariant === key 
                            ? 'bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 text-white shadow-lg shadow-[#FD5201]/20' 
                            : 'bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white'}`}
                          onClick={() => handleVariantChange(key)}
                        >
                          {variants[key].name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800/60">
                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-1.5">
                        Quantity:
                      </label>
                      <div className="flex items-center">
                        <button
                          className="w-10 h-10 flex items-center justify-center bg-[#0a1622] rounded-l-lg hover:bg-[#36A8DA]/20 text-gray-300 border border-gray-700/60 transition-colors"
                          onClick={decreaseQuantity}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          id="quantity"
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="mx-0 w-14 h-10 text-center border-y border-gray-700/60 bg-[#0a1622] text-white focus:outline-none"
                        />
                        <button
                          className="w-10 h-10 flex items-center justify-center bg-[#0a1622] rounded-r-lg hover:bg-[#36A8DA]/20 text-gray-300 border border-gray-700/60 transition-colors"
                          onClick={increaseQuantity}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-xl font-bold text-white">
                      Total: {formatPrice(totalPrice)}
                    </div>
                  </div>
                  
                  {/* Buy Now Button */}
                  <button
                    className="w-full bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    onClick={handleBuyNowClick}
                  >
                    <span className="mr-2">Buy Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed content section */}
        <div className="mb-20">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-[#0a1622]/50 rounded-lg p-1">
              <button 
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === 'specs' 
                    ? 'bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                Technical Specs
              </button>
              <button 
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === 'applications' 
                    ? 'bg-gradient-to-r from-[#36A8DA] to-[#36A8DA]/80 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('applications')}
              >
                Use Cases
              </button>
              <button 
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === 'howItWorks' 
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6]/80 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('howItWorks')}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {/* Technical Specifications */}
            {activeTab === 'specs' && (
              <div className="bg-gradient-to-br from-[#0a1622]/90 to-black/70 rounded-2xl shadow-xl border border-gray-800/60 p-6 md:p-10 animate-fadeIn">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Technical Specifications</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA]"></div>
                </div>
                
                {/* Category selector */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {specCategories.map((category, idx) => (
                    <button
                      key={idx}
                      className={`px-4 py-2 rounded-full flex items-center transition-all duration-300 ${
                        activeSpecCategory === category.category
                          ? `bg-${category.color}/20 text-white border border-${category.color}/50`
                          : 'bg-gray-800/40 text-gray-400 border border-gray-700/30 hover:bg-gray-800/60'
                      }`}
                      style={{
                        backgroundColor: activeSpecCategory === category.category ? `${category.color}20` : '',
                        borderColor: activeSpecCategory === category.category ? `${category.color}50` : ''
                      }}
                      onClick={() => setActiveSpecCategory(category.category)}
                    >
                      <div className="mr-2 text-[#36A8DA]" style={{ color: category.color }}>
                        {category.icon}
                      </div>
                      <span>{category.category}</span>
                    </button>
                  ))}
                </div>
                
                {/* Display selected specs */}
                <div className="md:pl-6 border-l-2 border-gray-800/60">
                  {specCategories
                    .filter(cat => cat.category === activeSpecCategory)
                    .map((category, catIdx) => (
                      <div key={catIdx} className="space-y-6">
                        {category.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-start animate-fadeIn" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex-shrink-0 h-6 w-6 rounded-full" style={{ backgroundColor: `${category.color}20` }}>
                              <div className="h-full w-full flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }}></div>
                              </div>
                            </div>
                            <div className="ml-4">
                              <p className="font-medium text-[#36A8DA] mb-1" style={{ color: category.color }}>
                                {spec.label}
                              </p>
                              <p className="text-gray-300">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {activeTab === 'applications' && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {applications.map((app, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-[#0a1622]/90 to-black/70 rounded-2xl shadow-xl border border-gray-800/60 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 z-10"></div>
                        <img 
                          src={app.image} 
                          alt={app.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                        />
                        <div 
                          className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center z-20"
                          style={{ backgroundColor: `${app.color}20` }}
                        >
                          <div className="text-[#36A8DA]" style={{ color: app.color }}>
                            {app.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                        <p className="text-gray-400">{app.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How It Works */}
            {activeTab === 'howItWorks' && (
              <div className="animate-fadeIn">
                <div className="hidden lg:block relative max-w-5xl mx-auto mb-10">
                  {/* Horizontal connector */}
                  <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-[#FD5201] via-[#36A8DA] to-[#8B5CF6] z-0"></div>
                  
                  {/* Steps */}
                  <div className="flex justify-between relative z-10">
                    {howItWorksSteps.map((step, idx) => (
                      <div key={step.id} className="flex flex-col items-center w-40">
                        <div 
                          className="bg-[#0a1622] border-4 border-gray-800 rounded-full h-16 w-16 flex items-center justify-center mb-4 shadow-lg"
                          style={{ boxShadow: `0 0 20px ${idx % 2 === 0 ? '#FD5201' : '#36A8DA'}20` }}
                        >
                          <div className="text-[#36A8DA]" style={{ color: idx % 2 === 0 ? '#FD5201' : '#36A8DA' }}>
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-center text-white">{step.title}</h3>
                        <p className="text-center text-gray-400 text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile steps */}
                <div className="lg:hidden">
                  <div className="relative ml-6">
                    {/* Vertical connector */}
                    <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[#FD5201] via-[#36A8DA] to-[#8B5CF6]"></div>
                    
                    {howItWorksSteps.map((step, idx) => (
                      <div key={step.id} className="flex mb-10 relative">
                        {/* Step bubble */}
                        <div 
                          className="absolute -left-6 bg-[#0a1622] border-2 border-gray-800 rounded-full h-12 w-12 flex items-center justify-center z-10"
                          style={{ boxShadow: `0 0 20px ${idx % 2 === 0 ? '#FD5201' : '#36A8DA'}20` }}
                        >
                          <div className="text-[#36A8DA]" style={{ color: idx % 2 === 0 ? '#FD5201' : '#36A8DA' }}>
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-10">
                          <h3 className="text-lg font-semibold mb-1 text-white">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video demo card */}
                <div className="bg-gradient-to-br from-[#0a1622]/90 to-black/70 rounded-2xl shadow-xl border border-gray-800/60 overflow-hidden mt-10">
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div 
                        className="w-20 h-20 rounded-full bg-[#FD5201]/80 flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 group"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <img 
                      src="/images/video-thumbnail.jpg" 
                      alt="Video demonstration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">See the I & I in Action</h3>
                    <p className="text-gray-400">Watch our comprehensive guide to setup and get the most from your vlog camera</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA card */}
        <div className="bg-gradient-to-r from-[#0a1622] to-[#050a10] rounded-2xl shadow-xl border border-gray-800/60 p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD5201]/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#36A8DA]/10 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 text-white">Why Choose Our 4G Portable Recorder?</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] mb-4"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#FD5201]/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-[#36A8DA]">Total Mobility</p>
                    <p className="text-gray-400 text-sm">No Wi‑Fi required—stay connected anywhere</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#36A8DA]/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#36A8DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-[#FD5201]">Versatile Use</p>
                    <p className="text-gray-400 text-sm">From extreme sports to field inspections</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#FD5201]/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-[#36A8DA]">Reliable Performance</p>
                    <p className="text-gray-400 text-sm">Auto‑save and low‑power consumption</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-[#36A8DA]/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#36A8DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-[#FD5201]">Peace of Mind</p>
                    <p className="text-gray-400 text-sm">One-click emergency calls with GPS</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <button
                className="w-full bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                onClick={handleBuyNowClick}
              >
                <span className="mr-2">Order Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductDetails;