import { ExtensionContext, commands, window } from 'vscode';
import * as config from './config';

export function activate(context: ExtensionContext) {
	const lintCommand = commands.registerCommand('sonar-dotnet-vscode.lint', () => {
		const activeTerminal = window.activeTerminal;
		if (activeTerminal) {
			const token = config.getToken();
			const serverUrl = config.getServerUrl();
			const projectKey = config.getProjectKey();

			if (!token || !serverUrl || !projectKey) {
				window.showErrorMessage('Configs token, serverUrl and projectKey are required.');
				return;
			}

			const organizationKey = config.getOrganizationKey();
			const sonarBeginCommand = `dotnet sonarscanner begin /k:${projectKey} /d:sonar.host.url=${serverUrl} /d:sonar.login=${token}`;

			if (organizationKey) {
				activeTerminal.sendText(`${sonarBeginCommand} /o:${organizationKey}`);
			} else {
				activeTerminal.sendText(sonarBeginCommand);
			}

		} else {
			window.showErrorMessage('Terminal active is required.');
		}
	});
	context.subscriptions.push(lintCommand);
}

export function deactivate() { }
