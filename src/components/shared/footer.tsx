import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-cream border-t border-[rgba(26,20,16,0.08)] pt-16 md:pt-20 pb-10">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-light tracking-[0.15em] uppercase text-[#1A1410]">
              VONDERA
            </span>
            <p className="font-body text-[13px] text-taupe mt-4 leading-relaxed">
              A local clothing brand crafting timeless pieces from natural materials.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Shop All', 'Outerwear', 'Knitwear', 'Trousers', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Shop All' ? '/shop' : `/shop?category=${item.toLowerCase()}`}
                    className="font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1A1410] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Sustainability', 'Shipping', 'Returns', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1A1410] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-sm font-medium text-[#1A1410] uppercase tracking-[0.06em] mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-[#1A1410] hover:text-bronze transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[rgba(26,20,16,0.08)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-taupe">
            2024 VONDERA. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-taupe">Secure Checkout</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-sand rounded-sm flex items-center justify-center font-mono text-[8px] text-[#1A1410]">VISA</div>
              <div className="w-8 h-5 bg-sand rounded-sm flex items-center justify-center font-mono text-[8px] text-[#1A1410]">MC</div>
              <div className="w-8 h-5 bg-sand rounded-sm flex items-center justify-center font-mono text-[8px] text-[#1A1410]">AMEX</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
