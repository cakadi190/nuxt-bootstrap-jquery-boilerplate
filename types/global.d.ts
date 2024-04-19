import type jQuery from 'jquery';
import type bootstrap from 'bootstrap';

declare global {
    interface Window {
        bootstrap: bootstrap,
        $: jQuery,
        jQuery: jQuery,
        jquery: jQuery,
    }
}