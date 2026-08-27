

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SearchProps } from './types';


export default function SearchBar({ publ, priv, logobottom, search }: SearchProps) {
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');


  const searchFields = [
    {
      id: 'people',
      label: 'Number of people',
      placeholder: 'Choose number',
      icon: '/assets/people.png',
      width: 'min-w-[140px]',
    },
    {
      id: 'date',
      label: 'Date',
      placeholder: 'Choose Date',
      icon: '/assets/date.png',
      width: 'min-w-[140px]',
    },
    {
      id: 'time',
      label: 'Time',
      placeholder: 'Choose Time',
      icon: '/assets/time.png',
      width: 'min-w-[140px]',
    },
    {
      id: 'tour',
      label: 'Tour',
      placeholder: 'Select Tour',
      icon: '/assets/tour.png',
      width: 'min-w-[140px]',
    },
    {
      id: 'transportation',
      label: 'Transportation',
      placeholder: 'Select Transportation',
      icon: '/assets/car.png',
      width: 'min-w-[160px]',
    },
  ];

  return (
    <div className="w-full mx-auto mt-[60px] bg-white/20 p-[20px] rounded-xl">


      <div className="flex mb-0">
        <button
          onClick={() => setActiveTab('public')}
          className={`flex items-center space-x-[10px] px-4 py-2.5 rounded-t-xl font-semibold transition text-lg  font-[family-name:var(--font-open-sans)] ${activeTab === 'public'
            ? 'bg-white backdrop-blur text-[#F18A00] shadow-md'
            : 'bg-white/20 text-white/80 hover:bg-white/30'
            }`}
        >
          <Image src="assets/public.png" alt="Public" width={18} height={18} />
          <span>{publ}</span>
        </button>

        <button
          onClick={() => setActiveTab('private')}
          className={`flex items-center space-x-2 px-6 py-2.5 rounded-t-xl font-semibold transition text-sm  font-[family-name:var(--font-open-sans)] ${activeTab === 'private'
            ? 'bg-white/40 backdrop-blur text-white shadow-md'
            : 'bg-white/20 text-white/80 hover:bg-white/30'
            }`}
        >
          <Image src="assets/private.png" alt="Private" width={20} height={20} />
          <span>{priv}</span>
        </button>
      </div>

      <div className="bg-white backdrop-blur-md p-4 rounded-b-xl rounded-tr-xl shadow-xl flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">


        {searchFields.map((field, index) => (
          <div
            key={field.id}
            className={`flex-1 ${field.width} px-3 ${index !== searchFields.length - 1 ? 'border-r border-white/30' : ''
              }`}
          >
            <div className="flex items-center space-x-[7px] text-[#333333] text-lg font-semibold mb-1  font-[family-name:var(--font-open-sans)]">
              <Image src={field.icon} alt={field.label} width={24} height={24} />
              <span>{field.label}</span>
            </div>
            <div className="text-black/80 text-lg flex justify-between items-center cursor-pointer font-normal  font-[family-name:var(--font-open-sans)]">
              <span>{field.placeholder}</span>
              <Image src={logobottom}
                alt='arrow' width={20}
                height={20} />
            </div>
          </div>
        ))}

        <button className="bg-[#FA8B02] hover:bg-[#d97c00] text-white p-3.5 rounded-xl shadow-lg transition flex items-center justify-center min-w-[50px]">
          <Image src={search} alt="Search" width={20} height={20} />
        </button>

      </div>
    </div>
  );
}