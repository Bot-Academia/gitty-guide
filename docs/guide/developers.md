# Setting up gitty

Once you have added gitty to your server you might want to setup a additional channel which will be specific to gitty updates and gitty usage (this is purely optional and upto you, just a recomendation from our side.)

## Gitty user login

Gitty bot has a intensive user hub system. Once you are added to the datebase of gitty you can run any of the `<user-commands>` in any server which has gitty in it.
simple add yourself to the user system by following the below example:

```
git adduser <github_username>
```

a working example:-

```
git adduser vinayaksh42
```

if you supplied gitty with a valid username it will show the below message:

```
Added vinayaksh42 as a user
```

if by chance you added the wrong username you will get the following response:

```
No such user exists on github.
```

if in future you ever want to change the user, you can simple run the command again with the new github_username.
To check if the right username has been added , run this command: `<git user-info>`

for more info refer to user commands section.

## Gitty org register

Just as the user hub system, Gitty offers a org system too! You can register your org with gitty by running the command `<git addorg (github_org)>`.

::: warning
Only People with manage server permission can register org
:::

learn to register your org by following the below example:-

```
git addorg bot-academia
```

if the input was corrent you will get the following response

```
Added bot-academia as a organization
```

if by chance you made a mistake , you will get the following message:

```
No such organization exists on github.
```

Once your org is setup, You can start using the `<org-commands>`.

for more info refer to org commands section.

## Gitty webhooks

The most loved feature of gitty is webhook. Webhooks makes the workflow between github and discord very easy.
::: warning
You need to allow Gitty with the permission of `<manage webhooks>`. Do this by assigning it a role which has `<manage webhooks>` enabled  
:::

Creating a seprate channel will be the best way to use the webhook command. This is completly optional and upto you, but we highly recommend this so that your chat never gets messy.

To know more about how to setup a webhook refer to the webhook section.
