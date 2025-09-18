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
import {
  IconVolume,
  IconVolumeOff,
  IconMaximize,
  IconPlayerPlay,
} from '@tabler/icons-react';

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
  const [hasUserStartedPlayback, setHasUserStartedPlayback] =
    useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollProgressRef = useRef<number>(0);
  const mediaFullyExpandedRef = useRef<boolean>(false);
  const showContentRef = useRef<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    scrollProgressRef.current = 0;
    setShowContent(false);
    showContentRef.current = false;
    setMediaFullyExpanded(false);
    mediaFullyExpandedRef.current = false;
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      if (isMobileState) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const triggerPoint = viewportHeight * 0.75;
      const isProperlyInView = rect.top <= triggerPoint && rect.bottom >= 0;

      if (!isProperlyInView) return;

      const currentProgress = scrollProgressRef.current;
      const isExpanded = mediaFullyExpandedRef.current;

      if (isExpanded && e.deltaY > 0) {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        return;
      }

      if (!isExpanded && currentProgress <= 0.01 && e.deltaY < 0) {
        return;
      }

      const deltaY = e.deltaY;

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      e.preventDefault();

      animationFrameRef.current = window.requestAnimationFrame(() => {
        const sensitivity = 0.0025;
        const nextProgress = Math.min(
          Math.max(scrollProgressRef.current + deltaY * sensitivity, 0),
          1
        );

        if (nextProgress === scrollProgressRef.current) {
          animationFrameRef.current = null;
          return;
        }

        scrollProgressRef.current = nextProgress;
        setScrollProgress(nextProgress);

        if (nextProgress >= 1) {
          if (!mediaFullyExpandedRef.current) {
            mediaFullyExpandedRef.current = true;
            setMediaFullyExpanded(true);
          }
          if (!showContentRef.current) {
            showContentRef.current = true;
            setShowContent(true);
          }
        } else {
          if (nextProgress < 0.75 && showContentRef.current) {
            showContentRef.current = false;
            setShowContent(false);
          }

          if (nextProgress <= 0.01 && mediaFullyExpandedRef.current) {
            mediaFullyExpandedRef.current = false;
            setMediaFullyExpanded(false);
          }
        }

        animationFrameRef.current = null;
      });
    };

    const section = sectionRef.current;

    if (!section || isMobileState) {
      return;
    }

    section.addEventListener('wheel', handleWheel as unknown as EventListener, {
      passive: false,
    });

    return () => {
      section.removeEventListener(
        'wheel',
        handleWheel as unknown as EventListener
      );

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isMobileState]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      const isMobile = window.innerWidth < 768;
      setIsMobileState(isMobile);
      // On mobile, always show content and expand media
      if (isMobile) {
        setShowContent(true);
        showContentRef.current = true;
        setMediaFullyExpanded(true);
        mediaFullyExpandedRef.current = true;
        setScrollProgress(1);
        scrollProgressRef.current = 1;
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (mediaType !== 'video') {
      return;
    }

    if (isMobileState) {
      setHasUserStartedPlayback(false);

      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    } else {
      setHasUserStartedPlayback(true);
    }
  }, [isMobileState, mediaSrc, mediaType]);

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

  const handleMobilePlay = () => {
    if (mediaType !== 'video') {
      return;
    }

    if (mediaSrc.includes('vimeo.com')) {
      setHasUserStartedPlayback(true);
      return;
    }

    if (!videoRef.current) {
      return;
    }

    const playPromise = videoRef.current.play();

    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          setHasUserStartedPlayback(true);
        })
        .catch(() => {
          // Keep overlay visible so the user can try again if playback fails
          setHasUserStartedPlayback(false);
        });
    } else {
      setHasUserStartedPlayback(true);
    }
  };

  const shouldShowMobileOverlay =
    isMobileState && mediaType === 'video' && !hasUserStartedPlayback;

  const mobilePlayOverlay = shouldShowMobileOverlay ? (
    <div className='absolute inset-0 z-30 flex items-center justify-center rounded-xl'>
      <button
        onClick={handleMobilePlay}
        className='flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition-transform active:scale-95'
        aria-label='Play video'
      >
        <IconPlayerPlay className='h-8 w-8 translate-x-[2px]' />
      </button>
    </div>
  ) : null;

  const vimeoParams = new URLSearchParams({
    autoplay:
      !isMobileState || hasUserStartedPlayback
        ? '1'
        : '0',
    loop: '1',
    autopause: '0',
    controls: '1',
    badge: '0',
    muted: '1',
  });

  const vimeoSrc = `${mediaSrc}${mediaSrc.includes('?') ? '&' : '?'}${vimeoParams.toString()}`;

  const mediaPointerEvents = isMobileState
    ? hasUserStartedPlayback
      ? 'auto'
      : 'none'
    : mediaFullyExpanded
      ? 'auto'
      : 'none';

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    mediaFullyExpandedRef.current = mediaFullyExpanded;
  }, [mediaFullyExpanded]);

  useEffect(() => {
    showContentRef.current = showContent;
  }, [showContent]);

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
                        src={vimeoSrc}
                        width='100%'
                        height='100%'
                        frameBorder='0'
                        allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        className='w-full h-full rounded-xl'
                        title={title}
                        style={{ pointerEvents: mediaPointerEvents }}
                      />

                      {mobilePlayOverlay}

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
                        autoPlay={!isMobileState && mediaFullyExpanded}
                        muted={true}
                        loop={false}
                        playsInline
                        preload={isMobileState ? 'metadata' : 'auto'}
                        className='w-full h-full object-cover rounded-xl'
                        controls={isMobileState ? hasUserStartedPlayback : mediaFullyExpanded}
                        style={{ pointerEvents: mediaPointerEvents }}
                      />
                      {mobilePlayOverlay}
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
