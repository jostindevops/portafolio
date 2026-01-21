/**
 * Represents a widget or module that can be configured on the DevSecOps
 * dashboard. Each option has an identifier, a human‑readable name,
 * and an optional description for future extensions.
 */
export interface ConfigOption {
  /** Unique identifier used internally to reference the option. */
  id: string;
  /** Display name shown to users. */
  name: string;
  /** Optional description with further details about the option. */
  description?: string;
}