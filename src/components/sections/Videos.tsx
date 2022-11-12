const Videos = (): JSX.Element => {
    return (
        <section className="flex flex-col sm:flex-row max-w-screen-xl mx-auto gap-8 p-8">
            <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/lWLxD7BzZ_Y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/n-ozFN8tGKM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </section>
    )
}

export default Videos
