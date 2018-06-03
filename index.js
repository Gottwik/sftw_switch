#!/usr/bin/env node

const fs = require('fs-extra')

fs.readJson('./sftp-config.json', (err, sftp_config) => {
	if (err) {
		return console.error(err)
	}

	const switch_to_role = process.argv[2]
	if (!switch_to_role) {
		const delimiter = '\n\t * ';
		console.log('currently on: * ' + sftp_config.host + ' *')
		console.log('you can switch to one of these roles:' + delimiter + Object.keys(sftp_config.switch).join(delimiter) + '\n')
		return
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