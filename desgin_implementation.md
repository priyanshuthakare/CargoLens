
## 1. GLOBAL DESIGN SYSTEM

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Main page background, deep dark |
| `--bg-secondary` | `#12121a` | Card backgrounds, elevated surfaces |
| `--bg-glass` | `rgba(255, 255, 255, 0.03)` | Glassmorphism panels |
| `--bg-glass-border` | `rgba(255, 255, 255, 0.08)` | Glass card borders |
| `--accent-gradient-start` | `#6366f1` | Indigo/Blue gradient start |
| `--accent-gradient-end` | `#ec4899` | Pink gradient end |
| `--accent-purple` | `#8b5cf6` | Primary action buttons, active states |
| `--accent-purple-hover` | `#7c3aed` | Button hover states |
| `--text-primary` | `#ffffff` | Headlines, primary text |
| `--text-secondary` | `rgba(255, 255, 255, 0.6)` | Subtitles, descriptions |
| `--text-muted` | `rgba(255, 255, 255, 0.4)` | Labels, placeholders |
| `--success` | `#10b981` | Checked states, completed items |
| `--card-bg` | `#1a1a24` | Solid card backgrounds |
| `--card-border` | `rgba(255, 255, 255, 0.06)` | Subtle card borders |

### Typography
| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| H1 (Hero) | Inter/System | 700 (Bold) | 56px / 3.5rem | 1.1 | -0.02em |
| H2 (Section) | Inter/System | 700 (Bold) | 40px / 2.5rem | 1.2 | -0.01em |
| H3 (Card Title) | Inter/System | 600 (Semibold) | 20px / 1.25rem | 1.3 | 0 |
| Body | Inter/System | 400 (Regular) | 16px / 1rem | 1.6 | 0 |
| Body Small | Inter/System | 400 (Regular) | 14px / 0.875rem | 1.5 | 0 |
| Caption | Inter/System | 500 (Medium) | 12px / 0.75rem | 1.4 | 0.01em |
| Nav Link | Inter/System | 500 (Medium) | 14px / 0.875rem | 1 | 0 |
| Button | Inter/System | 600 (Semibold) | 14px / 0.875rem | 1 | 0 |
| Price | Inter/System | 700 (Bold) | 32px / 2rem | 1.2 | -0.02em |

### Spacing Scale
| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

### Effects & Shadows
```css
/* Primary CTA Gradient */
background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);

/* Glassmorphism Card */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 24px;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

/* Inner Card (Dashboard panels) */
background: #1a1a24;
border: 1px solid rgba(255, 255, 255, 0.06);
border-radius: 16px;

/* Glow Effect behind dashboard */
background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);

/* Button Shadow (CTA) */
box-shadow: 0 10px 40px -10px rgba(236, 72, 153, 0.4);

/* Pricing Card Highlight */
border: 1px solid rgba(99, 102, 241, 0.3);
background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(26, 26, 36, 0.8) 100%);
```

### Border Radius
| Token | Value |
|-------|-------|
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 16px |
| `--radius-xl` | 24px |
| `--radius-full` | 9999px |

---

## 2. NAVIGATION BAR (Header)

### Layout
- **Position**: Fixed top, full width, z-index: 50
- **Height**: 64px
- **Padding**: 0 24px (mobile), 0 48px (desktop)
- **Background**: Transparent (blends with hero gradient)
- **Layout**: Flexbox, justify-content: space-between, align-items: center

### Left Section: Brand Logo
- **Icon**: Custom "Cargolens" (square with rounded corners, checkmark inside)
- **Text**: "Cargolengs" in lowercase, font-weight: 700, color: white, font-size: 20px
- **Gap between icon and text**: 8px
- **Hover**: opacity: 0.8 transition

### Center Section: Navigation Links
- **Items**: Solutions, Resources, Download (with dropdown chevron), Pricing
- **Gap between items**: 32px
- **Style**: color: rgba(255,255,255,0.7), font-size: 14px, font-weight: 500
- **Hover**: color: white, transition: 200ms ease
- **Active**: color: white
- **Dropdown**: ChevronDown icon, 16px, rotates 180deg on open

### Right Section: CTA Button
- **Text**: "Get Started"
- **Style**: background: #1a1a24, color: white, border: 1px solid rgba(255,255,255,0.1)
- **Padding**: 10px 20px
- **Border Radius**: 9999px (full)
- **Font**: 14px, weight: 600
- **Hover**: background: rgba(255,255,255,0.1), border-color: rgba(255,255,255,0.2)

