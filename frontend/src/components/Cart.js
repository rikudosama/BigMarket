import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Checkout from './Checkout';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 1500;
    const discount = 0;
    const total = subtotal + shipping - discount;

    return (
        <>
            <div id="cartPanel" className="cart-panel fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 overflow-y-auto cart-open">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-secondary">Votre Panier</h2>
                        <button id="closeCart" className="text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <div id="cartItems" className="mb-8">
                        {cart.length === 0 ? (
                            <p id="emptyCartMessage" className="text-gray-500 text-center py-8">
                                Votre panier est vide
                            </p>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} className="flex items-center py-4 border-b border-gray-200">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-secondary">{item.name}</h4>
                                        <div className="flex items-center mt-2">
                                            <button
                                                className="decrease-quantity w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <span className="quantity mx-2">{item.quantity}</span>
                                            <button
                                                className="increase-quantity w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ml-4 text-right">
                                        <span className="block font-bold">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                                        <button className="remove-item mt-2 text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border-t border-gray-200 pt-4 mb-6">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Sous-total:</span>
                            <span id="cartSubtotal" className="font-bold">{subtotal.toLocaleString()} FCFA</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Livraison:</span>
                            <span id="shippingCost" className="font-bold">{shipping.toLocaleString()} FCFA</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">Réduction:</span>
                            <span id="discount" className="font-bold text-green-600">{discount.toLocaleString()} FCFA</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total:</span>
                            <span id="cartTotal">{total.toLocaleString()} FCFA</span>
                        </div>
                    </div>

                    <button
                        id="checkoutBtn"
                        className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 mb-4"
                        disabled={cart.length === 0}
                        onClick={() => setIsCheckoutOpen(true)}
                    >
                        Passer la commande
                    </button>
                    <button
                        className="w-full border border-secondary text-secondary hover:bg-gray-100 font-bold py-3 px-4 rounded-full transition duration-300"
                    >
                        Continuer vos achats
                    </button>
                </div>
            </div>
            {isCheckoutOpen && <Checkout />}
        </>
    );
};

export default Cart;
