import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiX } from 'react-icons/hi'

import Logo from '../assets/logo/Coffee_table.png'

interface IMenuDrawerProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const MenuDrawer = ({
    isOpen,
    onClose,
    children,
}: IMenuDrawerProps): JSX.Element => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 left-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="w-screen max-w-lg text-left align-middle transition-all transform shadow-xl h-screen bg-black">
                                    <header className="sticky top-0 flex items-center p-6 sm:p-8 md:p-12 justify-between">
                                        <Dialog.Title>
                                            <img
                                                src={Logo}
                                                alt="Logo"
                                                className="w-20 lg:w-40"
                                            />
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="p-4 -m-4 transition"
                                            onClick={onClose}
                                        >
                                            <HiX />
                                        </button>
                                    </header>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MenuDrawer
