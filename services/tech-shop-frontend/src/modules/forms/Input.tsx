export type InputElementType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export interface InputProps {
  text:         string
  name:         string
  type:         InputElementType['type']
  placeholder?: string
  value?:       InputElementType['value']
  onChange?:    InputElementType['onChange']
  className?:   HTMLLabelElement['className']
  error?:       Error | string
}

export const Input: React.FC<InputProps> = ({ text, className, error, ...rest }) => {
  return (
    <label className={`relative group ${ className }`} >
      <span className={
          `capitalize absolute -top-4 left-1 rounded-full px-2 font-semibold shadow-md shadow-black
          ${ (error?.toString() ?? '').length > 1 ? 'bg-red-500' : 'bg-green-500' }`
        }
      >
        {text}
      </span>
      <input
        {...rest}
        className="w-full bg-gradient-to-b from-gray-700 to-gray-800 shadow-md shadow-black text-inherit p-2 rounded-md outline-1 hover:outline-none focus:outline-none"
      />
    </label>
  )
}

export default Input