if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.error('Service Worker Registration Failed:', err));
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page is fully loaded!');
});
