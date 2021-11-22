export const GRAPHQL_URL = 'http://localhost:3101/graphql';

export const NAV_TABS = [
  { pathname: '/', label: '动态' },
  // { pathname: '/article', label: '文章' },
  // { pathname: "/news", label: "资讯" },
  // { pathname: "/bxgif/list", label: "囧图" },
  { pathname: '/about/download', label: '下载' },
  // { pathname: '/mzitu', label: '福利' },
  // { pathname: '/about', label: '关于' },
];

export const ENV = process.env.NODE_ENV !== 'production';

export const STORE_USER_KEY = 'react.mobi.user';
export const USER_TOKEN = 'react.mobi.user.token';
export const USER_INFO_KEY = 'react.mobi.user.info';
export const USER_SETTING_THEME = 'react.mobi.user.setting.theme';
export const PATH_BEFORELOGIN = 'react.mobi.path.before.login';
export const QINIUURL = 'https://imgs.react.mobi';
export const QINIU_UPLOADURL = 'https://upload-z1.qiniup.com';
export const API_URL = ENV ? 'http://localhost:3101' : 'https://api.react.mobi';
