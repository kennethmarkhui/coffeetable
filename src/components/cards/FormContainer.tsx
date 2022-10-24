import FormCard from './FormCard'
import Button from '../Button'

const FormContainer = (): JSX.Element => {
    return (
        <div className="max-w-7xl p-8 shadow-md border-none bg-black flex flex-col mx-auto gap-10 sm:flex-row">
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
                <img src="http://placekitten.com/600/400"></img>
            </div>
        </div>
    )
}
export default FormContainer
