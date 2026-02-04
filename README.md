# Athlete Filters

A cross-browser extension for Firefox and Chrome that helps you organize your Strava feed by creating athlete groups and filtering activities. Gain control over your feed with powerful filtering, batch selection, and smart organization tools.

## ✨ Features

### Core Functionality
- 🎯 **Batch Select Athletes**: Click the orange **+** icon next to athlete names to select multiple athletes at once
- 📁 **Create & Manage Groups**: Organize athletes into custom groups with inline editing
- 🔍 **Smart Feed Filtering**: Filter your feed by group using the integrated dropdown
- 🎨 **Clean UI**: Seamlessly integrated into Strava's native interface

### Virtual Filters
- 👻 **Ungrouped Athletes**: Automatic virtual group showing athletes not in any of your groups
- 💭 **No Kudos**: Quick filter to see activities you haven't given kudos to yet

### Advanced Features
- ✏️ **Inline Group Editing**: Rename groups directly in place with a single click
- 💾 **Persistent Storage**: Your groups and preferences are saved locally and sync across sessions
- 📥 **Import/Export**: Backup and restore your groups and settings as JSON files
- 🔄 **Smart Defaults**: Automatically remembers your last selected group
- 📄 **Pagination**: Handles large athlete selections with 10 per page
- ⚡ **Performance Monitoring**: Built-in performance tracking to ensure snappy operation

### User Experience
- 🎨 **Strava-Branded Design**: Orange accents matching Strava's visual language
- 🖱️ **Keyboard Shortcuts**: Full keyboard accessibility (Enter, Escape, Tab)
- 📱 **Real-time Updates**: Live progress indicators during filtering operations
- 🛡️ **Memory Safe**: Rate limiting and optimization to prevent performance issues

## 🚀 Installation

### Firefox

Download the latest `.xpi` file from the [releases](releases/) directory and install it in Firefox:

1. Download `strava-athlete-filters-X.X.X-firefox.xpi`
2. Open Firefox and navigate to `about:addons`
3. Click the gear icon ⚙️ and select "Install Add-on From File..."
4. Select the downloaded `.xpi` file
5. Click "Add" when prompted

Alternatively, for development:
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select the downloaded `.xpi` file

### Chrome

Download the latest `.zip` file from the [releases](releases/) directory and install it in Chrome:

1. Download `strava-athlete-filters-X.X.X-chrome.zip`
2. Extract the ZIP file to a folder on your computer
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top-right corner)
5. Click "Load unpacked"
6. Select the extracted folder

**Note:** Chrome extensions loaded this way are considered "unpacked" and will show a developer mode warning.

## 📖 Usage Guide

### Quick Start

1. **Navigate to Strava**: Go to https://www.strava.com/dashboard
2. **Select Athletes**: Click the orange **+** icon next to athlete names in your feed
3. **Create Groups**: Click the 👥 button (top-right) to open the management panel
4. **Add to Groups**: Select athletes, choose a group, and click "Add"
5. **Filter Feed**: Use the "Group:" dropdown at the top of your feed to filter activities

### Creating & Managing Groups

**Create a New Group:**
1. Click the 👥 button to open the side panel
2. Enter a group name in the "Create New Group" field
3. Press Enter or click "Create"

**Rename a Group:**
1. Click the ✏️ (pencil) icon next to any group name
2. Type the new name
3. Press Enter to save or Escape to cancel

**Delete a Group:**
1. Click the 🗑️ (trash) icon next to the group name
2. Confirm the deletion

### Adding Athletes to Groups

**Batch Selection (Recommended):**
1. Click the **+** icon next to multiple athlete names in your feed
2. Selected athletes appear in the "Selected Athletes" section
3. Choose a group from the dropdown
4. Click "Add to Group" - all selected athletes are added at once
5. Click "Clear Selection" to start fresh

**From Profile Pages:**
- When viewing an athlete's profile, click the "**+** Add to Group" button in the header

**From Activity Pages:**
- Click the **+** icon next to athlete names in comments or kudos lists

### Filtering Your Feed

**Using the Top Dropdown:**
1. Look for the "Group:" dropdown at the top of your feed (after the "Following" filter)
2. Select any of your groups to show only those athletes' activities
3. Select "🔍 Ungrouped Athletes" to see athletes not in any group
4. Select "💭 No Kudos" to see activities you haven't given kudos to
5. Select "All Athletes" to show everything

**Real-time Filtering:**
- Watch the progress indicator show "Filtering... X/Y" as the filter applies
- See "✓ X shown" when filtering completes
- Filters automatically re-apply when scrolling loads new activities

### Special Filters

**🔍 Ungrouped Athletes**
Shows athletes who aren't in any of your created groups. Perfect for:
- Discovering new athletes to organize
- Finding who you haven't categorized
- Building out your group system methodically

**💭 No Kudos**
Shows only activities you haven't given kudos to yet. Great for:
- Quick kudos rounds
- Supporting friends you might have missed
- Keeping engagement up with your network

### Backup & Restore

**Export Your Data:**
1. Open the management panel (👥 button)
2. Scroll to "Backup & Restore"
3. Click "📥 Export Data"
4. A JSON file downloads with all groups, athletes, and settings
5. Save this file for backup or transfer to another device

**Import Your Data:**
1. Click "📤 Import Data"
2. Select a previously exported JSON file
3. Review the import summary (shows group count, athlete count, export date)
4. Confirm to replace current data
5. All groups and settings are instantly restored

## 🔧 Troubleshooting

### Extension Not Working

1. **Refresh the page**: After installing, refresh your Strava dashboard
2. **Check permissions**: Ensure the extension has permission to access `strava.com`
3. **Check console**: Open browser developer tools (F12) to see if there are any errors
4. **Reinstall**: Remove and reinstall the extension

### Groups Not Saving

- Your groups are stored in browser local storage
- Check if you have "Clear cookies and site data when you close the browser" enabled
- Try exporting your data as a backup

### Performance Issues

The extension includes rate limiting to prevent performance issues. If you notice slowness:
- Check the browser console (F12) for performance warnings
- Try reducing the number of athletes in groups
- Clear your selection and start fresh

## 📊 Version History

See the [releases](releases/) directory for version history and downloads.

## 🤝 Contributing

Found a bug or have a feature request? Please [open an issue](https://github.com/statelessnessone/athlete-filters/issues) on this repository.

## 📄 License

This extension is provided as-is for personal use with Strava.
