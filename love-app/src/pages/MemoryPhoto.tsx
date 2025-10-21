import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Heart, ArrowLeft, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

// Import tất cả ảnh từ assets
import img1 from '@/assets/1.jpg';
import img2 from '@/assets/2.jpg';
import img4 from '@/assets/4.jpg';
import img5 from '@/assets/5.jpg';
import img6 from '@/assets/6.jpg';
import img7 from '@/assets/7.jpg';
import img8 from '@/assets/8.jpg';
import img9 from '@/assets/9.jpg';
import img10 from '@/assets/10.jpg';
import img11 from '@/assets/11.jpg';
import img12 from '@/assets/12.jpg';
import img13 from '@/assets/13.jpg';
import img14 from '@/assets/14.jpg';
import img15 from '@/assets/15.jpg';
import img16 from '@/assets/16.jpg';
import img17 from '@/assets/17.jpg';
import img18 from '@/assets/18.jpg';
import img19 from '@/assets/19.jpg';

interface Photo {
    src: string;
}

const MemoryPhoto = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    const photos: Photo[] = [
        { src: img1 },
        { src: img2 },
        { src: img4 },
        { src: img5 },
        { src: img6 },
        { src: img7 },
        { src: img8 },
        { src: img9 },
        { src: img16 },
        { src: img17 },
        { src: img18 },
        { src: img19 },
        { src: img10 },
        { src: img11 },
        { src: img12 },
        { src: img13 },
        { src: img14 },
        { src: img15 },
    ];

    return (
        <div className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-slate-900 dark:via-pink-900/20 dark:to-slate-900 h-screen overflow-hidden flex flex-col">
            {/* Floating Hearts Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Heart
                        key={i}
                        className="absolute text-pink-300/40 dark:text-pink-500/20 animate-float-up"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${8 + Math.random() * 4}s`,
                            width: `${20 + Math.random() * 20}px`,
                            height: `${20 + Math.random() * 20}px`
                        }}
                        fill="currentColor"
                    />
                ))}
            </div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-center p-3 md:p-6 flex-shrink-0">
                <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    className="hover:border-pink-400 hover:text-pink-500 dark:bg-slate-800 dark:text-slate-200 text-xs md:text-sm px-2 md:px-4"
                >
                    <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 md:mr-2" />
                    <span className="hidden md:inline">Quay lại</span>
                </Button>
                <div className="flex gap-1 md:gap-2">
                    <ThemeToggle />
                </div>
            </div>

            {/* Title */}
            <div className="relative z-10 text-center px-4 mb-2 md:mb-0 flex-shrink-0">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
                    <h1 className="text-lg md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 dark:from-pink-400 dark:via-rose-400 dark:to-red-400 bg-clip-text text-transparent">
                        📸 Memory Photos
                    </h1>
                    <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-yellow-500 animate-pulse" />
                </div>
                <p className="text-sm md:text-lg text-slate-700 dark:text-slate-300">
                    @hphuong & @yenlinh
                </p>
            </div>

            {/* Photo Gallery - Horizontal Scroll */}
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
                    className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full items-center py-4 px-2"
                >
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center h-[600px] md:h-[500px]"
                        >
                            <div className="relative group h-full">
                                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-500/50 bg-white dark:bg-slate-800 h-full">
                                    {/* Image */}
                                    <div className="relative h-full overflow-hidden">
                                        <img
                                            src={photo.src}
                                            alt={`Memory ${photo.id}`}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    </div>

                                    {/* Decorative hearts */}
                                    <Heart
                                        className="absolute -top-4 -left-4 w-6 h-6 md:w-8 md:h-8 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"
                                        fill="currentColor"
                                    />
                                    <Heart
                                        className="absolute -bottom-4 -right-4 w-6 h-6 md:w-8 md:h-8 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"
                                        fill="currentColor"
                                        style={{ animationDelay: '0.2s' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemoryPhoto;
