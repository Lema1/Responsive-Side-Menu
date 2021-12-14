export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: "tachometer-alt",
    prefix: "fas",
  },
  {
    title: "Productos",
    icon: "boxes",
    prefix: "fas",
    path: "#!",
    submenu: [
      {
        title: "Productos",
        path: "/products/products",
        icon: "boxes",
        prefix: "fas",
      },
      {
        title: "Inventario",
        path: "/products/inventory",
        icon: "warehouse",
        prefix: "fas",
      },
      {
        title: "Categorias",
        path: "/products/categorys",
        icon: "list-alt",
        prefix: "fas",
      },
      {
        title: "Marcas",
        path: "/products/brands",
        icon: "tag",
        prefix: "fas",
      },
    ],
  },
  {
    title: "Ventas",
    icon: "sellsy",
    prefix: "fab",
    path: "#!",
    submenu: [
      {
        title: "Ventas",
        path: "/sells/sells",
      },
      {
        title: "Envios",
        path: "/sells/shipping",
      },
      {
        title: "Formas de Pago",
        path: "/sells/payment",
      },
      {
        title: "Cupones",
        path: "/sells/coupons",
      },
    ],
  },
  {
    title: "Clientes",
    path: "/clients",
    icon: "users",
    prefix: "fas",
  },
  {
    title: "Imagenes",
    path: "/images",
    icon: "image",
    prefix: "fas",
  },
  {
    title: "Contactos",
    icon: "location-arrow",
    prefix: "fas",
    path: "#!",
    submenu: [
      {
        title: "Email",
        path: "/contacts/emails",
      },
      {
        title: "Telefono",
        path: "/contacts/phones",
      },
      {
        title: "Social",
        path: "/contacts/socials",
      },
    ],
  },
  {
    title: "Secciones",
    path: "/sections",
    icon: "grip-lines",
    prefix: "fas",
  },
];
