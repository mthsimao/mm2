const Button = ({text, action}) => {
  return (
    <button className="border rounded-xl px-3 py-1 font-medium cursor-pointer" onClick={action}>{text}</button>
  ) 
}

export default Button
