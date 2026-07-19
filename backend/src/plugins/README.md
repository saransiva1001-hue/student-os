# Plugins System Architecture

StudentOS supports modular plugins to link academic and developer life.

- **classroom**: Google Classroom sync.
- **github**: Github repository activity stats.
- **leetcode**: Daily coding goals progress checker.
- **notion**: Notes sync.
- **gmail**: Email summary alerts.
- **college-portal**: Timetable imports.

Plugins are managed by `pluginManager.js` which registers, configures, and schedules execution.
