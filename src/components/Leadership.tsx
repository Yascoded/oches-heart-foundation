import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Radio, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Users,
  Briefcase,
  Tv
} from 'lucide-react';

interface LeadershipProps {
  onJoinMission: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onJoinMission }) => {
  const teamMembers = [
    {
      name: 'Oche Otene',
      role: 'Founder / President',
      image: '/leadership/oche-otene.jpeg',
      portfolio: 'Strategic Vision, Public Communication & Civic Advocacy',
      description: 'Leading OHF with over a decade of broadcast journalism, civic advocacy, and philanthropic leadership across Nigeria.',
      badge: 'Executive Leadership',
    },
    {
      name: 'Susan Oche Otene',
      role: 'Executive Director',
      image: '/leadership/executive-director.jpeg',
      portfolio: 'Program Execution, Partner Relations & Compliance',
      description: 'Overseeing daily humanitarian operations, institutional partner relations, and programmatic accountability across state chapters.',
      badge: 'Operations & Strategy',
    },
    {
      name: 'Enoche James',
      role: 'Director of Youth and Women Empowerment',
      image: '/leadership/enoche-james.jpeg',
      portfolio: 'Youth Governance, Women’s Economic Relief & Skills Training',
      description: 'Directing community empowerment drives for widows, young civic leaders, and vulnerable households in underserved communities.',
      badge: 'Empowerment Directorate',
    },
  ];

  const careerStations = [
    'AIT',
    'Channels Television',
    'Raypower FM',
    'Radio One Lagos',
    'Nile Radio',
    'Radio Benue',
    'Democracy Radio'
  ];

  const focusPills = [
    'Education',
    'Youth Empowerment',
    'Community Development',
    'Democracy',
    'Good Governance',
    'Social Inclusion'
  ];

  return (
    <section id="leadership" className="py-20 md:py-28 bg-[#FFFDF9] relative border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 text-[#C51E2E]">
            <Users className="w-3.5 h-3.5" />
            Leadership &amp; Governance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] tracking-tight font-heading">
            About Our Founder &amp; Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Anchored by experienced media professionals, democratic champions, and dedicated social advocates committed to grassroots transformation.
          </p>
        </div>

        {/* 1. FOUNDER SECTION: Large Photo on Left, Bio on Right */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-lg mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Large Founder Photo & Awards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Photo Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] group">
                  <img
                    src="/leadership/oche-otene.jpeg"
                    alt="Oche Otene - Founder and President of Oche's Heart Foundation"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Bottom details inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-[#0A192F]/80 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block mb-0.5">
                      Founder / President
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading">
                      Oche Otene
                    </h3>
                    <p className="text-xs text-rose-100 mt-0.5">
                      Broadcaster • Media Professional • Social Impact Advocate
                    </p>
                  </div>
                </div>

                {/* Floating Philosophy Tag */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#C51E2E] text-white py-2 px-3.5 sm:px-4 rounded-2xl shadow-lg flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
                  <span className="text-xs font-bold tracking-wide">Touching Lives</span>
                </div>
              </div>

              {/* Awards Badges */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0A192F] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D97706]" />
                  <span>Honours &amp; Recognition</span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-slate-800 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 font-bold shadow-xs text-sm">
                      🏆
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A192F] leading-tight">
                        2026 Media Personality of the Year Award
                      </div>
                      <div className="text-[11px] font-medium text-amber-900 mt-0.5">
                        Book Society of Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50/90 border border-rose-200 text-slate-800 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-[#C51E2E] text-white flex items-center justify-center shrink-0 font-bold shadow-xs text-sm">
                      🎙️
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0A192F] leading-tight">
                        2024 Best Newscaster of the Year Award
                      </div>
                      <div className="text-[11px] font-medium text-rose-900 mt-0.5">
                        Nigerian Radio Awards
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Bio, Credentials & Career History */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Header Title */}
              <div className="space-y-2 border-b border-slate-200/80 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-[#D97706]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Founder's Profile
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] font-heading">
                  Oche Otene
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#C51E2E]">
                  Founder / President – Oche’s Heart Foundation
                </p>
              </div>

              {/* Bio Narrative */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Nigerian media professional, broadcaster, entrepreneur and social impact advocate with extensive experience in broadcasting, journalism, public communication and civic engagement. Founder of <strong className="text-slate-900 font-semibold">Oche’s Heart Foundation (OHF)</strong>, an organisation committed to improving lives, empowering citizens and promoting sustainable community development.
              </p>

              {/* Founder's Philosophy Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0A192F] via-[#1E2E4F] to-[#C51E2E] text-white shadow-md relative overflow-hidden">
                <div className="text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-1">
                  Guiding Philosophy
                </div>
                <div className="text-lg sm:text-xl font-bold font-heading italic">
                  "Touching Lives. Empowering Citizens. Transforming Society."
                </div>
              </div>

              {/* Education & Professional Credentials */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <GraduationCap className="w-4 h-4 text-[#C51E2E]" />
                  <span>Education &amp; Professional Credentials</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Elections and Party Politics</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mass Communication</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Education &amp; Agricultural Economics</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Project Management &amp; Event Hosting</span>
                  </div>
                </div>

                {/* Professional Memberships */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                    Member, NIPR (Nigerian Institute of Public Relations)
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
                    Member, TRCN (Teachers Registration Council of Nigeria)
                  </span>
                </div>
              </div>

              {/* Broadcast Career & Media Track Record */}
              <div className="space-y-3 pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <Radio className="w-4 h-4 text-[#D97706]" />
                  <span>Media Career &amp; Broadcast Stations</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {careerStations.map((station) => (
                    <span
                      key={station}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium"
                    >
                      {station}
                    </span>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5 text-xs text-amber-950 font-medium">
                  <Tv className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>
                    Founder of <strong>OOJ Media</strong> – <em>"Media with Clarity and Context."</em>
                  </span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-2 pt-2 border-t border-slate-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Core Focus Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {focusPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1 rounded-full bg-rose-50 text-[#C51E2E] border border-rose-200 text-xs font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2. LEADERSHIP TEAM SECTION: 3 Clean Profile Cards */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
              <Users className="w-3.5 h-3.5 text-[#C51E2E]" />
              Executive Team
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] font-heading">
              Our Leadership Team
            </h3>
            <p className="text-sm text-slate-600">
              Passionate professionals steering our grassroots humanitarian missions, civic clinics, and community initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#C51E2E]/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-black/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#0A192F] shadow-sm">
                      {member.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-300/90 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Profile content */}
                  <div className="p-6 space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C51E2E]">
                      <Briefcase className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                      <span>{member.portfolio}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-slate-600 text-center">
                    Oche's Heart Foundation
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Call-to-action button: "Join Our Mission" */}
          <div className="pt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0A192F] via-[#1E2E4F] to-[#C51E2E] text-white shadow-xl max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0 font-bold shadow-md">
                <Heart className="w-6 h-6 fill-current text-slate-900" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="text-base sm:text-lg font-bold font-heading">
                  Inspired by Our Vision and Leadership?
                </div>
                <div className="text-xs sm:text-sm text-slate-200">
                  Stand with us as a volunteer, donor, or strategic partner to touch lives nationwide.
                </div>
              </div>
              <button
                onClick={onJoinMission}
                className="px-6 py-3.5 rounded-2xl font-bold bg-[#D97706] hover:bg-[#B45309] text-white text-sm shadow-lg shadow-amber-600/30 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 shrink-0"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
