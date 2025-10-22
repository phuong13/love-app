import { ImageModal } from '@/components/ImageModal';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Calendar, Camera, Cat, ChevronLeft, ChevronRight, Heart, LogOut } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import ảnh từ assets
import img1 from '@/assets/1.jpg';
import img12 from '@/assets/12.jpg';
import img13 from '@/assets/13.jpg';
import img2 from '@/assets/2.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import img6 from '@/assets/6.jpg';
import img7 from '@/assets/7.jpg';
import img9 from '@/assets/9.jpg';

interface HomeProps {
  onLogout: () => void;
}

interface Milestone {
  title: string;
  date: string;
  description: string;
  image: string;
  image_modal: string; // Ảnh hiển thị trong modal
  color: string;
}

const Home = ({ onLogout }: HomeProps) => {
  const navigate = useNavigate();
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; left: string; delay: string; duration: string; isCat: boolean }>>([]);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  // Tính số ngày từ 07/08/2025 đến hiện tại
  const calculateDaysTogether = () => {
    const startDate = new Date('2025-08-07');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    // Tạo trái tim và mèo bay xen kẽ ngẫu nhiên
    const hearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
      isCat: i % 2 === 0
    }));
    setFloatingHearts(hearts);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -520, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 520, behavior: 'smooth' });
    }
  };

  const milestones: Milestone[] = [
    {
      title: "Tin nhắn đầu💘",
      date: "07/08/2025",
      description: "Đây là ngày đầu tiên anh nhắn em cũng là ngày sinh nhật của anh và có lẽ em là món quà đặc biệt nhất mà anh nhận được vào hôm đó.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      image_modal: img1,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Ngày đầu tiên gặp nhau",
      date: "17/08/2025",
      description: "Sau 10 ngày thì chúng ta xem phim lần đầu và gặp nhau lần đầu. Dù là cuộc hẹn vội nhưng đó là bước ngoặc quan trọng, bữa đó anh có ấn tượng với ẻm lắm nhaaa.",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&h=600&fit=crop",
      image_modal: img2,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Lần đầu giận dỗi của yenlinh🥶️",
      date: "31/08/2025",
      description: "Có thể em không nhớ nhiều về lần đó, nhưng với anh, đó là lần đầu tiên em giận dỗi anh. Anh xin lỗi ẻm ( mặc dù lỗi xuất phát từ em ^.^) ",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=600&fit=crop",
      image_modal: img5,
      color: "from-rose-500 to-red-500"
    },
    {
      title: "Buổi giảng hòa",
      date: "03/09/2025",
      description: "Bữa đó trời mưa lắm, 2 mình đi ăn hủ tiếu và lại đi xem phim với nhau. Anh nhớ mãi cảm giác được em ôm dưới cơn mưa, ẻm còn hôn anh nữa!!",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      image_modal: img4,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Lời tỏ tình💝",
      date: "07/09/2025",
      description: "Anh đã dũng cảm nói ra những gì trong lòng. 'Em có làm người yêu anh nha?'. Và hôm ấy em đồng ý hehee, bông hoa đầu tiên anh tặng em là bông hoa sen ấy:))",
      image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&h=600&fit=crop",
      image_modal: img9,
      color: "from-pink-600 to-rose-600"
    },
    {
      title: "Lần đầu chụp photobooth😘",
      date: "13/09/2025",
      description: "Lần đầu được chụp photobooth cũng vui lắm á",
      image: "https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800&h=600&fit=crop",
      image_modal: img6,
      color: "from-rose-600 to-red-600"
    },
    {
      title: "Chia tay tạm thời🥴️",
      date: "07/10/2025",
      description: "Anh không muốn nhắc đến dụ này đâu nhưng mà nó cũng là cột mốc nên cũng phải đưa vào hehe",
      image: img9,
      image_modal: img7,
      color: "from-red-600 to-pink-700"
    },
    {
      title: "Lần hẹn hò tiếp theo👩‍❤️‍👩",
      date: "20/10/2025",
      description: "Sau nhiều lần làm hoà thì cuối cùng cũng có ngày hôm nay ạ. Iu em nhiều lắm luôn ạ",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop",
      image_modal: img12,
      color: "from-red-600 to-pink-700"
    },
    {
      title: "Câu chuyện của chúng ta sẽ tiếp tục...",
      date: "Future",
      description: "...",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      image_modal: img13,
      color: "from-red-600 to-pink-700"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-slate-900 dark:via-pink-900/20 dark:to-slate-900 h-screen overflow-hidden flex flex-col">
      {/* Floating Hearts & Cats Background - Xen kẽ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((item) => {
          const Icon = item.isCat ? Cat : Heart;
          return (
            <Icon
              key={item.id}
              className={`absolute animate-float-up ${
                item.isCat 
                  ? 'text-orange-300/40 dark:text-orange-500/20' 
                  : 'text-pink-300/40 dark:text-pink-500/20'
              }`}
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`
              }}
              fill="currentColor"
            />
          );
        })}
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-3 md:p-6">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse" fill="currentColor" />
          <span className="text-base md:text-xl font-bold text-slate-800 dark:text-slate-100">Love Story</span>
        </div>
        <div className="flex gap-1 md:gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            onClick={handleLogout}
            className="hover:border-pink-400 hover:text-pink-500 dark:bg-slate-800 dark:text-slate-200 text-xs md:text-sm px-2 md:px-4"
          >
            <LogOut className="w-3 h-3 md:w-4 md:h-4 md:mr-2" />
            <span className="hidden md:inline">Đăng xuất</span>
          </Button>
        </div>
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center flex-shrink-0 px-4 mb-2 md:mb-0">
        <div className="flex items-center justify-center gap-2 flex-col">
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <Cat className="w-5 h-5 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
            <h5 className="text-lg md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 dark:from-pink-400 dark:via-rose-400 dark:to-red-400 bg-clip-text text-transparent">
               我们的爱情之旅 ❤️
            </h5>
            <Cat className="w-5 h-5 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-sm md:text-lg text-slate-700 dark:text-slate-300 mb-1">
            <Calendar className="inline w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            07/08/2025 - Forever ( {calculateDaysTogether()} days )
          </p>
        </div>
      </div>

      {/* Memory Photo Button */}
      <div className='relative z-10 text-center px-4 mb-2'>
        <Button
          variant="outline"
          onClick={() => navigate('/memory-photo')}
          className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Camera className="w-4 h-4 mr-2" />
          <span className="text-sm md:text-base">Xem Album Ảnh</span>
        </Button>
      </div>


      {/* Timeline với scroll ngang */}
      <div className="relative z-10 px-2 md:px-8 flex-1 flex items-start md:items-center overflow-hidden pt-2 md:pt-0">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 items-center justify-center"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 items-center justify-center"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full items-center py-4 px-2">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[480px] snap-center h-[500px] md:h-[450px]"
              onClick={() => setSelectedMilestone(milestone)}
            >
              <div className="relative group h-full cursor-pointer">
                {/* Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-pink-500/50 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 md:h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${milestone.color} opacity-40`}></div>

                    {/* Date Badge */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg">
                      <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-1 md:gap-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {milestone.date}
                      </p>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 md:mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500" fill="currentColor" />
                      {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Decorative hearts */}
                <Heart
                  className="absolute -top-4 -left-4 w-8 h-8 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"
                  fill="currentColor"
                />
                <Heart
                  className="absolute -bottom-4 -right-4 w-8 h-8 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"
                  fill="currentColor"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedMilestone && (
        <ImageModal
          isOpen={!!selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
          image={selectedMilestone.image_modal}
          title={selectedMilestone.title}
          date={selectedMilestone.date}
          description={selectedMilestone.description}
        />
      )}
    </div>
  );
};

export default Home;
