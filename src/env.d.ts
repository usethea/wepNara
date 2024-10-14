/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly RESEND_API_KEY: string
    readonly SEND_EMAIL_FROM: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }