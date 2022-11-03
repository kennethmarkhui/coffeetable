import {
    FaInstagram,
    FaFacebook,
    FaStore,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
} from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'
import Logo from '../assets/logo/Coffee_table.png'

export const branch = [
    {
        branch1: 'email1@gmail.com',
        branch2: 'email2@gmail.com',
    },
]

export const email = ['email1@gmail.com', 'email2@gmail.com']

interface PhoneNumber {
    name: string
    number: number
}

export const phoneNumber: PhoneNumber[] = [
    {
        name: 'some',
        number: 943223541,
    },
    {
        name: 'thing',
        number: 943223542,
    },
]

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-black w-full py-4 px-6">
            <div className="mx-auto max-w-7xl divide-y space-y-8">
                <div className="flex justify-between flex-col sm:items-center sm:text-center md:flex-row gap-8">
                    <div className="flex flex-col md:text-left">
                        {/* left col  */}
                        <div>CONTACT INFORMATION</div>
                        <div>Phone:</div>
                        {phoneNumber.map((number, index) => (
                            <div key={index} className="text-yellow0">
                                {number.number}
                            </div>
                        ))}
                        <div>Address1</div>
                        <div>Address2</div>
                        <div className="flex">
                            <FaCcVisa size={'3em'} />{' '}
                            <FaCcMastercard size={'3em'} />{' '}
                            <FaCcPaypal size={'3em'} />{' '}
                            <SiAmericanexpress size={'3em'} />
                        </div>
                    </div>

                    <div className="order-first md:order-none space-y-4">
                        {/* center col  */}
                        <div className="flex w-40 h-40">
                            <img src={Logo} alt="Logo" />
                        </div>

                        <div className="flex gap-3 justify-start sm:justify-center">
                            <div>
                                <FaInstagram size={'2em'} />
                            </div>
                            <div>
                                <FaFacebook size={'2em'} />
                            </div>
                            <div>
                                <FaStore size={'2em'} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 md:text-right">
                        {/* right col  */}
                        <div>BUSINESS HOURS</div>
                        <div>Mon - Fri 7:00am - 3:00pm</div>
                        <div>Sat - Sun 9:00am - 2:00pm</div>
                        <div>Public holidays: Closed</div>
                        <div>FOR BOOKINGS</div>

                        {email.map((email) => (
                            <div key={email} className="text-yellow0">
                                {email}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center py-4 md:py-8">
                    Content, including images, displayed on this website is
                    protected by copyright laws. Downloading, republication,
                    retransmission or reproduction of content on this website is
                    strictly prohibited.
                    <span className="text-yellow0"> Terms of Use</span> |{' '}
                    <span className="text-yellow0">Privacy Policy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
