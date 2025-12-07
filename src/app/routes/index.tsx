import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <>
      <h1>Hello from index page</h1>
    </>
  )
}
