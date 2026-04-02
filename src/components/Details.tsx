import { motion } from 'motion/react';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function Details() {
  const events = [
    {
      title: "Lễ Vu Quy",
      date: "Chủ Nhật, 18 Tháng 10, 2026",
      time: "09:00 AM",
      location: "Tư gia nhà gái",
      address: "Số 123, Đường Hoa Hồng, Quận 1, TP. HCM",
      icon: <Calendar className="w-6 h-6 text-wedding-gold" />,
    },
    {
      title: "Tiệc Cưới",
      date: "Thứ Ba, 20 Tháng 10, 2026",
      time: "18:00 PM",
      location: "Trung tâm Hội nghị White Palace",
      address: "194 Hoàng Văn Thụ, Phường 9, Phú Nhuận, TP. HCM",
      icon: <Clock className="w-6 h-6 text-wedding-gold" />,
    }
  ];

  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Thông Tin Buổi Lễ
        </motion.h2>
        <div className="w-24 h-[1px] bg-wedding-gold mx-auto mb-8" />
        <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto italic">
          "Hạnh phúc không phải là điểm đến, mà là hành trình chúng ta cùng đi bên nhau. 
          Trân trọng kính mời bạn đến chung vui cùng gia đình chúng tôi."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="glass-card p-8 rounded-2xl text-center flex flex-col items-center"
          >
            <div className="mb-4 p-3 bg-wedding-gold/10 rounded-full">
              {event.icon}
            </div>
            <h3 className="text-2xl font-serif mb-4 text-stone-800">{event.title}</h3>
            <div className="space-y-2 text-stone-600">
              <p className="font-medium">{event.date}</p>
              <p>{event.time}</p>
              <div className="pt-4 flex flex-col items-center">
                <MapPin className="w-5 h-5 text-wedding-gold mb-2" />
                <p className="font-semibold text-stone-800">{event.location}</p>
                <p className="text-sm">{event.address}</p>
              </div>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-2 border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-colors duration-300 rounded-full text-sm uppercase tracking-widest"
            >
              Xem bản đồ
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