---

## 3. HERO SECTION

### Background
- **Base**: `#0a0a0f` solid dark
- **Gradient Overlay**: Radial gradient from bottom-center
  - `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99, 102, 241, 0.2) 0%, transparent 60%)`
  - Secondary pink glow: `radial-gradient(ellipse 60% 40% at 70% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`
- **Light Rays**: Subtle angled light beams from bottom-left to top-right, very low opacity (0.03), creating aurora-like effect

### Layout
- **Padding Top**: 120px (below navbar)
- **Padding Bottom**: 80px
- **Text Alignment**: Center
- **Max Width**: 800px for text content, centered

### Content Structure

#### Headline (H1)
- **Text**: "The Go-To Hub for All Your To-Dos"
- **Font Size**: 56px (desktop), 36px (mobile)
- **Font Weight**: 700
- **Color**: White
- **Line Height**: 1.1
- **Letter Spacing**: -0.02em
- **Text Shadow**: subtle 0 4px 30px rgba(0,0,0,0.3)

#### Subtitle
- **Text**: "Your essential tool for streamlining task management and achieving greater efficiency in your daily routine."
- **Font Size**: 18px
- **Font Weight**: 400
- **Color**: rgba(255,255,255,0.6)
- **Max Width**: 560px
- **Margin Top**: 24px
- **Line Height**: 1.6

#### CTA Button (Primary)
- **Text**: "Start now - its free!"
- **Background**: linear-gradient(135deg, #6366f1 0%, #ec4899 100%)
- **Padding**: 16px 32px
- **Border Radius**: 9999px
- **Font Size**: 16px
- **Font Weight**: 600
- **Color**: White
- **Margin Top**: 40px
- **Box Shadow**: 0 10px 40px -10px rgba(236, 72, 153, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)
- **Hover**: transform: translateY(-2px), box-shadow intensity increases
- **Active**: transform: translateY(0)

---

## 4. DASHBOARD PREVIEW SECTION (Hero Visual)

### Container
- **Position**: Relative, centered below CTA
- **Margin Top**: 64px
- **Max Width**: 1000px
- **Perspective**: 1000px (for 3D tilt effect)

### Outer Glass Frame
- **Background**: rgba(255, 255, 255, 0.03)
- **Backdrop Filter**: blur(20px)
- **Border**: 1px solid rgba(255, 255, 255, 0.08)
- **Border Radius**: 24px
- **Padding**: 24px
- **Box Shadow**: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)
- **Inner Glow**: Subtle top highlight border

### Inner Layout (3-Column Grid)
- **Display**: Grid
- **Columns**: 280px 1fr 320px (Left | Center | Right)
- **Gap**: 16px
- **Background inside**: Slightly darker tint or transparent

---

### LEFT PANEL (Sidebar Navigation)

#### Container
- **Background**: #1a1a24
- **Border**: 1px solid rgba(255,255,255,0.06)
- **Border Radius**: 16px
- **Padding**: 20px
- **Height**: 100%

#### User Profile Header
- **Avatar**: 32px circle, placeholder with initials or image
- **Name**: "Mason Mark" - font-weight: 600, 14px, white
- **Dropdown Chevron**: 16px, rgba(255,255,255,0.5)
- **Notification Bell**: Icon right-aligned, 20px, rgba(255,255,255,0.5)
- **Layout**: Flex, space-between, align-center
- **Margin Bottom**: 16px

#### Add Task Button
- **Text**: "Add Task +"
- **Background**: #8b5cf6 (purple)
- **Color**: White
- **Width**: 100%
- **Padding**: 10px 16px
- **Border Radius**: 8px
- **Font Size**: 13px
- **Font Weight**: 600
- **Margin Bottom**: 20px
- **Hover**: background: #7c3aed

#### Navigation Groups

**Primary Nav:**
- **Inbox**: Inbox icon (20px), text "Inbox", color: rgba(255,255,255,0.7)
- **Today**: Calendar icon, text "Today"
- **Filters & Labels**: Filter icon, text "Filters & Labels"
- **Gap**: 4px between items
- **Item Padding**: 8px 12px
- **Border Radius**: 6px
- **Hover**: background: rgba(255,255,255,0.05)
- **Active**: background: rgba(255,255,255,0.08), color: white

