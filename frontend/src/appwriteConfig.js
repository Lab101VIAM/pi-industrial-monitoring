import { Client, Account } from 'appwrite';

const client = new Client()
  .setEndpoint('http://localhost/v1 ')  // Sostituisci con il tuo endpoint
  .setProject('67add2bf000f57426753');               // Sostituisci con il tuo Project ID

export const account = new Account(client);
