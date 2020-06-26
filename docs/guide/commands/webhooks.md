# Webhooks commands

These commands helps you to get to know about Github webhooks.To Know all User commands use `git help-hook`.

Gitty one of the important feature is that it gives you to manage Github compatible webhooks hassle free.
Lets know how you can use gitty webhook features.

## What are webhooks?

Webhooks are a utility used to send messages to text channels without needing a discord application. Webhooks are useful for allowing something to send messages without requiring a discord application. However, you should note that you cannot
directly edit or delete messages you sent through the webhook.

Dont worry if you dont know how to setup webhook Gitty will do it for you.Just follow some steps.

## Steps to follow

### Step 1

Give Gitty the permission to manage webhooks. You can do this by creating a role and giving that role permission to manage webhooks and then assign that role to Gitty. To know more [click](https://bit.ly/3eBH6KR).

### Step 2

Register your organization using `git addorg`.If you have already registered then skip this step.Example

```
git addorg bot-academia
```

### Step 3

Use this command to setup your webhook for the repository under your organization `git addwebhook`.Just pass the repo name on which you want to setup webhook.Example

```
git addwebhook gitty
```

and you are done !!!.

::: tip NOTE
Use this command in the channel in which you want webhook messages. We recommend you to make a dedicated channel for webhooks.
:::

## Outcome

Now at every issue opened or close or even any issue commented or pull request you will get these information directly into your discord server. Stay updated every time . This feature helps team to collaborate and work in coordination.

## Remove

If you want to remove webhook just simply go to server settings -> Webhooks and then remove the webhook you want to remove. Webhook names are same of the repo on which they are setup. In near future we will come up with a command to reduce your work.
