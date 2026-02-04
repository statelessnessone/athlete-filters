// Load latest release information
async function loadLatestRelease() {
    try {
        const response = await fetch('releases/releases.json');
        const data = await response.json();
        
        if (data.releases && data.releases.length > 0) {
            const latest = data.releases[0];
            const releaseDiv = document.getElementById('latest-release');
            
            releaseDiv.innerHTML = `
                <h3>Version ${latest.version} - ${latest.date}</h3>
                <p>${latest.description || 'Latest release'}</p>
                <div style="margin-top: 15px;">
                    <a href="releases/${latest.firefox}" style="margin-right: 10px;">Download for Firefox</a>
                    <a href="releases/${latest.chrome}">Download for Chrome</a>
                </div>
            `;
        }
    } catch (error) {
        console.error('Failed to load release info:', error);
        document.getElementById('latest-release').innerHTML = 
            '<p>Visit the <a href="releases/">releases page</a> to download the extension.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadLatestRelease);
