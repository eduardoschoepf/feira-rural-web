export const categories = [
  { id: "hortalicas", name: "Hortaliças", icon: "🥬" },
  { id: "frutas", name: "Frutas", icon: "🍎" },
  { id: "laticinios", name: "Laticínios", icon: "🥛" },
  { id: "ovos", name: "Ovos", icon: "🥚" },
  { id: "mel", name: "Mel e Derivados", icon: "🍯" },
  { id: "graos", name: "Grãos", icon: "🌾" }
];

export const mockProducts = [
  {
    id: "1",
    name: "Tomate Orgânico",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?w=400",
    category: "Hortaliças",
    producer: {
      id: "prod1",
      name: "Sítio Verde",
      location: "Zona Rural - São Paulo"
    },
    unit: "kg",
    description: "Tomates orgânicos cultivados sem agrotóxicos, colhidos na hora certa para garantir sabor e frescor.",
    stock: 25
  },
  {
    id: "2",
    name: "Mel Silvestre",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400",
    category: "Mel e Derivados",
    producer: {
      id: "prod2",
      name: "Apiário Dourado",
      location: "Serra da Mantiqueira - MG"
    },
    unit: "pote 500g",
    description: "Mel puro extraído de flores silvestres da Serra da Mantiqueira. Rico em nutrientes e sabor único.",
    stock: 12
  },
  {
    id: "3",
    name: "Ovos Caipira",
    price: 12.00,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
    category: "Ovos",
    producer: {
      id: "prod3",
      name: "Granja Feliz",
      location: "Interior - SP"
    },
    unit: "dúzia",
    description: "Ovos de galinhas criadas soltas, alimentadas com ração natural. Gema alaranjada e sabor incomparável.",
    stock: 30
  },
  {
    id: "4",
    name: "Alface Americana",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400",
    category: "Hortaliças",
    producer: {
      id: "prod1",
      name: "Sítio Verde",
      location: "Zona Rural - São Paulo"
    },
    unit: "unidade",
    description: "Alface americana fresca, crocante e saborosa. Cultivada com técnicas sustentáveis.",
    stock: 40
  },
  {
    id: "5",
    name: "Banana Prata",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400",
    category: "Frutas",
    producer: {
      id: "prod4",
      name: "Fazenda Tropical",
      location: "Vale do Ribeira - SP"
    },
    unit: "kg",
    description: "Banana prata doce e nutritiva, cultivada em ambiente tropical ideal para a fruta.",
    stock: 50
  },
  {
    id: "6",
    name: "Queijo Minas Frescal",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",
    category: "Laticínios",
    producer: {
      id: "prod5",
      name: "Laticínios da Serra",
      location: "Serra da Canastra - MG"
    },
    unit: "peça 500g",
    description: "Queijo minas frescal artesanal, feito com leite de vacas criadas a pasto na Serra da Canastra.",
    stock: 8
  }
];

export const mockProducers = [
  {
    id: "prod1",
    name: "Sítio Verde",
    location: "Zona Rural - São Paulo",
    description: "Produzimos hortaliças orgânicas há mais de 15 anos, sempre priorizando a qualidade e sustentabilidade.",
    phone: "(11) 98765-4321",
    email: "contato@sitioverde.com",
    avatar: "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?w=100",
    products: ["1", "4"]
  },
  {
    id: "prod2",
    name: "Apiário Dourado",
    location: "Serra da Mantiqueira - MG",
    description: "Especialistas em apicultura, produzindo mel puro e derivados com técnicas tradicionais.",
    phone: "(35) 99123-4567",
    email: "mel@apiariodourado.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    products: ["2"]
  },
  {
    id: "prod3",
    name: "Granja Feliz",
    location: "Interior - SP",
    description: "Criamos galinhas caipiras em ambiente livre e natural, garantindo ovos de alta qualidade.",
    phone: "(19) 97654-3210",
    email: "ovos@granjafeliz.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    products: ["3"]
  }
];

export const mockUsers = [
  {
    id: "1",
    name: "João Silva",
    email: "joao@sitioverde.com",
    type: "producer",
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria@email.com",
    type: "consumer",
    createdAt: "2024-02-20"
  },
  {
    id: "3",
    name: "Pedro Oliveira",
    email: "pedro@apiario.com",
    type: "producer",
    createdAt: "2024-01-30"
  }
];