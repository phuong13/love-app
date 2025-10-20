import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Rocket, Star, LogOut } from 'lucide-react';

interface HomeProps {
  onLogout: () => void;
}

const Home = ({ onLogout }: HomeProps) => {
  return (
    <div className="bg-slate-100 min-h-screen w-full p-8 md:p-12">
      <div className="flex justify-end mb-4">
        <Button 
          variant="outline"
          onClick={onLogout}
          className="hover:border-pink-400 hover:text-pink-500"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Đăng xuất
        </Button>
      </div>
      
      <div className="space-y-8 w-full">
        <div className="text-center pt-8">
          <h1 className="text-5xl font-bold flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-green-500" fill="currentColor" />
            <span>Welcome to Love App</span>
          </h1>
          <p className="text-lg text-slate-600">
            Built with React, TypeScript, Vite, Tailwind CSS, and Shadcn/ui
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <Rocket className="w-12 h-12 text-blue-500" />
                </div>
              </div>
              <CardTitle>Fast Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Vite provides lightning-fast HMR and build times for optimal development experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <Star className="w-12 h-12 text-yellow-500" />
                </div>
              </div>
              <CardTitle>Beautiful UI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Shadcn/ui provides beautiful, accessible components built with Radix UI and Tailwind CSS.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-6 bg-green-50 rounded-lg">
                  <Heart className="w-12 h-12 text-green-500" fill="currentColor" />
                </div>
              </div>
              <CardTitle>Type Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                TypeScript ensures type safety and better developer experience throughout the project.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
              <Rocket className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
