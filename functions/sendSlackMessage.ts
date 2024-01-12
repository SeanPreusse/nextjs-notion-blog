// slackUtils.ts

import axios, { AxiosResponse } from 'axios';

interface SlackMessage {
  text: string;
}

export const sendSlackMessage = async (message: SlackMessage): Promise<AxiosResponse | void> => {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK;

  if (!slackWebhookUrl) {
    console.error('Slack webhook URL is not defined.');
    return;
  }

  try {
    const response = await axios.post(slackWebhookUrl, message);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending Slack message:', error.message);
      // Handle the error as needed
    } else {
      console.error('An unexpected error occurred:', error);
      // Handle other types of errors or log them
    }
  }
};
