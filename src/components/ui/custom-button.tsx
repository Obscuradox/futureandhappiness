"use client";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  target,
  rel,
}) => {
  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    width: '170px',
    height: 'fit-content',
    backgroundColor: '#AFFC41',
    borderRadius: '40px',
    boxShadow: '0px 5px 10px rgba(175, 252, 65, 0.3)',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  };

  const iconStyle: React.CSSProperties = {
    width: '45px',
    height: '45px',
    backgroundColor: '#401344',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid #AFFC41',
  };

  const textStyle: React.CSSProperties = {
    width: 'calc(170px - 45px)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    fontSize: '1.1em',
    letterSpacing: '1.2px',
    fontWeight: 600,
  };

  const buttonContent = (
    <div className={`custom-btn-container ${className}`} style={buttonStyle}>
      <span style={textStyle}>{children}</span>
      <span style={iconStyle}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'all 1.5s ease' }}
        >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="1.61321" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="5.5566" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="5.5566" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="9.5" r="1.5" fill="#AFFC41"></circle>
          <circle cx="13.9811" cy="9.5" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="13.4434" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="13.4434" r="1.5" fill="#AFFC41"></circle>
          <circle cx="1.61321" cy="17.3868" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="17.3868" r="1.5" fill="#AFFC41"></circle>
        </svg>
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        style={{ textDecoration: 'none' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0px 8px 20px rgba(175, 252, 65, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0px 5px 10px rgba(175, 252, 65, 0.3)';
        }}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(175, 252, 65, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0px 5px 10px rgba(175, 252, 65, 0.3)';
      }}
    >
      <span style={textStyle}>{children}</span>
      <span style={iconStyle}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'all 1.5s ease' }}
        >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="1.61321" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="5.5566" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="5.5566" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="9.5" r="1.5" fill="#AFFC41"></circle>
          <circle cx="13.9811" cy="9.5" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="13.4434" r="1.5" fill="#AFFC41"></circle>
          <circle cx="9.85851" cy="13.4434" r="1.5" fill="#AFFC41"></circle>
          <circle cx="1.61321" cy="17.3868" r="1.5" fill="#AFFC41"></circle>
          <circle cx="5.73583" cy="17.3868" r="1.5" fill="#AFFC41"></circle>
        </svg>
      </span>
    </button>
  );
};