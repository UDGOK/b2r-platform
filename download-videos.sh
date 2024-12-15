#!/bin/bash

# Create videos directory if it doesn't exist
mkdir -p public/videos

# Download videos using yt-dlp
echo "Downloading videos..."

# Hero video - Modern city aerial view
yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' \
  -o 'public/videos/hero.mp4' \
  'https://www.youtube.com/watch?v=JvWY-2Y-MgU'

# Smart home technology
yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' \
  -o 'public/videos/smart-home.mp4' \
  'https://www.youtube.com/watch?v=8vHdGKPogUc'

# Analytics dashboard
yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' \
  -o 'public/videos/analytics.mp4' \
  'https://www.youtube.com/watch?v=RxmGxRcaG0Y'

# Property management
yt-dlp -f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]' \
  -o 'public/videos/property.mp4' \
  'https://www.youtube.com/watch?v=QZjLJbK0Gxg'

echo "Videos downloaded successfully!"
