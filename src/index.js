import {result} from './templates/result'
import {queryAPI} from './queryAPI'
import {spinner, $, more} from './util'

let state = {
    page: 0,
    query: '',
    more: true
}


document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    state = {
        page: 0,
        query: (document.getElementById('search-text').value).trim()
    }
    
    if(state.query) {
        
        $('pagination').innerHTML = spinner();
        
        const results = queryAPI(state.query, state.page);
        
        results
            .then(function(results) {
                if(results.status) {
                    const html = results.data.map(r => result(r)).join('')
                    
                    $('results').innerHTML = html ? html : 'No results found. Please try another query!';
                    $('pagination').innerHTML = results.data.length < 60 ? '' : more()
                } else {
                    $('results').innerHTML = results.error;
                    $('pagination').innerHTML = ''
                }
                                
            })
    }
})

document.getElementById('pagination').addEventListener('click', function(e) {
    
    if(e.target.nodeName === 'BUTTON') {
    
        state.page = state.page + 1;

        const results = queryAPI(state.query, state.page);
        $('pagination').innerHTML = spinner()

        results
            .then(function(results) {

                if(results.status) {
                    const html = results.data.map(r => result(r)).join('')
                    $('results').innerHTML += html;
                    $('pagination').innerHTML = results.data.length < 60 ? '' : more()
                } else {
                    $('results').innerHTML += results.error;
                    $('pagination').innerHTML = '';
                }
            
            })
    }
});


$('search-text').addEventListener('keydown', init, false);

function init(e) {
    const n = $('navbar');
    
    n.classList.remove('navbar-init');
    n.classList.add('navbar-fixed-top');
    $('search-text').removeEventListener('keydown', init)
}

(function() {
    $('search-text').focus();
})();