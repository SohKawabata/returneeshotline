import { Brain, FileText, TrendingUp, Download, Award, Users } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      title: 'Cultural Identity & Adjustment',
      description:
        'Exploring how returnee students navigate identity formation and cultural reintegration.',
      icon: Users,
    },
    {
      title: 'Mental Health & Well-being',
      description:
        'Understanding the psychological challenges and resilience factors of returnee youth.',
      icon: Brain,
    },
    {
      title: 'Academic Performance',
      description:
        'Analyzing educational outcomes and effective support strategies for returnee students.',
      icon: TrendingUp,
    },
  ];

  const publications = [
    {
      title: 'The Returnee Experience: Navigating Two Worlds',
      year: '2024',
      description:
        'A comprehensive study on the psychological adjustment of high school returnees in Japan.',
      downloads: '2.5K',
    },
    {
      title: 'Mental Health Support for Third Culture Kids',
      year: '2024',
      description:
        'Evidence-based interventions for supporting returnee students\' mental well-being.',
      downloads: '1.8K',
    },
    {
      title: 'Language and Identity: Bilingual Returnees in Japan',
      year: '2023',
      description:
        'Examining the relationship between language proficiency and identity formation.',
      downloads: '3.2K',
    },
    {
      title: 'Educational Support Programs: What Works',
      year: '2023',
      description:
        'Evaluation of effective educational interventions for returnee high school students.',
      downloads: '1.5K',
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Research</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based insights into the returnee experience, mental health, and effective
              support strategies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative">
              <div className="flex items-center mb-6">
                <Brain className="w-12 h-12 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">Our Research Mission</h2>
              </div>
              <p className="text-sky-50 text-lg leading-relaxed mb-6">
                At Returnees Hotline | Japan, we believe in the power of research to inform better
                support systems and policies. Our research focuses on understanding the unique
                psychological, social, and educational challenges faced by returnee students. We
                collaborate with universities, mental health professionals, and education experts to
                produce actionable insights that improve the returnee experience.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  <span>Published in peer-reviewed journals</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  <span>500+ participants in our studies</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-6 h-6 mr-2" />
                  <span>15+ research publications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Publications</h2>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="w-6 h-6 text-sky-500 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-gray-900">{publication.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{publication.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full mr-3">
                          {publication.year}
                        </span>
                        <span>{publication.downloads} downloads</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Collaborate With Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Are you a researcher, educator, or institution interested in studying the returnee
                experience? We welcome partnerships and collaborations.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