**Section: "Personal Projects"**
- **Label**: "Personal Projects" - 11px, uppercase, letter-spacing: 0.05em, color: rgba(255,255,255,0.4), font-weight: 600
- **Margin**: 20px 0 8px 0
- **Items**:
  - Fitness (dumbbell icon)
  - Groceries (shopping bag icon)
  - Appointments (calendar icon)
- **Each Item**: Icon (16px, muted) + Text (14px, rgba(255,255,255,0.6)), padding: 6px 12px

**Section: "Team Projects"**
- **Label**: "Team Projects" - same style as Personal Projects
- **Items**:
  - Meeting Agenda (circle/check icon)
  - Panze web design & dev... (circle/check icon) - **Active/Selected**: subtle highlight
  - Product Roadmap (circle/check icon)
  - Product Management (circle/check icon)
  - Marketing Analysis (circle/check icon)
- **Checkbox Style**: Empty circle outline, 16px, border: 1.5px solid rgba(255,255,255,0.3)

---

### CENTER PANEL (Task Detail)

#### Container
- **Background**: #1a1a24
- **Border**: 1px solid rgba(255,255,255,0.06)
- **Border Radius**: 16px
- **Padding**: 24px

#### Project Header
- **Avatar Group**: 4 overlapping circular avatars (32px each, -8px margin-left overlap, border: 2px solid #1a1a24)
- **Title**: "Panze web design & development" - font-size: 20px, font-weight: 700, white
- **Margin Top**: 16px

#### Description
- **Text**: "Hi Team, Here's a detailed summary of our current progress on the Panze web design and development project. Please take a look and add any additional notes or details that could be useful for our next steps."
- **Font Size**: 13px
- **Color**: rgba(255,255,255,0.5)
- **Line Height**: 1.5
- **Margin Top**: 8px

#### Design Phase Section
- **Label**: "Design Phase:" - font-size: 14px, font-weight: 700, white, margin-top: 24px
- **Items** (each with checkbox + text):
  1. **Wireframe Creation** - Checked (filled purple checkbox with white checkmark)
     - Checkbox: 18px, background: #8b5cf6, border-radius: 4px, checkmark icon white
     - Text: 13px, rgba(255,255,255,0.6), strikethrough or muted
  2. **Mockup Design** - Checked (same style)
  3. **Design Review and Approval** - Unchecked
     - Checkbox: 18px, border: 1.5px solid rgba(255,255,255,0.3), border-radius: 4px
     - Text: 13px, rgba(255,255,255,0.7)
  4. **Asset Development** - Unchecked (same as above)
- **Item Padding**: 8px 0
- **Gap**: 4px

#### Development Phase Section
- **Label**: "Development Phase:" - same style as Design Phase
- **Items** (all unchecked):
  1. Front-End Development
  2. Back-End Development
  3. Content Integration
  4. Testing and QA
  5. Final Review and Launch
- **Checkbox Style**: Same empty square style as unchecked Design Phase items
- **Text Style**: 13px, rgba(255,255,255,0.7)

---

### RIGHT PANEL (Features & Sharing)

#### Container
- **Background**: #1a1a24
- **Border**: 1px solid rgba(255,255,255,0.06)
- **Border Radius**: 16px
- **Padding**: 20px
- **Display**: Flex, flex-direction: column, gap: 20px

#### AI Prompt Card
- **Header**: "Make your task easier" - font-weight: 600, 14px, white + Sparkles/AI icon (16px, purple gradient)
- **Content Box**:
  - Background: rgba(255,255,255,0.03)
  - Border: 1px solid rgba(255,255,255,0.06)
  - Border Radius: 12px
  - Padding: 12px
  - Margin Top: 12px
- **Text inside**: "Write your #Prompt in your language"
  - Font Size: 12px
  - Color: rgba(255,255,255,0.5)
- **Example Text**: "I need a 3-day honeymoon itinerary for Paris. Please include romantic spots, must-see landmarks, afternoon dining options, and relaxing activities for a memorable trip."
  - Font Size: 11px
  - Color: rgba(255,255,255,0.4)
  - Line Height: 1.4
  - Margin Top: 8px

#### Connected Apps Section
- **Header**: "Connected with your favorite apps" - font-weight: 600, 14px, white
- **Icon Grid**: 5 icons in a row
  - Icons: Google (colorful), Figma (purple/pink), Slack (blue), GitHub (white), Notion (white)
  - Size: 28px each
  - Gap: 12px
  - Container: display flex, gap 12px, margin-top 12px
  - Each icon has subtle hover: scale(1.1)

#### Share Task Section
- **Header**: "Share your task" - font-weight: 600, 14px, white
- **Subtext**: "Invite people by name or email" - 12px, rgba(255,255,255,0.4)
- **Input Area**:
  - Background: rgba(255,255,255,0.03)
  - Border: 1px solid rgba(255,255,255,0.08)
  - Border Radius: 8px
  - Padding: 8px 12px
  - Margin Top: 12px
  - Layout: Flex, space-between
  - Placeholder text: "Invite people by name or email" (same as subtext)
  - Button inside input: "Invite" - background: #8b5cf6, color: white, padding: 4px 12px, border-radius: 6px, font-size: 12px, font-weight: 600

#### Invited Users List
- **Margin Top**: 12px
- **Items** (3 users):
  1. **Simon** - simon@myemail.com - Avatar (28px circle) + Name (13px, white) + Email (11px, rgba(255,255,255,0.4)) + Role badge "Can edit" (dropdown, 11px, rgba(255,255,255,0.5))
  2. **Mark** - mark@myemail.com - Same layout + Role badge "Owner" (11px, #8b5cf6)
  3. **Rafael** - rafael@myemail.com - Same layout + Role badge "Can View" (dropdown)
- **Each Item**: Flex, align-center, gap 12px, padding: 8px 0
- **Separator**: 1px border-bottom: rgba(255,255,255,0.04) between items

---

### METRIX LABEL (Below Dashboard)
- **Text**: "METRIX"
- **Position**: Centered below dashboard preview
- **Margin Top**: 32px
- **Style**: 11px, uppercase, letter-spacing: 0.1em, color: rgba(255,255,255,0.3)
- **Decoration**: Small dot or diamond before text, or enclosed in subtle pill shape with border: 1px solid rgba(255,255,255,0.1), padding: 4px 12px, border-radius: 9999px

---

## 5. PERFORMANCE INSIGHTS SECTION (Partial/Transition)
- **Heading**: "Performance Insights for" (cut off in image)
- **Font Size**: 40px
- **Font Weight**: 700
- **Color**: White
- **Background**: Continues dark theme
- **Margin Top**: 80px

---

## 6. AI-POWERED TASK AUTOMATION SECTION

### Layout
- **Padding**: 80px 24px
- **Max Width**: 1200px, centered
- **Display**: Grid or Flex, two columns (Text left, Visual right)

### Left Content
- **Eyebrow/Label**: None visible, or subtle
- **Heading**: "Introducing our AI-Powered Task Automation"
  - Font Size: 32px
  - Font Weight: 700
  - Color: White
  - Max Width: 400px
- **Description**: "Automate repetitive tasks, set smart reminders, and let AI prioritize your workload. Focus on what matters while we handle the routine."
  - Font Size: 16px
  - Color: rgba(255,255,255,0.6)
  - Line Height: 1.6
  - Margin Top: 16px
  - Max Width: 400px

### Right Content (Automation UI Card)
- **Container**:
  - Background: #1a1a24
  - Border: 1px solid rgba(255,255,255,0.06)
  - Border Radius: 16px
  - Padding: 20px
  - Width: 400px
- **Content**: Shows automation rule interface
  - Trigger conditions: "When task is moved to 'Done'"
  - Action: "Then notify team in Slack"
  - Visual: Toggle switches, dropdown selectors
  - Toggle: Background when on: #8b5cf6, knob: white, 20px width

---

## 7. TESTIMONIAL SECTION

### Layout
- **Padding**: 80px 24px
- **Background**: Slightly different shade or same dark with subtle gradient shift
- **Max Width**: 1000px, centered

### Section Header
- **Eyebrow**: "TESTIMONIAL" - 11px, uppercase, letter-spacing: 0.1em, color: #8b5cf6, font-weight: 600
- **Heading**: "How Our Users Enhance Their Productivity"
  - Font Size: 40px
  - Font Weight: 700
  - Color: White
  - Max Width: 500px

### Testimonial Card
- **Layout**: Centered or left-aligned with quote
- **Quote Icon**: Large quotation mark, 48px, color: #8b5cf6, opacity: 0.5
- **Quote Text**: "This app has completely transformed how I manage my tasks. With its smart reminders and automated workflows, I'm accomplishing more in less time. It's been a game-changer for my productivity."
  - Font Size: 20px
  - Font Weight**: 500
  - Color: rgba(255,255,255,0.9)
  - Line Height: 1.5
  - Font Style: Italic or normal with quote decoration
- **Author**:
  - Name: "Emma Johnson" - 14px, font-weight: 600, white
  - Title/Role: "Product Designer" or similar - 13px, rgba(255,255,255,0.5)
  - Avatar: 40px circle, left of text
  - Layout: Flex, align-center, gap 12px, margin-top 24px
- **Navigation Dots**: Below testimonial, 3 dots, 8px each, active: #8b5cf6, inactive: rgba(255,255,255,0.2), gap: 8px

---

## 8. PRICING SECTION

### Layout
- **Padding**: 80px 24px
- **Max Width**: 1100px, centered
- **Text Align**: Center

### Section Header
- **Eyebrow**: "PRICING" - 11px, uppercase, letter-spacing: 0.1em, color: rgba(255,255,255,0.4), font-weight: 600, centered
- **Heading**: "Unlock Your Endless Possibilities"
  - Font Size: 40px
  - Font Weight: 700
  - Color: White
  - Margin Top: 12px

### Pricing Cards Container
- **Display**: Grid, 3 columns
- **Gap**: 24px
- **Margin Top**: 48px

### Card Base Styles (All Plans)
- **Background**: #1a1a24
- **Border**: 1px solid rgba(255,255,255,0.06)
- **Border Radius**: 24px
- **Padding**: 32px
- **Width**: 100%
- **Display**: Flex, flex-direction: column

### Basic Plan Card
- **Name**: "Basic Plan" - 14px, font-weight: 600, rgba(255,255,255,0.7), centered
- **Price**: "$15/month" - 32px, font-weight: 700, white, centered, margin-top: 8px
  - Dollar sign: 20px, aligned top
  - "/month": 14px, rgba(255,255,255,0.5)
- **Divider**: 1px solid rgba(255,255,255,0.06), margin: 24px 0
- **Features List**:
  - List and calendar views
  - 5 active projects
  - Up to 3 team members
  - Basic reporting and analytics
  - Email support
- **Feature Item Style**: Check icon (16px, rgba(255,255,255,0.5)) + Text (14px, rgba(255,255,255,0.7)), gap: 12px, padding: 8px 0
- **Button**: "Get Started"
  - Width: 100%
  - Padding: 12px
  - Background: transparent
  - Border: 1px solid rgba(255,255,255,0.15)
  - Color: white
  - Border Radius: 9999px
  - Font Weight: 600
  - Margin Top: auto (pushes to bottom)
  - Hover: background: rgba(255,255,255,0.05)

### Pro Plan Card (Featured/Highlighted)
- **Border**: 1px solid rgba(99, 102, 241, 0.3)
- **Background**: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(26, 26, 36, 0.8) 100%)
- **Name**: "Pro Plan" - 14px, font-weight: 600, #8b5cf6 (purple), centered
- **Price**: "$35/month" - same style as Basic but with subtle glow
- **Badge**: "POPULAR" or similar - small pill above card, background: #8b5cf6, color: white, font-size: 10px, padding: 4px 12px, border-radius: 9999px, positioned absolute top -12px, centered
- **Features**:
  - All Basic Plan features
  - List, calendar, and Kanban views
  - 10 active projects
  - Priority email and chat support
  - Integrations with third-party tools
- **Button**: "Get Started"
  - Background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%)
  - Color: white
  - Box Shadow: 0 8px 30px -8px rgba(236, 72, 153, 0.4)
  - Same sizing as Basic button
  - Hover: transform: translateY(-2px), brightness increase

