import { workspace } from 'vscode';

const SONAR_DOTNET_SECTION = 'sonar-dotnet-vscode';

export function getOrganizationKey(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connection.sonar.organizationKey','default-organization');
}

export function getToken(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connection.sonar.token');
}

export function getServerUrl(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connection.sonar.serverUrl');
}

export function getProjectKey(): string | undefined {
    return workspace.getConfiguration(SONAR_DOTNET_SECTION).get<string>('connection.project.projectKey');
}
