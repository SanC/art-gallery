import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about my journey as an artist and my passion for creating beautiful artwork.
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            {/* Profile Image */}
            <div className="md:w-1/3 p-8 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg font-semibold">Artist Photo</p>
                  <p className="text-sm opacity-75">profile.jpg</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sarah Johnson
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate artist with over 10 years of experience in various painting mediums. 
                My journey began when I first picked up a paintbrush as a child, and since then, 
                I've been constantly exploring and evolving my artistic style.
              </p>
              <p className="text-gray-600 mb-6">
                I believe that art has the power to transform spaces and touch hearts. Each piece I create 
                is a reflection of my emotions, experiences, and the beauty I see in the world around me. 
                My goal is to share this beauty with others and inspire them to see the world through an artist's eyes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  View Gallery
                </Link>
                <a
                  href="mailto:contact@artgallery.com"
                  className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Art Style & Mediums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Art Style */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Art Style
            </h3>
            <p className="text-gray-600 mb-4">
              I specialize in contemporary impressionism with a focus on capturing the essence of light and emotion. 
              My work often features vibrant colors and expressive brushwork that brings scenes to life.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Contemporary Impressionism</li>
              <li>• Abstract Expressionism</li>
              <li>• Landscape and Nature</li>
              <li>• Urban and Cityscapes</li>
            </ul>
          </div>

          {/* Favorite Mediums */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Favorite Mediums
            </h3>
            <p className="text-gray-600 mb-4">
              I work with a variety of mediums, each offering unique possibilities for expression and creativity.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Oil Painting</li>
              <li>• Watercolor</li>
              <li>• Acrylic</li>
              <li>• Mixed Media</li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Achievements & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Award Winner</h4>
              <p className="text-gray-600 text-sm">
                First Place, Contemporary Art Exhibition 2023
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-3-3a1 1 0 100 2v3a1 1 0 11-2 0v-3a1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Exhibitions</h4>
              <p className="text-gray-600 text-sm">
                Featured in 15+ galleries nationwide
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Students</h4>
              <p className="text-gray-600 text-sm">
                Taught 500+ students art techniques
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Explore My Art?
          </h3>
          <p className="text-xl text-blue-100 mb-6">
            Discover my latest works and learn from my tutorials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Browse Gallery
            </Link>
            <Link
              to="/tutorials"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Learn Techniques
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 