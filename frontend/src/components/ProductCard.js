import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                />
                {product.new && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                        Nouveau
                    </div>
                )}
                {product.discount && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                        {product.discount}
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-primary">{product.price} FCFA</span>
                    {product.old_price && (
                        <span className="text-gray-500 line-through">{product.old_price} FCFA</span>
                    )}
                </div>
                {product.sizes && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Taille:</label>
                        <div className="flex space-x-2">
                            {product.sizes.split(',').map((size, index) => (
                                <button
                                    key={index}
                                    className={`border border-gray-300 px-3 py-1 rounded ${
                                        index === 1 ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {product.colors && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Couleur:</label>
                        <div className="flex space-x-2">
                            {product.colors.split(',').map((color, index) => (
                                <button
                                    key={index}
                                    className={`border border-gray-300 px-3 py-1 rounded ${
                                        index === 1 ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'
                                    }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {product.personalization && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Personnalisation:</label>
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary">
                            {product.personalization.split(',').map((option, index) => (
                                <option key={index}>{option}</option>
                            ))}
                        </select>
                    </div>
                )}
                <button
                    className="add-to-cart w-full bg-secondary hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                    onClick={() => addToCart(product)}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
