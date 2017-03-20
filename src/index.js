import {result} from './templates/result'
import {queryAPI} from './queryAPI'

let state = {
    page: 0,
    query: ''
}

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    state = {
        page: 0,
        query: document.getElementById('search-text').value
    }
    
    const results = queryAPI(state.query, state.page);

    results
        .then(function(results) {
            if(results.status) {
                const html = results.data.map(r => result(r)).join('')
                document.getElementById('results').innerHTML = html;
            } else {
                document.getElementById('results').innerHTML = results.error;
            }
        })
})

document.getElementById('pagination').addEventListener('click', function(e) {
    
    console.log(e.target.nodeName);
    
    state.page = state.page + 1;
    
    const results = queryAPI(state.query, state.page);

    results
        .then(function(results) {
        
            if(results.status) {
                const html = results.data.map(r => result(r)).join('')
                document.getElementById('results').innerHTML += html;
            } else {
                document.getElementById('results').innerHTML += results.error;
            }
        })
})