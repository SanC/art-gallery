#!/bin/bash

# 🚀 Art Gallery Deployment Script
# This script helps you deploy your art gallery to GitHub and Vercel

echo "🎨 Art Gallery Deployment Script"
echo "=================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the art-gallery directory"
    exit 1
fi

echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if git repository exists
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Art Gallery Website"
    git branch -M main
    
    echo ""
    echo "📝 Next steps:"
    echo "1. Create a new repository on GitHub.com"
    echo "2. Copy the repository URL"
    echo "3. Run: git remote add origin YOUR_REPOSITORY_URL"
    echo "4. Run: git push -u origin main"
    echo "5. Go to vercel.com and import your repository"
    echo ""
    echo "🔗 Or use this command (replace with your repo URL):"
    echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "git push -u origin main"
else
    echo "📤 Pushing to GitHub..."
    git add .
    git commit -m "Update art gallery website"
    git push
    
    echo "✅ Code pushed to GitHub!"
    echo ""
    echo "🌐 If you're using Vercel/Netlify, your site should update automatically."
    echo "📱 Check your deployment platform dashboard for the live URL."
fi

echo ""
echo "🎉 Deployment script completed!"
echo "📖 See DEPLOYMENT.md for detailed instructions." 