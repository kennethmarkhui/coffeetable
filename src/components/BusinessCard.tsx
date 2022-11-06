import { email, phoneNumber } from './Footer'
import Maps from './Maps'

const BusinessCard = (): JSX.Element => {
    return (
        <section className="flex flex-col bg-black p-8 max-w-7xl shadow-md border-none mx-auto gap-10 my-16 ">
            <div className="flex flex-col sm:flex-row justify-around gap-4 text-center">
                {/* left col  */}
                <div className="space-y-4 sm:text-left">
                    <div>
                        {phoneNumber.map(({ name, number }, index) => (
                            <div
                                key={index}
                                className="flex justify-center sm:justify-start"
                            >
                                <span>{name}:&nbsp;</span>
                                <p className="text-yellow0">{number}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <p>FOR BOOKINGS</p>
                        {email.map((email) => (
                            <p key={email} className="text-yellow0">
                                {email}
                            </p>
                        ))}
                    </div>
                </div>
                {/* right col  */}
                <div className="space-y-1 sm:text-right">
                    <p>BUSINESS HOURS</p>
                    <p>Mon - Fri 7:00am - 3:00pm</p>
                    <p>Sat - Sun 9:00am - 2:00pm</p>
                    <p>Public holidays: Closed</p>
                </div>
            </div>

            <Maps />
        </section>
    )
}

export default BusinessCard
