
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarProps } from './types';
import SignupModal from './SignUpModal';
import LoginModal from './LoginModal';

export default function Navbar({ logoSrc, navLinks, login, signup, logoarrow }: NavbarProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('Eng');
  const [activeLink, setActiveLink] = useState('');

  const languages = ['Eng', 'Arabic'];

  return (
    <>
      <header className="w-full px-6 sm:px-10 lg:px-[250px] py-6 sm:py-[60px] flex items-center justify-between absolute top-0 left-0 z-50 bg-white/20">

        <Link href="/">
          <Image
            src={logoSrc}
            alt="Tuscany Logo"
            width={100}
            height={98}
            className="sm:w-[133px] sm:h-[130px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-[40px] text-white font-[family-name:var(--font-open-sans)] font-semibold text-xl">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`hover:text-amber-400 transition pb-1 ${activeLink === link.href ? 'border-b-2 border-[#FA8B02]' : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex text-white/60 hover:text-amber-400 font-semibold font-[family-name:var(--font-open-sans)] items-center transition text-sm sm:text-base"
            >
              <span>{currentLang}</span>
              <Image
                src={logoarrow}
                alt="arrow bottom"
                width={16}
                height={16}
                className="sm:w-[20px] sm:h-[20px]"
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg py-1 text-black">
                {languages.map((lang, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                    className="w-full font-[family-name:var(--font-open-sans)] text-center pr-2 py-2 font-semibold text-lg hover:bg-amber-100 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-white hover:text-amber-400 font-semibold px-2 sm:px-[10px] py-2 transition text-sm sm:text-base"
          >
            {login}
          </button>

          <button
            onClick={() => setIsSignupOpen(true)}
            className="bg-[#FA8B02] hover:bg-amber-600 text-white font-[family-name:var(--font-open-sans)] font-semibold px-4 sm:px-6 py-2 rounded-full shadow-lg transition text-sm sm:text-base"
          >
            {signup}
          </button>
        </div>
      </header>

      {isLoginOpen && (
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToSignup={() => alert('Switch to Signup clicked')}
          logosign="assets/close.png"
          googleIconSrc="assets/google.png"
          eyeIconSrc="assets/eyes.png"
          title="Login"
          forgotPasswordText="Forgot your password?"
          submitButtonText="Sign In"
          googleButtonText="Sign In with Google"
          signupPromptText="Don't have an account?"
          signupButtonText="Sign Up"
          fields={[
            { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
            { name: "password", label: "Password", type: "password", placeholder: "Enter your password" }
          ]}
        />
      )}

      {isSignupOpen && (
        <SignupModal
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
          onSwitchToLogin={() => alert('Switch to Login clicked')}
          logosign="assets/close.png"
          googleIconSrc="assets/google.png"
          eyeIconSrc="assets/eyes.png"
          title="Create Account"
          submitButtonText="Sign Up"
          googleButtonText="Sign Up with Google"
          loginPromptText="Already have an account?"
          loginButtonText="Log in"
          fields={[
            { name: "fullName", label: "Name and Surname", type: "text", placeholder: "Enter your name and surname" },
            { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
            { name: "password", label: "Password", type: "password", placeholder: "Enter your password" }
          ]}
        />
      )}
    </>
  );
}