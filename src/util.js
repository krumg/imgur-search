export function formatDate(timestamp) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date(+timestamp * 1000);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return month + ' ' + day + ", " + year;
  }