


const DEFAULT_GENERAL_THEME = 'default-general.css';

const DEFAULT_COLOR_THEME = 'default-color.css';



export function applyDefaultTheme() {
    loadSheet(DEFAULT_GENERAL_THEME);
    loadSheet(DEFAULT_COLOR_THEME);
}


//Load CSS Sheet
function loadSheet(href) {
    // avoid duplicates
    for(var i = 0; i < document.styleSheets.length; i++){
        if(document.styleSheets[i].href == href){
            return;
        }
    }

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/' + href;
    head.appendChild(link);
}