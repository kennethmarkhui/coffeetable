import { ReactNode } from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'

import FormCard from './FormCard'
import Button from '../Button'
import divider from '../../assets/image/divider.png'

export interface IFormContainer {
    title: string
    subject: string
    description: string
}

interface IDescriptiveIcon {
    icon: ReactNode
    description: string
}

const FormContainer = ({
    title,
    subject,
    description,
}: IFormContainer): JSX.Element => {
    return (
        <section className="max-w-7xl shadow-md border-none flex flex-col mx-auto gap-10 lg:flex-row">
            <div className="basis-1/2 bg-black p-8">
                <div className="space-y-4 pb-8">
                    <FormCard placeholder="First Name" />
                    <FormCard placeholder="Last Name" />
                    <FormCard placeholder="Email" />
                    <FormCard placeholder="Phone" />
                    <FormCard placeholder="Message" />
                </div>
                <Button>{'Submit'}</Button>
            </div>
            <div className="basis-1/2 p-8 space-y-8">
                <div className="space-y-4">
                    <span className="text-yellow0">{title}</span>
                    <div className="text-2xl md:text-4xl">{subject}</div>
                    <img className="w-72 h-10 flex" src={divider}></img>
                    <div className="text-sm md:text-base">{description}</div>
                </div>

                <div className="sm:grid sm:grid-cols-2 space-y-4 sm:space-y-0">
                    <DescriptiveIcon
                        icon={<FaMapMarkedAlt size={'3em'} />}
                        description="Two convenient locations"
                    />
                    <DescriptiveIcon
                        icon={<FiCoffee size={'3em'} />}
                        description="Coffee, cold drinks, beer, wine, and food are available"
                    />
                </div>
            </div>
        </section>
    )
}
export default FormContainer

const DescriptiveIcon = ({
    icon,
    description,
}: IDescriptiveIcon): JSX.Element => {
    return (
        <div className="flex flex-col gap-4">
            {icon}
            <span className="text-sm md:text-base">{description}</span>
        </div>
    )
}
