import {formatDate} from '../util'

export const result = (r) => `
    <div class="row result">
        <div class="col-md-2 col-sm-2">
            <a href="${r.link}">
                <img class="img-responsive" src="https://i.imgur.com/${r.is_album ? r.cover : r.id}b.jpg" alt="${r.title}">
            </a>
        </div>
        <div class="col-md-10 col-sm-10">
            <div class="meta-data">
                <h3><a href="${r.link}">${r.title}</a></h3>
                <a class="text-success" href="${r.link}" target="_blank">${r.link}</a> ${!r.is_album ? '<span class="text-muted"> · ' + r.width + ' × ' + r.height + '</span>' : ''}
                <span class="date">${formatDate(r.datetime)} ${r.account_url ? ' · by <a href="http://imgur.com/user/' + r.account_url + '">' + r.account_url + '</a>' : ''}</span>
            </div>
        </div>
    </div>
`;