### Enterprise Plan Card
- **Name**: "Enterprise Plan" - 14px, font-weight: 600, rgba(255,255,255,0.7), centered
- **Price**: "$50/month" - same style
- **Features**:
  - All Pro Plan features
  - Unlimited active projects
  - Unlimited team members
  - Custom workflows
  - AI-powered task automation
- **Button**: Same style as Basic Plan (outline)

---

## 9. INTEGRATIONS SECTION

### Layout
- **Padding**: 80px 24px
- **Max Width**: 1000px, centered
- **Display**: Flex, align-items: center, gap: 48px

### Left Side: Integration Icons Grid
- **Display**: Grid, 2x2 or scattered layout
- **Icons**: 
  - Zapier (orange/red "Z")
  - Slack (colorful hash)
  - GitHub (cat silhouette)
  - Google Drive (triangle colors)
  - Figma (F logo)
  - Notion (N logo)
- **Size**: 48px each
- **Style**: Each icon in a rounded square container (56px), background: rgba(255,255,255,0.03), border: 1px solid rgba(255,255,255,0.06), border-radius: 16px
- **Gap**: 16px

### Right Side: Content
- **Heading**: "Seamless Integration with All Tools"
  - Font Size: 32px
  - Font Weight: 700
  - Color: White
- **Description**: "Connect with your favorite apps and streamline your workflow without switching platforms."
  - Font Size: 16px
  - Color: rgba(255,255,255,0.6)
  - Margin Top: 12px
  - Max Width: 400px

