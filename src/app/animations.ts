'use client';

// Intersection Observer for fade-up animations
export const setupFadeUpAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add scale animation for videos
          const video = entry.target.querySelector('video');
          if (video) {
            video.style.transform = 'scale(1)';
            video.style.opacity = '1';
          }
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  document.querySelectorAll('.fade-up, .video-container').forEach((element) => {
    observer.observe(element);
  });
};

// Parallax scroll effect
export const setupParallaxEffect = () => {
  let ticking = false;
  let lastScrollY = window.scrollY;

  const parallaxElements = document.querySelectorAll('.parallax');

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        parallaxElements.forEach((element) => {
          const speed = (element as HTMLElement).dataset.speed || '0.5';
          const yPos = (window.scrollY - lastScrollY) * parseFloat(speed);
          element.setAttribute(
            'style',
            `transform: translate3d(0, ${yPos}px, 0) scale(1.1)`
          );
        });
        lastScrollY = window.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

// Smooth video playback
export const setupVideoPlayback = () => {
  const videos = document.querySelectorAll('video');
  
  videos.forEach((video) => {
    // Start loading the video
    video.load();
    
    // Add smooth playback
    video.addEventListener('canplay', () => {
      video.style.transition = 'opacity 1s ease-out, transform 1.5s ease-out';
      video.style.opacity = '1';
    });

    // Handle video playback
    let playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video started playing
        })
        .catch(() => {
          // Auto-play was prevented
          console.log('Video autoplay prevented');
        });
    }
  });
};

// Initialize all animations
export const initializeAnimations = () => {
  setupFadeUpAnimations();
  setupParallaxEffect();
  setupVideoPlayback();
};
