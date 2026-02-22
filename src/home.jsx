import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Mail, 
  Code, 
  Github,
  Award, 
  BookOpen, 
  Menu, 
  X,
  Sparkles,
  Copy,
  Check,
  FileText,
  Users,
  Briefcase,
  ExternalLink,
  Smartphone,
  ArrowUpRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Track active section
    const sections = ['about', 'experience', 'work', 'contact'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const profile = {
    name: "Marsella Dwi Julianti",
    role: "Software Engineering & Visual Designer",
    email: "marselladwijulianti@gmail.com",
    linkedin: "https://linkedin.com/in/marsella-dwi-julianti-477b60257",
    github: "https://github.com/marsellacell",
    resume: "https://drive.google.com/file/d/1DbUGTGhxtS-WnlchOvvORuPQfP_jL04k/view?usp=sharing",
    summary: "I’m a Software Engineering student who enjoys exploring web development and visual design. I believe that good design is not only about appearance, but also about how users experience and interact with a product. I pay close attention to layout, composition, and visual details to create clean and professional designs. At the moment, I’m focusing on improving my skills in UI/UX design and web development for dynamic applications."
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = profile.email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      role: "Google Student Ambassador",
      company: "Google Indonesia",
      period: "2025 — 2026",
      desc: "Selected as Top 200 nationally and invited to Google Office Jakarta (Top 100).",
      icon: Sparkles,
      iconColor: "#EA4335",
      skills: ["Leadership", "Community Building", "Public Speaking", "Tech Advocacy"],
      certificateLink: "https://drive.google.com/file/d/1ERgBO7Yi83gdmVPAXHw7lC60l2gWxogE/view?usp=sharing"
    },
    {
      role: "Content Creator Specialist",
      company: "GDGoC Telkom University Purwokerto",
      period: "2024 — 2025",
      desc: "Curating visual identity and digital presence for the tech community.",
      icon: Users,
      iconColor: "#4285F4",
      skills: ["Content Creation", "Visual Design", "Community Management", "Brand Strategy"],
      certificateLink: "https://drive.google.com/file/d/14B5b5SNUTRFrAXvvnKUCPumS1p1I7B1m/view?usp=sharing"
    },
    {
      role: "Media & Creative Department Staff",
      company: "HMSE Telkom University Purwokerto",
      period: "2024 — 2025",
      desc: "Managing visual documentation and organizational publication consistency.",
      icon: Briefcase,
      iconColor: "#34A853",
      skills: ["Photography", "Video Editing", "Documentation", "Project Management"],
      certificateLink: "https://drive.google.com/file/d/1G5ZUpcetO_4WuZbsw5HixiubX-PIaJqN/view?usp=sharing"
    }
  ];

  const featuredWorks = [
    {
      title: "BanyuGrowth",
      category: "Mobile Application",
      desc: "BanyuGrowth — a team-built mobile application supporting UMKM in Banyumas. Core functions: digital registration platform for UMKM, structured business data collection, easy access for business owners, and support for local UMKM's digital transformation.",
      link: "https://github.com/reessi/TUBES_PPB_BanyuGrowth/tree/main/banyugrowth",
      image: "/assets/BanyuGrowth.jpg",
      tech: "Flutter",
      icon: <Smartphone size={20} className="text-[#B4A697]" />
    },
    {
      title: "Web Explorations",
      category: "Frontend Development",
      desc: "A collection of web components and layouts focusing on responsive design and modern CSS techniques.",
      link: profile.github,
      icon: <Code size={20} className="text-[#B4A697]" />
    }
    ,
    {
      title: "Java OOP Essentials",
      category: "Java Project",
      desc: "Collection of NetBeans projects completed during Dasar Pemrograman Berorientasi Objek (DBPO) practical sessions.",
      link: "https://github.com/marsellacell/NetBeansProjects",
      // place a preview image at public/assets/netbeans-preview.jpg (recommended)
      image: "/assets/netbeans.png",
      tech: "Java",
      icon: <BookOpen size={20} className="text-[#B4A697]" />
    },
    {
      title: "Data Structure Implementations",
      category: "C++ Project",
      desc: "Collection of data structure implementations and algorithms in C++ completed during Struktur Data coursework. Includes fundamental data structures and their practical applications.",
      link: "https://github.com/marsellacell/STD_Marsella_Dwi_Julianti_2311104004",
      image: "/assets/c++.png",
      tech: "C++",
      icon: <Award size={20} className="text-[#B4A697]" />
    },
    {
      title: "Spring Boot REST API",
      category: "Backend Development",
      desc: "RESTful API implementation using Spring Boot framework in Java. Includes API design, database integration, and practical backend development patterns for practical course work.",
      link: "https://github.com/marsellacell/springbootrestapi",
      image: "/assets/springbootrestapi.jpg",
      tech: "Spring Boot",
      icon: <Code size={20} className="text-[#B4A697]" />
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#4A4A4A] selection:bg-[#E8E2D9]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Navigasi */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#F9F8F6]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight text-[#2D2D2D]">
            M<span className="text-[#B4A697]">.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium uppercase tracking-widest text-[#8C8C8C]">
            <a href="#about" className={`transition-colors ${activeSection === 'about' ? 'text-[#2D2D2D] border-b border-[#2D2D2D]' : 'hover:text-[#2D2D2D]'}`}>About</a>
            <a href="#experience" className={`transition-colors ${activeSection === 'experience' ? 'text-[#2D2D2D] border-b border-[#2D2D2D]' : 'hover:text-[#2D2D2D]'}`}>Experience</a>
            <a href="#work" className={`transition-colors ${activeSection === 'work' ? 'text-[#2D2D2D] border-b border-[#2D2D2D]' : 'hover:text-[#2D2D2D]'}`}>Work</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D] transition-colors">GitHub</a>
            <a href={`mailto:${profile.email}`} className="text-[#2D2D2D] border-b border-[#2D2D2D] pb-0.5">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F6] flex flex-col items-center justify-center space-y-8 text-2xl font-light">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href={profile.github} target="_blank">GitHub</a>
          <a href={profile.resume} target="_blank" className="text-[#B4A697] font-medium flex items-center gap-2">
            <FileText size={20} /> Resume
          </a>
          <button onClick={() => setIsMenuOpen(false)} className="mt-8 p-4 rounded-full bg-white border border-gray-100"><X /></button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-8 text-[#B4A697] text-xs font-semibold tracking-[0.2em] uppercase">
            <Sparkles size={14} /> 
            <span>Google Student Ambassador '25</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#2D2D2D] leading-[1.1] mb-12">
            Simplicity is the <br /> 
            <span className="italic font-normal serif text-[#8C8C8C]">ultimate</span> sophistication.
          </h1>
          
          <div className="max-w-xl">
            <p className="text-lg text-[#7A7A7A] leading-relaxed font-light">
              Hi, I'm Marsella. I bridge the gap between complex software engineering and clean visual aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="about" className="py-24 px-6 bg-white shadow-[0_-1px_0_0_rgba(0,0,0,0.03)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Photo - Left Side */}
            <div className="md:col-span-4">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#F5F4F2] border border-[#E8E2D9]">
                  <img 
                    src="/assets/DSC01900.JPG" 
                    alt="Marsella" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#B4A697]/10 rounded-full -z-10"></div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="md:col-span-8">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B4A697] mb-6">About Me</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#4A4A4A]">
                {profile.summary}
              </p>
              
              <div className="mt-16 flex flex-wrap gap-4">
                {["Web Developer", "PHP Backend", "Creative Frontend", "Mobile Apps"].map((skill) => (
                  <span key={skill} className="px-5 py-2 rounded-full border border-[#F0EDE9] bg-[#FAF9F7] text-xs font-medium text-[#8C8C8C]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-[#E8E2D9] pb-6">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B4A697]">Journal</h2>
            <span className="text-xs italic text-[#AFAFAF]">2023 — Present</span>
          </div>
          
          <div className="space-y-1px bg-[#E8E2D9] border border-[#E8E2D9] rounded-3xl overflow-hidden shadow-sm">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              return (
                <div key={idx} className="bg-[#F9F8F6] p-10 group hover:bg-white transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex gap-4 items-start flex-1">
                      {/* Icon Badge */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: exp.iconColor, backgroundColor: `${exp.iconColor}15` }}
                      >
                        <IconComponent size={24} style={{ color: exp.iconColor }} />
                      </div>
                      
                      {/* Role & Company */}
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-[#B4A697] uppercase tracking-widest">{exp.period}</span>
                        <h3 className="text-2xl font-normal text-[#2D2D2D] mt-1 group-hover:translate-x-1 transition-transform">{exp.role}</h3>
                        <p className="text-sm font-medium text-[#7A7A7A] mt-2">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[#8C8C8C] font-light max-w-2xl text-[15px] mb-6 ml-16">{exp.desc}</p>
                  
                  {/* Skills Tags */}
                  <div className="ml-16 flex flex-wrap gap-2 mb-5">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 rounded-full border text-xs font-medium transition-all group-hover:border-[#B4A697] group-hover:text-[#B4A697]"
                        style={{ 
                          borderColor: exp.iconColor,
                          color: exp.iconColor,
                          backgroundColor: `${exp.iconColor}08`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Certificate Link */}
                  {exp.certificateLink && (
                    <div className="ml-16">
                      <a 
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[#B4A697] hover:gap-3 transition-all group-hover:text-[#2D2D2D]"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-[#E8E2D9] pb-6">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B4A697]">Education</h2>
            <span className="text-xs italic text-[#AFAFAF]">2020 — Present</span>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-2 border-[#B4A697] pl-8">
              <h3 className="text-xl font-medium text-[#2D2D2D]">Software Engineering</h3>
              <p className="text-sm text-[#7A7A7A] mt-1 font-medium">Universitas Telkom Purwokerto</p>
              <p className="text-xs text-[#AFAFAF] mt-2 italic">Sep 2023 — 2027</p>
              <p className="text-sm text-[#8C8C8C] leading-relaxed font-light mt-3">
                Active member of Software Engineering program (2023 intake). Core contributor across multiple tech communities: Sircle ITTP (IT Division member), Google Developer Student Clubs (GDSC), and Google Developer Group on Campus (Media & Creative staff). Also serving as Media & Information Staff in the Student Association. Passionate about software development, community engagement, and collaborative projects.
              </p>
            </div>
            
            <div className="border-l-2 border-[#B4A697] pl-8">
              <h3 className="text-xl font-medium text-[#2D2D2D]">Jaringan Sistem Komputer dan Telekomunikasi</h3>
              <p className="text-sm text-[#7A7A7A] mt-1 font-medium">SMKS Al-Furqon Bantarkawung, Bumiayu</p>
              <p className="text-xs text-[#AFAFAF] mt-2 italic">Jul 2020 — Mei 2023</p>
              <p className="text-sm text-[#8C8C8C] leading-relaxed font-light mt-3">
                Vocational diploma in Computer Network and Telecommunications Systems. Named Best Graduate of the department in 2023 with consistent academic ranking in top 3 for 5 semesters. Served 2 years as treasurer and IT coordinator in school organization, and actively participated as an anti-bullying change agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B4A697] mb-4 text-center">Featured Work</h2>
            <h3 className="text-3xl font-light text-[#2D2D2D] text-center italic">Crafting digital solutions.</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, idx) => (
              <a 
                key={idx} 
                href={work.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <div className="aspect-[16/10] bg-[#F5F4F2] rounded-2xl overflow-hidden mb-6 relative border border-transparent group-hover:border-[#E8E2D9] transition-all duration-500">
                  {/* full-bleed image when provided */}
                  {work.image && (
                    <img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-[#B4A697]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 z-20">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  {/* show small badge only when no full image to avoid nested boxes */}
                  {!work.image && (
                    <div className="absolute bottom-8 left-8 p-3 bg-white/80 backdrop-blur-sm rounded-xl">
                      {work.icon}
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-medium text-[#2D2D2D] flex items-center justify-between">
                  {work.title}
                  <span className="text-[10px] uppercase tracking-widest text-[#B4A697] font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                </h4>
                <p className="text-sm text-[#AFAFAF] mt-1 italic flex items-center gap-3">
                  <span>{work.category}</span>
                  {work.tech && (
                    <span className="px-2 py-0.5 text-[11px] rounded-full font-medium" style={{ backgroundColor: '#FFF8E8', color: '#B76B00' }}>
                      Built with {work.tech}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-sm text-[#8C8C8C] leading-relaxed font-light">{work.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-40 px-6 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#2D2D2D] leading-tight mb-12">
            Let's build something <br /> with <span className="italic serif text-[#B4A697]">soul</span> and <span className="italic serif text-[#B4A697]">purpose</span>.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <div className="flex flex-col items-center gap-2 group">
              <div className="flex bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden group-hover:shadow-md transition-all">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="px-6 py-4 text-sm font-medium flex items-center gap-3 hover:bg-[#FAF9F7] transition-colors"
                >
                  <Mail size={18} className="text-[#B4A697]" />
                  <span>{profile.email}</span>
                </a>
                <button 
                  onClick={copyToClipboard}
                  className="px-4 border-l border-[#E8E2D9] hover:bg-[#FAF9F7] transition-colors text-[#B4A697]"
                  title="Copy Email"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                </button>
              </div>
              {copied && <span className="text-[10px] text-green-600 font-bold tracking-widest uppercase animate-pulse">Copied to Clipboard!</span>}
            </div>

            <div className="flex gap-4">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-[#E8E2D9] hover:shadow-md transition-all text-[#B4A697]">
                <Linkedin size={20} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl border border-[#E8E2D9] hover:shadow-md transition-all text-[#B4A697]">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-[#E8E2D9] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4A697]">
              © 2026 Marsella Dwi Julianti
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4A697]">
              <a href={profile.github} target="_blank" className="hover:text-[#2D2D2D]">GitHub</a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D]">Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;