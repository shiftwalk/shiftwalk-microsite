import Div100vh from 'react-div-100vh'

export default function Layout({ children }) {
  return (
    <Div100vh className="flex flex-wrap p-4 md:p-5 text-[18px] leading-[24px] md:text-[20px] md:leading-[27px] xl:text-[24px] xl:leading-[31px] selection:bg-black selection:text-off-grey">
      {children}
    </Div100vh>
  )
}