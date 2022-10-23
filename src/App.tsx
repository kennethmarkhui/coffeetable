import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Home from './pages/index'
import NotFound from './pages/NotFound'
import OurStory from './pages/OurStory'

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* TODO: lazy load components except "/" and notfound. */}
                <Route path="our-story" element={<OurStory />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
