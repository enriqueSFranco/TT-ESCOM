import { Direction } from "../shared/enum.d"

interface ItemListProps<T> {
  data: T[]
  direction: Direction
  emptyMessage: string
  render: (item: T) => React.ReactNode
}

export const ItemList = <T,> ({ data, direction = Direction.ROW, emptyMessage, render }: ItemListProps<T>) => {
  const row = "grid grid-cols-3 gap-4"
  const column = "flex-col gap-2"

  if (data === null || data.length === 0) {
    return (
      <div className="w-full h-44 grid place-items-center text-center bg-gray-100/75 rounded-xl">
        <h2>{emptyMessage || "No tienes elementos."}</h2>
      </div>
    )
  }
  return (
    <ul className={`w-full flex ${direction === Direction.ROW ? row : column} items-center`}>
      {data.map((it) => (
        <li key={`id-${crypto.randomUUID()}`} className="w-full h-full">
          {render(it)}
        </li>
      ))}
    </ul>
  )
}