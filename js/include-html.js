document.addEventListener('DOMContentLoaded', function() {
    var includes = document.getElementsByTagName('include');
    [].forEach.call(includes, function(include) {
        var filePath = include.getAttribute('src');
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                include.insertAdjacentHTML('afterend', data);
                include.remove();
                // Font Awesome 스타일시트가 중복되지 않도록 제거
                const existingLink = document.querySelector('link[href*="font-awesome"]');
                if (existingLink) {
                    const newLink = include.querySelector('link[href*="font-awesome"]');
                    if (newLink) newLink.remove();
                }
            })
            .catch(error => console.error('Error loading the HTML file:', error));
    });
}); 