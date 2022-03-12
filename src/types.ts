export interface IData {
  id: number;
  url: string;
}

export interface IMain {
  items: IData[];
  controller: any;
  hideTextFunc: (index: number) => void;
}

export interface ISlideItem {
  item: IData;
}

export interface IBack {
  items: IData[];
  controlledFunc: any;
}

export interface IText {
  hide: boolean;
}

export interface IModal {
  img: string;
  closeFunc: () => void;
}
