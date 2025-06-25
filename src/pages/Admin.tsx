import React, { useState, useEffect } from 'react';
import { Painting, loadImages } from '../utils/imageLoader';

interface Tutorial {
  slug: string;
  title: string;
  filename: string;
}

const Admin: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<Painting[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Load images
      const images = await loadImages();
      setGalleryImages(images);

      // Sample tutorials
      const sampleTutorials: Tutorial[] = [
        { slug: 'watercolor-basics', title: 'Watercolor Basics', filename: 'watercolor-basics.md' },
        { slug: 'oil-painting-techniques', title: 'Oil Painting Techniques', filename: 'oil-painting-techniques.md' },
      ];
      setTutorials(sampleTutorials);
      
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // In a real app, you would upload the file to the server
      alert(`File "${selectedFile.name}" would be uploaded to public/paintings/`);
      setSelectedFile(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admin Panel
          </h1>
          <p className="text-lg text-gray-600">
            Manage your gallery images and tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gallery Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Gallery Images
            </h2>
            
            {/* Upload Section */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upload New Image
              </h3>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {selectedFile && (
                  <div className="text-sm text-gray-600">
                    Selected: {selectedFile.name}
                  </div>
                )}
                <button
                  onClick={handleUpload}
                  disabled={!selectedFile}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-300"
                >
                  Upload Image
                </button>
              </div>
            </div>

            {/* Current Images */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Current Images ({galleryImages.length})
              </h3>
              <div className="space-y-3">
                {galleryImages.map((image) => (
                  <div key={image.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img
                        src={image.src}
                        alt={image.metadata.title}
                        className="w-10 h-10 object-cover rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center hidden">
                        <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {image.metadata.title}
                        </p>
                        <p className="text-sm text-gray-500">{image.filename}</p>
                        <p className="text-xs text-gray-400">{image.metadata.artist} • {image.metadata.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Instructions</h4>
              <p className="text-sm text-blue-800 mb-2">
                To add new images:
              </p>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Place image file in <code className="bg-blue-100 px-1 rounded">public/paintings/</code></li>
                <li>2. Add metadata to <code className="bg-blue-100 px-1 rounded">public/paintings/metadata.json</code></li>
                <li>3. Refresh the page</li>
              </ol>
            </div>
          </div>

          {/* Tutorial Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tutorials
            </h2>
            
            {/* Current Tutorials */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Current Tutorials ({tutorials.length})
              </h3>
              <div className="space-y-3">
                {tutorials.map((tutorial) => (
                  <div key={tutorial.slug} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{tutorial.title}</p>
                        <p className="text-sm text-gray-500">{tutorial.filename}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Instructions</h4>
              <p className="text-sm text-purple-800 mb-3">
                To add new tutorials, place markdown (`.md`) files in the <code className="bg-purple-100 px-1 rounded">src/tutorials</code> folder.
              </p>
              <p className="text-sm text-purple-800">
                Each tutorial should include frontmatter with title and description. New tutorials will appear automatically.
              </p>
            </div>

            {/* Sample Frontmatter */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Sample Frontmatter</h4>
              <pre className="text-xs text-gray-600 overflow-x-auto">
{`---
title: Your Tutorial Title
description: Brief description of the tutorial
---

# Your Tutorial Content

Your markdown content here...`}
              </pre>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            System Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gallery Status</h3>
              <p className="text-gray-600">All systems operational</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Images</h3>
              <p className="text-gray-600">{galleryImages.length} images in gallery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tutorials</h3>
              <p className="text-gray-600">{tutorials.length} tutorials available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 