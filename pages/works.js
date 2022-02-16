import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import { LazyMotion, domAnimation, m } from "framer-motion"
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.svg'
import logoDark from '@/public/logoDark.svg'
import { useTheme } from 'next-themes'
import { reveal, revealLogoMask, revealDownDelay, logoUnderscore, logoReveal, revealUpDelay, fade } from '@/helpers/transitions'

export default function Works() {
  const [samHovered, setSamHovered] = useState(false);
  const [isaacHovered, setIsaacHovered] = useState(false);

  const toggleSamHover = () => setSamHovered(!samHovered);
  const toggleIsaacHover = () => setIsaacHovered(!isaacHovered);

  const {theme, setTheme} = useTheme()

  return (
    <Layout>
      <NextSeo
        title="ShiftWalk™ — Works"
        description="The mini-studio of Isaac Powell + Sam Goddard, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind."
        openGraph={{
          url: 'https://shiftwalk.studio',
          title: 'ShiftWalk™ — Works',
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
          className="w-full md:h-full"
        >
          <div className="flex flex-wrap min-h-screen md:min-h-screen p-4 md:p-5 text-[18px] leading-[24px] md:text-[20px] md:leading-[27px] xl:text-[24px] xl:leading-[31px] selection:bg-black selection:text-off-grey dark:selection:bg-off-grey dark:selection:text-black">

            <div className={`fixed inset-0 flex items-start md:items-center justify-center transition ease-in-out duration-500 z-10 mt-[35vh] md:mt-0 md:pt-0  ${samHovered || isaacHovered ? 'opacity-0' : 'opacity-100' }`}>
              <m.div variants={logoReveal} className="relative overflow-hidden">
                <m.div variants={logoUnderscore} className="absolute bottom-0 left-0 mb-[0px] ml-[0px] xl:mb-[1.25px] xl:ml-[1.25px] w-[16px] h-[4px] md:w-[20px] md:h-[5px] xl:w-[23px] bg-black dark:bg-off-grey"></m.div>

                <div className="absolute bottom-0 left-0 mb-[0px] ml-[0px] xl:mb-[1.25px] xl:ml-[1.25px] w-[16px] h-[4px] md:w-[20px] md:h-[5px] xl:w-[23px] bg-black dark:bg-off-grey opacity-10"></div>

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
                  <span className="pointer-events-none block">Selected Works</span>
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
              <div className="overflow-hidden relative mb-4 md:mb-5 xl:mb-7 mt-1 md:mt-2">
                <m.span variants={revealUpDelay} className="block">
                  <Link href="/">
                    <a className="text-[65px] md:text-[90px] xl:text-[120px] block leading-[0.8] tracking-tight text-[#93978F] dark:text-[#3E3E3E] transition-colors ease-in-out duration-500 relative overflow-hidden nav-text" data-text="Bio">
                      Bio
                    </a>
                  </Link>
                </m.span>
              </div>
              <div className="overflow-hidden relative">
                <m.span variants={revealUpDelay} className="block">
                  <Link href="/works"><a className="text-[65px] md:text-[90px] xl:text-[120px] block leading-[0.8] tracking-tight ml-[2px] md:ml-[4px] xl:ml-[5px] nav-text">Works</a></Link>
                </m.span>
              </div>
            </section>
            
            
            <section className="mt-auto self-end items-end w-full relative z-30 hidden md:flex text-[18px] leading-[24px] md:text-[17px] md:leading-[24px] lg:text-[19px] lg:leading-[26px] xl:text-[24px] xl:leading-[31px]">
              <m.div variants={fade} className="w-full">
                <div className={`ml-auto w-full border-b border-black dark:border-off-grey text-right block mr-5`}>
                  <div className="pb-1 border-b border-black dark:border-off-grey">
                    <div className="block overflow-hidden group">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex w-full`}>
                          <span className="w-3/12 text-left text-[10px] uppercase">Client</span>
                          <span className="w-6/12 xl:w-5/12 text-left text-[10px] uppercase ml-auto">What We Did</span>
                          <span className="w-1/12 xl:w-2/12 text-left text-[10px] uppercase ml-auto">Agency</span>
                          <span className="w-1/12 text-right ml-auto text-[10px] uppercase mr-[12px] md:mr-[3px]">Launch</span>
                        </div>
                      </m.span>
                    </div>
                  </div>
                  <div className="py-2 border-b border-black dark:border-off-grey">
                    <a href="https://www.reform-property.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">Reform</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Brand, Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full text-left right-0">
                          <span className="w-3/12 text-left">Launch Project</span>
                            <span className="w-6/12 xl:w-5/12 text-left ml-auto relative block overflow-hidden">
                              <div className="relative overflow-hidden md:max-w-[355px] lg:max-w-[390px] xl:max-w-[500px]">
                                <div className="animate-marquee whitespace-nowrap">
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                </div>

                                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                  <span className="mx-2">Rethinking Property Development</span>
                                  <span className="mx-1">&bull;</span>
                                </div>
                              </div>
                            </span>
                            <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                            <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"></span>
                          </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-2 border-b border-black dark:border-off-grey">
                    <a href="https://prb-a.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">PRB Architects</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Brand, Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full text-left right-0">
                          <span className="block flex-1 text-left">Launch Project</span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-2 border-b border-black dark:border-off-grey">
                    <a href="https://www.imreallyatrex.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">ImReallyATrex</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Brand, Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">CUSP</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 right-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full">
                          <span className="block flex-1 text-left">Launch Project</span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-2 border-b border-black dark:border-off-grey">
                    <a href="https://www.jasonorear.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">Jason O'Rear</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Brand, Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full text-left right-0">
                          <span className="block flex-1 text-left">Launch Project</span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-2 border-b border-black dark:border-off-grey">
                    <a href="https://jessbrightdesign.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">Jess Bright</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Brand, Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full text-left right-0">
                          <span className="block flex-1 text-left">Launch Project</span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-2">
                    <a href="https://hellofatfree.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden group focus:border-none focus:outline-none">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex transition-transform ease-in-out duration-500 group-hover:translate-y-10 group-focus:translate-y-10`}>
                          <span className="w-3/12 text-left">Fat Free</span>
                          <span className="w-6/12 xl:w-5/12 text-left ml-auto">Art Direction, Interactive Design, Build</span>
                          <span className="w-1/12 xl:w-2/12 text-left ml-auto">-</span>
                          <span className="w-1/12 text-right ml-auto group-hover:-translate-y-10 group-focus:-translate-y-10 transition-transform ease-in-out duration-500"><span className="inline-block transform -rotate-45 group-hover:rotate-0 group-focus:rotate-0 transition-transform ease-in-out duration-300">→</span></span>
                        </div>

                        <div className="absolute transition-all ease-in-out duration-500 top-0 left-0 -mt-10 group-hover:translate-y-10 group-focus:translate-y-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex w-full text-left right-0">
                          <span className="block flex-1 text-left">Launch Project</span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                </div>
              </m.div>
            </section>


            <section className="self-end items-end w-full relative z-30 flex md:hidden mt-[50vh]">
              <m.div variants={fade} className="w-full">
                <div className={`ml-auto w-full border-b border-t border-black dark:border-off-grey text-right block mr-5`}>
                  <div className="py-4 border-b border-black dark:border-off-grey">
                    <a href="https://www.reform-property.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">Reform</span>
                            {/* <span className="block text-[11px] leading-none">Brand, Art Direction, Interactive Design, Build</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-4 border-b border-black dark:border-off-grey">
                    <a href="https://www.prb-a.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">PRB Architects</span>
                            {/* <span className="block text-[11px] leading-none">Brand, Art Direction, Interactive Design, Build</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-4 border-b border-black dark:border-off-grey">
                    <a href="https://www.imreallyatrex.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">ImReallyATrex</span>
                            {/* <span className="block text-[11px] leading-none mb-1">Brand, Art Direction, Interactive Design, Build</span>
                            <span className="block text-[11px] leading-none">CUSP</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-4 border-b border-black dark:border-off-grey">
                    <a href="https://www.jasonorear.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">Jason O'Rear</span>
                            {/* <span className="block text-[11px] leading-none">Brand, Art Direction, Interactive Design, Build</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-4 border-b border-black dark:border-off-grey">
                    <a href="https://jessbrightdesign.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">Jess Bright</span>
                            {/* <span className="block text-[11px] leading-none">Brand, Art Direction, Interactive Design, Build</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                  <div className="py-4">
                    <a href="https://www.hellofatfree.com/" target="_blank" rel="noreferrer noopener" className="block overflow-hidden">
                      <m.span variants={revealUpDelay} className="block relative">
                        <div className={`flex items-end`}>
                          <span className="flex-1 text-left">
                            <span className="text-[28px] block leading-none mb-0 pb-0 tracking-tight">Fat Free</span>
                            {/* <span className="block text-[11px] leading-none">Art Direction, Interactive Design, Build</span> */}
                          </span>
                          <span className="w-[50px] text-right ml-auto text-[24px]"><span className="inline-block transform -rotate-45">→</span></span>
                        </div>
                      </m.span>
                    </a>
                  </div>
                </div>
              </m.div>
            </section>
          </div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}