
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-agro-dark mb-4">AgroBloom</h3>
            <p className="text-sm text-muted-foreground">
              Empowering farmers with data-driven insights for better crop management
              and increased agricultural productivity.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-agro-dark mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/crop-recommendation" className="text-muted-foreground hover:text-agro-primary">
                  Crop Recommendation
                </Link>
              </li>
              <li>
                <Link to="/yield-prediction" className="text-muted-foreground hover:text-agro-primary">
                  Yield Prediction
                </Link>
              </li>
              <li>
                <Link to="/fertilizer-recommendation" className="text-muted-foreground hover:text-agro-primary">
                  Fertilizer Recommendation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agro-dark mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-agro-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-agro-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-agro-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-agro-dark mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-agro-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-agro-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-agro-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates
            </div>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-md border border-r-0 border-gray-300 px-3 py-1.5 text-sm"
              />
              <button
                type="submit"
                className="rounded-r-md bg-agro-primary px-3 py-1.5 text-sm text-white hover:bg-agro-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} AgroBloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
