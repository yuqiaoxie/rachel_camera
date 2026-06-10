# Rachel Camera Website

A simple MVP photography booking website for natural travel portrait photography.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel deployment
- No database in the first version

## Included in This MVP

- Homepage
- Photo gallery page
- Pricing section
- Booking request form
- Contact section
- Reusable React components
- Placeholder image assets
- English website copy with service available in English and Chinese

## Project Structure

```txt
rachel-camera-website/
  app/
    gallery/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    BookingForm.tsx
    Contact.tsx
    Footer.tsx
    GalleryGrid.tsx
    GallerySection.tsx
    Header.tsx
    Hero.tsx
    Pricing.tsx
    SectionHeading.tsx
  data/
    site.ts
  public/
    images/
  README.md
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site:

```txt
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to Vercel and create a new project.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Click Deploy.

No environment variables are needed for this first version.

## Next Improvements

- Connect the booking form to email.
- Add Supabase for saved booking requests.
- Add an admin dashboard.
- Replace placeholder images with final portfolio photos.
- Add payment deposit support.
