import {
    ChevronDown, Home, Briefcase, Settings, User, Code, Phone, Laptop, 
    Smartphone, Brain, Info, Users, Building2 as Hostel, GraduationCap as Scholarship, 
    Users as Clubs, ShieldAlert as Notice, CreditCard as Fee, Landmark as Bank, 
    Library, HeartPulse as Hospital, Dumbbell as Sports, ShieldCheck as Women, 
    BadgeCheck as SCST, Activity as Sac, Rocket as Fest, Handshake as NSS, 
    Lightbulb as Ecell, Globe as Bharat, Network as Chankaya, Monitor as ComputerCentre, 
    Microscope as Labs, Train as EMU, Atom as ESU, UserCheck, UserCircle, Shield, 
    FileText, Calendar, Landmark, BookOpen, Building, Scroll, FilePlus, Newspaper, 
    Atom, FlaskConical, HardHat, Zap, Radio, Globe, Sigma, Cpu, Network, Server, 
    CalendarDays, ClipboardList, DollarSign, File, Bell, Award, PackageSearch, 
    ShieldCheck, BarChart3, Gavel, ListChecks, BarChart
  } from "lucide-react";
  
export const navItems = [
    { name: "Home", url: "/", icon: <Home size={20} /> },
    {
      name: "Institute",
      icon: <Landmark size={18} />,
      url: "#",
      dropdown: [
        {
          name: "About",
          url: "#",
          icon: <BookOpen size={18} />,
          dropdown: [
            {
              name: "About Institute",
              url: "/Institute/?tab=about",
              icon: <Scroll size={18} />,
            },
            {
              name: "Vision & Mission",
              url: "/Institute/?tab=mission",
              icon: <FileText size={18} />,
            },
            {
              name: "Infrastructure",
              url: "/Institute/?tab=campus",
              icon: <Building size={18} />,
            },
          ],
        },
        {
          name: "NIT Status & Acts",
          url: "/Others/NITAct",
          icon: <Scroll size={18} />,
        },
        {
          name: "Reports",
          url: "#",
          icon: <FilePlus size={18} />,
          dropdown: [
            {
              name: "Annual Reports",
              url: "/Others/Report",
              icon: <FileText size={18} />,
            },
            {
              name: "NIRF",
              url: "/Others/NIRF",
              icon: <Briefcase size={18} />,
            },
          ],
        },
        {
          name: "Magazine",
          url: "/Institute/Magazine",
          icon: <Newspaper size={18} />,
        },
        {
          name: "PAN/GST",
          url: "https://drive.google.com/file/d/1Njk4q-iZudKaNHgZ7eYprCfaFKd1BroC/view?usp=sharing",
          icon: <FileText size={18} />,
        },
      ],
    },{
      name: "Academics",
      url: "#",
      icon: <BookOpen size={18} />,
      dropdown: [
        {
          name: "Departments",
          url: "/Department",
          icon: <Building size={18} />,
          dropdown: [
            { name: "Applied Physics and Materials Engineering", url: "/Department/Phy", icon: <Atom size={18} /> },
            { name: "Architecture & Planning", url: "/Department/Archi", icon: <Landmark size={18} /> },
            { name: "Chemical Science and Technology", url: "/Department/Chem", icon: <FlaskConical size={18} /> },
            { name: "Civil Engineering", url: "/Department/CE", icon: <HardHat size={18} /> },
            { name: "Computer Science and Engineering", url: "/Department/CSE", icon: <Code size={18} /> },
            { name: "Electrical Engineering", url: "/Department/EE", icon: <Zap size={18} /> },
            { name: "Electronics and Communication Engineering", url: "/Department/ECE", icon: <Radio size={18} /> },
            { name: "Humanities & Social Sciences", url: "/Department/Humanities", icon: <Globe size={18} /> },
            { name: "Mathematics and Computing Technology", url: "/Department/Math", icon: <Sigma size={18} /> },
            { name: "Mechanical Engineering", url: "/Department/ME", icon: <Settings size={18} /> },
            { name: "Mechatronics and Automation Engineering", url: "/Department/Mechatronics", icon: <Cpu size={18} /> }
          ]
        },
        { name: "Intranet Portal", url: "/Academic/Intranet", icon: <Network size={18} /> },
        { name: "Programmes", url: "/Course", icon: <Server size={18} /> },
        { name: "Academic Calendar", url: "/Academic/Calender", icon: <CalendarDays size={18} /> },
        { name: "Rules and Regulation", url: "/Academic/Curriculam", icon: <ClipboardList size={18} /> },
        { name: "Fee Structure", url: "/Academic/Fee", icon: <DollarSign size={18} /> },
        {
          name: "Admission",
          url: "/Academic/Admission?tab=JoSAA",
          icon: <UserCheck size={18} />,
          dropdown: [
            { name: "Study in India (SII)", url: "/Academic/Admission?tab=SII", icon: <UserCheck size={18} /> },
            { name: "CMCT/JoSSA/CSAB/Others", url: "/Academic/Admission?tab=JoSAA", icon: <UserCheck size={18} /> }
          ]
        },
        { name: "Format of Official Documents", url: "/Academic/Format", icon: <FileText size={18} /> },
        { name: "Academic Notices", url: "/Notices/Academic", icon: <Bell size={18} /> },
        {
          name: "Centre of Excellence",
          url: "#",
          icon: <Award size={18} />,
          dropdown: [
            { name: "TSSC", url: "/Academic/ISRO", icon: <PackageSearch size={18} /> },
            { name: "ISRO RACS", url: "/Academic/TSSC", icon: <PackageSearch size={18} /> }
          ]
        },
        { name: "Patents", url: "/Academic/Patent", icon: <ShieldCheck size={18} /> },
        { name: "Publications", url: "/Academic/Publication", icon: <File size={18} /> },
        { name: "BIS Dashboard", url: "/Academic/BIS", icon: <BarChart3 size={18} /> }
      ]
    },{
      name: "Administration",
      url: "#", // Ensure the main menu has a URL
      mlabel: "Administration",
      icon: <Users size={18} />,
      dropdown: [
        {
          name: "Visitor",
          url: "/Administration/Visitor",
          icon: <User size={18} />,
        },
        {
          name: "NITs Councils",
          url: "/Administration/NITs_Councils",
          icon: <Users size={18} />,
        },
        {
          name: "Board of Governors",
          url: "/Administration/Board_of_Governers",
          icon: <Landmark size={18} />,
        },
        {
          name: "Senate",
          url: "/Administration/Senate",
          icon: <Gavel size={18} />,
        },
        {
          name: "Director",
          url: "/Administration/Director",
          icon: <Briefcase size={18} />,
        },
        {
          name: "Registrar",
          url: "/Administration/Registrar",
          icon: <User size={18} />,
        },
        {
          name: "Deans",
          url: "/Administration/Deans",
          icon: <Users size={18} />,
        },
        {
          name: "HoD",
          url: "/Administration/HOD",
          icon: <User size={18} />,
        },
        {
          name: "Chief Proctor",
          url: "/Administration/Proctorial_Board/chief-proctor",
          icon: <ShieldCheck size={18} />,
        },
        {
          name: "Proctorial Board",
          url: "/Administration/Proctorial_Board",
          icon: <ShieldCheck size={18} />,
        },
        {
          name: "Chief Vigilance Officer",
          url: "/Administration/CVO",
          icon: <ShieldCheck size={18} />,
        },
        {
          name: "Service Unit Heads",
          url: "/Administration/SUH",
          icon: <User size={18} />,
        },
        {
          name: "Finance Committee",
          url: "/Administration/FinanceCommittee",
          icon: <FileText size={18} />,
        },
        {
          name: "Building Work Committee",
          url: "/Administration/BWC",
          icon: <FilePlus size={18} />,
        },
        {
          name: "Committees",
          url: "#",
          icon: <Network size={18} />,
          dropdown: [
            {
              name: "Institute Disciplinary Committee",
              url: "/Administration/IDC",
              icon: <ListChecks size={18} />,
            },
          ],
        },
        {
          name: "Minutes of Meeting",
          url: "/Others/BOG",
          icon: <ClipboardList size={18} />,
        },
        {
          name: "Organization Chart",
          url: "https://drive.google.com/file/d/1-rCS5RsPydppIQKOYVM8qNYK8y4tUTMZ/view?usp=sharing",
          icon: <BarChart size={18} />,
        },
      ],
    },
    {
      name: "Faculty & Staff",
      icon: <Users size={18} />,
      url: "/Academic/Faculty&Staff",
      dropdown: [
        {
          name: "Faculty Directory",
          url: "/Academic/Faculty&Staff/AllFaculty",
          icon: <Users size={18} />,
        },
        {
          name: "Officers Directory",
          url: "/Academic/Faculty&Staff/AllOfficers",
          icon: <UserCheck size={18} />,
        },
        {
          name: "Staff Directory",
          url: "/Academic/Faculty&Staff/Others",
          icon: <UserCircle size={18} />,
        },
        {
          name: "Admin Portal",
          url: "https://admin.nitp.ac.in/",
          icon: <Shield size={18} />,
        },
        {
          name: "Faculty Academic Portal",
          url: "http://exam.nitp.ac.in",
          icon: <Briefcase size={18} />,
        },
        {
          name: "Staff Claim Form",
          url: "/Academic/Faculty&Staff/forms",
          icon: <FileText size={18} />,
        },
        {
          name: "Holidays/Restricted Holidays",
          url: "https://drive.google.com/file/d/1qL_eR9y5y4uTz0dR0_woqFSv3sQNUhwD/view?usp=sharing",
          icon: <Calendar size={18} />,
        },
      ],
    },
    {
      name: "Students",
      icon: <Briefcase size={20} />,
      url: "/students",
      dropdown: [
        { name: "Hostel & Mess", url: "/Facilities/Hostel", icon: <Hostel size={20} /> },
        { name: "Scholarship", url: "/Student/Scholarship", icon: <Scholarship size={20} /> },
        { name: "Clubs/Socities", url: "/Student/Clubs", icon: <Clubs size={20} /> },
        { name: "Anti Ragging", url: "/Student/AntiRagging", icon: <Notice size={20} /> },
        { name: "Fee Payment", url: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466", icon: <Fee size={20} /> },
        { name: "Women Cell", url: "/Facilities/WomanCell", icon: <Women size={20} /> },
        { name: "SC/ST Cell", url: "/Facilities/SCST", icon: <SCST size={20} /> },
        { name: "Student Activity Center", url: "/Student/SAC", icon: <Sac size={20} /> },
        { name: "Tech Fest", url: "/Student/TechFest", icon: <Fest size={20} /> },
        { name: "NSS@NITP", url: "/Student/NSS", icon: <NSS size={20} /> },
        { name: "E-Cell", url: "/Student/E-Cell", icon: <Ecell size={20} /> },
        { name: "Unnat Bharat", url: "/Student/UnnatBharat", icon: <Bharat size={20} /> },
        { name: "Student Academic Portal", url: "http://exam.nitp.ac.in:9001/default.aspx?ReturnUrl=%2f", icon: <Chankaya size={20} /> },
      ],
    },
    {
      name: "Facilities",
      icon: <Code size={20} />,
      url: "/facilities",
      dropdown: [
        { name: "Computer Center", url: "/Facilities/ComputerCenter", icon: <ComputerCentre size={20} /> },
        { name: "Health Center", url: "/Facilities/MedicalFacilities", icon: <Hospital size={20} /> },
        { name: "Sports Facilities", url: "/Facilities/SportsFacilities", icon: <Sports size={20} /> },
        { name: "Library", url: "/Facilities/Library", icon: <Library size={20} /> },
        { name: "Bank", url: "/Facilities/Bank", icon: <Bank size={20} /> },
        { name: "EMU", url: "/Facilities/Emu", icon: <EMU size={20} /> },
        { name: "ESU", url: "/Facilities/Esu", icon: <ESU size={20} /> },
        { name: "Laboratories", url: "/Facilities/Laboratories", icon: <Labs size={20} /> },
      ],
    },
  ];