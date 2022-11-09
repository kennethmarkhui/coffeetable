import { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { Portal } from '@headlessui/react'

import Hero, { IHero } from '../components/Hero'
import TransparentCard, {
    ITransparentCard,
} from '../components/cards/TransparentCard'

const galleryHeroContent: IHero = {
    subject: 'See Our Delightful Cafe in Action',
}

const galleryTransparentContent: ITransparentCard = {
    title: "We Bet You'll Want to See our Food in Person!",
    description: 'Book your table now to get the dandiest experience',
    button: 'Contact Us',
}

interface IImage {
    id: number
    src: string
}

const images: IImage[] = [
    { id: 1, src: 'http://placekitten.com/250/250' },
    { id: 2, src: 'http://placekitten.com/250/260' },
    { id: 3, src: 'http://placekitten.com/260/250' },
    { id: 4, src: 'http://placekitten.com/270/250' },
    { id: 5, src: 'http://placekitten.com/250/280' },
    { id: 6, src: 'http://placekitten.com/300/250' },
    { id: 7, src: 'http://placekitten.com/250/300' },
    { id: 8, src: 'http://placekitten.com/240/440' },
]

const Gallery = (): JSX.Element => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1,
    })

    const openLightboxOnSlide = (number: number): void => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        })
    }

    return (
        <>
            <Hero subject={galleryHeroContent.subject} />
            <section className="max-w-7xl mx-auto p-8 space-y-8">
                <img
                    src="http://placekitten.com/350/250"
                    alt="brand"
                    className="mx-auto"
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="w-full h-36 sm:h-48">
                            <img
                                className="object-cover object-center w-full h-full"
                                onClick={() => openLightboxOnSlide(image.id)}
                                src={image.src}
                                alt={`image-${image.id}`}
                            />
                        </div>
                    ))}
                </div>
                <Portal>
                    <FsLightbox
                        toggler={lightboxController.toggler}
                        sources={images.map((image) => image.src)}
                        slide={lightboxController.slide}
                    />
                </Portal>
            </section>

            <TransparentCard
                title={galleryTransparentContent.title}
                description={galleryTransparentContent.description}
                button={galleryTransparentContent.button}
            />
        </>
    )
}

export default Gallery
