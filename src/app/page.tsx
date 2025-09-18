'use client';

import { useState, useEffect, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import {
  IconVideo,
  IconBuilding,
  IconDeviceDesktop,
  IconHeart,
} from "@tabler/icons-react";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import LaserFlow from '@/components/LaserFlow';
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import PillNav from '@/components/PillNav';
import CurvedLoop from '@/components/CurvedLoop';
import Balatro from '@/components/Balatro';
import { CustomButton } from "@/components/ui/custom-button";

export default function Home() {

  return (
    <>
      {/* Hero Section with Spline Background */}
      <section className="relative h-screen">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="container mx-auto flex justify-between items-center">
            <Image
              src="/logo.png"
              alt="Future Of Happiness Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <div style={{ pointerEvents: 'auto' }}>
              <PillNav
                items={[
                  { label: 'About', href: '#about' },
                  { label: 'Our Events', href: '#our-events' },
                  { label: 'Services', href: '#services' },
                  { label: 'Our Projects', href: '#projects' },
                  { label: 'Partnerships', href: '#partnerships' },
                  { label: 'Contact', href: '#contact' },
                ]}
              />
            </div>
          </div>
        </nav>

        {/* Hero Text */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-32" style={{ pointerEvents: 'none' }}>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-center px-4"
            style={{
              fontFamily: 'Mulish, sans-serif',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)',
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2))',
              transform: 'perspective(1000px) rotateX(10deg)',
            }}
          >
            FUTURE AND HAPPINESS
          </h1>
        </div>

        {/* Spline Background - Full viewport */}
        <div className="absolute inset-0 w-full h-full">
          <Spline scene="https://prod.spline.design/YeE6CgulNDRta9Y7/scene.splinecode" />
        </div>
      </section>

      {/* Curved Loop Section */}
      <section className="py-8 md:py-16" style={{ backgroundColor: '#401344' }}>
        <div className="w-full h-32 md:h-40 flex items-center justify-center">
          <CurvedLoop
            marqueeText="TALENT ✦ PRECISION ✦ EXCELLENCE ✦"
            speed={2}
            curveAmount={100}
            direction="left"
            interactive={true}
            className="text-white"
          />
        </div>
      </section>

      {/* Angels Villa Video */}
      <div className="mb-16">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://player.vimeo.com/video/1118965725"
        bgImageSrc="/vidbgs/angelsvilla.png"
        title="Angels Villa"
        date="2023"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Angels Villa Bali"
          description="Exclusive month-long founders' retreat in Bali. 20 startups selected from 100+ applications."
          highlights={[
            "Month-long acceleration program",
            "Professional video shoots & pitching",
            "Industry expert masterclasses",
            "Luxury villa setting"
          ]}
        />
      </ScrollExpandMedia>
      </div>

      {/* Infinity Aengines Video */}
      <div className="mb-16">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://player.vimeo.com/video/1118966561"
        bgImageSrc="/vidbgs/infinityaengines.jpeg"
        title="Infinity Aengines"
        date="2024"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Infinity AEngines – The Ultimate Innovations Show"
          description="Immersive innovation showcase at TODA Dubai featuring dual-reality experience: physical venue + metaverse digital twin."
          highlights={[
            "Phygital event with global livestream reach",
            "Cutting-edge tech demos and startup pitches",
            "Real-world networking meets digital innovation",
            "Cinematic storytelling and creative showcases"
          ]}
        />
      </ScrollExpandMedia>
      </div>

      {/* Elevator Pitch Battle Dubai */}
      <div className="mb-16">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://player.vimeo.com/video/1118967820"
        bgImageSrc="/vidbgs/startuppitch.png"
        title="Elevator Pitch Battle"
        date="2024"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Elevator Pitch Battle Dubai"
          description="High-energy pitch competition connecting tech startups with investors in an exclusive Dubai villa setting during Bitcoin MENA & AI Blockchain Show."
          highlights={[
            "3-minute rapid pitches from curated startups",
            "Expert jury panel with rigorous selection",
            "Professional video content and digital activations",
            "Wellness-integrated villa networking experience"
          ]}
        />
      </ScrollExpandMedia>
      </div>

      {/* Services */}
      <section id="services" className="py-16" style={{ minHeight: '100vh' }}>
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white relative inline-block">
            <span
              className="absolute inset-0 blur-2xl opacity-50"
              style={{
                background: 'linear-gradient(45deg, #3C1642, #401344, #FFFFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              OUR SERVICES
            </span>
            <span
              className="relative"
              style={{
                background: 'linear-gradient(45deg, #3C1642, #401344, #FFFFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              OUR SERVICES
            </span>
          </h2>
        </div>
        <div className="relative w-full" style={{ minHeight: '150vh' }}>
          <div className="absolute inset-0 w-full h-full">
            <Balatro
              color1="#3C1642"
              color2="#FFFFFF"
              color3="#401344"
              contrast={2.5}
              lighting={0.3}
              spinSpeed={3.0}
              isRotate={true}
              mouseInteraction={true}
            />
          </div>
          <div className="relative z-10">
            <ScrollStack useWindowScroll={true}>
              <ScrollStackItem itemClassName="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                  <div className="flex justify-center items-center md:order-1">
                    <IconVideo className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-black" />
                  </div>
                  <div className="text-black text-center md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Event Production</h3>
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      Startup battles, forums, investor dinners with professional execution and global reach.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                  <div className="text-black text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Event Marketing</h3>
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      Strategic marketing campaigns, brand partnerships, and digital amplification for maximum event impact.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <IconHeart className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-black" />
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                  <div className="flex justify-center items-center md:order-1">
                    <IconBuilding className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-black" />
                  </div>
                  <div className="text-black text-center md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hospitality & Retreats</h3>
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      Founder camps, villa retreats, lifestyle programs in premium locations worldwide.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                  <div className="text-black text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Phygital & Media Innovation</h3>
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      Digital twins of venues, metaverse streaming, and cinematic video production in TV formats.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <IconDeviceDesktop className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-black" />
                  </div>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
                  <div className="flex justify-center items-center md:order-1">
                    <IconDeviceDesktop className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 text-black" />
                  </div>
                  <div className="text-black text-center md:order-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Software Development</h3>
                    <p className="text-black/80 text-base md:text-lg leading-relaxed">
                      Specializing in both Web2 and Web3 technologies, smart contracts, and decentralized applications.
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>

      {/* The Founders Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">The Founders</h2>

          {/* Hatima Singer */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <HatimaPhotoSlider />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-[#401344]">Hatima Singer</h3>
                <h4 className="text-xl font-semibold mb-6 text-gray-600">Co-Founder</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With a strong background in the telecom and system integration industry, Hatima began her career as a Lead Innovation Analyst, researching emerging technologies and transforming them into practical solutions and products. Her expertise spans IoT, Artificial Intelligence, Blockchain, Smart Cities, and Smart Government. She actively represented her work at international conferences and exhibitions, gaining global perspective and building deep connections in the innovation ecosystem.
                  </p>
                  <p>
                    Her passion for technology and creativity soon led her beyond research into showcasing innovations worldwide — from the UAE to Malaysia, Thailand, and other countries. By curating and presenting cutting-edge solutions on global stages, she discovered her true calling: creating platforms where innovators, investors, and visionaries can connect.
                  </p>
                  <p>
                    After moving to Dubai, Hatima founded Future of Happiness Events Organizing LLC, focusing on boutique innovation events that combine business acceleration with creativity, wellness, and phygital technologies. Her signature events — Angels Villa, Startup Battle, and Infinity AEngines — merge high-level networking, storytelling media formats, and digital twin experiences in the metaverse.
                  </p>
                  <p>
                    Hatima's mission is clear: to help innovative projects be heard and seen, in the UAE and across the world. Through her work, she empowers founders to amplify their voices, attract investors, and bring life-changing technologies to market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Razzaq Singer */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-4 text-[#401344]">Razzaq Singer</h3>
                <h4 className="text-xl font-semibold mb-6 text-gray-600">Co-Founder</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With a background shaped by resilience and vision, Abdur-Razzaq Singer — now known as Razzaq Singer — has transformed his life experiences into a driving force for global innovation. From humble beginnings and overcoming personal struggles, he forged his path as a technology entrepreneur, channeling his deep compassion for humanity into building solutions that address some of the world&apos;s greatest challenges.
                  </p>
                  <p>
                    Sam&apos;s expertise spans blockchain architecture, artificial intelligence integration, and decentralized finance. He has worked with international governments and organizations, designing scalable systems that merge social impact with technological progress. His achievements include leading the development of Earthy, the world&apos;s first natively carbon-negative blockchain, and contributing to groundbreaking projects in identity, sustainability, and global impact ecosystems.
                  </p>
                  <p>
                    After relocating to Dubai, Sam expanded his mission beyond technology into community building. He has hosted high-level events uniting sovereign leaders, investors, innovators, and philanthropists — ensuring that ideas of consequence are not just spoken but acted upon. His focus is not only on digital transformation but on empowering people with the tools, trust, and networks they need to enact real change.
                  </p>
                  <p>
                    Sam&apos;s ultimate goal is to bridge innovation with humanity: creating systems that help societies thrive, ensuring transparency, sustainability, and empowerment at every level. His life journey reflects his belief that technology is most powerful when it uplifts people and amplifies the good we are capable of achieving together.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <RazzaqPhotoSlider />
              </div>
            </div>
          </div>

          {/* Partnership Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <PartnershipPhotoSlider />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#401344]">Their Partnership</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Together, Razzaq and Hatima embody a union of vision and purpose. Their partnership is built on shared values of creativity, compassion, and innovation. While Hatima curates spaces where innovators and investors connect, Sam builds the underlying technologies and ecosystems that make lasting change possible. Side by side, they see the world not just as it is, but as it could be — and dedicate their lives to turning that vision into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-20 px-6" style={{ backgroundColor: '#401344' }}>
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#FFFFFF !important' }}>
            Our Projects
          </h2>

          <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
            {/* Shill and Chill Club */}
            <ProjectCard
              title="Shill and Chill Club"
              description="A cryptocurrency community platform that enables users to earn rewards by sharing quality blockchain projects. Join the 'Chilluminati' community and discover the ultimate shill and chill experience in the crypto space."
              logo="/logos/shillandchill.webp"
              href="https://shillandchill.club"
            />

            {/* Earthy.tech */}
            <ProjectCard
              title="Earthy.tech"
              description="A Web3 platform transforming global philanthropy through blockchain and AI. Features a carbon-negative network, AI-powered auditing, and transparent impact tracking for humanitarian and environmental causes."
              logo="/logos/earthy.svg"
              href="https://earthy.tech"
            />

            {/* Infinity Ængines */}
            <ProjectCard
              title="Infinity Ængines"
              description="A groundbreaking hybrid technology conference in Dubai merging fashion, blockchain, AI, and metaverse. Features runway shows, expert workshops, and networking with 2,500+ live and 250,000+ virtual participants."
              logo="/logos/IAELOGO.avif"
              href="https://infinityaengines.com"
            />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <ContactFormSection />









      {/* Footer */}
      <footer className="w-full py-16 px-6" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Future Of Happiness"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <h3 className="text-white text-lg font-bold">Future Of Happiness</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating extraordinary phygital events that connect innovation, business, and wellness through immersive experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#our-events" className="text-gray-300 hover:text-white transition-colors text-sm">Our Events</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</a></li>
                <li><a href="#wellness" className="text-gray-300 hover:text-white transition-colors text-sm">Wellness</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Events */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-semibold">Featured Events</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Angels Villa Bali</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Infinity AEngines</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Elevator Pitch Battle</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Upcoming Events</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300 text-sm">Dubai, UAE</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:contact@futureandhappiness.com" className="text-gray-300 hover:text-white transition-colors text-sm">contact@futureandhappiness.com</a>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href="tel:+971589812017" className="text-gray-300 hover:text-white transition-colors text-sm">+971 58 981 2017</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p className="text-gray-400 text-sm">© 2024 Future Of Happiness Events Organizing LLC. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                Made with ❤️ in Dubai
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


interface ProjectCardProps {
  title: string;
  description: string;
  logo: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  logo,
  href,
}) => {
  return (
    <div className="border border-purple-300/20 flex flex-col items-center justify-between max-w-sm w-full mx-auto p-6 relative h-[30rem] bg-purple-900/20"
      style={{ borderRadius: '12px' }}
    >
      {/* Corner decorative elements */}
      <ProjectCardIcon className="absolute h-6 w-6 -top-3 -left-3 text-purple-300" />
      <ProjectCardIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-purple-300" />
      <ProjectCardIcon className="absolute h-6 w-6 -top-3 -right-3 text-purple-300" />
      <ProjectCardIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-purple-300" />

      <div className="relative z-20 flex flex-col items-center justify-between h-full">
        {/* Logo and Title */}
        <div className="text-center w-full mx-auto flex flex-col items-center justify-center">
          <div className="mb-6">
            <Image
              src={logo}
              alt={title}
              width={120}
              height={120}
              className="w-24 h-24 object-contain rounded-lg"
              style={{
                filter: (logo.includes('earthy') || logo.includes('IAELOGO')) ? 'invert(1) brightness(2)' : 'none'
              }}
            />
          </div>
          <h3 style={{ color: '#FFFFFF !important' }} className="text-xl font-bold text-center mb-4">{title}</h3>
        </div>

        {/* Description */}
        <div className="flex-1 flex items-center justify-center px-2">
          <p style={{ color: '#FFFFFF !important' }} className="text-sm text-center leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <CustomButton
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const ProjectCardIcon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

interface EventContentProps {
  title: string;
  description: string;
  highlights: string[];
}

const EventContent = ({ title, description }: EventContentProps) => {
  const revealRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const memoizedLaserFlow = useMemo(() => (
    <LaserFlow
      horizontalBeamOffset={0.1}
      verticalBeamOffset={0.0}
      color="#401344"
      fogIntensity={1.2}
      wispIntensity={12.0}
      flowStrength={0.4}
      decay={0.8}
    />
  ), []);

  return (
    <div
      style={{
        height: isMobile ? '600px' : '800px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        marginBottom: '2rem'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      {memoizedLaserFlow}

      <div style={{
        position: 'absolute',
        top: isMobile ? '75%' : '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        height: isMobile ? '50%' : '45%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        border: '2px solid #401344',
        boxShadow: '0 0 20px rgba(64, 19, 68, 0.4), 0 0 40px rgba(64, 19, 68, 0.2), inset 0 0 20px rgba(64, 19, 68, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? '1.5rem' : '2rem',
        color: 'black',
        zIndex: 6,
        overflow: 'auto',
        backdropFilter: 'blur(10px)',
        animation: 'laser-glow 3s ease-in-out infinite',
        minWidth: '100% !important'
      }}>
        <h2 style={{
          fontSize: isMobile ? '1.25rem' : '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#401344'
        }}>
          {title}
        </h2>

        <p style={{
          fontSize: isMobile ? '0.9rem' : '1.1rem',
          lineHeight: '1.6',
          marginBottom: isMobile ? '1rem' : '1.5rem',
          color: '#000000',
          minWidth: '100% !important'
        }}>
          {description}
        </p>

      </div>

      <div
        ref={revealRef}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          background: 'radial-gradient(circle at var(--mx) var(--my), rgba(64,19,68,0.3) 0px, rgba(64,19,68,0.15) 60px, rgba(64,19,68,0.05) 120px, rgba(64,19,68,0) 180px)',
        } as React.CSSProperties}
      />
    </div>
  );
};


const HatimaPhotoSlider = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    '/founders/hatima/photo_2025-09-16_17-15-28.jpg',
    '/founders/hatima/photo_2025-09-16_17-15-23.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full" style={{ aspectRatio: '4/5', minHeight: '400px' }}>
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt="Hatima Singer"
          width={800}
          height={1000}
          className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000 ${
            index === currentPhoto ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const RazzaqPhotoSlider = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    '/founders/Razzaq/photo_2025-09-16_21-27-18.jpg',
    '/founders/Razzaq/PHOTO-2025-09-12-13-00-59 2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full" style={{ aspectRatio: '4/5', minHeight: '400px' }}>
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt="Razzaq Singer"
          width={800}
          height={1000}
          className={`absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-1000 ${
            index === currentPhoto ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const PartnershipPhotoSlider = () => {
  return (
    <div className="relative">
      <Image
        src="/founders/partner1.JPG"
        alt="Partnership"
        width={400}
        height={300}
        className="max-w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact Form: ${formData.interest || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstname} ${formData.lastname}\n` +
      `Email: ${formData.email}\n` +
      `Interest: ${formData.interest}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:contact@futureandhappiness.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-[#401344]">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your vision into reality? Connect with us for phygital events, wellness experiences, and innovative solutions in Dubai and beyond.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <a href="mailto:contact@futureandhappiness.com" className="text-gray-600 hover:text-[#401344] transition-colors">
                  contact@futureandhappiness.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Dubai, UAE</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Services</h3>
                <p className="text-gray-600">Event Production • Event Marketing • Wellness • Innovation • Software Development</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="First Name"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Last Name"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="interest">I am interested in:</Label>
                  <select
                    id="interest"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="Join as Investor">Join as Investor</option>
                    <option value="Apply as Startup">Apply as Startup</option>
                    <option value="Explore Wellness">Explore Wellness</option>
                    <option value="Partner with Us">Partner with Us</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or how we can help..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#401344] hover:bg-[#501454] text-white">
                  Send Email
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

