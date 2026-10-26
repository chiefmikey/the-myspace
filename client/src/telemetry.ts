// Wolfe telemetry standard v1: the loader tag in index.html defines window.wolfeTelemetry.
// Props must be enumerated values only, never free text or user content.
type TelemetryProperties = Record<string, string | number | boolean>;

const track = (event: string, properties?: TelemetryProperties): void => {
  try {
    (
      window as unknown as {
        wolfeTelemetry?: {
          capture: (name: string, props?: TelemetryProperties) => void;
        };
      }
    ).wolfeTelemetry?.capture(event, properties);
  } catch {
    // telemetry never breaks the app
  }
};

export default track;
