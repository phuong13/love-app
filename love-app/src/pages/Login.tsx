import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Lock } from 'lucide-react';

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
      if (username === 'phuong' && password === '123') {
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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute text-pink-300 opacity-20 w-24 h-24 animate-pulse" style={{ top: '10%', left: '10%' }} fill="currentColor" />
        <Heart className="absolute text-rose-300 opacity-20 w-16 h-16 animate-pulse" style={{ top: '20%', right: '15%', animationDelay: '1s' }} fill="currentColor" />
        <Heart className="absolute text-red-300 opacity-20 w-20 h-20 animate-pulse" style={{ bottom: '15%', left: '20%', animationDelay: '2s' }} fill="currentColor" />
        <Heart className="absolute text-pink-400 opacity-20 w-28 h-28 animate-pulse" style={{ bottom: '25%', right: '10%', animationDelay: '1.5s' }} fill="currentColor" />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-2 border-pink-200 relative z-10 bg-white/95 ">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-full">
                <Heart className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Love App
            </h1>
            <p className="text-slate-600 mt-2">Đăng nhập để tiếp tục hành trình tình yêu 💕</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tên đăng nhập
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                <Input
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyUp={handleKeyPress}
                  className="pl-10 hover:border-pink-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-pink-400" />
                <Input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 hover:border-pink-400"
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
              className="w-full mt-6 h-12 text-lg font-semibold"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span> Đang đăng nhập...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" fill="white" /> Đăng nhập
                </span>
              )}
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-500" fill="currentColor" /> by Love App Team
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
