const host = window.location.host.includes('github') ? window.location.host+'/GameSoft' : './';

export const templateHeader = //html
                            `
                            <a href="${host}/index.html" class="row text-decoration-none  col-4 d-flex align-items-center justify-content-start ">
                                <img src="${host}/assets/logo.png" alt="logo" class="header__img">
                                <h1 class="fs-1 col-4 m-0 fw-bold text-white">GameSoft</h1>
                            </a>
                            <div class="row col-1 ">
                                <button class="m-0 bg-transparent rounded-4  header__btnMenu" id="btnMenu">
                                    <img src="${host}/assets/menuWhite.svg" alt="" class="w-100 object-fit-contain">
                                </button>
                            </div>
                            `