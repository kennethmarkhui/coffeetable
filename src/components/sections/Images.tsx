import { useState } from 'react'
import { Portal } from '@headlessui/react'
import FsLightbox from 'fslightbox-react'
import { images } from '../../data/gallery'

export interface IImage {
    id: number
    src: string
}

const Images = (): JSX.Element => {
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
    )
}

export default Images
