import Input from './Input'
import Button from './Button'

const Form = (): JSX.Element => {
    return (
        <form className="space-y-4 p-8">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Message" />
            <Button>Submit</Button>
        </form>
    )
}

export default Form
