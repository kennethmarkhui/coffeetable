import FormCard, { IFormCard } from './FormCard'
import Button from '../Button'

const formContent: IFormCard = {
    placeholder: 'First Name',
}

const BlankContainer = (): JSX.Element => {
    return (
        <div className="w-full p-8 shadow-md lg:max-w-lg border-none bg-black">
            <div className="space-y-4 pb-8">
                <h3 className="text-2xl font-semibold">
                    React Tailwind Card Title
                </h3>
                <FormCard placeholder="First Name" />
                <FormCard placeholder="Last Name" />
                <FormCard placeholder="Email" />
                <FormCard placeholder="Phone" />
                <FormCard placeholder="Message" />
            </div>
            <Button>{'Submit'}</Button>
        </div>
    )
}
export default BlankContainer
