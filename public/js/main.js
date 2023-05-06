
/** Filter snippet */ 

let sortBy = document.getElementById('sortby');
let filterForm = document.getElementById('sort-filter');
let searchTask = document.getElementById('search-by-title');
let searchFilterForm = document.getElementById('search-filter');
let bounceTimeOut;

if (sortBy) {
    sortBy.addEventListener('change', (e) => {
        if(filterForm && e.target.value) {
            filterForm.submit();
        }
    });
}

if(searchTask) {
    searchTask.addEventListener('keyup',(e) => {
        if(e.target.value.length >= 3) {
            clearTimeout(bounceTimeOut);
            bounceTimeOut = setTimeout(() => {
                searchFilterForm.submit();
            },500)
        }
       
    });
}

