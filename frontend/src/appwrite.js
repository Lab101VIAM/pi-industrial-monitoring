import { Client, Account, Databases, Storage } from 'appwrite';

// Inizializza il client Appwrite
const client = new Client()
  .setEndpoint('http://localhost/v1') // Sostituisci con il tuo endpoint Appwrite
  .setProject('67add2bf000f57426753'); // Sostituisci con il tuo Project ID

// Esporta i servizi principali
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export default client;
