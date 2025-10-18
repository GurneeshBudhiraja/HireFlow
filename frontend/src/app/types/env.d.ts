declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_COGNITO_APP_CLIENT_ID: string;
      NEXT_COGNITO_APP_CLIENT_SECRET: string;
      NEXT_COGNITO_DOMAIN: string;
      NEXT_PUBLIC_AWS_COGNITO_HOSTED_UI_URL: string;
    }
  }
}


export { };  