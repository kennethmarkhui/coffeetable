import divider from '../assets/image/divider.png'

import React, { useRef, useEffect, useState } from 'react'

const WhereAreWe = () => {
    return (
        <div>
            <div className="bg-[url('assets/image/coffee-bar.jpg')] max-w-full h-[42rem] bg-cover bg-center mx-auto my-10 opacity-50">
                <div className="max-w-screen-lg flex flex-col p-6">
                    <div className="flex justify-center text-5xl">
                        Where Are We?
                    </div>
                    <div className="flex place-content-center">
                        <img className="w-72 h-10 m-4" src={divider}></img>
                    </div>
                    <div className="flex text-center m-8">
                        <div>
                            Our café is located in two areas, Hobart and Moonah.
                            You can find our café in Hobart hidden away in
                            Collins Court opposite JB HI-FI Hobart. If you’re
                            looking for our Moonah store, we are on the main
                            road and can’t be missed. Please use the map below
                            to see our two locations if you need directions.
                            Trust us when we say: you won’t want to miss a
                            dining experience like Dandy Lane Café.{' '}
                        </div>
                    </div>
                    <div className="flex flex-row gap-28">
                        <div className="basis-1/2">
                            <img src="http://placekitten.com/500/400" alt="" />
                        </div>
                        <div className="basis-1/2">
                            <img src="http://placekitten.com/500/400" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhereAreWe
