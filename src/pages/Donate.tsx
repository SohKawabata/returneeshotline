import { Heart, DollarSign, Users, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function Donate() {
  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Educational Programs',
      description: 'Support student-led study sessions, peer tutoring, and academic resources.',
    },
    {
      icon: PlanetEarth,
      title: 'Global Expansion',
      description: 'Global Expansion to support returnees in other countries.',
    },
    {
      icon: Users,
      title: 'International Events',
      description: 'Enable cultural celebrations, workshops, and networking opportunities.',
    },
  ];

  const donationTiers = [
    {
      amount: '¥1,500',
      title: 'Supporter',
      description: 'The Study Session Sponsor'
      benefits: ['Digital Thank You Card', 'Honoring name of the donor on our website'],
    }, 
    {
      amount:'¥4000',
      title: 'Patron',
      description: 'The Community Builder'
      benefits: ['Everything in Supporter', 'Executive Monthly Updates'],
    },
    {
      amount: '¥30,000',
      title: 'Champion',
      description: 'The Future Leader Investor',
      benefits: ['Everything in Patron', 'Invitation to exclusive events', 'Personal Comment from the Represenative'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation helps us, as student leaders, provide essential peer-led programs, mental health support, and community resources to returnee students across Japan.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Support Matters</h2>
              <p className="text-orange-50 text-lg leading-relaxed mb-6">
                As returnee students ourselves, we intimately understand the unique challenges of transitioning back to life in Japan. Many of us have struggled with cultural identity, language barriers, and feelings of isolation. Your contribution directly funds our student-led programs that help fellow returnees not just survive, but thrive.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-orange-50">Students supported annually</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-orange-50">Report improved well-being</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">¥50M</div>
                  <div className="text-orange-50">In program value delivered</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Where Your Donation Goes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Impact Level
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {donationTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    index === 1 ? 'ring-2 ring-orange-400' : ''
                  }`}
                >
                  {index === 1 && (
                    <div className="flex justify-center mb-4">
                      <span className="px-4 py-1 bg-gradient-to-r from-orange-400 to-amber-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{tier.amount}</div>
                    <div className="text-xl font-semibold text-orange-600 mb-3">{tier.title}</div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full hover:from-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    Donate {tier.amount}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <DollarSign className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Donation</h2>
                <p className="text-gray-600">
                  Choose any amount that works for you. Every contribution makes a difference.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount (¥)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors">
                      One-Time
                    </button>
                    <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-orange-400 hover:text-orange-600 transition-colors">
                      Monthly
                    </button>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full hover:from-orange-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Complete Donation
                </button>
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
              <Award className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Other Ways to Give
              </h2>
              <p className="text-xl text-sky-50 max-w-2xl mx-auto mb-8">
                Interested in corporate sponsorship, planned giving, or in-kind donations? We'd love
                to discuss how you can support our mission.
              </p>
              <button className="px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
