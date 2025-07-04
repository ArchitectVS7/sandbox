import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const handleCheckout = () => {
    // In a real app, this would integrate with a payment processor
    alert('Checkout functionality would be implemented here with Stripe/PayPal integration');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Cart Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-primary-neutral shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="heading-secondary text-2xl flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span>Cart ({state.itemCount})</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-primary-dark rounded-metal transition-colors"
            >
              <X className="h-6 w-6 text-primary-gray hover:text-primary-light" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-primary-gray mx-auto mb-4" />
                <h3 className="heading-secondary text-xl mb-2">Your cart is empty</h3>
                <p className="text-primary-gray mb-6">
                  Add some merchandise to get started
                </p>
                <button onClick={onClose} className="btn-primary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {state.items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size || 'no-size'}`}
                    className="bg-primary-dark rounded-metal p-4"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-metal"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="heading-secondary text-lg mb-1 truncate">
                          {item.product.name}
                        </h4>
                        {item.size && (
                          <p className="text-primary-gray text-sm mb-2">Size: {item.size}</p>
                        )}
                        <p className="text-primary-accent font-inter font-bold">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="p-2 hover:bg-primary-accent/20 rounded-metal transition-colors"
                      >
                        <Trash2 className="h-4 w-4 text-primary-gray hover:text-primary-accent" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-primary-gray text-sm">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                            className="w-8 h-8 bg-primary-neutral rounded-metal flex items-center justify-center hover:bg-primary-accent/20 transition-colors"
                          >
                            <Minus className="h-4 w-4 text-primary-light" />
                          </button>
                          <span className="text-primary-light font-inter font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                            className="w-8 h-8 bg-primary-neutral rounded-metal flex items-center justify-center hover:bg-primary-accent/20 transition-colors"
                          >
                            <Plus className="h-4 w-4 text-primary-light" />
                          </button>
                        </div>
                      </div>
                      <span className="text-primary-light font-inter font-bold">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-700 p-6 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-xl">
                <span className="heading-secondary">Total:</span>
                <span className="text-primary-accent font-inter font-bold">
                  {formatPrice(state.total)}
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="btn-secondary w-full"
                >
                  Clear Cart
                </button>
              </div>

              {/* Shipping Info */}
              <div className="text-center text-primary-gray text-sm">
                <p>Free shipping on orders over $50</p>
                <p>Secure checkout with SSL encryption</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};