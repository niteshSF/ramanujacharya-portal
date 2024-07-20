import Header from "@/components/Header"

interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
