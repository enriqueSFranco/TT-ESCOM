type DropdownProps<T> = {
  open: boolean
  trigger: React.ReactNode
  menu: T[]
}

export const Dropdown = <T extends React.ReactNode> ({ open, trigger, menu }: DropdownProps<T>) => {

  return (
    <div className='relative'>
      {trigger}
      {
        open
          ? <ul className='absolute right-0 top-10 z-40 w-56 flex flex-col items-end gap-4 border border-slate-200 bg-slate-50 p-5 rounded-lg'>{menu.map((it) => <li key={`item-id-${crypto.randomUUID()}`}>{it}</li>)}</ul>
          : null
      }
    </div>
  )
}
