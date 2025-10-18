import { Target, Eye, Award, Users, Heart, Globe } from 'lucide-react';
import type { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A student-led organization run by returnee high school students, for returnee high school students. We understand your journey because we're living it too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  As returnee students ourselves, we're creating a peer-led ecosystem where fellow returnees can thrive academically, socially, and emotionally. We provide student-run programs, peer support networks, and a welcoming community that truly understands the unique challenges of cultural reintegration.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  A Japan where every returnee student feels valued, understood, and empowered to
                  contribute their unique global perspective to society. We envision a future where
                  cultural diversity is celebrated and returnees become bridges connecting Japan to
                  the world.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

              <div className="relative">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-sky-50 mb-4 leading-relaxed">
                  Founded in 2020 by returnee high school students who felt the struggle firsthand, Returnees Hotline | Japan began as a small peer support group. What started with just a handful of students helping each other has grown into a comprehensive student-led organization serving hundreds of returnees annually.
                </p>
                <p className="text-sky-50 mb-4 leading-relaxed">
                  As returnees ourselves, we intimately understand the challenges we all face: language barriers, cultural adjustment, identity questions, and academic pressures. Through our student-run programs and peer support network, we've helped countless fellow students not just adapt, but thrive.
                </p>
                <p className="text-sky-50 leading-relaxed">
                  Today, our team of returnee student leaders continues to expand our reach, develop innovative peer-led programs, and advocate for better support systems for returnees throughout Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Student-led impact: Making a real difference in the lives of returnee students across Japan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Programs Run</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Student Volunteers</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Passionate returnee high school students leading the way and supporting their fellow returnees.
          </p>
          <button
            onClick={() => onNavigate('team')}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Our Team
          </button>
        </div>
      </section>
    </div>
  );
}
