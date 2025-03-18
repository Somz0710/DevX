document.addEventListener('DOMContentLoaded', function() {
    // Get the era toggle dropdown
    const eraToggle = document.getElementById('era-toggle');
    
    // Add event listener for changing the era
    eraToggle.addEventListener('change', function() {
        // Remove all era classes
        document.body.classList.remove('modern', 'style-2010s', 'style-2000s', 'style-1990s', 'style-1980s');
        
        // Add the selected era class
        document.body.classList.add(this.value);
        
        // Optional: Show a message about the selected era
        console.log('Changed to ' + this.options[this.selectedIndex].text + ' web design style');
    });
    
    // Optional: Add click handler for the CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to the ' + eraToggle.options[eraToggle.selectedIndex].text + ' era of web design!');
        });
    }
});