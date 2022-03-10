interface Props {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  disabled: boolean
}

function Button({ children, onClick, disabled }: Props) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
