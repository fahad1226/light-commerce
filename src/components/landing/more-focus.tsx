function MoreFocus() {
    return (
        <div>
            <section
                aria-labelledby="comfort-heading"
                className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
            >
                <div className="relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                        <img
                            alt=""
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                            className="size-full object-cover"
                        />
                    </div>
                    <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                            <h2
                                id="comfort-heading"
                                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                            >
                                Simple productivity
                            </h2>
                            <p className="mt-3 text-xl text-white">
                                Endless tasks, limited hours, a single piece of
                                paper. Not really a haiku, but we&apos;re doing
                                our best here. No kanban boards, burndown
                                charts, or tangled flowcharts with our Focus
                                system. Just the undeniable urge to fill empty
                                circles.
                            </p>
                            <a
                                href="#"
                                className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                            >
                                Shop Focus
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MoreFocus;
