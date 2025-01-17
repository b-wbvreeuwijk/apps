function getEnvironmentVariable(environmentVariableName: string) {
  const environmentVariableValue = process.env[environmentVariableName];
  if (environmentVariableValue === undefined) {
    throw new Error(`Missing environment variable: '${environmentVariableName}'`);
  }
  return environmentVariableValue;
}

export const config = {
  backendApiUrl: getEnvironmentVariable('REACT_APP_BACKEND_API_URL'),
  version: getEnvironmentVariable('REACT_APP_VERSION'),
  release: getEnvironmentVariable('REACT_APP_RELEASE'),
  sentryDSN: getEnvironmentVariable('REACT_APP_SENTRY_DSN'),
};