---

## 10. FINAL CTA SECTION

### Layout
- **Padding**: 100px 24px
- **Text Align**: Center
- **Background**: Subtle gradient shift or same dark

### Content
- **Heading**: "Master Your Workflow"
  - Font Size: 40px
  - Font Weight: 700
  - Color: White
- **Subtitle**: "Take charge and effortlessly manage tasks to keep you on track."
  - Font Size: 18px
  - Color: rgba(255,255,255,0.6)
  - Margin Top: 16px
- **CTA Button**: "Start now - its free!"
  - Same style as Hero CTA button
  - Margin Top: 32px

---

## 11. FOOTER

### Layout
- **Padding**: 48px 24px 24px
- **Border Top**: 1px solid rgba(255,255,255,0.06)
- **Max Width**: 1200px, centered
- **Background**: #0a0a0f or slightly lighter #0f0f16

### Top Row
- **Display**: Flex, justify-content: space-between, align-items: start
- **Left**: Logo (same as navbar) + Copyright
  - "All rights reserved © CargoLens 2026" - 13px, rgba(255,255,255,0.4)
  - Margin Top: 12px
- **Right**: Link Columns (3 columns)
  - **Column 1 - Company**:
    - Label: "Company" - 13px, font-weight: 600, white, margin-bottom: 16px
    - Links: Updates, Careers, About
  - **Column 2 - Legal**:
    - Label: "Legal"
    - Links: Privacy Policy, Terms of Service
  - **Column 3 - Social**:
    - Label: "Social"
    - Links: Discord, LinkedIn, Twitter/X
