import React from 'react'
import { techs } from '../data/technologyData'

const Technology = () => {
    return (
        <section id='pricing' className='bg-gray/20 pb-40 scroll-mt-20  widescreen:section-min-height tallscreen:section-min-height'>
            <div className='w-[85vw] mx-auto '>
                <div className='sm:w-[42%] w-[60%] text-center mx-auto mb-20'>
                    <h2 className='font-bold sm:text-3xl text-2xl'>Advanced Statistics</h2>
                    <p className='text-grayish-violet mt-3 '>Track how your links are performing across the web with our advanced dashboard.</p>
                </div>

                <div className='relative flex sm:flex-row flex-col gap-x-8 gap-y-12 items-center justify-center'>
                    <hr className='absolute inset-[8rem] -z-10 sm:h-[10px] sm:w-[65%] h-[65%] w-[10px] bg-cyan border-none mx-auto' />
                    {techs.map((tech) => {
                        const { title, description, icon, transform } = tech
                        return (
                            <article key={title} className={`bg-white  w-80 px-6 rounded-md ${transform}`}>

                                <div className='space-y-3 -translate-y-9 flex flex-col sm:items-start items-center'>
                                    <div className='bg-dark-violet p-4 rounded-full inline-block'>
                                        <img src={icon} alt={title} />
                                    </div>
                                    <h3 className='font-bold text-xl'>{title}</h3>
                                    <p className='text-grayish-violet sm:text-left text-center'> {description}</p>
                                </div>
                            </article>
                        )

                    })}
                </div>
            </div>
        </section>
    )
}

export default Technology