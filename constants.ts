import { Contract, Role, Agent, MenuRule, Attachment, Log } from './types';

export const CONTRACTS: Contract[] = [
  { id: 1, templateName: "模板二", isSigned: true, name: "胡永涛", idNumber: "51020619********12", address: "四川省成都市金牛区金府路42号2301", signatureUrl: "https://picsum.photos/100/40?random=1", createTime: "2025-12-13 12:57:58" },
  { id: 2, templateName: "模板二", isSigned: true, name: "李运龙", idNumber: "42011119********34", address: "湖北省武汉市洪山区珞狮路12号", signatureUrl: "https://picsum.photos/100/40?random=2", createTime: "2025-12-12 20:53:10" },
  { id: 3, templateName: "模板二", isSigned: true, name: "张大洲", idNumber: "51070219********53", address: "江苏省苏州市工业园区星湖街", signatureUrl: "https://picsum.photos/100/40?random=3", createTime: "2025-12-12 19:50:52" },
  { id: 4, templateName: "模板二", isSigned: true, name: "刘建华", idNumber: "51372319********20", address: "四川省巴中市巴州区江北大道", signatureUrl: "https://picsum.photos/100/40?random=4", createTime: "2025-12-12 16:02:06" },
  { id: 5, templateName: "模板二", isSigned: true, name: "王建国", idNumber: "11010119********37", address: "北京市朝阳区建国门外大街", signatureUrl: "https://picsum.photos/100/40?random=5", createTime: "2025-12-12 16:01:01" },
  { id: 6, templateName: "模板二", isSigned: true, name: "陈正海", idNumber: "33010219********18", address: "浙江省杭州市西湖区体育场路", signatureUrl: "https://picsum.photos/100/40?random=6", createTime: "2025-12-12 15:51:58" },
  { id: 7, templateName: "模板二", isSigned: true, name: "何志伟", idNumber: "44010619********19", address: "广东省广州市天河区天河路", signatureUrl: "https://picsum.photos/100/40?random=7", createTime: "2025-12-12 15:24:27" },
  { id: 8, templateName: "模板二", isSigned: true, name: "吕海", idNumber: "21020219********43", address: "辽宁省大连市中山区人民路", signatureUrl: "https://picsum.photos/100/40?random=8", createTime: "2025-12-12 14:28:43" },
];

export const ROLES: Role[] = [
  { id: 1, parentId: 0, name: "超级管理组", status: 'Normal' },
  { id: 2, parentId: 1, name: "L 总代理", status: 'Normal' },
  { id: 3, parentId: 2, name: "├ 一级代理", status: 'Normal' },
  { id: 5, parentId: 2, name: "└ 二级代理", status: 'Normal' },
];

export const AGENTS: Agent[] = [
  { id: 3, username: "test", nickname: "test", groupName: "总代理", email: "test@123.com", phone: "88876767", status: 'Normal', lastLogin: "2025-06-23 11:52:54" },
  { id: 2, username: "zongdali", nickname: "zongdali", groupName: "总代理", email: "zongdali@qq.com", phone: "123423433", status: 'Normal', lastLogin: "无" },
];

export const MENU_RULES: MenuRule[] = [
  { id: 66, title: "会员管理", icon: "user", rule: "user", weight: 999, status: 'Normal', isMenu: false },
  { id: 93, title: "合同管理", icon: "folder", rule: "men", weight: 999, status: 'Normal', isMenu: true },
  { id: 1, title: "控制台", icon: "dashboard", rule: "dashboard", weight: 143, status: 'Normal', isMenu: false },
  { id: 5, title: "权限管理", icon: "users", rule: "auth", weight: 138, status: 'Normal', isMenu: true },
  { id: 2, title: "常规管理", icon: "settings", rule: "general", weight: 137, status: 'Normal', isMenu: true },
  { id: 3, title: "分类管理", icon: "list", rule: "category", weight: 119, status: 'Normal', isMenu: false },
];

export const ATTACHMENTS: Attachment[] = [
  { id: 5365, category: "未归类", filename: "signature.png", size: "15 KB", width: 278, height: 211, previewUrl: "https://picsum.photos/278/211?random=1", mimeType: "image/png", createTime: "2025-12-13 13:00:13" },
  { id: 5364, category: "未归类", filename: "signature.png", size: "9 KB", width: 302, height: 210, previewUrl: "https://picsum.photos/302/210?random=2", mimeType: "image/png", createTime: "2025-12-13 09:37:50" },
  { id: 5363, category: "未归类", filename: "signature.png", size: "15 KB", width: 282, height: 211, previewUrl: "https://picsum.photos/282/211?random=3", mimeType: "image/png", createTime: "2025-12-12 21:00:35" },
  { id: 5362, category: "未归类", filename: "signature.png", size: "14 KB", width: 294, height: 211, previewUrl: "https://picsum.photos/294/211?random=4", mimeType: "image/png", createTime: "2025-12-12 19:56:28" },
  { id: 5361, category: "未归类", filename: "signature.png", size: "12 KB", width: 278, height: 211, previewUrl: "https://picsum.photos/278/211?random=5", mimeType: "image/png", createTime: "2025-12-12 16:43:18" },
  { id: 5360, category: "未归类", filename: "signature.png", size: "13 KB", width: 269, height: 211, previewUrl: "https://picsum.photos/269/211?random=6", mimeType: "image/png", createTime: "2025-12-12 16:24:37" },
];

export const LOGS: Log[] = []; // Intentionally empty as per screenshot
