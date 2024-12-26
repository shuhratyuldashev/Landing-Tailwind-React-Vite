import Nav from './Components/Nav'
import { Hero,
  SuperQuality,
  Services,
  SpeacialOffers,
  Popular,
  CustomReviews,
  Subscribe,
  Footer} from './sections/index'


const App = () => {
  return (
    <main className='relative '>
       <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpeacialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomReviews />
      </section> 
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section> 
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App