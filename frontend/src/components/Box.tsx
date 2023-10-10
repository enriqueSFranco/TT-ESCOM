
interface BoxProps<T extends React.ElementType> {
  as?: T
  children: React.ReactNode
}

export const Box = <T extends React.ElementType> ({ as, children, ...props }: BoxProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "div"
  return (
    <Component {...props}>{children}</Component>
  )
}
