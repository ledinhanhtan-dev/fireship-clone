The following tutorial will get you up and running with [Tailwind CSS](https://tailwindcss.com/), empowering you to build a beautiful, responsive, and animated websites quickly. We will build a side navigation menu inspired by Discord.

## Setup

---

### Install the Tailwind VS Code extension

Install the [Tailwind VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension.

### Use a JS Framework

Feel free to use the JS framework of your choice. This tutorial uses [Create React App](https://tailwindcss.com/docs/guides/create-react-app).

## Discord-Inspired Icon Navbar

---

### Make the App a Flexible Container

Create a [flexbox](https://youtu.be/K74l26pE4YA) row by simply adding the flex utility to the parent element.

{{< file "js" "App.js" >}}

<div class="file-name">
  <span class="file-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>file_type_js_official</title><rect x="2" y="2" width="28" height="28" style="fill:#f5de19"></rect><path d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"></path></svg></span> SideBar.js
</div>

<ng-template codeHost language="js" fileName="Sidebar.js"></ng-template>

```javascript
function App() {
  return <div className="flex"></div>;
}
```

### Position the Sidebar

Combine Tailwind utility classes to position the sidebar. When hovering over each class in VS Code, it will display its true CSS values.

{{< file "js" "SideBar.js" >}}

```javascript
const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col 
                    bg-gray-900 text-white shadow-lg"
    ></div>
  );
};
```

### Add Icon Buttons

To quickly add an icon button to the navbar, install react-icons.

{{< file "terminal" "command line" >}}

```bash
npm install react-icons
```

{{< file "js" "SideBar.js" >}}

```javascript
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="...">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div className="sidebar-icon group">{icon}</div>
);
```

### Use Apply to Create Custom Classes

The `@apply` directive allows you to compose custom CSS classes by combining Tailwind classes. It can be useful in situations where extracting a JS component does not make sense.

{{< file "css" "index.css" >}}

```css
@layer components {
  .sidebar-icon {
    @apply relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-gray-800 text-green-500
               hover:bg-green-600 hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer;
  }
}
```

## Animated Tooltips

---

### Create Tooltip Container

Each icon button has a tooltip as a child that is invisible by default.

{{< file "js" "SideBar.js" >}}

```javascript
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon">
    {icon}

    <span class="sidebar-tooltip">{text}</span>
  </div>
);
```

{{< file "css" "index.css" >}}

```css
.sidebar-tooltip {
  @apply absolute w-auto p-2 m-2 min-w-max left-14
        rounded-md shadow-md
        text-white bg-gray-900 
        text-xs font-bold
        transition-all duration-100 scale-0 origin-left;
}
```

### Animated with Group

Create groups to animate a child when the state of the parent changes.

The tailwind `group` class does not work within `@apply`. It must be used inline.

{{< file "js" "SideBar.js" >}}

```javascript
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
```
