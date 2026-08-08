export interface NavItem {
  label: string;
  href: string;
}


export interface NavbarProps {
  logoSrc: string;
  navLinks: NavItem[];
  login:string ;
  signup:string;
  logoarrow:string
}
export interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string;
  children?: React.ReactNode; // لتمرير شريط البحث أو الزر بحسب الصفحة
}
export interface SearchProps
{
  publ:string;
  priv:string;
  logobottom:string;
  search:string
}
export interface CommonCardProps {
  image: string;
  title: string;
  price?: string;
  priceUnit?: string;
  description?: string;
  schedule?: string;
  groupSize?: string;
  buttonText?: string;
  onBook?: () => void;
  imageHeight?: string; // للتحكم بارتفاع الصورة حسب القسم
  cardHeight?: string;
 
}

 export const popularTours = [
  {
    image: '/assets/rectangle1-1.png',
    title: 'Lucca Bike Tour',
    price: '34 €',
    schedule: 'EVERY DAY',
    groupSize: '3-10 PP',
    description: 'A tour of the city and its surroundings led by a professional guide ...'
  },
  {
    image: '/assets/rectangle1-2.png',
    title: 'Wine tasting In Tuscany',
    price: '34 €',
    schedule: 'MONDAY',
    groupSize: '10-30 PP',
    description: 'The real magic is here where you can enjoy the best Tuscan wine and eat ...'
  },
  {
    image: '/assets/rectangle1-3.png',
    title: 'Cinque Terre Tour',
    price: '34 €',
    schedule: 'TO BE DECIDED',
    groupSize: '10-50 PP',
    description: 'Visiting the 5 Terre is a must, and you can never go there enough ...'
  },
  {
    image: '/assets/rectangle1-4.png',
    title: 'Siena and Surroundings',
    price: '34 €',
    schedule: 'TO BE DECIDED',
    groupSize: '3-10 PP',
    description: 'Visit the beautiful Siena and the cities that surround it to experience...'
  }
];
 export interface ExploreProps{
  title:string
}
 export interface StatItem {
  number: string;
  label: string;
}

 export interface AboutCompanySectionProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: string;
  imageHeight?: string;
  isCustomShape?: boolean; // لتحديد ما إذا كانت صورة الهوم (دبوس خريطة) أو صورة عادية للأبوت
  topTitle: string;
  mainTitle: string;
  description: string;
  stats: StatItem[];
}

 export interface SpecialOffersSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}
 export const bookNowData = {
    sectionTitle: "Book Now Bike",
    submitButtonText: "Book Now",
    bikeImageSrc: "/assets/bike.png",
    fields: [
      { 
        id: 'name', 
        label: 'Name and Surname', 
        type: 'text' as const, 
        placeholder: 'Enter your name and surname' 
      },
      { 
        id: 'email', 
        label: 'Email Address', 
        type: 'email' as const, 
        placeholder: 'Enter your email address' 
      },
      { 
        id: 'phone', 
        label: 'Telephone Number', 
        type: 'tel' as const, 
        placeholder: 'Enter your telephone number' 
      },
      { 
        id: 'service', 
        label: 'Service Type', 
        type: 'select' as const, 
        options: ['Select the service types', 'Bike and rickshaw rental', 'Guided tour'] 
      },
      { 
        id: 'date', 
        label: 'Date', 
        type: 'text' as const, 
        placeholder: 'Select the date', 
        icon: '/assets/date.png' 
      },
      { 
        id: 'time', 
        label: 'Time', 
        type: 'text' as const, 
        placeholder: 'Select the time', 
        icon: '/assets/time.png' 
      },
    ],
  };

   export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  icon?: string;
  options?: string[];
}

 export interface BookNowSectionProps {
  sectionTitle: string;
  submitButtonText: string;
  bikeImageSrc: string;
  fields: FormField[];
}

 export interface FieldConfig {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

 export interface LoginModalProps {
  isOpen: boolean;
  logosign: string;
  googleIconSrc: string;
  eyeIconSrc: string;
  title: string;
  fields: FieldConfig[];
  forgotPasswordText: string;
  submitButtonText: string;
  googleButtonText: string;
  signupPromptText: string;
  signupButtonText: string;
  onClose: () => void;
  onSwitchToSignup: () => void;
}
 export interface PackageFeature {
  icon: string;
  text: string;
}

 export interface PackageCardProps {
  title: string;
  price: string | number;
  image: string;
  features: PackageFeature[];
  onBook?: () => void;
}