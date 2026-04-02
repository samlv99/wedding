import { motion } from 'motion/react';
import { CreditCard, Heart } from 'lucide-react';

export default function WeddingGift() {
  const accounts = [
    {
      role: "Chú rể",
      name: "LẠI VĂN SÂM",
      bank: "Vietcombank",
      accountNumber: "1234567890",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=STB:1234567890:LAI+VAN+SAM",
      color: "border-blue-100"
    },
    {
      role: "Cô dâu",
      name: "LÊ THỊ YẾN",
      bank: "Techcombank",
      accountNumber: "0987654321",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TCB:0987654321:LE+THI+YEN",
      color: "border-pink-100"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-wedding-gold/10 rounded-full mb-4"
          >
            <Heart className="w-6 h-6 text-wedding-gold fill-wedding-gold" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Hộp Quà Mừng Cưới</h2>
          <div className="w-24 h-[1px] bg-wedding-gold mx-auto mb-8" />
          <p className="text-stone-600 italic max-w-lg mx-auto">
            Sự hiện diện của bạn là niềm hạnh phúc lớn nhất của chúng mình. 
            Nếu bạn muốn gửi tặng một món quà nhỏ, bạn có thể sử dụng thông tin dưới đây.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {accounts.map((acc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass-card p-8 rounded-3xl text-center border-2 ${acc.color}`}
            >
              <span className="text-wedding-gold font-serif text-xl mb-2 block italic">{acc.role}</span>
              <h3 className="text-2xl font-serif mb-6 text-stone-800 uppercase tracking-wider">{acc.name}</h3>
              
              <div className="relative aspect-square w-48 mx-auto mb-6 bg-stone-50 p-2 rounded-xl border border-stone-100 shadow-inner">
                <img 
                  src={acc.qrUrl} 
                  alt={`QR Code ${acc.role}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2 text-stone-600">
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4 text-stone-400" />
                  <p className="font-medium">{acc.bank}</p>
                </div>
                <p className="text-lg font-mono tracking-widest text-stone-800">{acc.accountNumber}</p>
              </div>

              <button 
                onClick={() => {
                  navigator.clipboard.writeText(acc.accountNumber);
                  // Optional: Add a toast notification here
                }}
                className="mt-6 text-xs uppercase tracking-widest text-stone-400 hover:text-wedding-gold transition-colors"
              >
                Sao chép số tài khoản
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
