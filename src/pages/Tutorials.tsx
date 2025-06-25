import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

interface Tutorial {
  slug: string;
  title: string;
  description: string;
  content: string;
}

const Tutorials: React.FC = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  useEffect(() => {
    // In a real app, you would import the markdown files dynamically
    // For now, we'll use the sample tutorials we created
    const sampleTutorials: Tutorial[] = [
      {
        slug: 'watercolor-basics',
        title: 'Watercolor Basics',
        description: 'Learn the fundamentals of watercolor painting',
        content: `# Watercolor Basics

Watercolor painting is one of the most beautiful and expressive art forms. In this tutorial, we'll cover the essential techniques you need to get started.

## Getting Started

The key to successful watercolor painting is understanding how water and pigment interact. Start with quality paper and paints for the best results.

## Basic Techniques

1. **Wet-on-wet**: Apply paint to wet paper for soft, flowing effects
2. **Wet-on-dry**: Apply paint to dry paper for more controlled results
3. **Dry brush**: Use minimal water for textured effects

Practice these techniques regularly to develop your skills and confidence with watercolor painting.`
      },
      {
        slug: 'oil-painting-techniques',
        title: 'Oil Painting Techniques',
        description: 'Master the art of oil painting with these essential techniques',
        content: `# Oil Painting Techniques

Oil painting offers incredible versatility and depth. This tutorial will guide you through the fundamental techniques.

## Materials

Quality oil paints, brushes, and canvas are essential. Start with a limited palette of primary colors and expand as you progress.

## Techniques to Master

1. **Underpainting**: Create a foundation with thinned paint
2. **Glazing**: Build layers of transparent color
3. **Impasto**: Apply thick paint for texture
4. **Scumbling**: Drag dry paint over wet layers

Remember to work from dark to light and allow proper drying time between layers.`
      }
    ];

    setTutorials(sampleTutorials);
  }, []);

  const getPreview = (content: string) => {
    // Remove markdown formatting and get first paragraph
    const plainText = content
      .replace(/^#.*$/gm, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .trim();
    
    const sentences = plainText.split(/[.!?]/);
    return sentences[0] + (sentences[0].endsWith('.') ? '' : '.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Art Tutorials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn various painting techniques and improve your artistic skills with these step-by-step tutorials.
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-semibold">Tutorial</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tutorial.description}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {getPreview(tutorial.content)}
                </p>
                <Link
                  to={`/tutorials/${tutorial.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Adding New Tutorials
            </h2>
            <p className="text-gray-600 mb-4">
              To add new tutorials, simply place markdown (`.md`) files in the <code className="bg-gray-100 px-2 py-1 rounded">src/tutorials</code> folder.
            </p>
            <p className="text-gray-600 mb-4">
              Each tutorial should include frontmatter with a title and description:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm text-left overflow-x-auto">
{`---
title: Your Tutorial Title
description: Brief description of the tutorial
---

# Your Tutorial Content

Your markdown content here...`}
            </pre>
            <p className="text-gray-600 mt-4">
              New tutorials will appear automatically without requiring any code changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 