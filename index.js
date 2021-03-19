const ImapClient = require('emailjs-imap-client').default;
require('dotenv').config();

const client = new ImapClient('imap.gmail.com', 993, {
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  ignoreTLS: true
});

async function getLatestEmail() {
  await client.connect();
  const latestEmail = (await client.listMessages('INBOX', '*:*', ['uid', 'flags', 'envelope', 'body[]']))[0];
  client.close();
  return latestEmail;
}

getLatestEmail().then((email) => {
  console.log("LATEST EMAIL:");
  console.log(email);
})