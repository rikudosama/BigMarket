import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-secondary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">BM</span>
                            </div>
                            <h2 className="text-2xl font-bold">
                                Burkina<span className="text-primary">Market</span>
                            </h2>
                        </div>
                        <p className="mb-4">
                            Votre destination pour l'artisanat local de qualité au Burkina Faso.
                        </p>
                        <div className="flex space-x-4">
                            <button className="social-icon text-white hover:text-primary"><i className="fab fa-facebook-f"></i></button>
                            <button className="social-icon text-white hover:text-primary"><i className="fab fa-instagram"></i></button>
                            <button className="social-icon text-white hover:text-primary"><i className="fab fa-twitter"></i></button>
                            <button className="social-icon text-white hover:text-primary"><i className="fab fa-whatsapp"></i></button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Lundi - Vendredi:</span>
                                <span>8h - 18h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi:</span>
                                <span>9h - 16h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Dimanche:</span>
                                <span>10h - 14h</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li><button className="hover:text-primary transition">À propos de nous</button></li>
                            <li><button className="hover:text-primary transition">Nos produits</button></li>
                            <li><button className="hover:text-primary transition">Promotions</button></li>
                            <li><button className="hover:text-primary transition">Livraison</button></li>
                            <li><button className="hover:text-primary transition">Contact</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                                <span>Av. de la Nation, Ouagadougou, Burkina Faso</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt mr-3 text-primary"></i>
                                <span>+226 25 40 12 34</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-primary"></i>
                                <span>contact@burkinamarket.bf</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2023 BurkinaMarket. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
