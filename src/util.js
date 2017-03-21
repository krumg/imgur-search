export function formatDate(timestamp) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(+timestamp * 1000);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return month + ' ' + day + ", " + year;
  }
    
export function spinner() {
    return `<div class="uil-spin-css" style="-webkit-transform:scale(0.25)"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>`
}

export function $(id) {
    return document.getElementById(id);
}

export function more() {
    return `<button type="button" class="btn btn-primary">More...</button>`;
}