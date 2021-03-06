import { useContext, useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from "framer-motion"
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import logoDark from '@/public/logoDark.svg'
import { useTheme } from 'next-themes'
import { revealLogoMask, revealDownDelay, logoUnderscore, logoReveal, revealUpDelay, fade } from '@/helpers/transitions'
import { IntroContext } from '@/context/intro'

export default function Home() {
  const [samHovered, setSamHovered] = useState(false);
  const [isaacHovered, setIsaacHovered] = useState(false);
  const [introContext, setIntroContext] = useContext(IntroContext);

  const toggleSamHover = () => setSamHovered(!samHovered);
  const toggleIsaacHover = () => setIsaacHovered(!isaacHovered);

  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 1500);
  },[]);

  return (
    <Layout>
      <NextSeo
        title="ShiftWalk™ — Design + Build Studio"
        description="The mini-studio of Isaac Powell + Sam Goddard, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind."
        openGraph={{
          url: 'https://shiftwalk.studio',
          title: 'ShiftWalk™ — Design + Build Studio',
          description: 'The mini-studio of Isaac Powell + Sam Goddard, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind.',
          images: [
            {
              url: 'https://www.shiftwalk.studio/static/social.jpg',
              width: 1200,
              height: 630,
              alt: 'ShiftWalk Logo',
            },
          ],
          site_name: 'ShiftWalk',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="w-full h-full"
        >
          <Div100vh className="flex flex-wrap p-4 md:p-5 text-[18px] leading-[24px] md:text-[20px] md:leading-[27px] xl:text-[24px] xl:leading-[31px] selection:bg-black selection:text-off-grey dark:selection:bg-off-grey dark:selection:text-black">

            <div className={`fixed inset-0 flex items-start md:items-center justify-center transition ease-in-out duration-500 z-10 mt-[35vh] md:mt-0 md:pt-0  ${samHovered || isaacHovered ? 'opacity-0' : 'opacity-100' }`}>
              <m.div variants={logoReveal} className="relative overflow-hidden">
                <m.div variants={logoUnderscore} className="absolute bottom-0 z-10 left-0 mb-[0px] ml-[0px] xl:mb-[1.25px] xl:ml-[1.25px] w-[16px] h-[4px] md:w-[20px] md:h-[5px] xl:w-[23px] dark:bg-off-grey bg-black"></m.div>

                {!introContext && (
                  <div className="absolute bottom-0 left-0 mb-[0px] ml-[0px] xl:mb-[1.25px] xl:ml-[1.25px] w-[16px] h-[4px] md:w-[20px] md:h-[5px] xl:w-[23px] dark:bg-off-grey bg-black bg-opacity-10 dark:bg-opacity-10"></div>
                )}

                <div className="overflow-hidden text-black relative z-10">                  
                  <m.div variants={revealLogoMask} className="absolute inset-0 ml-[18px] md:ml-[22px] xl:ml-[24px] bg-off-grey dark:bg-black opacity-90 z-10"></m.div>
                  
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-[200px] md:w-[250px] xl:w-[300px] block outline-none focus:outline-none hover:outline-none border-none"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    <div className="block dark:hidden">
                      <Image
                        src={logo}
                        alt="ShiftWalk Logo"
                        layout="responsive"
                        className="w-full"
                        priority
                      />
                    </div>
                    <div className="hidden dark:block">
                      <Image
                        src={logoDark}
                        alt="ShiftWalk Logo"
                        layout="responsive"
                        className="w-full"
                        priority
                      />
                    </div>
                  </button>
                </div>
              </m.div>
            </div>

            <header className="w-full flex flex-wrap items-start relative z-30">
              <div className="overflow-hidden md:min-w-[250px] xl:min-w-[290px]">
              </div>

              <div className="overflow-hidden ml-auto md:mr-[85px] xl:mr-[85px] hidden md:block">
                <m.div variants={revealDownDelay}>
                  <span className="pointer-events-none block">Design + Build Studio</span>
                </m.div>
              </div>

              <div className="overflow-hidden ml-auto flex">
                <m.div variants={revealDownDelay} className="mr-4 md:mr-6">
                  <a href="https://www.instagram.com/_shiftwalk.studio/" target="_blank" rel="noopener noreferrer" className="overflow-hidden relative ml-auto text-center focus:border-none focus:outline-none group">
                    <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition-transform ease-in-out duration-500 w-full will-change relative">
                      <span className="md:block absolute top-0 right-0 mt-[-32px] underline">Insta<span className="hidden md:inline">gram</span></span>
                      <span className="block underline">Insta<span className="hidden md:inline">gram</span></span>
                    </div>
                  </a>
                </m.div>
                <m.div variants={revealDownDelay}>
                  <a href="mailto:hello@shiftwalk.studio" className="overflow-hidden relative ml-auto text-right focus:border-none focus:outline-none group">
                    <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition-transform ease-in-out duration-500 w-full will-change">
                      <span className="hidden md:block absolute top-0 right-0 mt-[-32px] underline">Email</span>
                      <span className="block underline">Email</span>
                    </div>
                  </a>
                </m.div>
              </div>
            </header>

            <section className="absolute top-0 left-0 p-4 z-40">
              <div className="overflow-hidden relative mt-1 md:mt-2">
                <m.span variants={revealUpDelay} className="block">
                  <Link href="/"><a className="text-[65px] md:text-[90px] xl:text-[120px] block leading-[1] tracking-tight nav-text nav-text--active">Bio</a></Link>
                </m.span>
              </div>
              <div className="overflow-hidden relative">
                <m.span variants={revealUpDelay} className="block">
                  <Link href="/works">
                    <a className="text-[65px] md:text-[90px] xl:text-[120px] block leading-[1] tracking-tight text-black dark:text-off-grey text-opacity-10 dark:text-opacity-10 transition-colors ease-in-out duration-500 relative overflow-hidden nav-text ml-[2px] md:ml-[4px] xl:ml-[5px] " data-text="Works">
                      Works
                    </a>
                  </Link>
                </m.span>
              </div>
            </section>
            
            <section className={``}>
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black dark:border-off-grey text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 opacity-0 ${samHovered ? 'opacity-100' : 'opacity-0' }`}>
                <div className="py-2 border-b border-black dark:border-off-grey">
                  <div className="overflow-hidden">
                    <div className={`${samHovered ? 'translate-y-[0px] delay-[30ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Role</span><span className="ml-auto">Creative Developer</span>
                    </div>
                  </div>
                </div>
                <div className="py-2 border-b border-black dark:border-off-grey">
                  <div className="overflow-hidden">
                    <div className={`${samHovered ? 'translate-y-[0px] delay-[60ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Selected Clients</span><span className="ml-auto">Fnatic, Reform, PRB, Fat Free</span>
                    </div>
                  </div>
                </div>
                <div className="py-2 border-b border-black dark:border-off-grey">
                  <div className="overflow-hidden">
                    <div className={`${samHovered ? 'translate-y-[0px] delay-[90ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Stack</span><span className="ml-auto">NextJs, Tailwind, Framer Motion, Vercel, Sanity</span>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="overflow-hidden">
                    <div className={`${samHovered ? 'translate-y-[0px] delay-[120ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Awards</span><span className="ml-auto">32</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <section>
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black dark:border-off-grey text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 opacity-0 ${isaacHovered ? 'opacity-100' : 'opacity-0' }`}>
                <div className="py-2 border-b border-black dark:border-off-grey">
                  <div className="overflow-hidden">
                    <div className={`${isaacHovered ? 'translate-y-[0px] delay-[30ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Role</span><span className="ml-auto">Art Director + Designer</span>
                  </div>
                </div>
                </div>
                <div className="py-2 border-b border-black dark:border-off-grey">
                  <div className="overflow-hidden">
                    <div className={`${isaacHovered ? 'translate-y-[0px] delay-[60ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Selected Clients</span><span className="ml-auto">Paul Smith, Pitch, Jason O’Rear, PRB</span>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="overflow-hidden">
                    <div className={`${isaacHovered ? 'translate-y-[0px] delay-[90ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                      <span>Awards</span><span className="ml-auto">26</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            <section className="mt-auto self-end flex items-end w-full relative z-30">
              <div className="w-full">
                <div className="overflow-hidden md:hidden w-full md:w-[460px] xl:w-[660px]">
                  <m.div variants={revealUpDelay}>
                    <p className="text-indent">
                      The mini-studio of
                      <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px]" onFocus={toggleIsaacHover} onBlur={toggleIsaacHover} onMouseEnter={toggleIsaacHover} onMouseLeave={toggleIsaacHover}>
                        <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                          <span className="block absolute top-0 left-0 mt-[-30px] w-[113px] md:w-[125px] xl:w-[152px] underline">Isaac Powell</span>
                          <span className="block w-[113px] md:w-[125px] xl:w-[152px] underline">Isaac Powell</span>
                        </span>
                      </a>
                      + 
                      <a href="https://samgoddard.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[-1px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
                        <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                          <span className="block absolute top-0 left-0 mt-[-30px] w-[123px] md:w-[137px] xl:w-[164px] underline">Sam Goddard</span>
                          <span className="block w-[123px] md:w-[137px] xl:w-[164px] underline">Sam Goddard</span>
                        </span>
                      </a>, 
                      
                      designing and building highly-crafted brands and websites
                      for partners around the world. We have a particular focus
                      on the sustainability, architectural, and creative arts sectors, but
                      we always like to keep an open mind.
                    </p>
                  </m.div>
                </div>

                <div className="overflow-hidden hidden md:block xl:hidden w-full md:w-[460px] xl:w-[660px]">
                  <p>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        <span className="ml-[5%]">The mini-studio of</span>

                        <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[5px] mr-[-5px]" onFocus={toggleIsaacHover} onBlur={toggleIsaacHover} onMouseEnter={toggleIsaacHover} onMouseLeave={toggleIsaacHover}>
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                            <span className="block absolute top-0 left-0 mt-[-30px] w-[113px] md:w-[125px] xl:w-[152px] underline">Isaac Powell</span>
                            <span className="block w-[113px] md:w-[125px] xl:w-[152px] underline">Isaac Powell</span>
                          </span>
                        </a>
                        + 
                      </m.span>
                    </span>

                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        <a href="https://samgoddard.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                            <span className="block absolute top-0 left-0 mt-[-30px] w-[123px] md:w-[131px] xl:w-[164px] underline">Sam Goddard</span>
                            <span className="block w-[123px] md:w-[131px] xl:w-[164px] underline">Sam Goddard</span>
                          </span>
                        </a>, 
                        
                        designing and building highly-
                      </m.span>
                    </span>
                    
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        crafted brands and websites for partners around
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        the world. We have a particular focus on the
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        sustainability, architectural, and creative arts
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        sectors, but we always like to keep
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        an open mind.
                      </m.span>
                    </span>
                  </p>
                </div>

                <div className="hidden xl:block w-full md:w-[460px] xl:w-[740px]">
                  <p>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        <span className="ml-[5%]">The mini-studio of</span>
                        <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[6px]" onFocus={toggleIsaacHover} onBlur={toggleIsaacHover} onMouseEnter={toggleIsaacHover} onMouseLeave={toggleIsaacHover}>
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition-transform ease-in-out duration-500 block">
                            <span className="block absolute top-0 left-0 mt-[-30px] w-[113px] md:w-[125px] xl:w-[142px] underline">Isaac Powell</span>
                            <span className="block w-[113px] md:w-[125px] xl:w-[142px] underline">Isaac Powell</span>
                          </span>
                        </a>
                        + 
                        <a href="https://samgoddard.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[6px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition-transform ease-in-out duration-500 block">
                            <span className="block absolute top-0 left-0 mt-[-30px] w-[123px] md:w-[137px] xl:w-[158px] underline">Sam Goddard</span>
                            <span className="block w-[123px] md:w-[137px] xl:w-[158px] underline">Sam Goddard</span>
                          </span>
                        </a>,
                      </m.span> 
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        designing and building highly-crafted brands and websites
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        for partners around the world. We have a particular focus
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        on the sustainability, architectural, and creative arts sectors,
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        but we always like to keep an open mind.
                      </m.span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="ml-auto hidden md:block text-right">
                <div className="overflow-hidden">
                  <m.div variants={revealUpDelay}>
                    <div className="overflow-y-hidden relative">
                      <div className="hover:translate-y-[32px] transition-transform ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full">
                        <span className="block absolute top-0 right-0 mt-[-32px]">Based in Nottingham, UK</span>
                        <span className="block">Worldwide</span>
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
            </section>
          </Div100vh>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}