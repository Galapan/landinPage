import { Header, Hero, Features, MoreInformation, Testimonials } from "./components"

function App() {

  return (
    <main className="w-[375px] m-auto">
      <section className="bg-navy-850 p-6 h-[420px] relative">
        <Header />
        <img
          className="relative z-10 mt-12"
          src="../images/illustration-intro.png"
          alt="intro illustration"
        />
        <img
          className="absolute bottom-0 left-0"
          src="../images/bg-curvy-mobile.svg"
          alt="curvy background"
        />
      </section>

      <section className="bg-navy-900 p-6">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>
    </main>
  )
}

export default App
