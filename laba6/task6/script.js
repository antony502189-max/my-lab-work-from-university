container.onclick = function(event) {
    
    if (!event.target.classList.contains('remove-button')) {
        return;
    }

    let panel = event.target.closest('.pane');

    if (panel) {
        panel.remove();
    }
};