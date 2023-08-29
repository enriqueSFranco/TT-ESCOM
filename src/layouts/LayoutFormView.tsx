interface LayoutViewFormProps {
  children: React.ReactNode
}

export const LayoutFormView: React.FC<LayoutViewFormProps> = ({ children }) => {
  return (
    <section className="w-full h-screen">
      {children}
    </section>
  )
}
