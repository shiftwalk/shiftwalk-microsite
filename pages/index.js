import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m, MotionConfigContext } from "framer-motion"
import Div100vh from 'react-div-100vh'

export const reveal = {
	initial: { y: '110%' },
  enter: { 
    y: 0,
    transition: { duration: 1.4, ease: [0.985, 0.010, 0.315, 0.830] }
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

export const logoReveal = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 0.15,
    transition: { duration: 1.375, ease: [0.985, 0.010, 0.315, 0.830], delay: 1.05 }
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

            <div className={`fixed inset-0 flex items-start md:items-center justify-center transition ease-in-out duration-500 z-0 mt-[35vh] md:mt-0 md:pt-0 ${samHovered || isaacHovered ? 'opacity-0' : 'opacity-100' }`}>
              <m.div variants={logoReveal}>
                <div className="overflow-hidden">
                  <m.div variants={reveal}>
                    <svg className="pointer-events-none w-[200px] md:w-[250px] xl:w-[300px]" viewBox="0 0 124 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.696 25.304h9.816V23H.696v2.304zM16.878 14.936l2.136.432c1.872.384 3.6 1.104 3.6 2.904 0 1.68-1.584 2.76-3.84 2.76-2.448 0-4.056-1.224-4.56-3.6h-2.688c.408 3.648 3.12 5.88 7.152 5.88 3.384 0 6.696-1.8 6.696-5.256 0-3.504-3.048-4.56-5.832-5.136l-2.064-.432c-1.488-.312-2.64-1.056-2.64-2.496 0-1.824 2.184-2.424 3.456-2.424 1.656 0 3.552.624 4.104 2.688h2.64c-.672-3.504-3.432-4.968-6.624-4.968-2.928 0-6.36 1.536-6.36 4.824 0 2.928 2.352 4.32 4.824 4.824zM30.38 11.96V5.6h-2.497V23h2.496v-6.936c0-2.568 1.056-4.128 3.216-4.128 2.352 0 2.664 1.728 2.664 3.6V23h2.496v-8.136c0-3-1.2-5.016-4.32-5.016-2.016 0-3.312.84-4.056 2.112zM44.371 5.6h-2.496v2.76h2.496V5.6zm0 4.488h-2.496V23h2.496V10.088zM48.19 9.224v.864h-1.8v1.896h1.8V23h2.497V11.984h2.496v-1.896h-2.496V9.2c0-1.344.264-1.608 1.536-1.608h.96V5.6h-1.128c-3.024 0-3.864.768-3.864 3.624zM55.88 6.776v3.312H53.91v1.896h1.968v7.704c0 2.664.576 3.312 3.192 3.312h1.824v-1.992H59.84c-1.248 0-1.464-.336-1.464-1.656v-7.368h2.544v-1.896h-2.544V6.776H55.88zM77.408 19.664L74.192 5.6H71l-3 14.064L64.928 5.6h-3L66.2 23h3.288l3.096-13.848L75.728 23h3.288l4.2-17.4h-2.88l-2.928 14.064zM83.576 19.52c0 2.352 1.992 3.792 4.608 3.792 2.088 0 3.552-.72 4.32-2.016.048.816.12 1.2.216 1.704h2.4c-.24-1.152-.36-2.736-.36-4.656 0-.552.048-2.784.048-3.096.048-3.864-1.872-5.472-5.208-5.472-2.952 0-5.208 1.656-5.424 4.392h2.52c.096-1.584 1.08-2.472 2.808-2.472 1.584 0 2.784.768 2.784 3.048v.264c-5.016.528-8.712 1.368-8.712 4.512zm8.832-2.664v.936c0 2.568-1.608 3.6-3.672 3.6-1.512 0-2.448-.744-2.448-1.92 0-1.68 2.112-2.232 6.12-2.616zM100.387 23V5.6h-2.496V23h2.496zM106.246 5.6h-2.496V23h2.496v-4.224l1.464-1.56L111.814 23h2.976l-5.376-7.584 5.016-5.328h-3.048l-5.136 5.52V5.6zM116.41 1.232V5h.684V1.232h1.392V.65h-3.474v.582h1.398zM120.808 5h.708l1.158-3.66V5h.672V.65h-1.098l-1.086 3.552L120.076.65h-1.098V5h.672V1.34L120.808 5z" fill="currentColor"/></svg>
                  </m.div>
                </div>
              </m.div>
            </div>

            <header className="w-full flex flex-wrap items-start">
              <div className="overflow-hidden">
                <m.div variants={revealDownDelay}>
                  <span className="pointer-events-none block">Design + Build</span>
                </m.div>
              </div>

              <div className="overflow-hidden ml-auto md:-mr-32 xl:-mr-32 hidden md:block">
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
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 ${samHovered ? 'opacity-100' : 'opacity-0' }`}>
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
              <div className={`ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute top-0 right-0 mt-[35vh] mr-5 ${isaacHovered ? 'opacity-100' : 'opacity-0' }`}>
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