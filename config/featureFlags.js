/**
 * StudentOS Global Feature Flags Configuration
 * Controls availability of core integrations and modular systems.
 */
const featureFlags = {
  // AI core capabilities (LangGraph, agents execution, memory sync)
  aiEnabled: false,

  // External APIs and integrations
  googleCalendarEnabled: false,
  gmailEnabled: false,
  googleClassroomEnabled: false,
  githubEnabled: false,
  leetcodeEnabled: false,
  notionEnabled: false,
  collegePortalEnabled: false,

  // Native systems
  notificationsEnabled: true,
  schedulerEngineEnabled: true
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = featureFlags;
} else {
  // @ts-ignore
  globalThis.featureFlags = featureFlags;
}
