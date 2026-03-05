// Browser detection for install button
function getInstallUrl() {
    const ua = navigator.userAgent.toLowerCase();
    const chromeStore = "https://chromewebstore.google.com/detail/athlete-filters/gfdihkjoekbhkiifejggkhjnmfbojcgf";
    const firefoxStore = "https://addons.mozilla.org/en-US/firefox/addon/athlete-filters/";

    if (ua.includes("firefox")) {
        return firefoxStore;
    }
    // Default → Chrome store (works for Chrome, Edge, Brave, Opera, etc.)
    return chromeStore;
}

function setupInstallButton() {
    const btn = document.getElementById("installButton");
    if (btn) {
        const url = getInstallUrl();
        btn.href = url;
    }
}

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
            `;
        }
    } catch (error) {
        console.error('Failed to load release info:', error);
        document.getElementById('latest-release').innerHTML = 
            '<p>Visit the <a href="releases/">releases page</a> for version history.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setupInstallButton();
    loadLatestRelease();
});
