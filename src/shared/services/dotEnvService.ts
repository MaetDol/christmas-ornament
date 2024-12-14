class DotEnvService {
  public getOpenAiKey(): string {
    return process.env.OPENAI_API_KEY || '';
  }

  public getOpenAiProject(): string {
    return process.env.OPENAI_PROJECT || '';
  }

  public getOpenAiOrganization(): string {
    return process.env.OPENAI_ORGANIZATION || '';
  }
}

export const dotEnvService = new DotEnvService();
