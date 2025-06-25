import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface Tutorial {
  slug: string;
  title: string;
  description: string;
  content: string;
}

const TutorialPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from an API or import dynamically
    const sampleTutorials: { [key: string]: Tutorial } = {
      'watercolor-basics': {
        slug: 'watercolor-basics',
        title: 'Watercolor Basics',
        description: 'Learn the fundamentals of watercolor painting',
        content: `# Watercolor Basics

Watercolor painting is one of the most beautiful and expressive art forms. In this tutorial, we'll cover the essential techniques you need to get started.

## Getting Started

The key to successful watercolor painting is understanding how water and pigment interact. Start with quality paper and paints for the best results.

### Materials You'll Need

- **Watercolor Paper**: 140lb cold-pressed paper is ideal for beginners
- **Watercolor Paints**: Professional grade paints provide better results
- **Brushes**: A variety of sizes from small detail brushes to large wash brushes
- **Water Container**: For cleaning brushes
- **Paper Towels**: For blotting and creating effects

## Basic Techniques

### 1. Wet-on-Wet Technique

Apply paint to wet paper for soft, flowing effects. This technique creates beautiful gradients and organic shapes.

**Steps:**
1. Wet your paper with clean water
2. Apply paint while the paper is still wet
3. Watch the paint flow and blend naturally

### 2. Wet-on-Dry Technique

Apply paint to dry paper for more controlled results. This gives you precise edges and detailed work.

**Steps:**
1. Ensure your paper is completely dry
2. Apply paint with controlled brush strokes
3. Build up layers gradually

### 3. Dry Brush Technique

Use minimal water for textured effects. This creates interesting textures and details.

**Steps:**
1. Load your brush with paint but minimal water
2. Drag the brush across dry paper
3. Create texture and detail

## Color Theory for Watercolor

Understanding color theory is crucial for creating harmonious paintings:

- **Primary Colors**: Red, Blue, Yellow
- **Secondary Colors**: Green, Orange, Purple
- **Complementary Colors**: Colors opposite on the color wheel

## Practice Exercises

1. **Color Wheel**: Create a color wheel using only primary colors
2. **Gradient Washes**: Practice creating smooth color transitions
3. **Texture Studies**: Experiment with different brush techniques

## Tips for Success

- Start with simple subjects
- Practice regularly, even if just for 15 minutes a day
- Don't be afraid to make mistakes - they're part of learning
- Keep a sketchbook for experiments and ideas

Practice these techniques regularly to develop your skills and confidence with watercolor painting.`
      },
      'oil-painting-techniques': {
        slug: 'oil-painting-techniques',
        title: 'Oil Painting Techniques',
        description: 'Master the art of oil painting with these essential techniques',
        content: `# Oil Painting Techniques

Oil painting offers incredible versatility and depth. This tutorial will guide you through the fundamental techniques.

## Materials

Quality oil paints, brushes, and canvas are essential. Start with a limited palette of primary colors and expand as you progress.

### Essential Materials

- **Oil Paints**: Professional grade paints in primary colors
- **Canvas**: Pre-stretched and primed canvas
- **Brushes**: Various sizes and shapes (filbert, round, flat)
- **Mediums**: Linseed oil, turpentine, or odorless mineral spirits
- **Palette**: Wooden or disposable palette
- **Easel**: Adjustable easel for comfortable painting

## Techniques to Master

### 1. Underpainting

Create a foundation with thinned paint. This establishes the composition and values.

**Process:**
1. Sketch your composition lightly
2. Mix paint with medium to create thin washes
3. Block in major shapes and values
4. Let dry completely before proceeding

### 2. Glazing

Build layers of transparent color. This creates depth and luminosity.

**Process:**
1. Apply thin, transparent layers of paint
2. Allow each layer to dry before adding the next
3. Build up color gradually
4. Use complementary colors for shadows

### 3. Impasto

Apply thick paint for texture. This adds dimension and interest to your work.

**Process:**
1. Use a palette knife or thick brush
2. Apply paint directly from the tube or mix with minimal medium
3. Create texture and dimension
4. Use for highlights and focal points

### 4. Scumbling

Drag dry paint over wet layers. This creates interesting textures and effects.

**Process:**
1. Apply a base layer and let it dry
2. Load a dry brush with paint
3. Drag the brush across the surface
4. Create broken color effects

## Color Mixing

Understanding color mixing is essential for oil painting:

- **Warm Colors**: Reds, oranges, yellows
- **Cool Colors**: Blues, greens, purples
- **Neutral Colors**: Browns, grays, earth tones

## Safety Considerations

- Work in a well-ventilated area
- Use odorless mineral spirits when possible
- Clean brushes thoroughly after use
- Dispose of materials properly

## Drying Times

Oil paint dries slowly, which is both an advantage and challenge:

- **Fast-drying colors**: Umber, sienna, lead white
- **Slow-drying colors**: Titanium white, cadmium colors
- **Mediums**: Can speed up or slow down drying time

Remember to work from dark to light and allow proper drying time between layers.`
      }
    };

    const foundTutorial = sampleTutorials[slug || ''];
    if (foundTutorial) {
      setTutorial(foundTutorial);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tutorial...</p>
        </div>
      </div>
    );
  }

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutorial Not Found</h1>
          <p className="text-gray-600 mb-6">The tutorial you're looking for doesn't exist.</p>
          <Link
            to="/tutorials"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Back to Tutorials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/tutorials"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Tutorials
          </Link>
        </nav>

        {/* Tutorial Content */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {tutorial.title}
            </h1>
            <p className="text-xl text-blue-100">
              {tutorial.description}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{tutorial.content}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            to="/tutorials"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
          >
            All Tutorials
          </Link>
          <Link
            to="/gallery"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialPost; 