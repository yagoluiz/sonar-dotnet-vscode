import { workspace } from 'vscode';

const SONAR_DOTNET_SECTION = 'sonar-dotnet-vscode';

export function getOrganizationKey(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connections.sonar.organizationKey');
}

export function getToken(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connections.sonar.token');
}

export function getServerUrl(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connections.sonar.serverUrl');
}

export function getProjectKey(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connections.project.projectKey');
}
