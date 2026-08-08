
import Image from 'next/image';

interface ServiceItem {
  text: string;
  href?: string;
}

interface LinkItem {
  text: string;
  href: string;
}

interface ContactItem {
  icon: string;
  text: string;
}

interface SocialItem {
  icon: string;
  href: string;
  alt: string;
}

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  servicesTitle: string;
  services: ServiceItem[];
  homeTitle: string;
  homeLinks: LinkItem[];
  helpTitle: string;
  helpLinks: LinkItem[];
  contactsTitle: string;
  contacts: ContactItem[];
  socialTitle: string;
  socialLinks: SocialItem[];
  copyrightText: string;
}

export default function Footer({
  logoSrc,
  logoAlt,
  servicesTitle,
  services,
  homeTitle,
  homeLinks,
  helpTitle,
  helpLinks,
  contactsTitle,
  contacts,
  socialTitle,
  socialLinks,
  copyrightText,
}: FooterProps) {
  
  const footerColumns = [
    { title: servicesTitle, items: services, isLink: false },
    { title: homeTitle, items: homeLinks, isLink: true },
    { title: helpTitle, items: helpLinks, isLink: true },
  ];

  return (
    <footer className="w-full bg-[#333333] text-white pt-10 pb-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
     
        <div className="flex items-center">
          <div className="relative w-[133px] h-[130px]">
            <Image 
              src={logoSrc} 
              alt={logoAlt} 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        <div className="border-t border-white pb-6"></div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          

          {footerColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              <h4 className="font-bold font-[family-name:var(--font-open-sans)] text-white tracking-wider uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3 text-white">
                {col.items.map((item, index) => (
                  <li key={index} className={!col.isLink ? "hover:text-white transition-colors cursor-pointer" : ""}>
                    {col.isLink ? (
                      <a href={(item as LinkItem).href} className="hover:text-gray-200 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

   
          <div className="flex flex-col gap-4">
            <h4 className="font-bold font-[family-name:var(--font-open-sans)] text-white tracking-wider uppercase">{contactsTitle}</h4>
            <ul className="flex flex-col gap-3 text-white">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 relative flex-shrink-0 mt-0.5">
                    <Image src={contact.icon} alt="icon" fill className="object-contain" />
                  </div>
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>

  
          <div className="flex flex-col gap-4">
            <h4 className="font-bold font-[family-name:var(--font-open-sans)] text-white tracking-wider uppercase">{socialTitle}</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label={social.alt}
                >
                  <div className="w-[50px] h-[50px] relative">
                    <Image src={social.icon} alt={social.alt} fill className="object-contain" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

       
        <div className="border-t border-white pt-6 text-center text-white text-[10px] font-[family-name:var(--font-open-sans)]">
          {copyrightText}
        </div>

      </div>
    </footer>
  );
}