- **Link Style**: 14px, rgba(255,255,255,0.5), hover: white, transition: 200ms
- **Column Gap**: 48px

---

## COMPREHENSIVE COMPONENT PROMPT

### Prompt for AI Code Generation:

```
The design must strictly follow these specifications:

THEME & ATMOSPHERE:
- Dark premium theme with deep black background (#0a0a0f)
- Purple-to-pink gradient accents (#6366f1 to #ec4899)
- Glassmorphism effects throughout
- Subtle aurora/light-ray background effects at low opacity
- Modern, clean, SaaS aesthetic

GLOBAL REQUIREMENTS:
- Use Inter font family
- All text must use the specified color tokens
- Smooth transitions (200-300ms ease) on all interactive elements
- Responsive design (mobile-first, breakpoints at 768px and 1024px)
- Maximum content width: 1280px centered

COMPONENT 1 - NAVIGATION BAR:
Fixed header, height 64px, transparent background. Left: CargoLens logo (checkbox icon + "CargoLens" text in bold white). Center: Nav links (Solutions, Resources, Download with chevron dropdown, Pricing) in muted white, 14px medium weight, 32px gap. Right: "Get Started" button with dark bg (#1a1a24), white text, 1px subtle border, fully rounded, 14px semibold. Hover states for all links.

COMPONENT 2 - HERO SECTION:
Full width, padding-top 120px. Background: solid #0a0a0f with radial gradient overlays (indigo glow from bottom center, pink glow from bottom right). Subtle light ray effects at 3% opacity crossing diagonally.

Centered text content (max-width 800px):
- H1: "The Go-To Hub for All Your To-Dos" - 56px bold white, tight line height (1.1), slight text shadow
- Subtitle: "Your essential tool for streamlining task management and achieving greater efficiency in your daily routine." - 18px, rgba(255,255,255,0.6), max-width 560px
- CTA: "Start now - its free!" - gradient button (indigo to pink), 16px semibold, white text, fully rounded, padding 16px 32px, shadow with pink glow. Hover: translateY(-2px), intensified shadow

COMPONENT 3 - DASHBOARD PREVIEW (3D Glassmorphism):
Centered below hero, max-width 1000px, margin-top 64px. Outer container: glassmorphism (backdrop-blur-xl, bg-white/3, border white/8, rounded-3xl, padding 24px, heavy shadow). CSS perspective: 1000px for subtle 3D presentation.

Inner 3-column grid (280px | 1fr | 320px, gap 16px):

LEFT PANEL (Sidebar):
- Solid dark card (#1a1a24, rounded-2xl, border white/6, padding 20px)
- User header: avatar (32px circle) + "Mason Mark" (14px semibold) + bell icon (right aligned)
- "Add Task +" button: full width, purple (#8b5cf6), white text, rounded-lg, 13px semibold
- Nav groups with icons: Inbox, Today, Filters & Labels (each with hover bg white/5, active bg white/8)
- "Personal Projects" section label (11px uppercase muted)
- Items: Fitness, Groceries, Appointments (16px icons + 14px muted text)
- "Team Projects" section with checkbox-style items (empty circle outline 16px)

CENTER PANEL (Task Detail):
- Same card styling
- Avatar group: 4 overlapping 32px circles (-8px overlap margin, border 2px dark)
- Title: "Panze web design & development" (20px bold)
- Description paragraph (13px, muted, line-height 1.5)
- "Design Phase:" label (14px bold, margin-top 24px)
- Checklist items with custom checkboxes:
  * Checked: filled purple (#8b5cf6) square (18px) with white checkmark, text muted/strikethrough
  * Unchecked: empty square outline (1.5px border white/30, 18px), text white/70
  * Items: Wireframe Creation (checked), Mockup Design (checked), Design Review and Approval (unchecked), Asset Development (unchecked)
- "Development Phase:" label with 5 unchecked items (Front-End, Back-End, Content Integration, Testing and QA, Final Review and Launch)

RIGHT PANEL (Features):
- Same card styling, flex column gap 20px
- "Make your task easier" header (14px semibold + sparkle icon)
- AI prompt box: bg white/3, border white/6, rounded-xl, padding 12px
  * "Write your #Prompt in your language" (12px muted)
  * Example itinerary text (11px, very muted, line-height 1.4)
- "Connected with your favorite apps" (14px semibold)
- Icon row: Google, Figma, Slack, GitHub, Notion (28px icons, gap 12px, hover scale)
- "Share your task" section with invite input (dark bg, border, rounded-lg, flex with "Invite" purple button inside)
- User list: 3 rows with 28px avatar + name (13px) + email (11px muted) + role badge (dropdown or colored text). Roles: Simon (Can edit), Mark (Owner - purple), Rafael (Can View)

Below dashboard: "METRIX" label - 11px uppercase, very muted, centered, in subtle pill border.

COMPONENT 4 - AI AUTOMATION SECTION:
Two-column layout (text left, visual right), padding 80px, max-width 1200px.
- Left: "Introducing our AI-Powered Task Automation" (32px bold) + description (16px muted, max-width 400px)
- Right: Automation rule card (#1a1a24, rounded-2xl, border, padding 20px, width 400px). Shows trigger/action UI with purple toggle switches and dropdown selectors.

COMPONENT 5 - TESTIMONIAL SECTION:
Padding 80px, max-width 1000px centered.
- Eyebrow: "TESTIMONIAL" (11px uppercase, purple #8b5cf6, semibold)
- Heading: "How Our Users Enhance Their Productivity" (40px bold)
- Large quote with purple quotation mark decoration (48px, opacity 50%)
- Quote text: "This app has completely transformed how I manage my tasks..." (20px, medium weight, white/90, line-height 1.5)
- Author: Emma Johnson, 40px avatar + name (14px semibold) + role (13px muted)
- Pagination dots: 3 dots, 8px, active purple, inactive white/20

COMPONENT 6 - PRICING SECTION:
Centered, padding 80px, max-width 1100px.
- Eyebrow: "PRICING" (11px uppercase, muted, centered)
- Heading: "Unlock Your Endless Possibilities" (40px bold, centered)
- 3-column grid, gap 24px, margin-top 48px

Basic Plan ($15/month):
- Card: #1a1a24, border white/6, rounded-3xl, padding 32px
- Name (14px semibold muted), Price (32px bold, dollar sign 20px, /month 14px muted)
- Divider (white/6)
- Features with check icons: List/calendar views, 5 projects, 3 team members, basic analytics, email support
- "Get Started" outline button (full width, rounded-full, border white/15, hover bg white/5)

Pro Plan ($35/month) - FEATURED:
- Same card but with gradient border (indigo/purple at 30% opacity), gradient bg (indigo/10 to dark)
- "POPULAR" badge above card (purple pill, 10px, white text)
- Name in purple, price with subtle glow
- Features: All Basic + Kanban views, 10 projects, priority support, integrations
- "Get Started" gradient button (indigo to pink, shadow, hover translateY(-2px))

Enterprise Plan ($50/month):
- Same as Basic card styling
- Features: All Pro + Unlimited projects, unlimited members, custom workflows, AI automation
- Outline button

COMPONENT 7 - INTEGRATIONS SECTION:
Flex row, padding 80px, max-width 1000px, gap 48px, align-center.
- Left: 2x3 grid of integration icons in rounded square containers (56px, bg white/3, border white/6, rounded-2xl). Icons: Zapier, Slack, GitHub, Drive, Figma, Notion at 48px. Hover: scale(1.05).
- Right: "Seamless Integration with All Tools" (32px bold) + description (16px muted, max-width 400px)

COMPONENT 8 - FINAL CTA:
Centered, padding 100px.
- "Master Your Workflow" (40px bold)
- "Take charge and effortlessly manage tasks to keep you on track." (18px muted)
- Gradient CTA button (same as hero)

COMPONENT 9 - FOOTER:
Padding 48px 24px 24px, border-top white/6, max-width 1200px.
- Top row: space-between
- Left: CargoLens logo + "All rights reserved © CargoLens 2024" (13px muted)
- Right: 3 columns (Company: Updates, Careers, About; Legal: Privacy Policy, Terms of Service; Social: Discord, LinkedIn, Twitter/X)
- Column labels: 13px semibold white, margin-bottom 16px
- Links: 14px white/50, hover white
- Column gap: 48px

ANIMATIONS & INTERACTIONS:
- Page load: staggered fade-in + translateY(20px to 0) for sections
- Dashboard: subtle floating animation (translateY oscillation 10px, 6s ease-in-out infinite)
- Buttons: all have hover states with transitions
- Cards: hover with subtle border brightening
- Glassmorphism: ensure backdrop-filter blur works in all modern browsers

TECHNICAL NOTES:
- Use Tailwind CSS arbitrary values for precise colors and sizes
- Use CSS variables for theme tokens
- Ensure glassmorphism has fallback for Firefox/older browsers
- Icons: use Lucide React or similar (Check, ChevronDown, Bell, Inbox, Calendar, Filter, Sparkles, etc.)
- Images: use placeholders or Unsplash for avatars
```

