import React, { useState, useEffect } from 'react';
import { Painting, loadImages } from '../utils/imageLoader';

const Gallery: React.FC = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const images = await loadImages();
      setPaintings(images);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const openModal = (painting: Painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Art Gallery
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Immerse yourself in a collection of contemporary artworks, each piece telling its own unique story
          </p>
        </div>
      </div>

      {/* Modern Gallery Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {paintings.map((painting, index) => (
            <div 
              key={painting.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative group cursor-pointer" onClick={() => openModal(painting)}>
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
                    
                    {/* Click to view overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Click hint */}
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500 font-medium">Click to view original</p>
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

        {/* Gallery Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl shadow-lg px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{paintings.length}</div>
              <div className="text-sm text-gray-600">Artworks</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {new Set(paintings.map(p => p.metadata.medium)).size}
              </div>
              <div className="text-sm text-gray-600">Mediums</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {new Set(paintings.map(p => p.metadata.year)).size}
              </div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Adding New Artwork
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Upload Image</h3>
                  <p className="text-gray-600 text-sm">Place your image file in the <code className="bg-gray-100 px-1 rounded">public/paintings/</code> folder</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Add Details</h3>
                  <p className="text-gray-600 text-sm">Add image metadata to <code className="bg-gray-100 px-1 rounded">metadata.json</code></p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Refresh</h3>
                  <p className="text-gray-600 text-sm">Your artwork appears automatically - no code changes needed!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedPainting && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedPainting.src}
                alt={selectedPainting.metadata.title}
                className="max-h-[70vh] w-full object-contain"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPainting.metadata.title}
                </h3>
                <p className="text-xl text-blue-600 mb-2">
                  {selectedPainting.metadata.artist}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {selectedPainting.metadata.year} • {selectedPainting.metadata.medium}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedPainting.metadata.description}
                </p>
                <p className="text-gray-500 text-sm">
                  Press ESC or click outside to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 