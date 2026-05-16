#  NeuroFit - AI Health & Fitness Tracker

Hi! I'm building **NeuroFit**, a full-stack health platform designed to track biometrics, predict health risks, and generate personalized plans using AI.

This project is my **Final Semester Internship Project** for my **BCA (Bachelor of Computer Applications)** graduation. I'm focusing on building a production-ready application that follows industry-standard workflows.

---

##  What it does (Current Progress)
I’m currently in the middle of development, focusing on a "Human-First" UI experience:

* **Human Blueprint UI:** Instead of standard tables, I’ve used a "Skeleton/Blueprint" style UI to map user health data visually.
* **Health Bio-Profile:** Users can log and manage their height, weight, age, and medical history.
* **Secure Authentication:** Integrated **NextAuth.js** to ensure user data and sessions remain private.
* **Scalable Database:** Using **Prisma ORM** with **PostgreSQL (Neon)** to handle complex user schemas and health reports.

---

##  Tech Stack
I chose these modern tools to ensure the app is fast, secure, and scalable:

**Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
**Animation:** Framer Motion (for smooth UI transitions)
**Backend:** Next.js API Routes (Serverless)
**Database:** PostgreSQL (Cloud-hosted on **Neon**)
**ORM:** Prisma
**Security:** NextAuth.js

---

##  Roadmap (What’s coming next?)
I am tracking my progress using **GitHub Issues** and **Projects**. Here’s what’s on my to-do list:

**AI Insights:** Using OpenAI to analyze data and predict health risks.
**Medication & Vaccine Tracker:** Reminders for daily meds and important appointments.
**Health Trend Charts:** Visualizing BMI and weight changes over time.
**Personalized Diet Plans:** AI-generated routines based on specific user goals.

---

##  How to Run Locally

1. **Clone the repository:**
  git clone [https://github.com/Deepali-cell/neurofit-platform.git]

Install dependencies:
Bash
npm install
Setup Environment Variables:
Create a .env file and add your DATABASE_URL (Neon), NEXTAUTH_SECRET

Run the app:
npm run dev


🎓 Academic Context & Workflow
Since this is my final year project, I am following professional developer practices:

Branching Strategy: Every feature (like Bio-Profile or Auth) is built on a separate feature/ branch before being merged.

Task Management: I use the GitHub Projects board to manage my workflow (Todo, In Progress, Done).

Clean Code: Focused on TypeScript for type-safety and reusable components.

Built with mind by a BCA Final Year Student.

