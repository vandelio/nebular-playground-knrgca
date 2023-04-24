import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customColumn = 'name';
  defaultColumns = ['size', 'kind', 'items'];
  allColumns = this.defaultColumns;

  data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    },
    {
      data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
    },
    {
      data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    },
  ];

  items = [
    {
      title: 'Patient Profiles',
      icon: 'activity-outline',
      link: [],
    },
    {
      title: 'Lab books/orders',
      icon: 'book-outline',
      link: [],
    },
    {
      title: 'Invoices',
      icon: 'file-text-outline',
      link: [],
    },
    {
      title: 'Certification Management',
      icon: 'award-outline',
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];
}
