declare module "*.svg" {
  const content: any;
  export default content;
}

interface ImportMetaEnv {
  VITE_APP_MOCK_USER_API_URL: string;
  VITE_APP_MOCK_USER_DETAIL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

