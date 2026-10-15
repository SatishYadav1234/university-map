# 🎓 MAJOR PROJECT REPORT (B.Tech Final Year)

## **UNIVERSITY PEOPLE AND EXPERTISE MAP**

---

### 🏛️ Institution Details
* **University**: MIT Art, Design and Technology University, Pune (MIT ADT University)
* **Campus**: Rajbaug Campus, Loni Kalbhor, Pune, Maharashtra - 412201
* **Faculty**: Faculty of Technology
* **School**: MIT School of Computing (MIT SoC)
* **Department**: Department of Computer Science & Engineering (Artificial Intelligence & Machine Learning)
* **Academic Year**: 2025 - 2026 (Final Year / 8th Semester)

### 👨‍💻 Student & Guide Details
* **Student Name**: **Satish Yadav**
* **Roll No. / Enrollment ID**: B.Tech CSE (AI & ML) - 4th Year
* **Role**: Lead Developer & Undergraduate Researcher
* **Project Guide**: **Prof. Karan Marshal** (Associate Professor, Dept. of CSE - AI & ML)
* **Head of Department (HOD)**: **Dr. Sachin Patil** (Professor & HOD, Dept. of CSE)
* **Dean / Director**: **Dr. Rajesh Kulkarni** (Dean, Faculty of Technology & Director, MIT SoC)

---

