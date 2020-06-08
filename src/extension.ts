import { ExtensionContext, commands, window } from 'vscode';
import * as config from './config';

export function activate(context: ExtensionContext) {
	const lintCommand = commands.registerCommand('sonar-dotnet-vscode.lint', () => {
		const activeTerminal = window.activeTerminal;
		if (activeTerminal) {
			const organizationKey = config.getOrganizationKey();
			const token = config.getToken();
			const serverUrl = config.getServerUrl();
			const projectKey = config.getProjectKey();

			if (!organizationKey ||
				!token ||
				!serverUrl ||
				!projectKey) {
				window.showErrorMessage('Configs required.');
				return;
			}

			activeTerminal.sendText(`dotnet sonarscanner begin /k:${projectKey} /d:sonar.host.url=${serverUrl} /d:sonar.login=${token} /o:${organizationKey}`);
		} else {
			window.showErrorMessage('No active terminals.');
		}
	});
	context.subscriptions.push(lintCommand);
}

export function deactivate() { }
