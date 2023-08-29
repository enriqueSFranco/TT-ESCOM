export function withItemList (Component: React.FC) {
  return (props: any) => {
    const { items } = props
    return <Component items={items} {...restProps} />
  }
}