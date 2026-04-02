import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function RSVP() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-stone-100">
      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif mb-4">Xác Nhận Tham Dự</h2>
          <p className="text-stone-500 italic">Vui lòng phản hồi trước ngày 10/10/2026 để chúng tôi tiện việc đón tiếp.</p>
        </div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif mb-2">Cảm ơn bạn!</h3>
            <p className="text-stone-600">Thông tin của bạn đã được gửi đi. Hẹn gặp bạn tại buổi lễ!</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-wedding-gold underline underline-offset-4"
            >
              Gửi lại phản hồi khác
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-stone-500 font-medium">Họ và Tên</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold outline-none transition-all"
                  placeholder="Nhập tên của bạn..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-stone-500 font-medium">Số điện thoại</label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold outline-none transition-all"
                  placeholder="090..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500 font-medium">Bạn sẽ tham dự chứ?</label>
              <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold outline-none transition-all">
                <option>Tôi sẽ đến</option>
                <option>Rất tiếc, tôi không thể đến</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500 font-medium">Số người đi cùng</label>
              <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold outline-none transition-all">
                <option>Đi một mình</option>
                <option>2 người</option>
                <option>3 người</option>
                <option>Cả gia đình</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-stone-500 font-medium">Lời nhắn gửi</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-wedding-gold focus:ring-1 focus:ring-wedding-gold outline-none transition-all"
                placeholder="Chúc mừng hạnh phúc hai bạn..."
              ></textarea>
            </div>

            <button 
              disabled={status === 'submitting'}
              type="submit"
              className="w-full py-4 bg-wedding-gold text-white rounded-lg font-serif text-xl hover:bg-stone-800 transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Đang gửi...' : 'Xác Nhận Tham Dự'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
