var style = document.createElement("style");
style.innerHTML = `
/* http://web.archive.org/web/20210829175820/https://www.smashingmagazine.com/2020/07/css-techniques-legibility/ */
#sm_container_secondary {
    background: none !important;
    font-size: 1em;
    line-height: calc(1ex / 0.32);
    margin: calc(1ex / 0.32) 0;
    text-align: justify;

    width: 60ch;
    --red: 230;
    --green: 230;
    --blue: 230;
    --aa-brightness: calc((
        (var(--red) * 299) +
        (var(--green) * 587) +
        (var(--blue) * 114)
    ) / 1000;
    --aa-brightness: calc((
    (var(--red) * 299) +
    (var(--green) * 587) +
    (var(--blue) * 114)
    ) / 1000);

    --aa-color: calc((var(--aa-brightness) - 128) * -1000);
    background: rgb(var(--red), var(--green), var(--blue));
    color: rgb(var(--aa-color), var(--aa-color), var(--aa-color));
}

@media (prefers-color-scheme: dark) {
    #sm_container_secondary {
        --red: 30;
        --green: 30;
        --blue: 30;
    }
}`
document.getElementsByTagName("head")[0].appendChild(style);