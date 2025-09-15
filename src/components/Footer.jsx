const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-fredoka font-bold text-secondary text-outline mb-2">
              DEGENZ
            </h3>
            <p className="font-nunito text-white/80">
              The crypto cartoon series that gets it.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="text-xl font-fredoka font-bold mb-4 text-secondary">
              FOLLOW THE CHAOS
            </h4>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.open('https://twitter.com/DegenzTheShow', '_blank')}
                className="cartoon-button bg-secondary text-black hover:bg-secondary/90 px-6 py-3"
              >
                TWITTER
              </button>
            </div>
          </div>

          {/* Credits */}
          <div className="text-center md:text-right">
            <p className="font-nunito text-white/60 mb-2">
              Created with love and lots of coffee
            </p>
            <p className="font-nunito text-white/60 text-sm">
              Not financial advice. Just entertainment.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-secondary/30 mt-8 pt-8 text-center">
          <p className="font-nunito text-white/60">
            © 2024 DEGENZ. All rights reserved. HODL responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;