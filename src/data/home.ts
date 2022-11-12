import { IHero } from '../components/sections/Hero'
import { IBackgroundImageCard } from '../components/sections/BackgroundImageCard'
import { IInfo } from '../components/sections/Infos'
import { IClientExperience } from '../components/sections/ClientExperience'
import { IFormContainer } from '../components/sections/FormContainer'

export const hero: IHero = {
    title: 'Placeholder, kitten, cofffee',
    subject: 'Artisan Coffee & Fine Food in Tasmania',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    buttonText: 'Book a Table Today!',
}

export const infos: IInfo[] = [
    {
        icon: '1',
        title: 'Fresh Produce',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Fugit doloribus laudantium voluptate blanditiisillum dolorem cupiditate dolores eius sit? Similiqueeius suscipit, adipisci saepe soluta ipsam repellatducimus maxime praesentium.',
    },
    {
        icon: '2',
        title: 'Trained Chef',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias neque quos nulla quibusdam numquam sunt necessitatibus nostrum obcaecati id? Laborum iusto fuga id impedit rem. Perferendis maiores deserunt quibusdam?',
    },
    {
        icon: '3',
        title: 'Artisan Coffee',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse expedita odio ratione unde numquam laudantium excepturi maxime accusamus aliquam distinctio aut autem quaerat! Ducimus voluptatem aliquid maiores magnam omnis.',
    },
    {
        icon: '4',
        title: 'Vegan Options',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum voluptate! Dicta sapiente voluptatum minus repellendus, in repudiandae illo sit, provident modi atque voluptates, quod nesciunt blanditiis facere sunt veniam.',
    },
]

export const clientExperience: IClientExperience = {
    title: 'testimonials',
    subject: "Client's Experience",
    testimonies: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aperiam maiores cum quos atque nemo sequi tempore laboriosam ab quas nostrum quo, sed delectus aliquid.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae error, incidunt similique aliquam maiores amet nam.',
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur sapiente qui sed ab quasi quo temporibus tempore? Doloremque tempora facilis, porro aut asperiores nobis vero at, ea qui eos impedit similique adipisci voluptas nulla fugit deleniti. Deleniti, tempora iure. Ullam, placeat similique.',
    ],
}

export const formContainer: IFormContainer = {
    title: 'We are just a phone call away',
    subject: 'Book your table today',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
}

export const backgroundImageCard: IBackgroundImageCard = {
    title: 'Book Your Table Now!',
    description: 'Your table is waiting, so book today!',
    button: 'Reserve Your Table',
}
