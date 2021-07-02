export default function Header() {
  return (
    <header className="w-full flex flex-wrap items-start">
      <span className="pointer-events-none block">Design + Build</span>

      <span className="text-center ml-auto hidden md:block md:-mr-32 xl:-mr-32">Full Site Soon</span>


      <a href="mailto:hello@shiftwalk.studio" className="overflow-y-hidden relative ml-auto text-right focus:border-none focus:outline-none group">
        <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full will-change">
          <span className="hidden md:block absolute top-0 right-0 mt-[-30px] underline">hello@shiftwalk.studio</span>
          <span className="block underline">Email</span>
        </div>
      </a>
    </header>
  )
}