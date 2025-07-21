import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
    const { cart } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">BM</span>
                            </div>
                            <h1 className="text-2xl font-bold text-secondary">
                                Burkina<span className="text-primary">Market</span>
                            </h1>
                        </div>

                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="#" className="text-secondary hover:text-primary font-medium">Accueil</a>
                                </li>
                                <li>
                                    <a href="#products" className="text-secondary hover:text-primary font-medium">Produits</a>
                                </li>
                                <li>
                                    <a href="#promotions" className="text-secondary hover:text-primary font-medium">Promotions</a>
                                </li>
                                <li>
                                    <a href="#calculator" className="text-secondary hover:text-primary font-medium">Calculateur</a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-secondary hover:text-primary font-medium">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative">
                                <i className="fas fa-shopping-cart text-secondary text-xl"></i>
                                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
                            </button>
                            <button className="md:hidden">
                                <i className="fas fa-bars text-secondary text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isCartOpen && <Cart />}
        </>
    );
};

export default Header;
