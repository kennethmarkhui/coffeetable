export interface IInput {
    placeholder: string
}

const Input = ({ placeholder }: IInput): JSX.Element => {
    return (
        <div className="border-b border-gray-500 py-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder={placeholder}
            ></input>
        </div>
    )
}

export default Input
