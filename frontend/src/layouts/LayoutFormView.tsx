interface LayoutViewFormProps {
  children: React.ReactNode
}

export const LayoutFormView: React.FC<LayoutViewFormProps> = ({ children }) => {
  return (
    <section className="w-full h-full p-4">
      {children}
    </section>
  )
}
