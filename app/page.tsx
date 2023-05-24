import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Hero from '@/Components/Hero/Hero'
import Partners from '@/Components/Partners/Partners'
import QuoteForm from '@/Components/QuoteForm/QuoteForm'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      {/* <LandingPageBody /> */}
      <QuoteForm />
      <Footer />
    </div>)
}