export default function Layout({ children }) {
  return (
    <div className="flex flex-wrap h-screen p-4 md:p-5 text-[20px] md:text-[22px] xl:text-[24px]">
      {children}
    </div>
  )
}