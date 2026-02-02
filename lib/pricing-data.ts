export const usStates = [
  { name: "Kentucky", fee: 40 },
  { name: "Arkansas", fee: 45 },
  { name: "Arizona", fee: 50 },
  { name: "Colorado", fee: 50 },
  { name: "Hawaii", fee: 50 },
  { name: "Iowa", fee: 50 },
  { name: "Michigan", fee: 50 },
  { name: "Mississippi", fee: 50 },
  { name: "Missouri", fee: 50 },
  { name: "New Mexico", fee: 50 },
  { name: "Utah", fee: 54 },
  { name: "California", fee: 70 },
  { name: "Montana", fee: 70 },
  { name: "Ohio", fee: 99 },
  { name: "Georgia", fee: 100 },
  { name: "Idaho", fee: 100 },
  { name: "Indiana", fee: 100 },
  { name: "Louisiana", fee: 100 },
  { name: "Maryland", fee: 100 },
  { name: "Nebraska", fee: 100 },
  { name: "New Hampshire", fee: 100 },
  { name: "Oklahoma", fee: 100 },
  { name: "Oregon", fee: 100 },
  { name: "Virginia", fee: 100 },
  { name: "West Virginia", fee: 100 },
  { name: "Wyoming", fee: 100 },
  { name: "Connecticut", fee: 120 },
  { name: "Florida", fee: 125 },
  { name: "New Jersey", fee: 125 },
  { name: "North Carolina", fee: 125 },
  { name: "Pennsylvania", fee: 125 },
  { name: "Vermont", fee: 125 },
  { name: "Wisconsin", fee: 130 },
  { name: "North Dakota", fee: 135 },
  { name: "Illinois", fee: 150 },
  { name: "Rhode Island", fee: 150 },
  { name: "South Dakota", fee: 150 },
  { name: "Minnesota", fee: 155 },
  { name: "Kansas", fee: 160 },
  { name: "Maine", fee: 175 },
  { name: "Alabama", fee: 200 },
  { name: "New York", fee: 200 },
  { name: "Washington", fee: 200 },
  { name: "Alaska", fee: 250 },
  { name: "Tennessee", fee: 300 },
  { name: "Texas", fee: 300 },
  { name: "Nevada", fee: 425 },
  { name: "Massachusetts", fee: 500 },
  { name: "Delaware", fee: 110 },
  { name: "South Carolina", fee: 110 },
];

export const packages = [
  { 
    name: "Starter", 
    price: 299, 
    description: "Basic LLC formation",
    features: [
      "LLC Formation",
      "Articles of Organization",
      "Name Availability Check",
      "Digital Document Delivery",
      "Email Support"
    ]
  },
  { 
    name: "Growth", 
    price: 499, 
    description: "LLC + EIN + Banking setup",
    features: [
      "Everything in Starter",
      "EIN Application",
      "US Bank Account Setup",
      "Operating Agreement",
      "Priority Support"
    ],
    popular: true
  },
  { 
    name: "Scale", 
    price: 799, 
    description: "Full package + ITIN + Tax filing",
    features: [
      "Everything in Growth",
      "ITIN Application",
      "Annual Report Filing",
      "Registered Agent (1 Year)",
      "Dedicated Account Manager"
    ]
  }
];

export const addons = [
  { id: "expedited", name: "Expedited Filing", price: 50 },
  { id: "operating-agreement", name: "Operating Agreement", price: 100 },
  { id: "registered-agent", name: "Registered Agent (1 year)", price: 100 },
  { id: "ein", name: "EIN Application", price: 50 },
  { id: "itin", name: "ITIN Application", price: 150 },
  { id: "bank-account", name: "US Bank Account Setup", price: 100 },
];

export const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana",
  "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
  "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

export function getStateFee(stateName: string): number {
  const state = usStates.find(s => s.name === stateName);
  return state?.fee || 100;
}

export function getPackagePrice(packageName: string): number {
  const pkg = packages.find(p => p.name === packageName);
  return pkg?.price || 299;
}

export function calculateTotal(
  packageName: string, 
  stateName: string, 
  selectedAddons: string[]
): { packagePrice: number; stateFee: number; addonsPrice: number; total: number } {
  const packagePrice = getPackagePrice(packageName);
  const stateFee = getStateFee(stateName);
  const addonsPrice = selectedAddons.reduce((sum, addonId) => {
    const addon = addons.find(a => a.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);
  
  return {
    packagePrice,
    stateFee,
    addonsPrice,
    total: packagePrice + stateFee + addonsPrice
  };
}
