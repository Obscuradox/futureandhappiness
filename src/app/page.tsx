'use client';

import { useState, useEffect, ReactNode } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import {
  IconVideo,
  IconBuilding,
  IconDeviceDesktop,
  IconAugmentedReality,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PillNav from '@/components/PillNav';
import CurvedLoop from '@/components/CurvedLoop';

const featuredProjects = [
  {
    title: 'Shill and Chill Club',
    description:
      'A cryptocurrency community platform where the "Chilluminati" earn rewards by sharing the next breakout Web3 project.',
    logo: '/logos/shillandchill.webp',
    href: 'https://shillandchill.club',
  },
  {
    title: 'Earthy.tech',
    description:
      'A carbon-negative blockchain and AI ecosystem that brings radically transparent impact auditing to global philanthropy.',
    logo: '/logos/earthy.svg',
    href: 'https://earthy.tech',
  },
  {
    title: 'Infinity Ængines',
    description:
      'A phygital innovation festival streaming simultaneously from TODA Dubai and its metaverse twin to 250K+ viewers.',
    logo: '/logos/IAELOGO.avif',
    href: 'https://infinityaengines.com',
  },
];

const coreServices: Array<{
  key: string;
  title: string;
  description: ReactNode;
  icon: typeof IconVideo;
}> = [
  {
    key: 'production-marketing',
    title: 'Event Production & Marketing',
    description: (
      <>
        <p>
          End-to-end showcraft for venture forums, investor dinners, and flagship showcases—backed by the content, branding, and partnerships that keep momentum alive long after the lights go down.
        </p>
        <p className="text-[#59326f]">
          Stage direction, sponsor strategy, paid media, and cinematic storytelling converge in one integrated production + growth engine.
        </p>
      </>
    ),
    icon: IconVideo,
  },
  {
    key: 'hospitality',
    title: 'Hospitality & Retreats',
    description: (
      <>
        <p>
          Founder villas, executive immersions, and wellness-led acceleration programs crafted in world-class destinations.
        </p>
        <p className="text-[#59326f]">
          We curate the cohort, host investor circles, capture content daily, and guide founders into post-retreat deal flow and momentum.
        </p>
      </>
    ),
    icon: IconBuilding,
  },
];

const phygitalService = {
  title: 'Phygital & Metaverse Event Tech',
  icon: IconAugmentedReality,
  description: (
    <>
      <p>
        Phygital venues, metaverse twins, and broadcast-grade media formats that turn every event into an always-on storytelling platform.
      </p>
      <p className="text-[#59326f]">
        We architect interactive livestreams, cinematic recap series, and digital collectibles that extend your reach from the room to the globe.
      </p>
    </>
  ),
};

const softwareService = {
  title: 'Software Development & Venture Studio',
  icon: IconDeviceDesktop,
  description: (
    <>
      <p>
        Full-stack product squads shipping Web2 and Web3 platforms, enterprise integrations, smart contracts, and immersive digital twins.
      </p>
      <p className="text-[#59326f]">
        From discovery sprints to go-live operations, we co-build with founders and brands, then activate adoption through aligned community ecosystems.
      </p>
    </>
  ),
};

export default function Home() {
  const PhygitalIcon = phygitalService.icon;
  const SoftwareIcon = softwareService.icon;

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
                  { label: 'Our Projects', href: '#service-projects' },
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
        date="2024"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Angels Villa Bali"
          description={(
            <>
              <p>
                Nestled in the lush serenity of Bali, Angels Villa Bali is an immersive founders’ and investors’ retreat like no other. From over 100 startup applications, a curated group of 20 innovative projects were selected to join the villa during the season (1 month).
              </p>
              <p>
                Throughout the program, founders participated in professional video shoots, investor pitching sessions, and exclusive masterclasses from industry experts. Blending luxury villa lifestyle, curated wellness, and business acceleration, Angels Villa became both a creative content hub and a launchpad for impact-driven innovation.
              </p>
              <p>
                It’s where creativity meets clarity, connections turn into collaborations, and startups get the exposure they need to thrive.
              </p>
            </>
          )}
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
        date="2025"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Infinity AEngines – The Ultimate Innovations Show"
          description={(
            <>
              <p>
                Step into the future with Infinity AEngines, hosted at TODA – Theatre of Digital Art, Dubai. This immersive event unfolds simultaneously in two realities: on the physical stage in Dubai and in the metaverse digital twin of the venue. While investors, founders, and creators gather in person, audiences worldwide can join through the virtual space, experiencing live streaming and interactive features.
              </p>
              <p>
                The program blends cutting-edge tech, visionary keynote sessions, creative showcases, and startup pitches with cinematic storytelling. With its dual format, Infinity AEngines bridges real-world networking and digital innovation, creating a phygital platform where investment, creativity, and technology converge without borders.
              </p>
            </>
          )}
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
        date="2025"
        scrollToExpand="Scroll to Explore"
      >
        <EventContent
          title="Elevator Pitch Battle Dubai"
          description={(
            <>
              <p>
                Elevator Pitch Battle is a high-energy pitch competition organized by Future of Happiness. Held during the Bitcoin MENA & AI Blockchain Show in Dubai, it convenes ambitious tech & blockchain startups, investors, and thought leaders. Startups deliver rapid 3-minute elevator pitches, face the jury, and vie for recognition, feedback, and exposure.
              </p>
              <p>
                With stringent selection, high-calibre jury, and a dynamic networking environment, this event is your stage to show what you’re building. Hosted alongside wellness in a villa setting, with professional video content and digital twin activations, it’s more than a pitch—it’s a full branded startup experience.
              </p>
            </>
          )}
        />
      </ScrollExpandMedia>
      </div>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#311143]">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {coreServices.map(({ key, title, description, icon: Icon }) => (
              <div
                key={key}
                className="flex flex-col items-center gap-6 rounded-3xl bg-white text-center shadow-[0_18px_45px_rgba(64,19,68,0.12)] border border-[#f0e6f6] p-8 md:p-10"
              >
                <div className="rounded-2xl bg-[#f5ecff] p-4">
                  <Icon className="w-16 h-16 text-[#401344]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#311143]">
                  {title}
                </h3>
                <div className="text-base md:text-lg leading-relaxed text-[#4a2a5d] max-w-[28rem] space-y-4">
                  {description}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-white shadow-[0_18px_45px_rgba(64,19,68,0.12)] border border-[#f0e6f6] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="shrink-0 rounded-2xl bg-[#f5ecff] p-4 w-fit">
                <PhygitalIcon className="w-16 h-16 text-[#401344]" />
              </div>
              <div className="space-y-4 text-left text-[#4a2a5d]">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#311143]">
                  {phygitalService.title}
                </h3>
                <div className="text-base md:text-lg leading-relaxed space-y-4">
                  {phygitalService.description}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e4d7f3] bg-[#faf5ff] p-4">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#401344] mb-3">
                Metaverse Preview
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-inner">
                <iframe
                  src="https://www.youtube.com/embed/oSrllxgfGbQ"
                  title="Phygital Metaverse Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <a
              href="https://explore.unyted.world/scene?id=81d67d50-057a-11f0-bc79-02243b6f7d63"
              target="_blank"
              rel="noopener noreferrer"
              className="button-74 hidden md:inline-block"
              style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Explore The Metaverse
            </a>
          </div>

          <div id="service-projects" className="mt-10 flex flex-col gap-6 rounded-3xl bg-white shadow-[0_18px_45px_rgba(64,19,68,0.12)] border border-[#f0e6f6] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="shrink-0 rounded-2xl bg-[#f5ecff] p-4 w-fit">
                <SoftwareIcon className="w-16 h-16 text-[#401344]" />
              </div>
              <div className="space-y-4 text-left text-[#4a2a5d]">
                <h3 className="text-3xl md:text-4xl font-semibold text-[#311143]">
                  {softwareService.title}
                </h3>
                <div className="text-base md:text-lg leading-relaxed space-y-4">
                  {softwareService.description}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="text-xl md:text-2xl font-semibold text-[#311143]">
                  Featured Build Partners & Flagship Products
                </h4>
                <a
                  href="#contact"
                  className="button-74"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.25em', fontSize: '14px' }}
                >
                  Start A Build →
                </a>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featuredProjects.map(({ title: projectTitle, description: projectDescription, logo, href }) => (
                  <a
                    key={projectTitle}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-5 rounded-3xl border border-[#e9dcf4] bg-[#fdfbff] p-8 md:p-9 shadow-md hover:shadow-xl transition-shadow min-h-[320px]"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={logo}
                        alt={projectTitle}
                        width={96}
                        height={96}
                        className="h-16 w-16 object-contain"
                      />
                      <h5 className="text-xl font-semibold text-[#311143]">{projectTitle}</h5>
                    </div>
                    <p className="text-base leading-relaxed text-[#513063]">
                      {projectDescription}
                    </p>
                    <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[#401344] group-hover:text-[#6c2f88] transition-colors">
                      Visit Project →
                    </span>
                  </a>
                ))}
              </div>
            </div>
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
                  <div>
                    <a
                      href="https://www.linkedin.com/in/tatyana-titova/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-74"
                      aria-label="Connect with Hatima Singer on LinkedIn"
                    >
                      <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
                        <IconBrandLinkedin style={{ height: '20px', width: '20px' }} />
                      </span>
                      <span style={{ verticalAlign: 'middle' }}>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Razzaq Singer */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold mb-4 text-[#401344]">Abdur Razzaq Singer</h3>
                <h4 className="text-xl font-semibold mb-6 text-gray-600">Co-Founder</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With a background shaped by resilience and vision, Abdur-Razzaq Singer — now known as Razzaq Singer — has transformed his life experiences into a driving force for global innovation. From humble beginnings and overcoming personal struggles, he forged his path as a technology entrepreneur, channeling his deep compassion for humanity into building solutions that address some of the world&apos;s greatest challenges.
                  </p>
                  <p>
                    Razzaq&apos;s expertise spans blockchain architecture, artificial intelligence integration, and decentralized finance. He has worked with international governments and organizations, designing scalable systems that merge social impact with technological progress. His achievements include leading the development of Earthy, the world&apos;s first natively carbon-negative blockchain, and contributing to groundbreaking projects in identity, sustainability, and global impact ecosystems.
                  </p>
                  <p>
                    After relocating to Dubai, Razzaq expanded his mission beyond technology into community building. He has hosted high-level events uniting sovereign leaders, investors, innovators, and philanthropists — ensuring that ideas of consequence are not just spoken but acted upon. His focus is not only on digital transformation but on empowering people with the tools, trust, and networks they need to enact real change.
                  </p>
                  <p>
                    Razzaq&apos;s ultimate goal is to bridge innovation with humanity: creating systems that help societies thrive, ensuring transparency, sustainability, and empowerment at every level. His life journey reflects his belief that technology is most powerful when it uplifts people and amplifies the good we are capable of achieving together.
                  </p>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/sam-singer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-74"
                      aria-label="Connect with Abdur Razzaq Singer on LinkedIn"
                    >
                      <span style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}>
                        <IconBrandLinkedin style={{ height: '20px', width: '20px' }} />
                      </span>
                      <span style={{ verticalAlign: 'middle' }}>Connect on LinkedIn</span>
                    </a>
                  </div>
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
                  Together, Razzaq and Hatima embody a union of vision and purpose. Their partnership is built on shared values of creativity, compassion, and innovation. While Hatima curates spaces where innovators and investors connect, Razzaq builds the underlying technologies and ecosystems that make lasting change possible. Side by side, they see the world not just as it is, but as it could be — and dedicate their lives to turning that vision into reality.
                </p>
              </div>
            </div>
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
                <li><a href="#service-projects" className="text-gray-300 hover:text-white transition-colors text-sm">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Events */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-semibold">Featured Events</h4>
              <ul className="space-y-2">
                <li><a href="#our-events" className="text-gray-300 hover:text-white transition-colors text-sm">Angels Villa Bali</a></li>
                <li><a href="#our-events" className="text-gray-300 hover:text-white transition-colors text-sm">Infinity AEngines</a></li>
                <li><a href="#our-events" className="text-gray-300 hover:text-white transition-colors text-sm">Elevator Pitch Battle</a></li>
                <li><a href="#our-events" className="text-gray-300 hover:text-white transition-colors text-sm">Upcoming Events</a></li>
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



interface EventContentProps {
  title: string;
  description: ReactNode;
}

const EventContent = ({ title, description }: EventContentProps) => (
  <div className="rounded-[32px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.2)] mb-10">
    <div className="px-6 md:px-12 py-10 md:py-14 text-[#311143] space-y-6">
      <div className="text-2xl md:text-3xl">⸻</div>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">{title}</h2>
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#321146]">
        {description}
      </div>
    </div>
  </div>
);


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

                <button type="submit" className="button-74 w-full justify-center md:w-auto" aria-label="Send email">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
