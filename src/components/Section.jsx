import react from 'react';

const Section = ({ id, number, header, subheader }) => {
    return (
        <section id={id} className="pt-12 lg:pt-20 lg:mt-28 mt-24 pb-3">
            <div className="inline-flex w-full sm:w-fit">
                <p className="font-mono font-normal text-accent text-6xl -tracking-[.3rem] lg:-tracking-[.5rem] mr-2 lg:mr-3 md:text-[4.15rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                    {number}
                </p>
                <div className="w-full mt-[.125rem] xl:mt-[.3rem]">
                    <div className="inline-flex align-bottom w-full">
                        <p className="whitespace-nowrap font-sans text-header mb-auto text-[1.3rem] md:text-[1.5rem] lg:md:text-[1.65rem] xl:text-[1.85rem]">
                            {header}
                        </p>
                        <div className="bg-text w-full h-[.01rem] mt-auto mb-[.7rem] ml-2 sm:w-48 md:mb-[.825rem] lg:ml-3 lg:w-56 xl:w-72 xl:mb-[1.05rem]" />
                    </div>
                    <p className="font-sans font-light text-text text-[1.05rem] -mt-[.45rem] md:text-[1.15rem] md:-mt-[.55rem] xl:-mt-[.65rem] lg:md:text-[1.2rem] xl:text-[1.35rem]">
                        {subheader}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section;