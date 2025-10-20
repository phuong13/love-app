import { X, Heart } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  date: string;
  description: string;
}

export const ImageModal = ({ isOpen, onClose, image, title, date, description }: ImageModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-2 md:p-4"
      onClick={onClose}
    >
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-500/30 animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              width: `${15 + Math.random() * 15}px`,
              height: `${15 + Math.random() * 15}px`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div
        className="relative max-w-5xl w-full bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-scale-in max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:bg-pink-100 dark:hover:bg-pink-900/50 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg group"
          aria-label="Close"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-slate-800 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-400" />
        </button>

        <div className="flex flex-col md:flex-row max-h-[95vh]">
          {/* Image Section */}
          <div className="md:w-2/3 relative overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 dark:from-slate-900 dark:to-pink-900/20 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full object-contain max-h-[50vh] md:max-h-[95vh] animate-zoom-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/3 p-4 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white to-pink-50 dark:from-slate-800 dark:to-slate-900 overflow-y-auto max-h-[45vh] md:max-h-[95vh]">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse" fill="currentColor" />
                <h2 className="text-xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
                  {title}
                </h2>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block">
                <p className="text-xs md:text-sm font-semibold">{date}</p>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">
                {description}
              </p>

              <div className="flex gap-2 pt-2 md:pt-4">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-pink-500 animate-bounce" fill="currentColor" />
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-500 animate-bounce" fill="currentColor" style={{ animationDelay: '0.1s' }} />
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500 animate-bounce" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
