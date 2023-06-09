export default function ProyectosLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-full h-[70vh] ">
        {children}
      </section>
    )
  }