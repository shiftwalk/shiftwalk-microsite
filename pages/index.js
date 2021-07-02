import { NextSeo } from 'next-seo';
import Layout from '@/components/layout'
import Header from '@/components/header'

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Shiftwalk&trade;"
        description="The mini-studio of Isaac Powell + Sam Goddard, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind."
        openGraph={{
          url: 'https://shiftwalk.studio',
          title: 'Shiftwalk™',
          description: 'The mini-studio of Isaac Powell + Sam Goddard, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind.',
          images: [
            {
              url: '/social.jpg',
              width: 1200,
              height: 630,
              alt: 'Shiftwalk Logo',
            },
          ],
          site_name: 'Shiftwalk',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <Header />
    
      <section className="mt-auto self-end flex items-end w-full">
        <div className="w-full md:w-7/12 xl:w-1/2 max-w-[660px]">
          <h1 className="mb-16 md:mb-32 xl:mb-40 font-normal">About</h1>

          <p className="md:text-[20px] xl:text-[24px] text-indent">The mini-studio of <a href="https://ijpowell.co.uk" target="_blank" rel="nopopener noreferrer" className="underline hover:bg-black focus:bg-black hover:text-off-grey focus:text-off-grey">Isaac Powell</a> + <a href="https://samgoddard.co.uk" target="_blank" rel="nopopener noreferrer" className="underline hover:bg-black focus:bg-black hover:text-off-grey focus:text-off-grey">Sam Goddard</a>, designing and building highly-crafted brands and websites for partners around the world. We have a particular focus on the hospitality, architectural, and creative arts sectors, but we always keep an open mind.</p>
        </div>

        <div className="ml-auto hidden md:block text-right">
          <span>Worldwide</span>
        </div>
      </section>
    </Layout>
  )
}

export const config = {
  unstable_runtimeJS: false
};
