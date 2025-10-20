import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Lock } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setLoading(true);
    setError('');
    
    setTimeout(() => {
      if (username === 'mylove' && password === '07082025') {
        onLoginSuccess();
      } else {
        setError('❌ Sai tên đăng nhập hoặc mật khẩu!');
      }
      setLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden transition-colors duration-300 p-4">
      {/* Theme toggle in top right corner */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute text-pink-300 dark:text-pink-600 opacity-20 w-16 h-16 md:w-24 md:h-24 animate-pulse" style={{ top: '10%', left: '10%' }} fill="currentColor" />
        <Heart className="absolute text-rose-300 dark:text-rose-600 opacity-20 w-12 h-12 md:w-16 md:h-16 animate-pulse" style={{ top: '20%', right: '15%', animationDelay: '1s' }} fill="currentColor" />
        <Heart className="absolute text-red-300 dark:text-red-600 opacity-20 w-14 h-14 md:w-20 md:h-20 animate-pulse" style={{ bottom: '15%', left: '20%', animationDelay: '2s' }} fill="currentColor" />
        <Heart className="absolute text-pink-400 dark:text-pink-700 opacity-20 w-20 h-20 md:w-28 md:h-28 animate-pulse" style={{ bottom: '25%', right: '10%', animationDelay: '1.5s' }} fill="currentColor" />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-2 border-pink-200 dark:border-pink-800 relative z-10 bg-white/95 dark:bg-slate-800/95">
        <CardContent className="p-4 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center mb-3 md:mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-3 md:p-4 rounded-full">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-white" fill="white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
             My Love
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">Đăng nhập để xem tình yêu của chúng ta 💕</p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2">
                Tên đăng nhập
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 md:top-3 h-4 w-4 text-pink-400" />
                <Input
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyUp={handleKeyPress}
                  className="pl-10 h-10 md:h-11 text-sm md:text-base hover:border-pink-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 md:top-3 h-4 w-4 text-pink-400" />
                <Input
                  type="password"
                  placeholder="Mật khẩu là ngày đặc biệt"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-10 md:h-11 text-sm md:text-base hover:border-pink-400 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200"
                />
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-500 text-center font-medium">
                {error}
              </div>
            )}

            <Button
              variant="pink"
              size="lg"
              className="w-full mt-4 md:mt-6 h-10 md:h-12 text-base md:text-lg font-semibold"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span> Đang đăng nhập...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 md:w-5 md:h-5" fill="white" /> Đăng nhập
                </span>
              )}
            </Button>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-500" fill="currentColor" /> by Hoàng Phương
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
