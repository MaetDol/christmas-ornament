class DotEnvService {
  public getOpenAiKey(): string {
    return process.env.OPENAI_API_KEY || "";
  }

  public getOpenAiProject(): string {
    return process.env.OPENAI_PROJECT || "";
  }

  public getOpenAiOrganization(): string {
    return process.env.OPENAI_ORGANIZATION || "";
  }

  public getGA4StreamKey(): string {
    return process.env.NEXT_PUBLIC_GA4_STREAM_KEY || "";
  }
}

export const dotEnvService = new DotEnvService();
