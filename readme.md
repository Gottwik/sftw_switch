# sftp switch
Do you use sublime with sftp? Did you need to switch between hosts quickly?

With this you define your hosts and then switch between them with just:
```
$ switch production
```

or 

```
$ switch dev_usa
```

# How to define hosts
Edit your sftp-config.json file by adding switch key to it with syntax like this:

```
"switch": {
	"production": {
		"host": "production.server.fakestuff.com",
		"remote_path": "/usr/local/git_tree/cool_project"
	},
	"dev_usa": {
		"host": "dev_usa.server.fakestuff.com",
		"remote_path": "/usr/local/git_tree/cool_project"
	},
}
```