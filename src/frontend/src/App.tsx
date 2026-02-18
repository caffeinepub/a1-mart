import { ShoppingBag, Puzzle, Laptop, Shirt, BoxIcon, Briefcase, Leaf, Target, Handshake, CheckCircle, Lock, MapPin, Truck, HelpCircle, Heart } from 'lucide-react';
import { SiInstagram, SiFacebook } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'a1mart';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-primary shadow-brand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="logo-box">
                <span className="logo-text">A1</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-cream">A1 Mart</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="nav-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="nav-link"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="nav-link"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-link"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* HOME SECTION */}
        <section id="home" className="section-padding bg-brand-cream">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
              {/* Hero Content */}
              <div className="flex-1 min-w-[280px]">
                <h1 className="hero-heading">
                  Shop smart.
                  <br />
                  <span className="hero-subheading">Thousands of items.</span>
                </h1>
                <p className="hero-description">
                  Bags, toys, electronics, clothing – all in one trusted marketplace.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    onClick={() => scrollToSection('products')}
                    className="btn btn-outline"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Explore products
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn btn-primary"
                  >
                    <Lock className="w-5 h-5" />
                    Contact us
                  </button>
                </div>
              </div>

              {/* Trust Badge Panel */}
              <div className="flex-1 min-w-[280px] trust-panel">
                <BoxIcon className="w-20 h-20 text-brand-primary mb-4" />
                <p className="text-lg font-semibold text-brand-primary mb-2">
                  <strong>Trusted by busy professionals</strong> – we bring value, variety and reliability.
                </p>
                <div className="trust-tag">
                  <Briefcase className="w-5 h-5" />
                  for business & beyond
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding bg-white">
          <div className="container">
            <h2 className="section-heading">Our story & mission</h2>
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {/* Story Content */}
              <div className="flex-[2] min-w-[280px]">
                <p className="about-text mb-6">
                  Founded in 2020, A1 Mart started as a small family venture with a bold idea: make quality products accessible to everyone. Today we serve thousands of professionals who need efficiency, style and trust – all in one place.
                </p>
                <p className="about-text-secondary flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <span>Sustainability & fairness are at our core. We partner with ethical suppliers for bags, electronics, toys, and clothing.</span>
                </p>
                <p className="about-text-secondary flex items-start gap-3 mt-6">
                  <Target className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <span><strong>Mission:</strong> Deliver a shopping experience that feels professional, attractive, and absolutely trustworthy.</span>
                </p>
              </div>

              {/* Trust Card */}
              <div className="flex-1 min-w-[280px] trust-card">
                <Handshake className="w-12 h-12 text-brand-primary mb-4" />
                <h3 className="text-2xl font-bold text-brand-primary mb-3">100% trusted</h3>
                <p className="text-brand-primary-light">
                  More beneficial than any other online store – because your time matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="section-padding bg-brand-cream">
          <div className="container">
            <h2 className="section-heading">Our products</h2>
            <p className="text-xl font-medium text-brand-primary mb-6">
              Bags · Toys · Electronics · Clothing
            </p>

            {/* Product Grid */}
            <div className="product-grid">
              {/* Bags */}
              <div className="product-card">
                <ShoppingBag className="product-icon" />
                <h3 className="product-title">Bags</h3>
                <p className="product-subtitle">Backpacks, totes, luxury</p>
                <span className="product-price">from $19</span>
              </div>

              {/* Toys */}
              <div className="product-card">
                <Puzzle className="product-icon" />
                <h3 className="product-title">Toys</h3>
                <p className="product-subtitle">Educational, fun & safe</p>
                <span className="product-price">from $9</span>
              </div>

              {/* Electronics */}
              <div className="product-card">
                <Laptop className="product-icon" />
                <h3 className="product-title">Electronics</h3>
                <p className="product-subtitle">Audio, wearables, gadgets</p>
                <span className="product-price">from $29</span>
              </div>

              {/* Clothing */}
              <div className="product-card">
                <Shirt className="product-icon" />
                <h3 className="product-title">Clothing</h3>
                <p className="product-subtitle">Men, women, premium fabric</p>
                <span className="product-price">from $15</span>
              </div>
            </div>

            {/* Quality Banner */}
            <div className="quality-banner">
              <CheckCircle className="w-6 h-6" />
              <span>100% genuine products — fast delivery — easy returns</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section-padding bg-white">
          <div className="container">
            <h2 className="section-heading">Contact us</h2>
            <p className="text-lg text-brand-primary mb-8">
              We reply within 24h. Reach out anytime.
            </p>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form
                action="https://formsubmit.co/merealam0786@gmail.com"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                {/* Hidden Fields */}
                <input type="hidden" name="_subject" value="New message from A1 Mart website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://a1mart-demo.vercel.app/thanks.html" />

                {/* Name Field */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="form-input"
                  />
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="form-input"
                  />
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="How can we help?"
                    required
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full">
                  <Lock className="w-5 h-5" />
                  Send message
                </button>
              </form>

              <p className="text-sm text-brand-primary-light mt-4 text-center flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                messages go to merealam0786@gmail.com
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-row">
              <a
                href="https://www.instagram.com/visionxgaming3?igsh=MWFwYjQ2djhzd2UzZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-icon-primary"
                aria-label="Instagram"
              >
                <SiInstagram className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="social-icon social-icon-secondary"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-7 h-7" />
              </a>
              <a
                href="#"
                className="social-icon social-icon-secondary"
                aria-label="Facebook"
              >
                <SiFacebook className="w-7 h-7" />
              </a>
            </div>
            <p className="text-center text-brand-primary mt-4">
              📲 instagram.com/visionxgaming3 (click icon)
            </p>
          </div>
        </section>

        {/* INFO HIGHLIGHTS SECTION */}
        <section className="section-padding-small bg-brand-cream">
          <div className="container">
            <div className="info-highlights">
              <div className="info-item">
                <HelpCircle className="w-6 h-6" />
                <strong>FAQ</strong> — fast answers
              </div>
              <div className="info-item">
                <Truck className="w-6 h-6" />
                <strong>free shipping</strong> over $50
              </div>
              <div className="info-item">
                <MapPin className="w-6 h-6" />
                <strong>visit our showroom</strong> (by appt)
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container text-center">
          <p className="text-base mb-3">
            © {currentYear} A1 Mart – professional, attractive & trusted online store. Built for busy professionals.
          </p>
          <p className="text-sm mb-3">
            📍 Dark green (#1A4D2E) & cream (#F5EFE0) – colors of reliability.
          </p>
          <p className="text-sm opacity-80 mb-4">
            Logo will be provided – placeholder "A1" used.
          </p>
          <p className="text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
