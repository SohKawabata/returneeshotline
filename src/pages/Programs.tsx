import { Globe, BookOpen, MessageCircle, ArrowRight, Users, Calendar, Heart } from 'lucide-react';

export default function Programs() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support programs designed specifically for high school returnees in
              Japan.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">NeoGlobal Exchange</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    A unique cultural exchange program that connects returnee students with peers
                    from diverse backgrounds. Through interactive workshops, discussion groups, and
                    collaborative projects, students explore global perspectives while strengthening
                    their cultural identity. This program helps participants develop cross-cultural
                    communication skills and build lasting friendships.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-sky-500 mr-2" />
                      <span>Group Activities</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-sky-500 mr-2" />
                      <span>Monthly Events</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Globe className="w-5 h-5 text-sky-500 mr-2" />
                      <span>30+ Countries</span>
                    </div>
                  </div>
                  <button className="group/btn px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Session Program</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Academic support tailored to the needs of returnee students navigating the
                    Japanese education system. Our experienced tutors and mentors provide guidance in
                    Japanese language, core subjects, and exam preparation. Small group sessions
                    foster collaborative learning and help students build confidence in their
                    academic abilities.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <BookOpen className="w-5 h-5 text-emerald-500 mr-2" />
                      <span>All Subjects</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-emerald-500 mr-2" />
                      <span>Weekly Sessions</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-emerald-500 mr-2" />
                      <span>Small Groups</span>
                    </div>
                  </div>
                  <button className="group/btn px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Center</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Professional support for mental health and well-being. Our trained counselors
                    understand the unique psychological challenges of cultural reintegration and
                    provide a safe, confidential space for students to discuss their concerns. We
                    offer individual counseling, family sessions, and crisis support in both Japanese
                    and English.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Heart className="w-5 h-5 text-orange-500 mr-2" />
                      <span>Confidential</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MessageCircle className="w-5 h-5 text-orange-500 mr-2" />
                      <span>Bilingual Support</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                  <button className="group/btn px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Programs?
              </h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                Take the first step towards a successful transition. Our team is here to help you
                find the right program for your needs.
              </p>
              <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
