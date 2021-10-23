export const SNIPPETS = {
  code1: `function App() {
  return (
    <div className="flex">
    </div>
  );
}`,

  code2: `const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-900 text-white shadow-lg">
    </div>
  );
};`,

  code3: `import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
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
  <div className="sidebar-icon group">
    {icon}
  </div>
);`,

  code4: `@layer components {

    .sidebar-icon {
        @apply relative flex items-center justify-center
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-gray-800 text-green-500
               hover:bg-green-600 hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer;
    }
}`,

  code5: `const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon">
    {icon}

    <span class="sidebar-tooltip">{text}</span>
  </div>
);`,

  code6: `    .sidebar-tooltip {
        @apply absolute w-auto p-2 m-2 min-w-max left-14
        rounded-md shadow-md
        text-white bg-gray-900
        text-xs font-bold
        transition-all duration-100 scale-0 origin-left;
      }`,

  code7: `const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);`,
};
