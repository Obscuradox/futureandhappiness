'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconVolume, IconVolumeOff, IconMaximize } from '@tabler/icons-react';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      // On mobile, allow normal scrolling always
      if (isMobileState) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start animation earlier when section enters viewport
      // Animation should begin when section is 25% visible from the top
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const triggerPoint = viewportHeight * 0.75; // Start when section is 25% down from top
      const isProperlyInView = rect.top <= triggerPoint && rect.bottom >= 0;

      if (!isProperlyInView) return;

      // Allow normal scrolling when fully expanded and scrolling down
      if (mediaFullyExpanded && e.deltaY > 0) {
        return;
      }

      // Allow normal scrolling when not expanded and scrolling up
      if (!mediaFullyExpanded && scrollProgress <= 0.01 && e.deltaY < 0) {
        return;
      }

      // Add timeout to prevent rapid fire scroll events
      if (scrollTimeoutRef.current) {
        return;
      }

      // Reduced intensity to prevent scroll locking
      e.preventDefault();

      const scrollDelta = e.deltaY * 0.002; // Balanced speed to prevent freezing
      const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
      setScrollProgress(newProgress);

      // Set timeout to allow next scroll event
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 16); // ~60fps

      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
        if (newProgress <= 0.01) {
          setMediaFullyExpanded(false);
        }
      }
    };

    if (sectionRef.current) {
      const section = sectionRef.current;

      // Only add wheel listener on desktop, completely avoid touch events on mobile
      if (!isMobileState) {
        section.addEventListener('wheel', handleWheel as unknown as EventListener, {
          passive: false,
        });
      }

      return () => {
        if (!isMobileState) {
          section.removeEventListener(
            'wheel',
            handleWheel as unknown as EventListener
          );
        }
      };
    }
  }, [scrollProgress, mediaFullyExpanded, isMobileState]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      const isMobile = window.innerWidth < 768;
      setIsMobileState(isMobile);
      // On mobile, always show content and expand media
      if (isMobile) {
        setShowContent(true);
        setMediaFullyExpanded(true);
        setScrollProgress(1);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 600 + (isMobileState ? 350 : scrollProgress * 950);
  const mediaHeight = 350 + (isMobileState ? 250 : scrollProgress * 450);
  const textTranslateX = (isMobileState ? 0 : scrollProgress) * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[84vh]'>
        <div className='relative w-full flex flex-col items-center min-h-[84vh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileState ? 1 : 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            {/* Mobile Title Above Video */}
            {isMobileState && (
              <div className='flex flex-col items-center justify-center text-center gap-4 w-full relative z-10 pt-20 pb-8'>
                <h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'
                  style={{
                    color: '#ffffff',
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)',
                    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2))',
                  }}
                >
                  {title}
                </h2>
                {date && (
                  <p
                    className='text-xl'
                    style={{
                      color: '#ffffff',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {date}
                  </p>
                )}
              </div>
            )}

            <div className='flex flex-col items-center justify-center w-full h-[84vh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') || mediaSrc.includes('youtu.be') ? (
                    <div className='relative w-full h-full'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'controls=1&rel=0&mute=1'
                            : mediaSrc.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') + '?controls=1&rel=0&mute=1'
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        style={{ pointerEvents: mediaFullyExpanded ? 'auto' : 'none' }}
                      />
                      {!isMobileState && (
                        <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20'>
                          <button
                            onClick={() => {
                              const iframe = document.querySelector('iframe');
                              if (iframe && iframe.requestFullscreen) {
                                iframe.requestFullscreen();
                              }
                            }}
                            className='flex items-center gap-2 px-6 py-3 bg-black/80 hover:bg-black/90 text-white rounded-lg transition-colors font-semibold'
                            aria-label='Fullscreen'
                          >
                            <IconMaximize className='w-6 h-6' />
                            <span>Fullscreen</span>
                          </button>
                        </div>
                      )}
                      <motion.div
                        className='absolute inset-0 bg-black/20 rounded-xl pointer-events-none'
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: mediaFullyExpanded ? 0 : 0.4 - scrollProgress * 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  ) : mediaSrc.includes('vimeo.com') ? (
                    <div className='relative w-full h-full'>
                      <iframe
                        src={mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&loop=1&autopause=0&controls=1&badge=0&muted=1'}
                        width='100%'
                        height='100%'
                        frameBorder='0'
                        allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        className='w-full h-full rounded-xl'
                        title={title}
                        style={{ pointerEvents: mediaFullyExpanded ? 'auto' : 'none' }}
                      />

                      {!isMobileState && (
                        <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20'>
                          <button
                            onClick={() => {
                              const iframe = document.querySelector('iframe');
                              if (iframe && iframe.requestFullscreen) {
                                iframe.requestFullscreen();
                              }
                            }}
                            className='flex items-center gap-2 px-6 py-3 bg-black/80 hover:bg-black/90 text-white rounded-lg transition-colors font-semibold'
                            aria-label='Fullscreen'
                          >
                            <IconMaximize className='w-6 h-6' />
                            <span>Fullscreen</span>
                          </button>
                        </div>
                      )}
                      <motion.div
                        className='absolute inset-0 bg-black/20 rounded-xl pointer-events-none'
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: mediaFullyExpanded ? 0 : 0.4 - scrollProgress * 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full'>
                      <video
                        ref={videoRef}
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay={false}
                        muted={true}
                        loop={false}
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={mediaFullyExpanded}
                        style={{ pointerEvents: mediaFullyExpanded ? 'auto' : 'none' }}
                      />
                      {!isMobileState && (
                        <div className='absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20'>
                          <button
                            onClick={toggleMute}
                            className='flex items-center gap-2 px-6 py-3 bg-black/80 hover:bg-black/90 text-white rounded-lg transition-colors font-semibold'
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? <IconVolumeOff className='w-6 h-6' /> : <IconVolume className='w-6 h-6' />}
                            <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                          </button>
                          <button
                            onClick={toggleFullscreen}
                            className='flex items-center gap-2 px-6 py-3 bg-black/80 hover:bg-black/90 text-white rounded-lg transition-colors font-semibold'
                            aria-label='Fullscreen'
                          >
                            <IconMaximize className='w-6 h-6' />
                            <span>Fullscreen</span>
                          </button>
                        </div>
                      )}

                      <motion.div
                        className='absolute inset-0 bg-black/20 rounded-xl pointer-events-none'
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: mediaFullyExpanded ? 0 : 0.4 - scrollProgress * 0.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                  {date && (
                    <p
                      className='text-2xl text-blue-200'
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-blue-200 font-medium text-center'
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {!isMobileState && (
                <div
                  className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                    textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
                >
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200 transition-none'
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {firstWord}
                  </motion.h2>
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-200 transition-none'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </motion.h2>
                </div>
              )}

            </div>

            <motion.section
              className='relative flex flex-col w-full overflow-hidden'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{ backgroundColor: '#ffffff', height: 'auto', minHeight: '300px' }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;