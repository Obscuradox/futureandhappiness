import React, { useState, useEffect, useRef } from 'react';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = '',
  baseColor = 'rgba(255, 255, 255, 0.1)',
  pillColor = 'rgba(255, 255, 255, 0.2)',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#ffffff',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: pillTextColor,
  } as React.CSSProperties;

  return (
    <div className={`${className}`}>
      <nav
        className="flex items-center justify-center"
        aria-label="Primary"
        style={cssVars}
      >
        {isMobile ? (
          // Mobile dropdown menu
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative overflow-hidden inline-flex items-center justify-center h-10 px-4 no-underline rounded-full font-medium text-sm transition-all duration-300 ease-out backdrop-blur-md border border-white/10"
              style={{
                background: baseColor,
                color: pillTextColor,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="relative z-10">Menu</span>
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-48 rounded-lg border border-white/10 backdrop-blur-md z-50"
                style={{
                  background: baseColor,
                }}
              >
                <ul className="list-none p-2 m-0">
                  {items.map((item, i) => {
                    const isActive = activeHref === item.href;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block w-full px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ease-out"
                          style={{
                            color: pillTextColor,
                            background: 'transparent',
                          }}
                          onClick={() => setIsDropdownOpen(false)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {item.label}
                          {isActive && (
                            <span className="ml-2 w-1 h-1 rounded-full bg-white inline-block" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Desktop horizontal menu
          <div className="relative items-center rounded-full flex backdrop-blur-md border border-white/10"
               style={{
                 background: baseColor,
                 padding: '4px',
               }}>
            <ul className="list-none flex items-stretch m-0 gap-1">
              {items.map((item, i) => {
                const isActive = activeHref === item.href;
                const isHovered = hoveredIndex === i;

                return (
                  <li key={item.href} className="flex">
                    <a
                      href={item.href}
                      className="relative overflow-hidden inline-flex items-center justify-center h-10 px-4 no-underline rounded-full font-medium text-sm transition-all duration-300 ease-out hover:scale-105"
                      style={{
                        background: isHovered ? 'rgba(255, 255, 255, 0.2)' : pillColor,
                        color: isHovered ? hoveredPillTextColor : pillTextColor,
                        backdropFilter: 'blur(10px)',
                      }}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="relative z-10">
                        {item.label}
                      </span>
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default PillNav;