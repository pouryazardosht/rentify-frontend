import Header from "../../components/Header"
import Banner from "./components/Banner"

function Home() {
  return (
    <section>
      <div className="banner bg-banner-pattern rounded-b-3xl">
        <header className="container">
          <Header />
        </header>
        <Banner />
      </div>
    </section>
  )
}

export default Home