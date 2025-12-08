import AsciiImage from '@/components/AsciiImage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <>
      <div className="h-screen w-full">
        <AsciiImage
          imageUrl="/11.jpeg"
          options={{
            display: {
              rows: 80,
              fontSize: 10,
            },
          }}
        />
      </div>
    </>
  )
}
