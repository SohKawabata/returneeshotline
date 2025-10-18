import { Calendar, Clock, MapPin, Users, Tag } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: '1',
      title: 'RH International Day 2025',
      date: 'August 15, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Tokyo Community Center',
      description:
        'Our annual celebration of cultural diversity featuring performances, food, workshops, and more.',
      attendees: '500+',
      category: 'Festival',
    },
    {
      id: '2',
      title: 'Summer Study Marathon',
      date: 'July 20, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'RH Education Center, Shibuya',
      description:
        'Intensive study session with tutors available for all subjects. Lunch and snacks provided.',
      attendees: '50',
      category: 'Academic',
    },
    {
      id: '3',
      title: 'Mental Health Workshop',
      date: 'June 28, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Online (Zoom)',
      description:
        'Learn coping strategies and mindfulness techniques from professional counselors.',
      attendees: '100',
      category: 'Wellness',
    },
    {
      id: '4',
      title: 'Career Path Panel Discussion',
      date: 'June 15, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Roppongi Hills Conference Room',
      description:
        'Hear from successful returnees about their career journeys and get advice for your future.',
      attendees: '75',
      category: 'Career',
    },
  ];

  const pastEvents = [
    {
      id: '5',
      title: 'Spring Book Fair',
      date: 'April 10, 2025',
      description: 'Book exchange and reading celebration with our Book Buddies program.',
    },
    {
      id: '6',
      title: 'New Year Welcome Party',
      date: 'January 15, 2025',
      description: 'Kickoff event for 2025 with games, food, and networking.',
    },
    {
      id: '7',
      title: 'Winter Consultation Fair',
      date: 'December 5, 2024',
      description: 'Meet our counselors and learn about mental health resources.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for workshops, social gatherings, and community celebrations throughout the
              year.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg">
                        <div className="text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm">
                          {new Date(event.date).toLocaleString('en', { month: 'short' })}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 text-sm font-medium rounded-full">
                          {event.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Users className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{event.attendees} Expected</span>
                        </div>
                      </div>

                      <button className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
            <div className="relative">
              <Tag className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated on Events
              </h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter to receive event announcements and community updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
