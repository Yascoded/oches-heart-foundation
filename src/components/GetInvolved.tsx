import React from 'react';
import { HeartHandshake, Briefcase, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GetInvolvedProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onOpenPartner: () => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({
  onOpenDonate,
  onOpenVolunteer,
  onOpenPartner,
}) => {
  return (
    <section id="get-involved" className="py-20 md:py-28 bg-[#FAF7F2] dark:bg-[#0D1E38] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-rose-100 dark:bg-[#E84C3D]/15 text-[#C51E2E] dark:text-[#F05A4B]">
            Make A Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A192F] dark:text-[#F8FAFC] tracking-tight font-heading">
            Get Involved With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Real societal transformation is a collective endeavor. Whether through your time, institutional collaboration, or financial benevolence, your contribution will touch lives.
          </p>
        </div>

        {/* 3 Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Volunteer */}
          <div className="bg-white dark:bg-[#112240] rounded-3xl p-8 shadow-xl dark:shadow-black/30 border border-slate-200/80 dark:border-white/10 hover:border-[#C51E2E]/40 dark:hover:border-[#E84C3D]/50 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-[#1D3557] text-[#C51E2E] dark:text-[#E84C3D] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C51E2E] dark:group-hover:bg-[#E84C3D] group-hover:text-white transition-all shadow-sm">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C51E2E] dark:text-[#F05A4B]">Hands-On Action</span>
              <h3 className="text-2xl font-bold text-[#0A192F] dark:text-[#F8FAFC] font-heading mt-1 mb-3">
                Volunteer
              </h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
                Join our energized network of changemakers on the ground. Assist in distributing humanitarian packages, organizing civic seminars, and facilitating voter education drills.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Flexible community hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Civic leadership certification</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct grassroots impact</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenVolunteer}
              className="w-full py-3.5 px-4 rounded-xl font-bold bg-[#0A192F] hover:bg-slate-800 dark:bg-[#1D3557] dark:hover:bg-[#E84C3D] text-white text-sm shadow-md transition-all flex items-center justify-center gap-2 group-hover:bg-[#C51E2E] dark:group-hover:bg-[#E84C3D] cursor-pointer"
            >
              <span>Join as Volunteer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Partner With Us */}
          <div className="bg-white dark:bg-[#112240] rounded-3xl p-8 shadow-xl dark:shadow-black/30 border border-slate-200/80 dark:border-white/10 hover:border-[#0A192F]/40 dark:hover:border-white/25 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-[#1D3557] text-[#0A192F] dark:text-[#F8FAFC] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0A192F] dark:group-hover:bg-[#E84C3D] group-hover:text-white transition-all shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0A192F] dark:text-amber-400">Institutional Synergy</span>
              <h3 className="text-2xl font-bold text-[#0A192F] dark:text-[#F8FAFC] font-heading mt-1 mb-3">
                Partner With Us
              </h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
                We collaborate with corporate bodies, non-profits, faith organizations, and civil society alliances to amplify civic governance and scale humanitarian aid delivery.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Co-branded CSR initiatives</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Independent auditing & reporting</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>High-leverage policy impact</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenPartner}
              className="w-full py-3.5 px-4 rounded-xl font-bold bg-[#0A192F] hover:bg-slate-800 dark:bg-[#1D3557] dark:hover:bg-[#274675] text-white text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: Donate */}
          <div className="bg-gradient-to-b from-white to-amber-50/50 dark:from-[#112240] dark:to-[#1D3557] rounded-3xl p-8 shadow-xl dark:shadow-black/30 border-2 border-[#D97706]/40 dark:border-[#E84C3D]/50 hover:border-[#D97706] dark:hover:border-[#E84C3D] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D97706] dark:bg-[#E84C3D] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
              High Impact
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-[#E84C3D]/15 text-[#D97706] dark:text-[#E84C3D] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D97706] dark:group-hover:bg-[#E84C3D] group-hover:text-white transition-all shadow-sm">
                <Heart className="w-7 h-7 fill-current" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] dark:text-[#F05A4B]">Direct Giving</span>
              <h3 className="text-2xl font-bold text-[#0A192F] dark:text-[#F8FAFC] font-heading mt-1 mb-3">
                Donate
              </h3>
              <p className="text-slate-600 dark:text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
                Your donations sponsor vulnerable widows, procure essential voter education guides, and fund community healthcare and clean water initiatives.
              </p>

              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% committed to community cause</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Financial transparency guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct updates on supported families</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full py-3.5 px-4 rounded-xl font-bold bg-[#D97706] hover:bg-[#B45309] dark:bg-[#E84C3D] dark:hover:bg-[#F05A4B] text-white text-sm shadow-lg shadow-amber-600/30 dark:shadow-[#E84C3D]/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

