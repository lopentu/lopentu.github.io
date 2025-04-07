import { createClient, MicroCMSClient } from 'microcms-js-sdk';

const domain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY;

let client: MicroCMSClient | null = null;

if (!domain || !apiKey) {
  console.warn("⚠️ microCMS 初始化失敗：未設定環境變數");
} else {
  client = createClient({
    serviceDomain: domain,
    apiKey: apiKey,
  });
}

export { client };
