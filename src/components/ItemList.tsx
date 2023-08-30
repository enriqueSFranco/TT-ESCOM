interface ItemListProps<T> {
  data: T[]
  render: (item: T) => React.ReactNode
}

export const ItemList = <T,> ({ data, render }: ItemListProps<T>) => (
  <ul className="w-full flex flex-col items-center justify-between gap-2 overflow-y-scroll">
    {data.length === 0 ? (
      <span>No tienes experiencia laboral.</span>
    ) : (
      data.map((it) => (
        <li key={`id-${crypto.randomUUID()}`}>
          {render(it)}
        </li>
      ))
    )}
  </ul>
)