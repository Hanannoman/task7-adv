
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LoginModalProps } from './types';


export default function LoginModal({ 
  isOpen, 
  onClose, 
  onSwitchToSignup, 
  logosign,
  googleIconSrc,
  eyeIconSrc,
  title,
  fields,
  forgotPasswordText,
  submitButtonText,
  googleButtonText,
  signupPromptText,
  signupButtonText,
}: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-[32px] p-8 sm:p-10 w-full max-w-[488px] text-black relative shadow-2xl flex flex-col justify-between my-auto animate-in fade-in zoom-in duration-200">
        
        <div>
          {/* زر الإغلاق (X) */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-gray-650 transition"
          >
            <Image src={logosign} alt="close Icon" width={24} height={24} />
          </button>

          {/* العنوان */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

          {/* الفورم مع توليد الحقول عبر map */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            
            {fields.map((field, index) => {
              const isPassword = field.type === 'password';
              const inputType = isPassword ? (showPassword ? 'text' : 'password') : field.type;

              return (
                <div key={index} className="flex flex-col gap-1.5 relative">
                  <label className="text-xs text-gray-500 font-medium">{field.label}</label>
                  <div className="relative">
                    <input 
                      type={inputType} 
                      placeholder={field.placeholder} 
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-amber-500 text-sm bg-gray-50/50 pr-10"
                    />
                    {isPassword && (
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 relative opacity-60 hover:opacity-100 transition"
                      >
                        <Image src={eyeIconSrc} alt="Toggle Password" fill className="object-contain" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* رابط نسيت كلمة المرور */}
            <div className="text-right">
              <Link href="#" className="text-xs text-gray-500 hover:text-amber-500 transition">
                {forgotPasswordText}
              </Link>
            </div>

            {/* زر تسجيل الدخول البرتقالي */}
            <button 
              type="submit" 
              className="w-full bg-[#FA8B02] hover:bg-[#e07b02] text-white font-medium py-3.5 rounded-full shadow-md transition mt-2"
            >
              {submitButtonText}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {/* الفاصل */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* زر تسجيل الدخول بواسطة جوجل (صورة) */}
          <button 
            type="button" 
            className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-full hover:bg-gray-50 transition text-sm font-medium text-gray-700"
          >
            <div className="relative w-4 h-4">
              <Image src={googleIconSrc} alt="Google Icon" fill className="object-contain" />
            </div>
            {googleButtonText}
          </button>

          {/* الانتقال لإنشاء حساب */}
          <div className="text-center text-xs text-gray-500">
            {signupPromptText}{' '}
            <button 
              onClick={onSwitchToSignup} 
              className="text-[#FA8B02] font-semibold hover:underline"
            >
              {signupButtonText}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}