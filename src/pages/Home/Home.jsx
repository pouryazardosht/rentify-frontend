import Header from "../../components/Header"
import Banner from "./components/Banner"
import HomeCardsContainer from "./components/HomeCardsContainer"

function Home() {
  return (
    <section>
      <div className="banner bg-banner-pattern rounded-b-3xl bg-repeat-x">
        <header className="container">
          <Header />
        </header>
        <main className="container px-5">
          <Banner />
          <HomeCardsContainer />
        </main>
      </div>
    </section>
  )
}

export default Home