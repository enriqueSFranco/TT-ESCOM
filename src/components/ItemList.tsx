import { Direction } from "../shared/enum.d"

interface ItemListProps<T> {
  data: T[]
  direction: Direction
  emptyMessage: string
  render: (item: T) => React.ReactNode
}

export const ItemList = <T,> ({ data, direction = Direction.ROW, emptyMessage, render }: ItemListProps<T>) => {
  const row = "flex-row flex-wrap"
  const column = "flex-col"

  return (
    <ul className={`w-full flex ${direction === Direction.ROW ? row : column} items-center gap-2`}>
      {data.length === 0 ? (
        <span>{emptyMessage || "No tienes elementos."}</span>
      ) : (
        data.map((it) => (
          <li key={`id-${crypto.randomUUID()}`}>
            {render(it)}
          </li>
        ))
      )}
    </ul>
  )
}