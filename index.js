#!/usr/bin/env node

const fs = require('fs-extra')

const switch_to_role = process.argv[2]
if (!switch_to_role) {
	console.log('there is nothing to switch to')
	return
}

fs.readJson('./sftp-config.json', (err, sftp_config) => {
	if (err) {
		return console.error(err)
	}

	if (!(switch_to_role in sftp_config.switch)) {
		console.log("you don't have settings for " + switch_to_role)
		return
	}

	const switch_to_settings = sftp_config.switch[switch_to_role]

	const new_sftp_config = Object.assign(sftp_config, switch_to_settings)

	fs.writeJson('./sftp-config.json', new_sftp_config, { spaces: '\t' }, err => {
		if (err) {
			return console.error(err)
		}

		console.log('switched successfully!')
	})
	
})