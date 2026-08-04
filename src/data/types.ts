export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface ContactData {
  address: string;
  phones: {
    logopeda: string;
    pediatra: string;
  };
  emails: {
    logopeda: string;
    pediatra: string;
  };
  social: {
    facebook: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  phone: string;
  email: string;
  image: string;
  hours: string;
  slug: string;
}
