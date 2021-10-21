export interface TocItem {
  title: string;
  dashed: string;
}

export interface TocBlock {
  parent: TocItem;
  children: TocItem[];
}

export type TableOfContent = TocBlock[];
