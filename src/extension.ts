import { ExtensionContext, commands, window } from 'vscode';
import * as config from './config';
import * as terminal from './terminal';

export function activate(context: ExtensionContext) {
	const lintCommand = commands.registerCommand('sonar-dotnet-vscode.lint', () => {
		const activeTerminal = terminal.selectActiveTerminal();
		if (activeTerminal) {
			const organizationKey = config.getOrganizationKey();
			const token = config.getToken();
			const serverUrl = config.getServerUrl();
			const projectKey = config.getProjectKey();
			activeTerminal.sendText(`dotnet sonarscanner begin /k:${projectKey} /d:sonar.host.url=${serverUrl} /d:sonar.login=${token} /o:${organizationKey}`);
		} else {
			window.showErrorMessage('No active terminals.');
		}
	});
	context.subscriptions.push(lintCommand);
}

export function deactivate() { }
