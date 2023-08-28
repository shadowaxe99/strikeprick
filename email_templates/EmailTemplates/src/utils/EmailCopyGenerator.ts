import { KlaviyoAPI } from 'klaviyo-api';

class EmailCopyGenerator {
  private klaviyoAPI: KlaviyoAPI;

  constructor(apiKey: string) {
    this.klaviyoAPI = new KlaviyoAPI(apiKey);
  }

  async generateEmailCopy(templateId: string, recipient: string): Promise<string> {
    try {
      const template = await this.klaviyoAPI.getTemplate(templateId);
      const personalizedCopy = this.generatePersonalizedCopy(template, recipient);
      return personalizedCopy;
    } catch (error) {
      console.error('Error generating email copy:', error);
      throw error;
    }
  }

  private generatePersonalizedCopy(template: string, recipient: string): string {
    // Logic to generate personalized copy based on template and recipient
    return template.replace('{{recipient}}', recipient);
  }
}

export default EmailCopyGenerator;