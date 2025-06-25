import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Painting, getFeaturedImages } from '../utils/imageLoader';

const Home: React.FC = () => {
  const [featuredPaintings, setFeaturedPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedImages = async () => {
      setLoading(true);
      const images = await getFeaturedImages();
      setFeaturedPaintings(images);
      setLoading(false);
    };

    fetchFeaturedImages();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1958&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to My Art Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the beauty of contemporary art through my collection of paintings and digital artwork
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* Featured Paintings Section - Modern Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Artworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of my most recent and captivating pieces, each telling its own unique story
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-16">
              {featuredPaintings.map((painting, index) => (
                <div 
                  key={painting.id} 
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-3xl p-4 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                        <img
                          src={painting.src}
                          alt={painting.metadata.title}
                          className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center hidden">
                          <div className="text-gray-500 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm">Image not found</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium mb-4">
                        {painting.metadata.medium}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {painting.metadata.title}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold mb-2">
                        {painting.metadata.artist}
                      </p>
                      <p className="text-lg text-gray-500 mb-6">
                        {painting.metadata.year}
                      </p>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {painting.metadata.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">Available</span>
                      </div>
                      <div className="w-px h-4 bg-gray-300"></div>
                      <span className="text-sm text-gray-500">Original Artwork</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Artworks
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn Art Techniques
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore my comprehensive tutorials and master various painting techniques from watercolor fundamentals to advanced oil painting methods
          </p>
          <Link
            to="/tutorials"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Tutorials
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 