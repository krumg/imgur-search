import {formatDate} from '../util'

export const result = (r) => `
    <div class="row result">
        <div class="col-md-2">
            <a href="${r.link}">
                <img class="img-responsive" src="https://i.imgur.com/${r.is_album ? r.cover : r.id}b.jpg" alt="${r.title}">
            </a>
        </div>
        <div class="col-md-10">
            <h3><a href="${r.link}">${r.title}</a></h3>
            <p class="text-success">http://i.imgur.com/OM1jAhs.gif ${!r.is_album ? '<span class="text-muted"> · ' + r.width + ' × ' + r.height + '</span>' : ''}</p>
            <span class="meta-data">${formatDate(r.datetime)} ${r.account_url ? ' · by <a href="http://imgur.com/user/' + r.account_url + '">' + r.account_url + '</a>' : ''}</span>
        </div>
    </div>
`;