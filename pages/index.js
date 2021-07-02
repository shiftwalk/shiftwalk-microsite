import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import Header from '@/components/header'

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
          title: 'ShiftWalk™ — Design+Build Studio',
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

      <Header />
      
      <section className={`mt-auto ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute bottom-0 right-0 mb-[40vh] mr-5 ${samHovered ? 'opacity-100' : 'opacity-0' }`}>
        <div className="py-2 border-b border-black overflow-hidden">
          <div className={`${samHovered ? 'translate-y-[0px]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Role</span><span className="ml-auto">Creative Developer</span>
          </div>
        </div>
        <div className="py-2 border-b border-black overflow-hidden">
          <div className={`${samHovered ? 'translate-y-[0px] delay-50' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Selected Clients</span><span className="ml-auto">Fnatic, V&amp;A, PRB, Fat Free</span>
          </div>
        </div>
        <div className="py-2 border-b border-black overflow-hidden">
          <div className={`${samHovered ? 'translate-y-[0px] delay-100' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Stack</span><span className="ml-auto">NextJs, Tailwind, Framer Motion, Vercel</span>
          </div>
        </div>
        <div className="py-2 overflow-hidden">
          <div className={`${samHovered ? 'translate-y-[0px] delay-150' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Awards</span><span className="ml-auto">24</span>
          </div>
        </div>
      </section>
  
      <section className={`mt-auto ml-auto w-full md:w-8/12 border-b border-t border-black text-right hidden md:block max-w-[900px] transition ease-in-out duration-500 absolute bottom-0 right-0 mb-[40vh] mr-5 ${isaacHovered ? 'opacity-100' : 'opacity-0' }`}>
        <div className="py-2 border-b border-black overflow-hidden">
          <div className={`${isaacHovered ? 'translate-y-[0px]' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Role</span><span className="ml-auto">Art Director + Designer</span>
          </div>
        </div>
        <div className="py-2 border-b border-black overflow-hidden">
          <div className={`${isaacHovered ? 'translate-y-[0px] delay-50' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Selected Clients</span><span className="ml-auto">Paul Smith, Pitch, Jason O’Rear, PRB</span>
          </div>
        </div>
        <div className="py-2 overflow-hidden">
          <div className={`${isaacHovered ? 'translate-y-[0px] delay-100' : 'translate-y-[40px]'} flex transition ease-in-out duration-500`}>
            <span>Awards</span><span className="ml-auto">20</span>
          </div>
        </div>
      </section>
    
      <section className="mt-auto self-end flex items-end w-full">
        <div className="w-full md:w-7/12 xl:w-1/2 max-w-[660px]">
          <h1 className="mb-16 md:mb-32 xl:mb-40 font-normal">About</h1>

          <p className="text-indent">The mini-studio of
            <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px]" onFocus={toggleIsaacHover} onBlur={toggleIsaacHover} onMouseEnter={toggleIsaacHover} onMouseLeave={toggleIsaacHover}>
              <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                <span className="block absolute top-0 left-0 mt-[-30px] w-[113px] md:w-[125px] xl:w-[152px] underline">Isaac Powell</span>
                <span className="block w-[113px] md:w-[125px] xl:w-[152px]">Isaac Powell</span>
              </span>
            </a>
            + 
            <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="group overflow-y-hidden relative focus:border-none focus:outline-none inline-block mb-[-6px] md:mb-[-7px] ml-[-1px]" onFocus={toggleSamHover} onBlur={toggleSamHover} onMouseEnter={toggleSamHover} onMouseLeave={toggleSamHover}>
              <span className="group-hover:translate-y-[30px] group-focus:translate-y-[30px] will-change transition ease-in-out duration-500 block">
                <span className="block absolute top-0 left-0 mt-[-30px] w-[123px] md:w-[137px] xl:w-[164px] underline">Sam Goddard</span>
                <span className="block w-[123px] md:w-[137px] xl:w-[164px]">Sam Goddard</span>
              </span>
            </a>
            , designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind.</p>
        </div>

        <div className="ml-auto hidden md:block text-right">
          <div className="overflow-y-hidden relative">
            <div className="hover:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full">
              <span className="block absolute top-0 right-0 mt-[-30px]">Based in Nottingham, UK</span>
              <span className="block">Worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}