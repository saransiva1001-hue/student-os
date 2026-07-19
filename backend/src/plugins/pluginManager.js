const featureFlags = require('../../../config/featureFlags');

/**
 * Registry and lifecycle orchestrator for active plugins.
 */
class PluginManager {
  constructor() {
    this.plugins = new Map();
  }

  register(name, pluginInstance) {
    this.plugins.set(name, pluginInstance);
    console.log(`[PluginManager] Registered: ${name}`);
  }

  getPlugin(name) {
    return this.plugins.get(name);
  }

  async initialize() {
    console.log('[PluginManager] Bootstrapping plugins...');

    // Synchronize activation states with system feature flags
    if (featureFlags.googleClassroomEnabled) {
      console.log('[PluginManager] Activating Classroom Plugin...');
    }
    if (featureFlags.githubEnabled) {
      console.log('[PluginManager] Activating GitHub Plugin...');
    }
    if (featureFlags.leetcodeEnabled) {
      console.log('[PluginManager] Activating LeetCode Plugin...');
    }
    if (featureFlags.notionEnabled) {
      console.log('[PluginManager] Activating Notion Plugin...');
    }
    if (featureFlags.gmailEnabled) {
      console.log('[PluginManager] Activating Gmail Plugin...');
    }
    if (featureFlags.collegePortalEnabled) {
      console.log('[PluginManager] Activating College Portal Plugin...');
    }
  }
}

module.exports = new PluginManager();
