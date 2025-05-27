# apple-clone
This is a simple clone of Apple's website using Next.js.

## Project Information

-   **Personal Project**
-   **Project**: Apple clone (clone webpage)
-   **Objective**: Cloning and adding more features

---

## Getting Started

### Prerequisites

Ensure you have **NodeJS and pnpm package** installed. Check your versions using:

```sh
node --version
pnpm --version
```

<i>**Note**: **NodeJS 22.14.0** and **pnpm 10.11.0** were used to develop.</i>

### Compile the Project

Use npm to build and start the project:

```sh
pnpm build
```

This will build up the project.

### Run the Program

To start hosting:

```sh
pnpm start
```

---

<!-- ## **📌 📂 Project Structure**

This project follows **NextJS standard structure**:

```
app/
├── api/             # API route handlers
├── ask/             # Ask page
├── contexts/        # React contexts (Cache)
├── home/            # Home page
├── result/          # Result page
├── tests/           # Sample inputs
├── ui/              # Pages' components and shared components
├── utils/           # Utility functions/types
├── globals.css      # Global styles
├── icon.png         # Favicon
├── layout.tsx       # Global layout component
└── page.tsx         # Main page entry
```

<i>**Note**: The main page is redirected to home page</i>

---

## Features

-   🕒 Generate schedule with user' settings
-   🤖 AI chatbot support
-   🏙️ Responsive layout
-   ☀️ Theme dark/light mode toggle

---

## Futher Developments

Class database to find backup classes

---

## App Directory Explanations

### api

```
api/
└── ask/             # Ask route
```

The route is used to post question to gemini-2.0-flash model. The API key is saved in .env  
Each question is structured with some information of the project to give expected answer to client.  
Reason using chatbot is to understand the questions in various prompts.  

### ask

```
ask/
├── page.module.tsx  # Ask page styles
└── page.tsx         # Ask page layout
```

The 'messages': 
- Are saved between pages navigation using contexts.
- Are mapped to show the whole conversation.

### contexts

```
contexts/
├── ChatContext.tsx            # Chatbot messages cache
├── CoursesContext.tsx         # Courses input cache
└── SchedulePriorityContext    # User setting cache
```

The contexts folder is used to save states of the client and wrapped in the global layout.
States are saved between pages navigation.

### home

```
home/
├── page.module.tsx  # Home page styles
└── page.tsx         # Home page layout
```

The home page have some local components: SideBar, TextInputBox
And some global components: Footer, RightBar

### result

```
result/
├── page.module.tsx  # Result page styles
└── page.tsx         # Result page layout
```

The result page have some local components: Generate, PriorityBar, ResultDisplay
And some global components: Footer, RightBar

### ui

```
ui/
├── components        # Global components
│   ├── Footer       
│   ├── NavButton     # Navigation button with image
│   ├── RightBar
│   └── ThemeToggle   # Theme toggle button
├── home              # Home local components
│   ├── SideBar       # Course input display
│   └── TextInputBox  # User input field 
└── result            # Result local components
    ├── Generate      # Generate button
    ├── PriorityBar   # User setting field
    └── ResultDisplay # Schedule display
```

- Footer: Showing info of the team
- NavButton: Resuable image button using Link of NextJS
- RightBar: Access Ask page (Chatbot), watch tutorial, change theme light
- ThemeToggle: Button to change theme dark/light

- SideBar: Show the courses have been read (input) sucessfully, 'courses' is a saved state using CoursesContext
- TextInputBox: User input text field (for pasting) with instruction as placeholder.

- Generate: The generate button to trigger getSchedule in actions and set the result to 'schedule' (a global state in result page to be used in ResultDisplay) using setSchedule.
- PriorityBar: The box of buttons to set priorities for days in week for user.
- ResultDisplay: The table of filled matrix to show the current schedule.

### utils

```
utils/
├── actions.ts       # Functions called by client
├── data.ts          # Functions for processing data
├── hooks.ts         # Hooks for user settings
└── types.ts         # Types for data processing
```

The actions.ts contains:
- addCourse: Transform and save the course from user input to the global states in data.ts (i.e: classes_nonlab, classes_lab,...).
- removeCourse: Remove the course from global states in data.ts.
- getSchedule: Return the schedule as filled matrix.
- getSchedulePriority: Return the formatted priority from raw priority strings.

The data.ts contains:
- formattingInput: Extracts and cleans up individual course registration blocks from a raw input string.
- getClassesList: Parses the formatted data string to extract a list of classes in a standardized string format.
- getClassNonLab: Parses and formats a non-lab class block into a string of (course id, group class code, student count, day of week, time range, room)
- getClassLab: Parses a lab class string and returns a formatted string containing both main and lab class details including day, time, and room.
- parseClassString: Converts a class string (from getClassLab or getClassNonLab) into a structured Class[] object.
- shuffleArray: Randomly shuffles an array. Useful before prioritizing classes to avoid bias from original ordering.
- prioritizeClasses: Sorts classes by preferred times and days using a schedulePriority object that specifies time blocks ranked per weekday.
- getClassesFromCourse: Filters classes by course ID, shuffles them, then prioritizes based on schedule preferences.
- fillClasses: Attempts to fill the schedule grid with one of the available classes, avoiding time conflicts. Modifies the schedule in place.

The hooks.ts contains:
- useSchedulePriority: Separated for cleaner code and used in SchedulePriorityContext

The types.ts contains:
- Class
- SchedulePriority
- SchedulePriorityStrings
- useSchedulePriorityProps

### layout

The global layout includes global components: Footer, RightBar and children.
The 'children' is wrapped with contexts to cache.

### page
Redirect to Home page -->