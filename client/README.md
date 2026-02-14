# Sayone — Client (Hotel & Restaurant Website)

## Page-wise structure

The site is split into clear pages for a comfortable, easy-to-navigate UI.

| Route    | Page        | Content                                      |
|----------|-------------|----------------------------------------------|
| `/`      | Home        | Hero + quick links to all sections           |
| `/rooms` | Rooms       | AC & Non-AC rooms                            |
| `/food`  | Food        | Restaurant info + link to order              |
| `/safari`| Safari Yala | Safari cab & tours                           |
| `/river` | Kirindi River | River bathing & visit arrangement          |
| `/order` | Order Food  | Delivery form (name, phone, address, notes) |

Every page shares the same **Navbar** and **Footer** via the root layout.

## File structure

```
client/
├── app/
│   ├── globals.css
│   ├── layout.tsx          # Navbar + {children} + Footer
│   ├── page.tsx            # Home: hero + quick links
│   ├── rooms/page.tsx
│   ├── food/page.tsx
│   ├── safari/page.tsx
│   ├── river/page.tsx
│   └── order/page.tsx      # Delivery form (address, phone, etc.)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Page links, active state, mobile menu
│   │   ├── Footer.tsx
│   │   ├── PageHero.tsx    # Reusable page banner (title + subtitle)
│   │   └── index.ts
│   ├── sections/          # (Legacy; content moved to pages)
│   └── ui/
│       ├── button.tsx
│       └── PrimaryButton.tsx
├── lib/
│   └── utils.ts
└── package.json
```

## Run

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production build

## Order page (UI only)

The **Order** page includes a delivery form with:

- Your name, phone
- Street / building / room no., area/city, landmark
- Delivery notes
- “Place order” submits to a success state (no backend yet).

Backend and admin can be added later.
