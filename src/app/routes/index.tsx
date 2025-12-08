import AsciiImage from '@/components/AsciiImage'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

const IMAGES = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Portfolio() {
  const [image, setImage] = useState<string>('9.jpeg')
  const imageIndex = useRef<number>(0)

  useEffect(() => {
    setInterval(() => {
      setImage(`${IMAGES[imageIndex.current]}.jpeg`)
      imageIndex.current++
    }, 5000)
  }, [])

  return (
    <>
      <div className="h-screen w-full">
        <AsciiImage
          imageUrl={image}
          options={{
            display: {
              rows: 120,
              fontSize: 6,
            },
            animation: {
              animated: true,
              revealMode: 'empty',
              duration: 4500,
            },
            imageProcessing: {
              contrast: 1.1,
            },
          }}
        />
      </div>
    </>
  )
}
