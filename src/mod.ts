import * as eris from 'eris'
import Command from './command';

export default class CordKit {
	client = new eris.Client(this.token)
	commands = new Map<string, Command>();

	constructor(private token: string) {}
}
