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

const branch = [
    {
        branch1: 'email1@gmail.com',
        branch2: 'email2@gmail.com',
    },
]

const email = [
    {
        email1: 'email1@gmail.com',
        email2: 'email2@gmail.com',
    },
]

const phoneNumber = [
    {
        number1: '09172413900',
        number2: '09766452934',
    },
]

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-black text-slate-300">
            <div className="w-full m-auto max-w-7xl py-4 px-6">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        {/* left col  */}
                        <div>CONTACT INFORMATION</div>
                        <div>Phone:</div>
                        <div className="text-yellow0">
                            {phoneNumber.map((number) => number.number1)}
                        </div>
                        <div className="text-yellow0">
                            {phoneNumber.map((number) => number.number1)}
                        </div>
                        <div>Address1</div>
                        <div>Address2</div>
                        <div className="flex">
                            <FaCcVisa size={'3em'} />{' '}
                            <FaCcMastercard size={'3em'} />{' '}
                            <FaCcPaypal size={'3em'} />{' '}
                            <SiAmericanexpress size={'3em'} />
                        </div>
                    </div>

                    <div className="">
                        {/* center col  */}
                        <div className="flex w-40 h-40">
                            <img src={Logo} alt="Logo" />
                        </div>

                        <div className="flex gap-3">
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

                    <div className="flex flex-col gap-1">
                        {' '}
                        {/* right col  */}
                        <div>BUSINESS HOURS</div>
                        <div>Mon - Fri 7:00am - 3:00pm</div>
                        <div>Sat - Sun 9:00am - 2:00pm</div>
                        <div>Public holidays: Closed</div>
                        <div>FOR BOOKINGS</div>
                        <div className="text-yellow0">
                            {email.map((email) => email.email1)}
                        </div>
                        <div className="text-yellow0">
                            {email.map((email) => email.email2)}
                        </div>
                    </div>
                </div>

                <div className="text-center">
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
