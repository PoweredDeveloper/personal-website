import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
})

const contacts: { title: string; previewTitle: string; link?: string }[] = [
  { title: 'email', previewTitle: 'mikis.explores@gmail.com', link: 'mailto:mikis.explores@gmail.com' },
  { title: 'github', previewTitle: 'PoweredDeveloper', link: 'https://github.com/PoweredDeveloper' },
  { title: 'instagram', previewTitle: 'ist.mik', link: 'https://www.instagram.com/ist.mik' },
  { title: 'telegram', previewTitle: 'InsertB', link: 'https://t.me/InsertB' },
]

function RouteComponent() {
  return (
    <div className="font-ibm-mono selection:font-neutral flex justify-center text-sm font-light selection:bg-[#373737] selection:text-[#a1a1a1]">
      <div className="max-w-[650px]">
        <header className="my-24 grid min-h-24 grid-cols-[250px_200px_1fr] gap-12">
          <div className="flex h-full flex-col justify-between">
            <div>
              <h1>Mikhail Istomin</h1>
              <p className="text-[#959595]">Fullstack developer</p>
            </div>
            <span>*</span>
          </div>
          <div className="flex h-full flex-col justify-between">
            <span>*</span>
            <div>
              <span>Innopolis, Russia</span>
            </div>
          </div>
          <div className="flex h-full flex-col items-end justify-between text-nowrap">
            <span className="hover:cursor-pointer hover:underline">[ENG]</span>
            <span className="hover:cursor-pointer hover:underline">[РУС]</span>
            <span className="hover:cursor-pointer hover:underline">[日本語]</span>
          </div>
        </header>
        <main className="space-y-16">
          <section className="grid grid-cols-[200px_1fr] gap-2">
            <h2>About</h2>
            <p className="text-justify">I am 18 years old self taught programmer from Kazan. Currently studying Data Science & AI at Innopolis University</p>
          </section>
          <section className="grid grid-cols-[200px_1fr] gap-2">
            <h2>Skills</h2>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <h3>Fullstack</h3>
                <p className="text-[#959595]">React, TypeScript, Next.js, Vite, Tailwind CSS, TanStack Router, TanStack Query, ESLint, Prettier, React Icons</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Backend</h3>
                <p className="text-[#959595]">FastAPI, Python, PostgreSQL, SQLAlchemy, Express.js, Node.js, Uvicorn, Pydantic, Docker, Alembic</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Tools</h3>
                <p className="text-[#959595]">Docker, Git, TypeScript, ESLint, Prettier, Vite, Husky, OpenAPI TypeScript, PNPM</p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-[200px_1fr] gap-2">
            <h2>Contacts</h2>
            <div className="space-y-3">
              {contacts.map((c) => (
                <div className="flex gap-1">
                  <h5 className="text-[#959595]">{c.title}:</h5>
                  <Link to={c.link} className="hover:cursor-pointer hover:underline">
                    {c.previewTitle.toLowerCase()}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
