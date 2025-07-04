import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Filter, Eye } from 'lucide-react';
import { Product } from '../types';
import { mockApi } from '../utils/mockData';
import { LoadingSpinner } from './LoadingSpinner';
import { Modal } from './Modal';
import { useCart } from '../contexts/CartContext';

export const MerchandiseSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'music', name: 'Music' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'collectibles', name: 'Collectibles' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await mockApi.getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleAddToCart = (product: Product, size?: string) => {
    addToCart(product, size);
    setSelectedProduct(null);
    setSelectedSize('');
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes?.[0] || '');
  };

  if (loading) {
    return (
      <section id="merch" className="section-padding bg-primary-dark">
        <div className="container-metal">
          <LoadingSpinner size="lg" text="Loading merchandise..." />
        </div>
      </section>
    );
  }

  return (
    <section id="merch" className="section-padding bg-primary-dark">
      <div className="container-metal">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-primary text-5xl md:text-6xl mb-4">Merchandise</h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-8" />
          <p className="text-xl text-primary-gray max-w-3xl mx-auto">
            Wear your allegiance. Show your support. Carry the darkness with you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-metal font-inter font-medium transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-primary-accent text-primary-light shadow-lg'
                  : 'bg-primary-neutral text-primary-gray hover:bg-primary-accent/20 hover:text-primary-light'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-primary-neutral rounded-metal overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  {product.featured && (
                    <div className="bg-primary-accent text-primary-light px-2 py-1 rounded-full text-xs font-inter font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openProductModal(product)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="heading-secondary text-xl mb-2">{product.name}</h3>
                <p className="text-primary-gray text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-accent font-inter font-bold text-xl">
                    ${product.price.toFixed(2)}
                  </span>
                  <div className="flex items-center space-x-2">
                    {!product.inStock && (
                      <span className="text-primary-secondary text-sm font-inter font-medium">
                        Out of Stock
                      </span>
                    )}
                    <button
                      onClick={() => product.sizes && product.sizes.length > 0 ? openProductModal(product) : handleAddToCart(product)}
                      disabled={!product.inStock}
                      className={`btn-primary flex items-center space-x-2 ${
                        !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-primary-gray mx-auto mb-4" />
            <h3 className="heading-secondary text-2xl mb-4">No Products Found</h3>
            <p className="text-primary-gray">
              Try selecting a different category or check back later for new items.
            </p>
          </div>
        )}

        {/* Featured Products Banner */}
        <div className="mt-16 bg-primary-neutral rounded-metal p-8 text-center">
          <h3 className="heading-secondary text-2xl mb-4">Limited Edition Items</h3>
          <p className="text-primary-gray mb-6">
            Don't miss out on our exclusive merchandise. Limited quantities available.
          </p>
          <button
            onClick={() => setSelectedCategory('collectibles')}
            className="btn-primary"
          >
            Shop Collectibles
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          size="lg"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full rounded-metal"
              />
            </div>
            <div>
              <p className="text-primary-gray mb-4">{selectedProduct.description}</p>
              <div className="mb-4">
                <span className="text-primary-accent font-inter font-bold text-2xl">
                  ${selectedProduct.price.toFixed(2)}
                </span>
              </div>
              
              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <div className="mb-6">
                  <h4 className="heading-secondary text-lg mb-3">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-metal font-inter font-medium transition-colors ${
                          selectedSize === size
                            ? 'bg-primary-accent text-primary-light'
                            : 'bg-primary-dark text-primary-gray hover:bg-primary-accent/20'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="space-y-4">
                <button
                  onClick={() => handleAddToCart(selectedProduct, selectedSize)}
                  disabled={!selectedProduct.inStock || (selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize)}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    !selectedProduct.inStock || (selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                {!selectedProduct.inStock && (
                  <p className="text-primary-secondary text-center">This item is currently out of stock</p>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};