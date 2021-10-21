import { Component, OnInit } from '@angular/core';
import { HighlightAutoResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss'],
})
export class LessonContentComponent implements OnInit {
  code = `import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
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
);`;

  constructor() {}

  ngOnInit(): void {}
}
