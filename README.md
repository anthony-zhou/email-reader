## Email Reader

Simple Node.js app that uses [emailjs-imap-client](https://github.com/emailjs/emailjs-imap-client) to access an email inbox. 

Useful for automated email testing as part of an end-to-end testing workflow. 

### Setup

1. Clone this repository. 
2. Make sure your Gmail is set to [enable IMAP](https://support.google.com/mail/answer/7126229?hl=en) -- you can do this from the Gmail settings.
3. You might also have to enable Access to Less Secure Apps from your Google Account.
4. Make a copy of `.env.example` called `.env` and add your own email and password there.
5. Run `npm install` to install dependencies.
6. Run `npm start` to fetch the latest message from your inbox.

### Disclaimer 

I would not recommend using this app with an account that you would care about someone malicious having access to. Instead, try creating a spam account to test it out. 