import { motion } from 'motion/react';
import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import WeddingGift from './components/WeddingGift';
import Countdown from './components/Countdown';
import { Heart } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen selection:bg-wedding-rose selection:text-white">
      {/* Hero Section */}
      <Hero />

      {/* Countdown Section */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4 text-stone-500 italic">Đếm ngược đến ngày trọng đại</h2>
          <Countdown targetDate="2026-10-20T18:00:00" />
        </div>
      </section>

      {/* Invitation Text */}
      <section className="py-24 px-4 bg-stone-50 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <Heart className="w-8 h-8 text-wedding-gold mx-auto" />
          <h2 className="text-4xl md:text-5xl font-serif">Lời Ngỏ</h2>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-serif italic">
            "Trong cuộc đời mỗi người, có những khoảnh khắc mà chúng ta muốn lưu giữ mãi mãi. 
            Và ngày chúng mình về chung một nhà chính là khoảnh khắc tuyệt vời nhất đó. 
            Sự hiện diện của bạn không chỉ là niềm vinh dự mà còn là món quà ý nghĩa nhất dành cho chúng mình."
          </p>
          <div className="pt-8">
            <p className="text-stone-500 uppercase tracking-widest text-sm mb-2">Trân trọng</p>
            <p className="text-3xl font-cursive text-wedding-gold">Lại Văn Sâm & Lê Thị Yến</p>
          </div>
        </motion.div>
      </section>

      {/* Details Section */}
      <Details />

      {/* Gallery Section */}
      <Gallery />

      {/* Wedding Gift Section */}
      <WeddingGift />

      {/* RSVP Section */}
      <RSVP />

      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-cursive text-wedding-cream mb-4">Lại Văn Sâm & Lê Thị Yến</h2>
          <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Thank you for being part of our story</p>
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="w-5 h-5 text-wedding-rose fill-wedding-rose" />
          </div>
          <p className="text-stone-500 text-xs">© 2026 Wedding Invitation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
