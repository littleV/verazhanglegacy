import { ClientFunction } from 'testcafe';

var Utils = {
    getLocation : ClientFunction(() => document.location.href.toString()),
    goBack : ClientFunction(() => window.history.back())
};

export { Utils };