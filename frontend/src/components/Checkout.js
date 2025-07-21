import React from 'react';

const Checkout = () => {
    return (
        <div id="checkoutModal" className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-screen overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-secondary">
                            Finaliser votre commande
                        </h2>
                        <button id="closeCheckout" className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <form className="checkout-form grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-secondary mb-4">
                                Informations personnelles
                            </h3>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Nom complet</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Téléphone</label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Ville</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                required
                            >
                                <option value="">Sélectionnez votre ville</option>
                                <option value="ouagadougou">Ouagadougou</option>
                                <option value="bobo">Bobo-Dioulasso</option>
                                <option value="koudougou">Koudougou</option>
                                <option value="ouahigouya">Ouahigouya</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-secondary mb-4 mt-6">
                                Adresse de livraison
                            </h3>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-2">Adresse</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-secondary mb-4 mt-6">
                                Méthode de paiement
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="payment-method flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="orange"
                                        className="mr-3"
                                        required
                                    />
                                    <div>
                                        <div className="font-medium text-secondary">Orange Money</div>
                                        <div className="text-sm text-gray-500">
                                            Paiement mobile instantané
                                        </div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange_Money_logo.svg/1200px-Orange_Money_logo.svg.png"
                                        alt="Orange Money"
                                        className="ml-auto h-8"
                                    />
                                </label>

                                <label className="payment-method flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="moov"
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-secondary">Moov Money</div>
                                        <div className="text-sm text-gray-500">
                                            Paiement mobile instantané
                                        </div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Moov_Africa_2019_logo.svg/1200px-Moov_Africa_2019_logo.svg.png"
                                        alt="Moov Money"
                                        className="ml-auto h-8"
                                    />
                                </label>

                                <label className="payment-method flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="telecel"
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-secondary">Telecel Money</div>
                                        <div className="text-sm text-gray-500">
                                            Paiement mobile instantané
                                        </div>
                                    </div>
                                    <img
                                        src="https://telecel.bf/wp-content/uploads/2023/03/telecel-money-logo.png"
                                        alt="Telecel Money"
                                        className="ml-auto h-8"
                                    />
                                </label>

                                <label className="payment-method flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="paypal"
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-secondary">PayPal</div>
                                        <div className="text-sm text-gray-500">
                                            Paiement par carte internationale
                                        </div>
                                    </div>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                                        alt="PayPal"
                                        className="ml-auto h-8"
                                    />
                                </label>

                                <label className="payment-method flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                        className="mr-3"
                                    />
                                    <div>
                                        <div className="font-medium text-secondary">
                                            Paiement à la livraison
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Espèces ou mobile money
                                        </div>
                                    </div>
                                    <i
                                        className="fas fa-money-bill-wave ml-auto text-2xl text-green-500"
                                    ></i>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Commentaires</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-primary"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="md:col-span-2 mt-6">
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition duration-300"
                            >
                                Confirmer la commande
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
