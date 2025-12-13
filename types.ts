export interface Contract {
  id: number;
  templateName: string;
  isSigned: boolean;
  name: string;
  idNumber: string;
  address: string;
  signatureUrl: string;
  createTime: string;
}

export interface Role {
  id: number;
  parentId: number;
  name: string;
  status: 'Normal' | 'Disabled';
}

export interface Agent {
  id: number;
  username: string;
  nickname: string;
  groupName: string;
  email: string;
  phone: string;
  status: 'Normal' | 'Disabled';
  lastLogin: string;
}

export interface MenuRule {
  id: number;
  title: string;
  icon: string;
  rule: string;
  weight: number;
  status: 'Normal' | 'Disabled';
  isMenu: boolean;
}

export interface Attachment {
  id: number;
  category: string;
  filename: string;
  size: string;
  width: number;
  height: number;
  previewUrl: string;
  mimeType: string;
  createTime: string;
}

export interface Log {
  id: number;
  title: string;
  ip: string;
  createTime: string;
}

export type Page = 'CONTRACTS' | 'ROLES' | 'AGENTS' | 'MENUS' | 'CONFIG' | 'ATTACHMENTS' | 'PROFILE';
