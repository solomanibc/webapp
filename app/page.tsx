import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Zap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0ee] to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Embark</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">A place for your business</h1>
            <p className="text-xl mb-8">This is what makes our business good.</p>
            <Button size="lg">Try for free</Button>
          </div>
          <div className="md:w-1/2">
            <Image src="https://source.unsplash.com/random/800x600?business" alt="Business illustration" width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by 10,000+ companies of all sizes</h2>
            <div className="flex justify-around items-center flex-wrap">
              {['Logo', 'Logo', 'Logo', 'Logo'].map((logo, index) => (
                <div key={index} className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image src="https://source.unsplash.com/random/600x400?design" alt="Feature illustration" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Simple and super-easy to use!</h2>
              <p className="text-xl mb-8">We specialize in a range of services, including web design, digital marketing, and graphic design.</p>
              <Button>Learn more</Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Briefcase className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Web Design</h3>
                  <p>Create stunning, responsive websites that engage your audience and drive conversions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                  <p>Boost your online presence with targeted campaigns and data-driven strategies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
                  <p>Create visually appealing designs that communicate your brand's message effectively.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Embark</h3>
              <p>A place for your business to thrive and grow.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Product</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Web Design</a></li>
                <li><a href="#" className="hover:underline">Digital Marketing</a></li>
                <li><a href="#" className="hover:underline">Graphic Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
                <a href="#" className="hover:text-gray-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2023 Embark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}