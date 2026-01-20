
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

export default function Navbar() {
  const [time, setTime] = useState({ hour: '--', minute: '--' });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const parts = formatter.formatToParts(now);

      const hour = parts.find(p => p.type === 'hour')?.value ?? '--';
      const minute = parts.find(p => p.type === 'minute')?.value ?? '--';

      setTime({ hour, minute });
      setBlink(prev => !prev); // toggle every second
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full max-w-6xl mx-auto py-4 md:py-6">
      <div className="px-4 md:px-8 flex items-center justify-between gap-2 md:gap-3">
        <div className="flex items-center gap-2 md:gap-3">
          <Image 
            src="/vedXdev.png" 
            alt="logo" 
            width={150} 
            height={150} 
            className="w-auto h-12 md:h-16 lg:h-20 object-contain"
          />

          <div className="text-gray-400 text-xs md:text-sm leading-tight">
            <div>Nagpur, IN</div>
            <div className="font-mono text-white text-xs md:text-sm">
              {time.hour}
              <span className={blink ? 'opacity-100' : 'opacity-0'}>:</span>
              {time.minute}
            </div>
          </div>
        </div>
        
        <InteractiveHoverButton className="text-xs md:text-sm px-4 md:px-6 h-9 md:h-11">
          <a href='/Vedant_Bagwale_Resume.pdf'> 
          Download Resume
          </a>
        </InteractiveHoverButton>
      </div>
    </nav>
  );
}
