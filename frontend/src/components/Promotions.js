import React from 'react';

const PromotionCard = ({ promotion }) => {
    return (
        <div className="product-card bg-white rounded-xl overflow-hidden shadow-lg flex">
            <div className="w-1/3">
                <img
                    src={promotion.image}
                    alt={promotion.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-2/3 p-6">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-secondary mb-2">{promotion.name}</h3>
                    <div className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                        {promotion.discount}
                    </div>
                </div>
                <p className="text-gray-600 mb-4">{promotion.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-primary">{promotion.price} FCFA</span>
                    <span className="text-gray-500 line-through">{promotion.old_price} FCFA</span>
                </div>
                <button
                    className="add-to-cart w-full bg-secondary hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    data-id={promotion.id}
                    data-name={promotion.name}
                    data-price={promotion.price}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
};

const Promotions = () => {
    const dummyPromotions = [
        {
            id: 5,
            name: 'Sandales en Cuir',
            description: 'Sandales confortables faites main',
            price: '6,300',
            old_price: '9,000',
            discount: '-30%',
            image: 'https://images.unsplash.com/photo-1560769629-975ec94e541a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        },
        {
            id: 6,
            name: 'Panier Tressé',
            description: 'Panier traditionnel en fibres naturelles',
            price: '4,500',
            old_price: '6,000',
            discount: '-25%',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        },
        {
            id: 7,
            name: 'Bol en Terre Cuite',
            description: 'Bol artisanal pour la cuisine',
            price: '3,400',
            old_price: '4,000',
            discount: '-15%',
            image: 'https://images.unsplash.com/photo-1589985270826-4b7bb1352109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        },
    ];

    return (
        <section id="promotions" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary">
                        Produits en Promotion
                    </h2>
                    <a href="#" className="text-primary font-semibold hover:underline">
                        Voir tout →
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyPromotions.map((promotion) => (
                        <PromotionCard key={promotion.id} promotion={promotion} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Promotions;
