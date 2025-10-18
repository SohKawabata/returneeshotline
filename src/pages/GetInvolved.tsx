import { Users, BookHeart, PartyPopper, ArrowRight, CheckCircle, Heart, Clock } from 'lucide-react';

export default function GetInvolved() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our student-led community and make a real difference alongside fellow returnees.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Volunteer Opportunities
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Make a meaningful impact by volunteering your time and skills. Whether you're a current returnee student wanting to help peers, a former returnee, or simply someone who cares about our community, there's a place for you. Help with peer tutoring, mentoring, event planning, or administrative support.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Tutoring & Mentoring</div>
                        <div className="text-sm text-gray-600">
                          Help students with academics and life guidance
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Event Support</div>
                        <div className="text-sm text-gray-600">
                          Assist with workshops and community events
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Translation Services</div>
                        <div className="text-sm text-gray-600">
                          Bridge language gaps for students and families
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Administrative Help</div>
                        <div className="text-sm text-gray-600">
                          Support our operations and outreach
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700 mb-6">
                    <Clock className="w-5 h-5 text-sky-500 mr-2" />
                    <span>Flexible schedules available - commit as little as 2 hours per week</span>
                  </div>

                  <button className="group/btn px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Apply to Volunteer
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <BookHeart className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Buddies</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Join our peer-led reading program that pairs student volunteers with returnee students for weekly reading sessions. Share your love of books, help improve language skills, and build meaningful connections. Perfect for returnee students who enjoy reading and want to support peers one story at a time.
                  </p>

                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-start mb-4">
                      <Heart className="w-6 h-6 text-emerald-500 mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">How It Works</div>
                        <ul className="text-gray-600 space-y-2">
                          <li>• Meet with your book buddy once a week for 30-60 minutes</li>
                          <li>• Read together, discuss stories, and explore different genres</li>
                          <li>• Build confidence in language skills through conversation</li>
                          <li>• Create a supportive, judgment-free learning environment</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button className="group/btn px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Become a Book Buddy
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-white">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PartyPopper className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4">RH International Day</h2>
                  <p className="text-orange-50 mb-6 leading-relaxed text-lg">
                    Our annual flagship event celebrating cultural diversity and the returnee
                    experience. Join us for a day filled with cultural performances, food from around
                    the world, interactive workshops, and inspiring speakers. Whether you want to
                    perform, volunteer, or simply attend, RH International Day is a celebration you
                    won't want to miss!
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-1">Next Event</div>
                      <div className="text-orange-50">August 15, 2025</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-orange-50">Tokyo Community Center</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="font-semibold mb-1">Expected Attendance</div>
                      <div className="text-orange-50">500+ People</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                      Register to Attend
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                      Volunteer at the Event
                    </button>
                  </div>
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
                Questions About Getting Involved?
              </h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                We're here to help you find the perfect way to contribute to our community. Reach
                out and let's talk!
              </p>
              <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Our Volunteer Coordinator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
