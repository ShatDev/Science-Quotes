alert('Welcome to science quote website :)');

/* Start for search bar */
document.getElementById('frmSearch').onsubmit = function () {
    window.location = 'http://www.google.com/search?q=site:https://www.sciencequotes.com ' + document.getElementById('txtSearch').value;
    return false;
}
/* End of search bar */
