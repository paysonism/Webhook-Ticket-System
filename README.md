# Webhook Ticketing System

This is a simple web ticketing system that sends the information to a discord webhook.

This can be used for all sorts of applications not just ticketing systems. ```All of the actual juicy code is inside of 'demo/script.js'```

## Setup

This application makes use of discord webhooks, so first you need to make a discord account if you don't already have one. You can do so by clicking [here](https://discord.com/register). 

Next, you will need to create a server, so make a new server by clicking the plus icon at the bottom of the server list (left sidebar). Now you can configure your server to your liking and in the channel you want the tickets to be sent to you can right click and select 'edit channel'.

Now, go to the integrations tab and click on webhooks. Now, create a new webhook. You can name it whatever you want and upload an icon if you choose. Once you are done, click on 'Copy Webhook URL'. Now open 'script.js' located in the demo folder. Now navigate to line 21 and you will see some code like this:

```js
xmlrequest.open("POST", "webhook url here");
```

Simply replace "webhook url here" with your webhook URL and you are good to go! Read on more if you want to learn how to change message types and everything else you can do with this application.

## Message Types

If you didn't already know, there are two different types of messages in discord. Normal messages, and embedded messages. They are basically the same thing only with embeds you can customize them more. Below you can find examples on how to use both.

### Standard Messages

Standard messages are already built in and setup as the default communication type inside of the application. If you go into 'demo/script.js' and scroll down to lines 25-29 you will see all the message code. This is what you will change to change your output message. The default output returns this:

```
@everyone New Ticket

Name: John Doe

Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

You may change this if you want and ion think i gotta explain that bc u literally just have to type different shit 💀

### Embedded Messages

To use embedded messages in this application, all you have to do is simply change the message type to an embed.

To do this, you will want to go to line 28. Due to discord's limitations, you still have to keep something in the content. If you want to be pinged when someone makes a new ticket you can just do @everyone. But just put whatever there and then make a new line. On this new line you will want to add the following code:

```js
embeds: []
```

So, your code should look like this:

```js
    const message = {
      username: "Username",
      avatar_url: "",
      content: "@everyone New Ticket", // make sure to add the , after this line!!!
      embeds: []
    }
```

Now, we are going to make a new const that will allow us to change our embed easily.

To do so, go to the beginning of the send() function and make a new const named "emb". It should look like this:

```js
const emb = {
    
}
```

Now use this [Embed Visualizer](https://autocode.com/tools/discord/embed-builder/) to make your embed. After you have made your embed, you can click the "copy code" button. Now paste your code inside of the "emb" const. Now, go back to the "message" const and inside of the [] after embed, enter in "emb" (or your embed const). Your code should then look like this:

```js
const message = {
    username: "Username",
    avatar_url: "",
    content: "@everyone New Ticket",
    embeds: [ emb ]
}
```

Now, go ahead and test it out!

### Support and Help

If you are having any problems figuring this out, you can open an issue or DM me on discord. My discord gets termed often so If I never respond to you just make an issue in this repo.

My Discord: ``payson1337.``

### Upcoming Features

I plan on adding some features such as:

- Cooldown (so people can't spam it)
- Security (so people cant steal your webhook link)
- idk make some suggestions by making an issue in this repo

# Credits

All contents of this repository were created by [Payson Holmes](https://github.com/paysonism).

If you use any of the code in this project please give me credit for it in your code :)
