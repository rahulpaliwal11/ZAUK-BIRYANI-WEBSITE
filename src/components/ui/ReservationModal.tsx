import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { Logo } from './Logo';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message to WhatsApp reservation
    const cleanNumber = RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `👑 *TABLE RESERVATION REQUEST - ${RESTAURANT_INFO.name}*\n\n` +
      `👤 *Guest Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `👥 *Number of Guests:* ${guests}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time:* ${time}\n` +
      `✨ *Special Requests:* ${specialRequest || 'None'}\n\n` +
      `Please confirm table availability at Omaxe NRI City Centre!`
    );

    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-wine-card border border-gold-500/45 p-6 md:p-8 shadow-2xl text-cream-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-cream-400 hover:text-cream-100 hover:bg-wine-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream-100">
              Reservation Inquired!
            </h3>
            <p className="text-sm text-cream-300 max-w-sm mx-auto">
              Thank you, {name}! Your table booking details have been prepared for WhatsApp confirmation. Our concierge will respond shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gold-gradient text-wine-950 font-bold text-xs"
            >
              Back to Experience
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-gold-400 mb-2">
              <Logo size="sm" />
              <span className="text-xs uppercase tracking-widest font-bold text-gold-300">
                Royal Hospitality
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-cream-100">
              Reserve a Royal Table
            </h3>
            <p className="text-xs text-cream-300 mt-1">
              Experience authentic Dum dining at Omaxe NRI City Centre, Greater Noida.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kabir Sehgal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-cream-400 absolute left-3 top-2.5" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 focus:outline-none focus:border-gold-500"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8+">8+ Royal Party</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-cream-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-cream-400 absolute left-3 top-2.5" />
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-wine-900 border border-wine-700 rounded-xl pl-9 pr-3 py-2 text-xs text-cream-100 focus:outline-none focus:border-gold-500"
                    >
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:30">09:30 PM (Dinner)</option>
                      <option value="22:30">10:30 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-cream-300 mb-1">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday celebration, anniversary, private alcove request"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-wine-900 border border-wine-700 rounded-xl p-3 text-xs text-cream-100 placeholder-cream-400/60 focus:outline-none focus:border-gold-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-sm tracking-wide shadow-gold-sm transition-all active:scale-98"
              >
                Confirm Reservation via WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
