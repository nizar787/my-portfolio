import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>nizar portfolio</title>
      </Head>

      <Header />

      {/* hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* about */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/*experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* skills  */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer '
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-b2B8tGUafEC8dq-g_zkP5TCm2LPBonFow&usqp=CAU'
              alt=' imag icon'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
