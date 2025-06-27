export interface ImageMetadata {
  title: string;
  description: string;
  year: string;
  medium: string;
  artist: string;
  order: number;
}

export interface Painting {
  id: string;
  filename: string;
  src: string;
  metadata: ImageMetadata;
}

// Function to get all images from the paintings folder
export const loadImages = async (): Promise<Painting[]> => {
  try {
    // Load metadata
    const metadataResponse = await fetch('/paintings/metadata.json');
    const metadata: Record<string, ImageMetadata> = await metadataResponse.json();
    
    // Get list of image files (in a real app, this would come from an API)
    // For now, we'll use the files we know exist and any new ones added to metadata
    const imageFiles = Object.keys(metadata);
    
    const paintings = imageFiles.map((filename, index) => ({
      id: (index + 1).toString(),
      filename,
      src: `/paintings/${filename}`,
      metadata: metadata[filename]
    }));

    // Sort paintings by the order field
    return paintings.sort((a, b) => a.metadata.order - b.metadata.order);
  } catch (error) {
    console.error('Error loading images:', error);
    return [];
  }
};

// Function to get a single image by filename
export const getImageByFilename = async (filename: string): Promise<Painting | null> => {
  try {
    const metadataResponse = await fetch('/paintings/metadata.json');
    const metadata: Record<string, ImageMetadata> = await metadataResponse.json();
    
    if (metadata[filename]) {
      return {
        id: '1',
        filename,
        src: `/paintings/${filename}`,
        metadata: metadata[filename]
      };
    }
    return null;
  } catch (error) {
    console.error('Error loading image:', error);
    return null;
  }
};

// Function to get featured images (first 6 images by order)
export const getFeaturedImages = async (): Promise<Painting[]> => {
  const allImages = await loadImages();
  return allImages.slice(0, 6);
}; 