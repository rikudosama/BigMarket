import React from 'react';

const Hero = () => {
    return (
        <section className="hero-bg py-24 text-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Artisanat Local de Qualité
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Découvrez les meilleurs produits artisanaux du Burkina Faso, fabriqués
                    avec passion et savoir-faire traditionnel.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#products"
                        className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Explorer
                    </a>
                    <a
                        href="#promotions"
                        className="bg-white hover:bg-gray-100 text-secondary font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Promotions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
