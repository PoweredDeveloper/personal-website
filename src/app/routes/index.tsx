import AsciiImage from '@/components/AsciiImage'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

const IMAGES = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Portfolio() {
  const [image, setImage] = useState<string>('1.jpeg')

  useEffect(() => {
    setInterval(() => {
      setImage(`${IMAGES[Math.round(Math.random() * (IMAGES.length - 1))]}.jpeg`)
    }, 5000)
  }, [])

  return (
    <>
      <div className="h-screen w-full">
        <AsciiImage
          imageUrl={image}
          options={{
            display: {
              rows: 128,
              fontSize: 6,
            },
            animation: {
              animated: true,
              revealMode: 'empty',
              duration: 4000,
            },
            imageProcessing: {
              contrast: 1.5,
              sharpness: 1,
            },
          }}
        />
      </div>
    </>
  )
}
