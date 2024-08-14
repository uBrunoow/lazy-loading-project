'use client'

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '../ui/skeleton';

function HistoryComponent() {
  const LazyImage = dynamic(
    () => import('./lazy-image'), {
      loading: () => <Skeleton className='w-[650px] h-[350px]'/>,
      ssr: false
    }
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (ref.current) {
            observer.unobserve(ref.current);
            const lazyImage = ref.current.querySelector('img');
            if (lazyImage) {
              lazyImage.src = lazyImage.dataset.src || lazyImage.src;
            }
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref} className='max-w-[650px] w-full'>
      <h1 className='text-zinc-950 text-lg font-bold'>History</h1>
      <p className='text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium magnam doloribus labore, inventore repellendus debitis dolor suscipit maxime reiciendis totam natus. Sapiente, incidunt possimus asperiores vero praesentium officiis repudiandae!</p>
    
      <div className='mt-4'>
        <h2 className='text-zinc-950 font-bold'>2022</h2>
        <p className='text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium magnam doloribus labore, inventore repellendus debitis dolor suscipit maxime reiciendis totam natus. Sapiente, incidunt possimus asperiores vero praesentium officiis repudiandae!</p>
      </div>

      <div className='w-full h-full mt-4 rounded-lg overflow-hidden'>
        <LazyImage />
      </div>
    </div>
  )
}

export default HistoryComponent