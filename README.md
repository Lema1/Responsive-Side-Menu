# Responsive Side-Menu

Creacion de un menu responsive con diseño Mobile First.

## Tech Stack

**Client:** React, Next Js, Sass, Font Awesome

## Screenshots

Vista Mobile
![Mobile](https://github.com/Lema1/Responsive-Side-Menu/blob/main/public/screenshot/mobile.png?raw=true)

Vista Tablet
![Tablet](https://github.com/Lema1/Responsive-Side-Menu/blob/main/public/screenshot/tablet.png?raw=true)

Vista Desktop
![Desktop](https://github.com/Lema1/Responsive-Side-Menu/blob/main/public/screenshot/desktop.png?raw=true)
![Desktop-1](https://github.com/Lema1/Responsive-Side-Menu/blob/main/public/screenshot/desktop-1.png?raw=true)

## Installation

Instalar proyecto con npm

En primer lugar, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

## Usage/Examples

Array con los datos del menu

```javascript
"SidebarData.js";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "circle",
    prefix: "fas",
  },
  {
    title: "Menu 1",
    icon: "circle",
    prefix: "fas",
    path: "#!",
    submenu: [
      {
        title: "SubMenu 1",
        path: "/menu1/submenu1",
        icon: "circle",
        prefix: "fas",
      },
      {
        title: "SubMenu 2",
        path: "/menu1/submenu2",
        icon: "circle",
        prefix: "fas",
      },
    ],
  },
  {
    title: "Menu 2",
    path: "/menu2",
    icon: "circle",
    prefix: "fas",
  },
];
```

## Color Reference

| Color              | Hex                                                              |
| ------------------ | ---------------------------------------------------------------- |
| Primary Color      | ![#691ae7](https://via.placeholder.com/10/691ae7?text=+) #0a192f |
| Secondary Color    | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #f8f8f8 |
| Third Color        | ![#000000](https://via.placeholder.com/10/000000?text=+) #00b48a |
| Fourth Color       | ![#e6e8e9](https://via.placeholder.com/10/e6e8e9?text=+) #00d1a0 |
| Dark Primary Color | ![#5016af](https://via.placeholder.com/10/5016af?text=+) #00d1a0 |
