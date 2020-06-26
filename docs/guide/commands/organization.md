# Organization commands

These commands helps you to get Github organization details.To Know all organization commands use `git help-org`.

## `git addorg`

To access Gitty's core features you have to register your organization Githubname into our system.There can be only one organization registered for your server. You can change orgname anytime by using this command only. Use only valid github name otherwise it will give a error message and you will have to repeat your process example.

```
git addorg bot-academia
```

::: warning
This command can be used only by a server member who has ADMINISTRATOR or MANAGE SERVER permissions.
:::

## `git org-info`

To know information about organization registered on this server by using above mentioned command. Anybody can use this command to know information of any organization working on Github you have to just only pass that organization name as a argument to this command example.

```
git org-info botacademia
```

## `git org-member`

To know all members working in that organization. You can see other organization's member also by simply passing that organization name example.

```
git org-member bot-academia
```

## `git org-repos`

To know all the repositories under that organization. You can see other You can see other organization's repos also by simply passing that organization name example.

```
git org-repos bot-academia
```

::: tip INFO
Only top 25 details will be shown because of the limit set by Discord.
:::
