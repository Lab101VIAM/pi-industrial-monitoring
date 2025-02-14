import { Client, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')  // Sostituisci con il tuo endpoint
  .setProject('YOUR_PROJECT_ID');               // Sostituisci con il tuo Project ID

export const account = new Account(client);