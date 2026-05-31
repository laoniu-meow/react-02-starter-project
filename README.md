# Create Starter Project
This topic focuses on creating a blank starter project using Vite + React + JavaScript. Instead of cloning a ready-made project, you will follow step-by-step instructions to build your own setup, understand the default project structure, customize it, and run the development server. Finally, you will commit your starter project to GitHub for future reuse

## Topic

[x] [Create a new Starter Project](create-a-new-starter-project)

## Create a new Starter Project
Create a new blank starter project. As introduced in react-01-get-start, this exercise encourages you to repeat the setup steps to build confidence. Some guided steps are included to reduce common errors, along with troubleshooting notes to support your learning. Over time, this will help strengthen your problem-solving skills.
Using commands is highly recommended to improve your understanding and confidence with the Command Line Interface (CLI)

### For Windows user only
1. Open your VS Code editor. If it is not connected to the WSL environment, you can use several methods to establish the connection
- In VS Code, open the terminal panel by clicking on it or pressing Ctrl + , then run the following command: wsl
- Second method: Press Ctrl + Shift + P, type “WSL: Connect to WSL”, and press Enter
- Third method: Navigate to the bottom-left corner of the VS Code window, click “Open a Remote Window”, and select “Connect to WSL"
- Alternative method (Windows Terminal users) - Open Windows Terminal, run:

```bash
wsl
code .
```

2. Create project in a recommended directory
If you are a Linux user, managing and organizing directories is likely familiar to you. However, for Windows users using the WSL environment, we strongly recommend avoiding creating projects within the WSL-mounted Windows filesystem (e.g., /mnt/c, /mnt/d)

Many developers avoid working directly inside WSL-mounted Windows filesystem because of performace and compatiblility issues.

Commmon reason: 
- Slower file operations
- File permission differences
- File watching issues
- Git line-ending problems

> Note: This reflects my learning journey, where I encountered various issues that led to unexpected errors. Some frameworks or dependencies were not set up properly, making it difficult to manage and navigate my project files
>
> If you organize your projects properly in the recommended directory, you’ll find that the CLI becomes very convenient and powerful to use

```bash
# 1. navigate to /home or /home/<user-directory> is recommended
cd /home                # or
cd /home/laoniu         # laoniu - is my user directory

# 2. Create a new directory, E.g.: practice_react
# Take notes that in Linux environment is case sensitive
# In Windows GUI, normally we want to create a folder nest in root/ main folder
# Commonly, we preform this process right click -> Create folder -> Input name ->
# double click navigate to root/ main folder -> .......
# In Linux command line interface (CLI), I just need to execute this commmand
mkdir -p /home/laoniu/practice_react        # E.g.: my user directory name is laoniu. The new directory has created at /home/laoniu/

# verify my created directory
ls /home/laoniu                             # show practice_react

# if I want to navigate to the directory, instead of clicks ...... we execute this command
cd /home/laoniu/practice_react
```

3. Create a starter project with vite + React + JavaScript
```bash
# Let's show you with step-by-step method first
npx create-vite@latest <app-name>          # E.g.: replace the app-name to react-starter-project
```
Select 'React', and press ENTER
```
◆  Select a framework:
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Ember
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
```
Select JavaScript, and press ENTER
```
◆  Select a variant:
│  ○ TypeScript
│  ○ TypeScript + React Compiler
│  ● JavaScript
│  ○ JavaScript + React Compiler
│  ○ RSC
│  ○ React Router v7 ↗ https://reactrouter.com
│  ○ TanStack Router ↗ https://tanstack.com/router
│  ○ RedwoodSDK ↗ https://rwsdk.com
│  ○ Vike ↗ https://vike.dev
```
Select 'Yes', and press ENTER
```
◆  Install with npm and start now?
│  ● Yes / ○ No
```
Then the new app will start to create and when complete ....
```
◇  Scaffolding project in /home/laoniu/practice_react/react-starter-project...
│
◇  Installing dependencies with npm...

added 135 packages, and audited 136 packages in 7s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> react-starter-project@0.0.0 dev
> vite


  VITE v8.0.14  ready in 243 ms

  ➜  Local:   http://localhost:5173/               # press Ctrl + click to open the running app in browser
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```