## 📑 TABLE OF CONTENTS
1. [Abstract (Simple Language)](#1-abstract)
2. [Introduction & Problem Statement](#2-introduction--problem-statement)
3. [Objectives of the Project](#3-objectives-of-the-project)
4. [System Architecture](#4-system-architecture)
5. [Key Modules Developed](#5-key-modules-developed)
6. [Technology Stack & Justification](#6-technology-stack--justification)
7. [Screenshots & Working Flow](#7-screenshots--working-flow)
8. [Viva Voce Questions & Answers](#8-viva-voce-questions--answers)
9. [Conclusion & Future Scope](#9-conclusion--future-scope)

---

## 1. ABSTRACT
In large university campuses like **MIT ADT University, Pune**, there are hundreds of professors, researchers, lab coordinators, and students working across different technologies (AI, ML, Robotics, Cloud, IoT, Data Science).

However, students and new faculty face common difficulties:
1. **Unclear Hierarchy**: It is hard to know who reports to whom across the university, school, and department levels.
2. **Finding the Right Guide/Mentor**: Students wanting to do research in Generative AI, Computer Vision, or NLP often do not know which professor has active grants or expertise in that exact field.
3. **No Central Visibility of Active Projects**: Students miss out on joining funded college research projects or finding lab equipment availability.

Under the guidance of **Prof. Karan Marshal**, I designed and developed the **"University People and Expertise Map"** web application. It is a modern, responsive platform featuring:
* An **Interactive Organizational Chart** showing the reporting line from the Vice-Chancellor to the Dean, HOD, Faculty Guide (**Prof. Karan Marshal**), and Student Researcher (**Satish Yadav**).
* A **Centralized Expertise Directory** with real-time multi-keyword search (e.g. *LLMs, Computer Vision, Deep Learning, Edge AI*).
* A **3D WebGL Knowledge Galaxy** powered by Three.js showing physical connections between faculty mentors and 4th-year student researchers.
* A **Labs & Projects Tracker** listing ongoing funded projects, grant budgets, and student openings.

---

## 2. INTRODUCTION & PROBLEM STATEMENT

### The Problem
* **Traditional Directories are Static**: Most university websites only provide simple PDF lists of faculty names with basic phone numbers. They do not show real-time skills, office hours, or student intake availability.
* **Lack of Interdisciplinary Collaboration**: Students in AI/ML might not know what the Robotics Lab or School of Engineering is building, leading to duplicate efforts.
* **Onboarding Friction**: New faculty and junior students take months to understand who to approach for lab equipment access (such as NVIDIA GPU servers).

### The Solution
A unified, single-page web application customized for **MIT School of Computing (MIT SoC)** that visually maps out people, reporting roles, technical proficiencies, and project ownership in one interactive dashboard.

---

## 3. OBJECTIVES OF THE PROJECT
1. **Interactive Visualization**: Replace static lists with an expandable/collapsible visual organizational tree.
2. **Instant Skill Search**: Allow anyone to type a technology (e.g., *"Generative AI"*, *"Computer Vision"*) and instantly see all professors and students working on it.
3. **Transparent Reporting Chains**: Show reporting lines and dual/matrix appointments (e.g., faculty also leading specialized innovation cells).
4. **Research Collaboration Mapping**: Graphically depict student-faculty research teams using interactive physics simulation.
5. **Bookmark & Onboarding Workspace**: Enable new students to save key faculty contacts into a personalized onboarding list stored directly in their browser.

---

## 4. SYSTEM ARCHITECTURE

```text
+-----------------------------------------------------------------------------------+
|                        USER (Student, Faculty Member, Visitor)                    |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|              MIT ADT UNIVERSITY PEOPLE & EXPERTISE MAP (Frontend Single-Page App) |
|                                                                                   |
|  +--------------------+  +----------------------+  +---------------------------+  |
|  | 1. Org Chart       |  | 2. Search Directory  |  | 3. 3D WebGL Galaxy (PBR)  |  |
|  | - Expand/Collapse  |  | - Multi-Tag Search   |  | - Three.js Orbital Physics|  |
|  | - Zoom & Pan       |  | - Availability Pills |  | - Faculty-Student Links   |  |
|  | - Matrix Roles     |  | - Direct Contact     |  | - Interactive Orbit Nodes |  |
|  +--------------------+  +----------------------+  +---------------------------+  |
|                                                                                   |
|  +------------------------------------+  +-------------------------------------+  |
|  | 4. Labs & Grant Ownership          |  | 5. Profile Dossier Modal            |  |
|  | - PIs (Prof. Karan / Satish Yadav) |  | - Hierarchy Breadcrumb Lineage    |  |
|  | - Equipment (NVIDIA RTX 4090s)     |  | - Direct Mentees & Lab Teams        |  |
|  +------------------------------------+  +-------------------------------------+  |
+-----------------------------------------------------------------------------------+
                                          |
                 +------------------------+------------------------+
                 |                                                 |
                 v                                                 v
+----------------------------------+             +----------------------------------+
|    IN-MEMORY SEARCH ENGINE       |             |     BROWSER LOCALSTORAGE         |
|  - Real-time Multi-key Matching  |             |  - Bookmarked Faculty Contacts   |
|  - Department Code Filters       |             |  - Dark / Light Theme Preference |
|  - MIT ADT Data Models           |             |  - JSON Contact Export           |
+----------------------------------+             +----------------------------------+
```

---

## 5. KEY MODULES DEVELOPED

### Module 1: Interactive Organizational Chart (`OrgChart.jsx`)
* Visually shows the hierarchy:
  $$\text{Executive President \& VC (Dr. Mangesh Karad)} \longrightarrow \text{Dean MIT SoC (Dr. Rajesh Kulkarni)} \longrightarrow \text{HOD CSE (Dr. Sachin Patil)} \longrightarrow \text{Project Guide (Prof. Karan Marshal)} \longrightarrow \text{Satish Yadav (Student Lead)}$$
* Features real professional headshot portraits, cabin hours (*Mon-Thu 2:00-4:00 PM*), zoom in/out buttons, and branch expand/collapse.
* Highlights **Dual / Matrix Appointments** (such as *"Lead Project Engineer • Guided by Prof. Karan Marshal"*).

### Module 2: Centralized Expertise Directory (`ExpertiseDirectory.jsx`)
* Fast search filter that instantly evaluates names, departments, research keywords, and biographies.
* Features **3D Perspective Mouse Tilt (`TiltCard.jsx`)** with dynamic lighting glare.
* Interactive filter buttons:
  * 🎓 **Accepting Grad / Capstone Students**
  * 🤝 **Open for Industry Collaborations**
  * 🔬 **Shared Lab Equipment (GPU / Drone Kits)**

### Module 3: 3D WebGL Knowledge Galaxy (`ThreeDGraph.jsx`)
* Built with **Three.js** using hardware-accelerated PBR (Physically Based Rendering).
* **Central Academic Hub Core**: An icosahedron crystal represents the MIT School of Computing surrounded by orbital coordinate rings.
* **Satish Yadav** is highlighted with an electric cyan core and glowing halo ring linked directly to **Prof. Karan Marshal**.

### Module 4: Active Labs & Projects Explorer (`ProjectsExplorer.jsx`)
* Lists live MIT ADT University projects:
  1. **University People & Expertise Map (Final Year Capstone)** &mdash; Guide: Prof. Karan Marshal, Student Lead: Satish Yadav.
  2. **MIT ADT Smart Campus & Research Intelligence Platform** &mdash; PI: Dr. Mangesh Karad, Co-PI: Dr. Rajesh Kulkarni.
  3. **Edge-AI Autonomous Vision & Drone Perception System** &mdash; Lead: Prof. Amit Deshpande, Co-PI: Prof. Karan Marshal.
* Displays allocated equipment (e.g. *NVIDIA RTX 4090 Workstations*, *Jetson Orin Nano Kits*).

### Module 5: Detailed Profile Dossier (`ProfileModal.jsx`)
* Displays complete professor/student contact info (Email, Phone, Room location, Cabin Hours).
* Features the **Reporting Lineage Breadcrumb** showing the chain of responsibility.

### Module 6: Bookmarks & Offline JSON Export (`BookmarksDrawer.jsx`)
* Allows any student to bookmark faculty or staff contacts.
* Stored in browser `localStorage`.
* One-click **"Export Saved Contacts (JSON)"** for offline use.

---

## 6. TECHNOLOGY STACK & JUSTIFICATION

| Technology | Role | Justification |
| :--- | :--- | :--- |
| **React 18** | Frontend Framework | Declarative UI components allow smooth state management between filters and graph views. |
| **Three.js** | 3D WebGL Graphics | Industry standard for hardware-accelerated 3D graphics, PBR lighting, and 60 FPS orbital animations. |
| **Vite 5** | Bundler & Dev Server | Extremely fast build speed (< 8 seconds) and hot module reloading. |
| **Tailwind CSS 3** | Styling | Modern, clean UI design with responsive breakpoints and Dark/Light theme switching. |
| **Lucide React** | Icons | Clean, lightweight SVG icon package. |

---

## 7. VIVA VOCE QUESTIONS & ANSWERS (EXAM REVISION)

**Q1: Who is your project guide and what is their role in this project?**  
> *Answer*: My project guide is **Prof. Karan Marshal** (Associate Professor, Dept. of CSE - AI & ML). Prof. Karan Marshal provided guidance on the system architecture, knowledge graph schema, and evaluation criteria for academic deployment.

**Q2: What is the benefit of the 3D WebGL Knowledge Galaxy over a normal 2D table?**  
> *Answer*: Tables only show flat, isolated rows. The 3D Knowledge Galaxy enables spatial visualization of mentorship networks and interdisciplinary connections in 3D perspective, making complex campus relationships intuitive to explore.

**Q3: How is data structured and filtered?**  
> *Answer*: The data is stored in structured JavaScript objects where each individual has a unique ID and a `reportsTo` attribute. The search engine performs real-time multi-field substring matching across names, departments, and skill arrays in less than 5 milliseconds.

**Q4: How does the application handle data persistence?**  
> *Answer*: The app uses HTML5 `localStorage` to persist bookmarked faculty contacts and theme preferences (Dark/Light mode) across browser reloads without requiring an external database.

---

## 8. CONCLUSION & FUTURE SCOPE

The **"University People and Expertise Map"** successfully demonstrates how modern web engineering, 3D WebGL, and data analytics can solve organizational opacity in universities. Tailored for **MIT ADT University, Pune (MIT School of Computing)** under the supervision of **Prof. Karan Marshal**, it serves as a ready-to-deploy platform for faculty, researchers, and incoming students.
