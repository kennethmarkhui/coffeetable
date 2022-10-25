import FormCard from './FormCard'
import Button from '../Button'
import divider from '../../assets/image/divider.png'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'

export interface IFormContainer {
    title: string
    subject: string
    description: string
}

const FormContainer = ({
    title,
    subject,
    description,
}: IFormContainer): JSX.Element => {
    return (
        <div className="max-w-7xl h-[30rem] p-8 shadow-md border-none bg-black flex flex-col mx-auto gap-10 sm:flex-row">
            <div className="basis-1/2">
                <div className="space-y-4 pb-8">
                    <FormCard placeholder="First Name" />
                    <FormCard placeholder="Last Name" />
                    <FormCard placeholder="Email" />
                    <FormCard placeholder="Phone" />
                    <FormCard placeholder="Message" />
                </div>
                <Button>{'Submit'}</Button>
            </div>
            <div className="basis-1/2">
                <div className="">
                    <span className="text-yellow0">{title}</span>
                    <div>{subject}</div>
                    <img className="w-72 h-10 flex" src={divider}></img>
                    <div>{description}</div>
                </div>

                <div className="flex flex-row p-6">
                    <div className="basis-1/2">
                        <FaMapMarkedAlt size={'3em'} />
                    </div>
                    <div className="basis-1/2">
                        <FiCoffee size={'3em'} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/2">Two convenient locations </div>
                    <div className="basis-1/2">
                        Coffee, cold drinks, beer, wine, and food are available
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormContainer
