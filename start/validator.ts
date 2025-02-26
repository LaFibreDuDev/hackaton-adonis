import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'email.unique': "Un compte s'est déjà inscrit avec cette adresse email",
  'email.email': 'Le champs email doit être une adresse email valide !',
})
