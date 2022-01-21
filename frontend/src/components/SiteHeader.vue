<template>
    <div class="top_header">
        <a id="hrd_img_link" href="#">
            <img
                data-testid="maggie-viewer_image-component"
                class="header_image"
                id="swss_bnking_hdr_img"
                src="/swissbanking_logo.svg"
                alt="logo"
            />
        </a>
        <div class="links">
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 40 40"
                style="enable-background:new 0 0 40 40;"
                xml:space="preserve"
                id="dowload_pdf_svg"
            >
                <g>
                    <path
                        class="st0"
                        d="M2.4,27.4h35.2V7.6H2.4V27.4z M39.8,29.6H0.2V5.4h39.6L39.8,29.6z"
                    />
                    <rect x="6.8" y="31.8" class="st0" width="26.4" height="2.2" />
                    <path
                        class="st1"
                        d="M20,20.8L20,20.8c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3c0,0,0,0,0,0   C23.3,19.3,21.8,20.8,20,20.8"
                    />
                </g>
            </svg>
            <a href="#" class="get_full_PDF">Download druckbare Version (PDF)</a>
            <div class="languages_selection">
                <a href="#" class="select_lang">DE</a>
                <a href="#" class="select_lang">FR</a>
                <a href="#" class="select_lang">EN</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top_header {
    width: 100%;
    padding: 30px 30px 0 30px;
    position: relative;
    min-height: 150px;
    display: block;
}
#hrd_img_link {
    display: inline;
    height: auto;
    width: auto;
    position: relative;
    float: left;
}
#swss_bnking_hdr_img {
    width: auto;
    height: clamp(20px, 5vw, 41px);
    cursor: pointer;
    position: relative;
}
.links {
    position: relative;
    font-size: 1rem;
    float: initial;
    float: right;
    clear: left;
}
.st0 {
    fill: #263238;
}
#dowload_pdf_svg {
    display: none;
}
.st1 {
    fill: #c3b699;
}
.get_full_PDF{
    float: left;
}
.languages_selection {
    margin-top: 24px;
    float: right;
    clear: left;
}
@media (min-width: 750px) {
    .languages_selection {
        margin-top: 0;
    }
    .get_full_PDF {
        margin-right: 3rem;
    }
    .links {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .top_header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    #dowload_pdf_svg {
        display: initial;
        width: 31px;
        height: 31px;
    }
}
.select_lang.select_lang:not(:last-of-type) {
    border-right: 1px solid black;
}
a {
    color: #e30613;
    font-size: 1rem;
    padding: 0 0.3rem;
}
</style>