const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;