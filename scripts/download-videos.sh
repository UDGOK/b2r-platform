#!/bin/bash

# Create videos directory if it doesn't exist
mkdir -p public/videos

# Download videos
# Hero video - Modern city buildings
curl -L "https://www.pexels.com/download/video/5972033" -o public/videos/hero-buildings.mp4

# Smart home video
curl -L "https://www.pexels.com/download/video/5495845" -o public/videos/smart-home.mp4

# Analytics video
curl -L "https://www.pexels.com/download/video/5495862" -o public/videos/analytics-preview.mp4

# Maintenance video
curl -L "https://www.pexels.com/download/video/5495873" -o public/videos/maintenance.mp4

# Tenant experience video
curl -L "https://www.pexels.com/download/video/5495890" -o public/videos/tenant.mp4

# Financial video
curl -L "https://www.pexels.com/download/video/5495856" -o public/videos/financial.mp4

# Future living video
curl -L "https://www.pexels.com/download/video/5495868" -o public/videos/future-living.mp4

echo "Videos downloaded successfully!"
