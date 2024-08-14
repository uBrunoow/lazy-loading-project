"use client"
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

function LazyImage() {

  // const { data, isLoading } = useQuery({
  //   queryKey: ['image'],
  //   queryFn: async () => {
  //     return await fetch('http://localhost:8000/api/v1/cms/banners/headers').then((res) => res.json())
  //   }
  // })

  // if (isLoading) return <h1 className='bg-red-500 p-5'>Carregando imageaaaaaaaaaaaaaam...</h1>

  return (
    <>
      <Image 
        // blurDataURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsgURHjvFZlw3gfZo5o58oZWQ-oaU4W76bw&s'
        // placeholder="blur"
        onLoadingComplete={(img) => console.log("image loaded successfully")} 
        layout="responsive"
        loading="lazy"
        width={6000}
        height={4000}
        quality={85}
        src={'https://intz.com.br/wp-content/uploads/wallpapers/WallpaperLiquify.png'} 
        alt="Image" 
      />
    </>
  )
}

export default LazyImage