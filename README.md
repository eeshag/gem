# GEM Website

A modern, responsive website built for **Girls Empowerment in STEM (GEM)** — a nonprofit dedicated to increasing participation and representation of girls in STEM fields.

---

## Overview

The GEM Website serves as the central hub for:

* Showcasing GEM’s mission and impact
* Highlighting programs and workshops
* Sharing the organization’s journey and growth
* Enabling users to sign up, engage, and stay connected

The platform is designed to be **clean, professional, and accessible**, while maintaining a welcoming and inspiring aesthetic aligned with GEM’s brand.

---

## Core Features

### Home Page

* Overview of GEM’s **mission**
* Key **statistics about girls in STEM**
* Links to:

  * Meet the team
  * Programs & services
  * Timeline
* Email **signup form** for updates and events
* Socials and contact information

---

### About Page

* **Officer Profiles**

  * Name
  * Photo
  * Bio
* **Our Story**

  * Background on how GEM was founded
  * Vision and growth

---

### Timeline Page

* Chronological display of:

  * Events
  * Workshops
  * Milestones
* Highlights GEM’s evolution and impact over time

---

### Programs / Workshops Pages

* Individual pages for each program
* **Registration form** for participants
* Automated workflow:

  * User submits form
  * GEM receives an email notification
  * Registration data is stored in database

---

### Contact Page

* Organization email (Gmail)
* Instagram link
* Call-to-action encouraging users to:

  * Reach out
  * Follow GEM’s journey

---

## Design & UI

* Primary color palette:

  * `#ad88c6`
  * `#dfccfb`
* Clean, modern layout
* Fully responsive design:

  * **Desktop:** Top navigation bar
  * **Mobile:** Expandable sidebar menu
* Logo positioned in top corner:

  * Clicking returns user to homepage

---

## Tech Stack

* **Frontend:** Vite + React
* **Deployment:** Vercel
* **Backend / Database:** Supabase
* **APIs:** Gmail API (for notifications)
* **Development Tools:** Cursor

---

## Architecture Overview

* **Frontend**

  * Component-based React structure
  * Pages routed via client-side routing
* **Database (Supabase)**

  * Stores:

    * Email signups
    * Workshop registrations
* **Email System**

  * Gmail API used to:

    * Send notifications on new registrations
    * Enable communication workflows

---

## Key Functional Flows

### Email Signup

1. User enters email on homepage
2. Email stored in Supabase
3. Used for future outreach and updates

---

### Workshop Registration

1. User fills out form
2. Data sent to backend
3. Stored in Supabase
4. Gmail API triggers notification email to GEM

---

## Goals

* Increase awareness of STEM opportunities for girls
* Provide easy access to GEM programs
* Build a strong, engaged community
* Showcase credibility and growth of the organization

---

## Future Improvements

* Admin dashboard for managing registrations
* Automated email campaigns
* Analytics on user engagement
* Blog / content section
* Event calendar integration

---

## Deployment

The website is deployed using **Vercel** for fast, scalable hosting.

### Frontend Environment Variable

To connect the frontend to the deployed backend, set:

- `VITE_API_BASE_URL=https://gem-backend-sepia.vercel.app`

You can copy `.env.example` to `.env` for local development.

---

## Contributing

If you’d like to contribute:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## Contact

* Email: info@norcalrobotics.org
* Instagram: @norcalroboticsgem

Follow along and support GEM’s mission to empower the next generation of women in STEM 🚀

---
