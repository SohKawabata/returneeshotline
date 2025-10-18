import { Mail, Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Yuki Tanaka',
      role: 'Executive Director',
      bio: 'Former returnee with 15 years of experience in education and youth development. Passionate about creating inclusive spaces for all students.',
      imageUrl: 'https://images.pexels.com/photos/3782143/pexels-photo-3782143.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Williams',
      role: 'Director of Programs',
      bio: 'Educational psychologist specializing in cross-cultural transitions. Developed our Study Session Program curriculum.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Kenji Yamamoto',
      role: 'Mental Health Coordinator',
      bio: 'Licensed counselor with expertise in adolescent mental health and bilingual therapy. Leads our Consultation Center.',
      imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma Chen',
      role: 'Community Outreach Manager',
      bio: 'Third culture kid with experience in nonprofit management. Coordinates our volunteer programs and events.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Hiroshi Nakamura',
      role: 'Research Director',
      bio: 'PhD in Educational Psychology. Leads our research initiatives and collaborates with universities across Japan.',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Volunteer Coordinator',
      bio: 'Former volunteer turned staff member. Manages our Book Buddies program and volunteer training.',
      imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals dedicated to supporting returnee students and their
              families across Japan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sky-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                We're always looking for passionate individuals who want to make a difference in the
                lives of returnee students. Check out our career opportunities.
              </p>
              <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
