import Features from "./Features"
import Footer from "./Footer"
import GetStarted from "./GetStarted"
import Header from "./Header"
import ListFeatures from "./ListFeatures"
import Navigation from "./Navigation"
import Pricing from "./Pricing"
import Sample from "./Sample"

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <main>
        <Features />
        <ListFeatures />
        <Sample />
        <Pricing />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage