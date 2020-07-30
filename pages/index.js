import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Meta from '../components/Meta'
import MainCard from '../components/MainCard'

export default function Home() {
  return (
    <Layout home>
      <Meta/>
      <section className={utilStyles.headingMd}>
        <MainCard>
          <h1>About me</h1>
          <p>
            I'm a Developer currently residing in Chile, who love to learn new technologies and tecniques.
          </p>
          <p>
            I started in the word of development when I was in school in 2008, and never stopped ever since, always looking for new ways to improve and create the things i wanted.
          </p>
          <p>Sadly I have a lot of projetcs that had never seen the light, but they taught me a lot, and I worked with wonderfull people in all of them, who helped me to improve. </p>


        </MainCard>

      </section>
    </Layout>
  )
}
