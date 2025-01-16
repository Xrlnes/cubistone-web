import React, { Component } from 'react';
import { ShoppingCart, Shield } from 'lucide-react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://cubistone.com:8080', // Kendi backend sunucunuzun adresi
  headers: {
    'Content-Type': 'application/json'
  }
});

class CreditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
      scrollProgress: 0,
      username: '',
      isLoggedIn: false,
      loading: false,
      error: null,
      isLoginModalOpen: false,
      pendingPackage: null,
      cartItems: [],
      isCheckingOut: false,
    };
    this.storeBarRef = React.createRef();
  }

  componentDidMount() {
    this.updateCart();
    this.fetchPackages();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}`;
    this.setState({ scrollProgress: scroll });
  };

  fetchPackages = async () => {
    try {
      this.setState({ loading: true });
      const response = await api.get('/api/packages');

      console.log("API Response:", response.data); // API yanıtını konsola yazdır

      if (Array.isArray(response.data)) {
        this.setState({ packages: response.data});
      } else {
        console.error("Invalid data format received from API:", response);
        this.setState({ error: "Failed to load packages due to an unexpected data format." });
      }
    } catch (error) {
      console.error("Failed to fetch packages:", error);
      this.setState({ error: error.message || "Failed to load store packages. Please try again later." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handlePurchase = async (packageData) => {
    if (!this.state.isLoggedIn) {
      this.setState({ isLoginModalOpen: true, pendingPackage: packageData });
      return;
    }

    await this.addToCartWithUsername(packageData, this.state.username);
  };

  handleLogin = async (enteredUsername) => {
    this.setState({ username: enteredUsername, isLoggedIn: true, isLoginModalOpen: false });

    if (this.state.pendingPackage) {
      await this.addToCartWithUsername(this.state.pendingPackage, enteredUsername);
      this.setState({ pendingPackage: null });
    }
  };

  addToCartWithUsername = async (packageData, username) => {
    this.setState({ loading: true, error: null });

    try {
      const cart = this.getCart();
      cart.push({
        id: packageData.id,
        name: packageData.name,
        price: packageData.price,
        username: username
      });
      this.setCart(cart);

      this.updateCart();
      const storeBarElement = this.storeBarRef.current;
      if (storeBarElement) {
        storeBarElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      } else {
        window.scrollTo({
          top: document.documentElement.scrollHeight / 4,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Cart error:', error);
      this.setState({ error: 'An error occurred while adding to cart. Please try again.' });
    } finally {
      this.setState({ loading: false });
    }
  };

  updateCart = () => {
    this.setState({ cartItems: this.getCart() });
  };

  removeFromCart = (indexToRemove) => {
    const cart = this.getCart();
    cart.splice(indexToRemove, 1);
    this.setCart(cart);
    this.updateCart();
  };

  getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };

  setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart = () => {
    localStorage.removeItem('cart');
    this.updateCart();
  };

  handleCheckout = async () => {
    if (!this.state.isLoggedIn || !this.state.username) {
      alert('Please login with your Minecraft username first');
      return;
    }

    this.setState({ isCheckingOut: true });
    try {
      const checkoutResponse = await api.post('/api/checkout', { username: this.state.username });
      const basketId = checkoutResponse.data.basketId;

      for (const item of this.state.cartItems) {
        await api.post(`/api/basket/${basketId}/packages`, {
          package_id: item.id,
          quantity: 1
        });
      }

      const checkoutUrl = `https://checkout.tebex.io/checkout/${basketId}`;
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      this.clearCart();
      this.updateCart();

    } catch (error) {
      console.error('Checkout error:', error);
      let errorMessage = 'An error occurred during checkout. Please try again.';

      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.title) {
        errorMessage = error.response.data.title;
      } else if (error.message) {
        errorMessage = error.message;
      }

      alert(errorMessage);
    } finally {
      this.setState({ isCheckingOut: false });
    }
  };

  // --- Render Alt Bileşenleri ---

  renderLoginModal() {
    const { isLoginModalOpen, loading } = this.state;

    if (!isLoginModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md relative border border-gray-800">
          <button
            onClick={() => this.setState({ isLoginModalOpen: false, pendingPackage: null })}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-white mb-6">Enter Minecraft Username</h2>

          <form onSubmit={(e) => { e.preventDefault(); this.handleLogin(this.state.username); }} className="space-y-4">
            <div>
              <input
                type="text"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                placeholder="Username"
                disabled={loading}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Continue to Purchase'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  renderStoreBar() {
    const { username, isLoggedIn, cartItems, isCheckingOut } = this.state;

    const calculateTotal = () => {
      return cartItems.reduce((total, item) => {
        const price = Number(item.price || item.base_price || 0);
        return total + price;
      }, 0);
    };

    return (
      <div className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-xl py-6 mt-20 border-t border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            {/* Main Content */}
            <div className="relative bg-gray-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Your Cart
                  </h2>
                </div>
                <div className="text-sm text-gray-400">
                  {username && <span className="px-3 py-1.5 bg-gray-800/50 rounded-full border border-gray-700">
                    {username}
                  </span>}
                </div>
              </div>

              {/* Cart Content */}
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <ShoppingCart className="w-12 h-12 mx-auto text-gray-600" />
                  </div>
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Cart Items */}
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="flex gap-3 items-center">
                          <div className="h-10 w-10 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                            <Shield className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              For: {item.username}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-bold text-white">${item.price}</span>
                          <button
                            onClick={() => this.removeFromCart(index)}
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Checkout */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-4 border-t border-gray-700">
                      <span className="text-gray-400">Total Amount</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        ${calculateTotal()}
                      </span>
                    </div>

                    <button
                      onClick={this.handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold relative group overflow-hidden disabled:opacity-50 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isCheckingOut ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Proceed to Checkout
                            <Shield className="w-5 h-5" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderPackageCard(pack) {
    const { loading } = this.state;

    const getGradient = (packName) => {
      switch (packName.toLowerCase()) {
        case 'starter':
          return 'from-blue-600 to-blue-800';
        case 'basic':
          return 'from-green-500 to-green-700';
        case 'plus':
          return 'from-orange-500 to-orange-700';
        case 'premium':
          return 'from-pink-500 to-orange-500';
        case 'pro':
          return 'from-blue-600 to-purple-600';
        case 'elite':
          return 'from-pink-600 to-purple-600';
        case 'ultimate':
          return 'from-red-500 to-orange-500';
        default:
          return 'from-blue-600 to-blue-800';
      }
    };

    const gradient = getGradient(pack.name);
    const cleanDescription = pack.description.replace(/<\/?p>/g, '');

    return (
      <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 card group transition-all duration-300 relative overflow-hidden border border-gray-800/50">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300`}>
          {pack.name.toUpperCase()}
        </div>

        <Shield className={`w-8 h-8 mb-4 text-white bg-gradient-to-br ${gradient} p-1.5 rounded-lg`} />

        <div className="mb-6 flex justify-center">
          <img
            src={pack.image}
            alt={pack.name}
            className="w-40 h-40 object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
            {cleanDescription}
          </h3>

          <button
            onClick={() => this.handlePurchase(pack)}
            disabled={loading}
            className="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg transition-all group overflow-hidden mt-4 disabled:opacity-50"
          >
            <span className="relative z-10 font-bold flex items-center justify-between">
              <span>${Number(pack.price)}</span>
              <span className="flex items-center gap-2">
                {loading ? 'Processing...' : 'Purchase Now'}
                <ShoppingCart className="w-4 h-4" />
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    );
  }

  // --- Ana Render Metodu ---

  render() {
    const { packages, scrollProgress, error, loading } = this.state;

    return (
      <div className="min-h-screen bg-gray-950 pt-20">
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div ref={this.storeBarRef} id="store-bar-section">
          {this.renderStoreBar()}
        </div>
        {error && (
          <div className="container mx-auto px-4 mt-4">
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-20">
          <div className="relative mb-40">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Credit Packages
            </h2>
            <p className="text-gray-400 text-center mb-16 text-lg">
              Select a package to purchase through our secure payment system
            </p>

            {loading ? (
              <div className="text-center text-gray-400">Loading packages...</div>
            ) : (
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pack) => (
                  <div key={pack.id}>
                    {this.renderPackageCard(pack)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {this.renderLoginModal()}
      </div>
    );
  }
}

export default CreditPage;