---

## COMPONENT CODE SNIPPETS

### Glassmorphism Container
```tsx
<div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
  {children}
</div>
```

### Gradient CTA Button
```tsx
<button className="relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(236,72,153,0.6)] active:translate-y-0">
  <span className="relative z-10">Start now - its free!</span>
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />
</button>
```

### Dashboard Panel Card
```tsx
<div className="rounded-2xl border border-white/[0.06] bg-[#1a1a24] p-5">
  {children}
</div>
```

### Custom Checkbox (Checked)
```tsx
<div className="flex items-center gap-3">
  <div className="flex h-[18px] w-[18px] items-center justify-center rounded bg-violet-500">
    <Check className="h-3 w-3 text-white" />
  </div>
  <span className="text-[13px] text-white/60 line-through">Wireframe Creation</span>
</div>
```

### Custom Checkbox (Unchecked)
```tsx
<div className="flex items-center gap-3">
  <div className="h-[18px] w-[18px] rounded border-[1.5px] border-white/30" />
  <span className="text-[13px] text-white/70">Design Review and Approval</span>
</div>
```

### Pricing Card (Featured)
```tsx
<div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-[#1a1a24]/80 p-8">
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
    Popular
  </div>
  {/* Card content */}
</div>
```

### Nav Link
```tsx
<a className="text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white">
  Solutions
</a>
```

### Integration Icon Container
```tsx
<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-transform duration-200 hover:scale-105">
  <Icon className="h-8 w-8" />
</div>
```

---

*End of comprehensive UI analysis and component extraction.*
