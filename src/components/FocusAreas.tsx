import React from 'react';
import { 
  HeartHandshake, 
  Scale, 
  Vote, 
  Sparkles, 
  GraduationCap, 
  Building2, 
  ArrowRight
} from 'lucide-react';

interface FocusAreasProps {
  onSelectArea?: (title: string) => void;
  onOpenDonate: () => void;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ onOpenDonate }) => {
  const focusList = [
    {
      id: 'humanitarian',
      title: 'Humanitarian Services',
      description: 'Direct welfare delivery, emergency aid packages, and livelihood support for vulnerable households.',
      details: 'On-the-ground food supplies, essential welfare distribution to community heads, and relief interventions for disadvantaged families.',
      icon: HeartHandshake,
      color: 'from-rose-500 to-red-600',
      tag: 'Compassion & Relief',
      image: '/images/humanitarian-relief-handover.jpg',
    },
    {
      id: 'democracy',
      title: 'Democracy and Governance',
      description: 'Promoting constitutional leadership, certified election outcomes, and transparent governance.',
      details: 'Engaging electoral institutions, monitoring official mandates and certificates of return, and holding elected leadership accountable.',
      icon: Scale,
      color: 'from-blue-600 to-indigo-700',
      tag: 'Accountable Leadership',
      image: '/images/democracy-governance-certificate.jpg',
    },
    {
      id: 'electoral',
      title: 'Electoral Education',
      description: 'Sensitising citizens on BVAS biometric verification and peaceful, credible voter turnout.',
      details: 'Grassroots voter literacy clinics, electronic voting technology guidance, and ensuring every citizen’s ballot counts without disenfranchisement.',
      icon: Vote,
      color: 'from-amber-500 to-yellow-600',
      tag: 'Free & Credible Voting',
      image: '/images/electoral-education-bvas-voting.jpg',
    },
    {
      id: 'youth',
      title: 'Youth Empowerment',
      description: 'Equipping students with learning materials, leadership training, and educational mentorship.',
      details: 'Classroom book distributions, literacy mentorship drives, academic scholarships, and empowering the next generation of community change-makers.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      tag: 'Future Leaders',
      image: '/images/youth-empowerment-education.jpg',
    },
    {
      id: 'civic',
      title: 'Civic Education',
      description: 'Facilitating voter opinion labs, constitutional dialogues, and inclusive citizen participation.',
      details: 'Broadcast audience voter opinion forums, disability-inclusive political discourse, and grassroots rights sensitisation.',
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-600',
      tag: 'Informed Citizens',
      image: '/images/civic-education-voter-opinion-lab.jpg',
    },
    {
      id: 'community',
      title: 'Community Development',
      description: 'Revitalising grassroots learning centers and partnering with rural public schools like LGEA Adepe Otukpa.',
      details: 'Upgrading basic public school facilities, strengthening community institutional foundations, and championing local self-help development projects.',
      icon: Building2,
      color: 'from-cyan-600 to-blue-700',
      tag: 'Sustainable Infrastructure',
      image: '/images/community-development-school-infrastructure.jpg',
    },
  ];

  return (
    <section id="focus" className="py-20 md:py-28 bg-[#FFFDF9] dark:bg-[#0A192F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 dark:bg-amber-400/15 text-[#D97706] dark:text-amber-300">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] dark:text-[#F8FAFC] tracking-tight font-heading">
            Our 6 Core Areas of Focus
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Every initiative at Oche's Heart Foundation is tailored to meet immediate humanitarian crises while building enduring structures for civic freedom and prosperity.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F2] dark:bg-[#112240] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-[#C51E2E]/40 dark:hover:border-[#E84C3D]/50 shadow-md dark:shadow-black/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Image Header with Tag */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-[#1D3557]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#0A192F]/90 backdrop-blur-sm text-slate-800 dark:text-[#F8FAFC] border border-transparent dark:border-white/15 shadow-sm">
                    {item.tag}
                  </span>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white dark:bg-[#1D3557] text-[#C51E2E] dark:text-[#E84C3D] border border-transparent dark:border-white/15 shadow-lg flex items-center justify-center group-hover:bg-[#C51E2E] dark:group-hover:bg-[#E84C3D] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A192F] dark:text-[#F8FAFC] font-heading group-hover:text-[#C51E2E] dark:group-hover:text-[#F05A4B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 dark:text-[#CBD5E1] font-medium text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-slate-500 dark:text-[#94A3B8] text-xs sm:text-sm leading-normal pt-1 border-t border-slate-200/60 dark:border-white/10">
                      {item.details}
                    </p>
                  </div>

                  {/* Card Footer action */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenDonate}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C51E2E] hover:text-[#991321] dark:text-[#E84C3D] dark:hover:text-[#F05A4B] transition-colors cursor-pointer"
                    >
                      <span>Support This Cause</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner within Focus */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#152544] to-[#C51E2E] dark:from-[#112240] dark:via-[#1D3557] dark:to-[#E84C3D] p-8 sm:p-10 text-white shadow-xl border border-transparent dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold font-heading">
              Have a grassroots project in need of partnership?
            </h4>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl">
              We work closely with community leaders, local faith groups, and youth coalitions across regions.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm shadow-md transition-all duration-200 shrink-0 transform hover:scale-105"
          >
            Reach Out to Our Team
          </a>
        </div>

      </div>
    </section>
  );
};

