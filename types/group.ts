export default interface Group {
  id: string;
  name: string;
  isRoot?: boolean;
  canManage: boolean;
  tickets: {
    open: number;
    progress: number;
    closed: number;
  };
  notifications: {
    open: number;
    progress: number;
    closed: number;
  };
}
