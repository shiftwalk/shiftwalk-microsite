import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m, MotionConfigContext } from "framer-motion"
import Div100vh from 'react-div-100vh'

export const reveal = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830], delay: 0.35 }
  },
	exit: {
    y: '100%',
		transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const revealDownDelay = {
	initial: { y: '-110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830], delay: 1.15 }
  },
	exit: {
    y: '-110%',
		transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}


export const logoUnderscore = {
	initial: { x: '-103%' },
  enter: { 
    x: 0,
    transition: { duration: 1.25, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    x: 0,
		transition: { duration: 1.25, ease: [0.83, 0, 0.17, 1] }
	}
}

export const logoReveal = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 0.15,
    transition: { duration: 1.375, ease: [0.985, 0.010, 0.315, 0.830], delay: 1.15 }
  },
	exit: {
    opacity: 0.15,
		transition: { duration: 1.375, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export const revealUpDelay = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830], delay: 1.15 }
  },
	exit: {
    y: '110%',
		transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
	}
}

export default function Home() {
  const [samHovered, setSamHovered] = useState(false);
  const [isaacHovered, setIsaacHovered] = useState(false);

  const toggleSamHover = () => setSamHovered(!samHovered);
  const toggleIsaacHover = () => setIsaacHovered(!isaacHovered);

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
              url: '/social.jpg',
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
          <Div100vh className="flex flex-wrap p-4 md:p-5 text-[18px] leading-[24px] md:text-[20px] md:leading-[27px] xl:text-[24px] xl:leading-[31px] selection:bg-black selection:text-off-grey">

            <div className={`fixed inset-0 flex items-start md:items-center justify-center transition ease-in-out duration-500 z-0 mt-[35vh] md:mt-0 md:pt-0  ${samHovered || isaacHovered ? 'opacity-0' : 'opacity-100' }`}>
              <m.div variants={logoReveal} className="relative overflow-hidden">
                <m.div variants={logoUnderscore} className="absolute bottom-0 left-0 mb-[0px] ml-[0px] xl:mb-[1.25px] xl:ml-[1.25px] w-[16px] h-[4px] md:w-[20px] md:h-[5px] xl:w-[23px] bg-black"></m.div>

                <div className="overflow-hidden">
                  <m.div variants={reveal}>
                    <svg className="pointer-events-none w-[200px] md:w-[250px] xl:w-[300px]" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.225 48.095l7.158 1.455c6.273 1.292 12.064 3.716 12.064 9.776 0 5.656-5.308 9.292-12.868 9.292-8.203 0-13.592-4.12-15.28-12.12H36.29c1.367 12.282 10.455 19.796 23.966 19.796 11.34 0 22.438-6.06 22.438-17.695 0-11.797-10.213-15.352-19.543-17.29l-6.916-1.455c-4.986-1.05-8.847-3.555-8.847-8.403 0-6.14 7.319-8.16 11.581-8.16 5.55 0 11.903 2.1 13.753 9.049h8.847c-2.252-11.797-11.501-16.726-22.198-16.726-9.811 0-21.312 5.171-21.312 16.24 0 9.858 7.882 14.544 16.165 16.241zM99.468 38.076V16.665h-8.364v58.578h8.364v-23.35c0-8.646 3.539-13.898 10.777-13.898 7.882 0 8.927 5.818 8.927 12.12v25.128h8.364v-27.39c0-10.1-4.021-16.887-14.476-16.887-6.756 0-11.099 2.828-13.592 7.11zM146.356 16.665h-8.364v9.291h8.364v-9.291zm0 15.109h-8.364v43.47h8.364v-43.47zM159.155 28.865v2.909h-6.032v6.383h6.032v37.086h8.364V38.157h8.364v-6.383h-8.364v-2.99c0-4.524.884-5.413 5.147-5.413h3.217v-6.706h-3.78c-10.133 0-12.948 2.585-12.948 12.2zM184.919 20.624v11.15h-6.595v6.383h6.595v25.936c0 8.969 1.93 11.15 10.697 11.15h6.112v-6.706h-3.539c-4.182 0-4.906-1.131-4.906-5.575V38.157h8.525v-6.383h-8.525v-11.15h-8.364zM257.062 64.012l-10.777-47.347h-10.696l-10.053 47.347-10.294-47.347h-10.053l14.315 58.578h11.018l10.375-46.62 10.535 46.62h11.018l14.075-58.578h-9.651l-9.812 47.347zM277.731 63.528c0 7.918 6.675 12.766 15.441 12.766 6.997 0 11.903-2.424 14.477-6.787.16 2.747.402 4.04.723 5.736h8.043c-.804-3.878-1.206-9.21-1.206-15.674 0-1.859.16-9.373.16-10.424.161-13.008-6.273-18.422-17.452-18.422-9.892 0-17.452 5.576-18.175 14.787h8.444c.322-5.333 3.619-8.323 9.41-8.323 5.308 0 9.329 2.586 9.329 10.262v.889c-16.809 1.777-29.194 4.605-29.194 15.19zm29.596-8.969v3.151c0 8.646-5.388 12.12-12.305 12.12-5.067 0-8.203-2.505-8.203-6.464 0-5.656 7.077-7.514 20.508-8.807zM334.064 75.243V16.665H325.7v58.578h8.364zM353.699 16.665h-8.364v58.578h8.364v-14.22l4.906-5.252 13.752 19.472h9.973l-18.015-25.532 16.808-17.937H370.91l-17.211 18.584V16.665zM387.757 1.96v12.685h2.292V1.959h4.665V0h-11.641v1.96h4.684zM402.495 14.645h2.373l3.88-12.322v12.322H411V0h-3.679l-3.639 11.958L400.042 0h-3.679v14.645h2.252V2.323l3.88 12.322z" fill="currentColor"/><path d="M0 83h32.893v-7.757H0V83z" fill="opaque"/></svg>
                  </m.div>
                </div>
              </m.div>
            </div>

            <header className="w-full flex flex-wrap items-start">
              <div className="overflow-hidden">
                <m.div variants={revealDownDelay}>
                  <span className="pointer-events-none block">Design + Build Studio</span>
                </m.div>
              </div>

              <div className="overflow-hidden ml-auto md:mr-[-50px] xl:mr-[-58px] hidden md:block">
                <m.div variants={revealDownDelay}>
                  <span className="text-center">Full Site Soon</span>
                </m.div>
              </div>


              <div className="overflow-hidden ml-auto">
                <m.div variants={revealDownDelay}>
                  <a href="mailto:hello@shiftwalk.studio" className="overflow-hidden relative ml-auto text-right focus:border-none focus:outline-none group">
                    <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full will-change">
                      <span className="hidden md:block absolute top-0 right-0 mt-[-32px] underline">hello@shiftwalk.studio</span>
                      <span className="block underline">Email</span>
                    </div>
                  </a>
                </m.div>
              </div>
            </header>
            
            <section className={``}>
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 opacity-0 ${samHovered ? 'opacity-100' : 'opacity-0' }`}>
                <div className="py-2 border-b border-black overflow-hidden">
                  <div className={`${samHovered ? 'translate-y-[0px] delay-[30ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Role</span><span className="ml-auto">Creative Developer</span>
                  </div>
                </div>
                <div className="py-2 border-b border-black overflow-hidden">
                  <div className={`${samHovered ? 'translate-y-[0px] delay-[60ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Selected Clients</span><span className="ml-auto">Fnatic, V&amp;A, PRB, Fat Free</span>
                  </div>
                </div>
                <div className="py-2 border-b border-black overflow-hidden">
                  <div className={`${samHovered ? 'translate-y-[0px] delay-[90ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Stack</span><span className="ml-auto">NextJs, Tailwind, Framer Motion, Vercel, Sanity</span>
                  </div>
                </div>
                <div className="py-2 overflow-hidden">
                  <div className={`${samHovered ? 'translate-y-[0px] delay-[120ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Awards</span><span className="ml-auto">24</span>
                  </div>
                </div>
              </div>
            </section>
        
            <section>
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 opacity-0 ${isaacHovered ? 'opacity-100' : 'opacity-0' }`}>
                <div className="py-2 border-b border-black overflow-hidden">
                  <div className={`${isaacHovered ? 'translate-y-[0px] delay-[30ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Role</span><span className="ml-auto">Art Director + Designer</span>
                  </div>
                </div>
                <div className="py-2 border-b border-black overflow-hidden">
                  <div className={`${isaacHovered ? 'translate-y-[0px] delay-[60ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Selected Clients</span><span className="ml-auto">Paul Smith, Pitch, Jason O’Rear, PRB</span>
                  </div>
                </div>
                <div className="py-2 overflow-hidden">
                  <div className={`${isaacHovered ? 'translate-y-[0px] delay-[90ms]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
                    <span>Awards</span><span className="ml-auto">20</span>
                  </div>
                </div>
              </div>
            </section>
          
            <section className="mt-auto self-end flex items-end w-full">
              <div className="w-full">
                <div className="overflow-hidden mb-12 md:mb-32 xl:mb-40">
                  <m.div variants={revealUpDelay}>
                    <h1 className="font-normal p-0 m-0">About</h1>
                  </m.div>
                </div>

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
                      <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[-1px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
                        <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                          <span className="block absolute top-0 left-0 mt-[-30px] w-[123px] md:w-[137px] xl:w-[164px] underline">Sam Goddard</span>
                          <span className="block w-[123px] md:w-[137px] xl:w-[164px] underline">Sam Goddard</span>
                        </span>
                      </a>, 
                      
                      designing and building highly-crafted brands and websites
                      for partners around the world. We have a particular focus
                      on the hospitality, architectural, and creative arts sectors, but
                      we always keep an open mind.
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
                        <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
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
                        hospitality, architectural, and creative arts
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        sectors, but we always keep an open mind.
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
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                            <span className="block absolute top-0 left-0 mt-[-30px] w-[113px] md:w-[125px] xl:w-[142px] underline">Isaac Powell</span>
                            <span className="block w-[113px] md:w-[125px] xl:w-[142px] underline">Isaac Powell</span>
                          </span>
                        </a>
                        + 
                        <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[6px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
                          <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
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
                        on the hospitality, architectural, and creative arts sectors, but
                      </m.span>
                    </span>
                    <span className="block overflow-hidden text-left">
                      <m.span variants={revealUpDelay} className="block">
                        we always keep an open mind.
                      </m.span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="ml-auto hidden md:block text-right">
                <div className="overflow-hidden">
                  <m.div variants={revealUpDelay}>
                    <div className="overflow-y-hidden relative">
                      <div className="hover:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full">
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