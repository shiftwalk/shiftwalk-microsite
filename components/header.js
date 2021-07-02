export default function Header() {
  return (
    <header className="w-full flex flex-wrap items-start">
      <div className="overflow-y-hidden relative group">
        <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full pb-[3px] will-change">
          <span className="absolute top-0 left-0 mt-[-30px] pointer-events-none hidden md:block">Design + Build Studio</span>
          
          <svg className="pointer-events-none w-[114px] md:w-[135px]" viewBox="0 0 124 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.696 25.304h9.816V23H.696v2.304zM16.878 14.936l2.136.432c1.872.384 3.6 1.104 3.6 2.904 0 1.68-1.584 2.76-3.84 2.76-2.448 0-4.056-1.224-4.56-3.6h-2.688c.408 3.648 3.12 5.88 7.152 5.88 3.384 0 6.696-1.8 6.696-5.256 0-3.504-3.048-4.56-5.832-5.136l-2.064-.432c-1.488-.312-2.64-1.056-2.64-2.496 0-1.824 2.184-2.424 3.456-2.424 1.656 0 3.552.624 4.104 2.688h2.64c-.672-3.504-3.432-4.968-6.624-4.968-2.928 0-6.36 1.536-6.36 4.824 0 2.928 2.352 4.32 4.824 4.824zM30.38 11.96V5.6h-2.497V23h2.496v-6.936c0-2.568 1.056-4.128 3.216-4.128 2.352 0 2.664 1.728 2.664 3.6V23h2.496v-8.136c0-3-1.2-5.016-4.32-5.016-2.016 0-3.312.84-4.056 2.112zM44.371 5.6h-2.496v2.76h2.496V5.6zm0 4.488h-2.496V23h2.496V10.088zM48.19 9.224v.864h-1.8v1.896h1.8V23h2.497V11.984h2.496v-1.896h-2.496V9.2c0-1.344.264-1.608 1.536-1.608h.96V5.6h-1.128c-3.024 0-3.864.768-3.864 3.624zM55.88 6.776v3.312H53.91v1.896h1.968v7.704c0 2.664.576 3.312 3.192 3.312h1.824v-1.992H59.84c-1.248 0-1.464-.336-1.464-1.656v-7.368h2.544v-1.896h-2.544V6.776H55.88zM77.408 19.664L74.192 5.6H71l-3 14.064L64.928 5.6h-3L66.2 23h3.288l3.096-13.848L75.728 23h3.288l4.2-17.4h-2.88l-2.928 14.064zM83.576 19.52c0 2.352 1.992 3.792 4.608 3.792 2.088 0 3.552-.72 4.32-2.016.048.816.12 1.2.216 1.704h2.4c-.24-1.152-.36-2.736-.36-4.656 0-.552.048-2.784.048-3.096.048-3.864-1.872-5.472-5.208-5.472-2.952 0-5.208 1.656-5.424 4.392h2.52c.096-1.584 1.08-2.472 2.808-2.472 1.584 0 2.784.768 2.784 3.048v.264c-5.016.528-8.712 1.368-8.712 4.512zm8.832-2.664v.936c0 2.568-1.608 3.6-3.672 3.6-1.512 0-2.448-.744-2.448-1.92 0-1.68 2.112-2.232 6.12-2.616zM100.387 23V5.6h-2.496V23h2.496zM106.246 5.6h-2.496V23h2.496v-4.224l1.464-1.56L111.814 23h2.976l-5.376-7.584 5.016-5.328h-3.048l-5.136 5.52V5.6zM116.41 1.232V5h.684V1.232h1.392V.65h-3.474v.582h1.398zM120.808 5h.708l1.158-3.66V5h.672V.65h-1.098l-1.086 3.552L120.076.65h-1.098V5h.672V1.34L120.808 5z" fill="currentColor"/></svg>
        </div>
      </div>

      <span className="text-center ml-auto hidden md:block -mr-3">Full Site Soon</span>


      <a href="mailto:hello@shiftwalk.studio" className="overflow-y-hidden relative ml-auto text-right focus:border-none focus:outline-none group">
        <div className="md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px] transition ease-in-out duration-500 md:min-w-[250px] xl:min-w-[290px] w-full will-change">
          <span className="hidden md:block absolute top-0 right-0 mt-[-30px] underline">hello@shiftwalk.studio</span>
          <span className="block underline">Email</span>
        </div>
      </a>
    </header>
  )
}