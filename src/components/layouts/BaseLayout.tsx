import { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
