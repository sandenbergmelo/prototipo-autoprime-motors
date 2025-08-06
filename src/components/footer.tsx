/* eslint-disable @stylistic/max-len */
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AutoMax</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality vehicles and exceptional automotive services since 1995.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">New Vehicles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pre-Owned</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Certified Pre-Owned</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trade-In Value</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Financing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Service Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Parts Department</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Body Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Roadside Assistance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Auto Street</p>
              <p>Austin, TX 78701</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@automax.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AutoMax. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
